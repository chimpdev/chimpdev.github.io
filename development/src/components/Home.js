import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import { Discord, Spotify } from './Icons';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import Connection from './Connection';
import Seperator from './Seperator';
import Projects from './Projects';
import GitHub from './GitHub';


export default function Home() {

  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('https://ravencode.live/api/v2/users/949705281863032872/embed', { method: 'POST' }).then(res => res.json()).then(setData);
    fetch('https://api.github.com/users/chimpdev/repos', { method: 'GET' }).then(res => res.json()).then(setRepositories);
  }, []);

  useState(() => {
    const interval = setInterval(() => fetch('https://ravencode.live/api/v2/users/949705281863032872/embed', { method: 'POST' }).then(res => res.json()).then(setData), 5000);
    return () => clearInterval(interval);
  }, [data]);

  const StatusTippy = (
    <div className='flex items-center justify-center gap-2 flex-row'>
      <Discord width="16px" height="16px" />
      <a href="https://discord.com/users/949705281863032872" className='hover:underline'>Discord</a>
    </div>
  )

  const ActivityTippy = (
    <div className='flex items-center justify-center gap-2 flex-row'>
      <Spotify width="16px" height="16px" />
      by {data.activity?.state}
    </div>
  );

  const [content, setContent] = useState(<Projects/>);
  const tabs = {
    'Projects': <Projects/>,
    'GitHub': <GitHub repos={repositories}/>
  }

  const handleBlockTitle = event => {
    event.target.classList.add('active-title', 'bg-[#ededed]');
    setContent(tabs[event.target.dataset.content]);
    [...document.getElementById('block-titles').querySelectorAll('button')].filter(button => button !== event.target).forEach(button => button.classList.remove('active-title', 'bg-[#ededed]'));
  };

  return (
    <div className="w-full flex justify-center min-h-screen bg-[#fdfdfd] text-base text-gray-900 font-sans font-medium leading-1">
      <div className='relative w-[80%] xl:w-[60%] min-h-screen flex flex-col transition-all'>

        <div className='flex flex-col xl:flex-row gap-x-8 mt-[80px] w-full'>
          {Object.keys(data).length > 0 && data?.avatarURL ? (<img className="w-[120px] h-[120px] rounded-full" src={data.avatarURL} alt="avatar"/>) : (<div className="w-[120px] h-[120px] rounded-full bg-[#c2c2c2] animate-pulse">&thinsp;</div>)}
          <div className='flex flex-col gap-2 w-full mt-4 xl:mt-0 xl:w-[80%]'>
            <h1 className='text-3xl font-bold'>Merhaba!</h1>
            <p className='text-lg text-gray-800'>Asıl ismim Gökhan. 16 yaşındayım ve bir çok Discord sunucusunun botlarını geliştiriyorum. 3 yılı aşkın bir süredir JavaScript ile Discord üzerinde bot geliştiriyorum. Kendi kendimi geliştirebiliyor ve yeni şeyleri kolayca öğrenebiliyorum. Aynı zamanda Web geliştiriciliği de yapıyorum</p>
          </div>
        </div>

        <div className='mt-4 ml-2 flex w-max h-max flex-col gap-2 text-lg pb-10'>
          <Tooltip arrow="true" duration="225" inertia="true" theme="discord" animation="shift" interactive="true" html={StatusTippy} className="w-max">
            <div className='flex flex-row gap-2 items-center left-[4px] relative'>
              <div className={`w-[8px] h-[8px] ${(data.status || 'offline').replace('online', 'bg-green-500').replace('offline', 'bg-[#c2c2c2]').replace('idle', 'bg-orange-300').replace('dnd', 'bg-[#ca4747]')} rounded-full`}></div>
              <a href="/" className='cursor-default select-none font-semibold left-[2px] relative'>{(data.status || 'offline').replace('online', 'Çevrimiçi').replace('offline', 'Çevrimdışı').replace('idle', 'Boşta').replace('dnd', 'Rahatsız Etmeyin')}</a>
            </div>
          </Tooltip>

          {data.activity ? (
            <Tooltip arrow="true" duration="225" inertia="true" theme="discord" animation="shift" html={ActivityTippy} className="w-max">
              <div className='flex flex-row gap-2 items-center relative top-[3px]'>
                <img alt={data.activity.assets.largeText || 'Cover image'} className="w-[16px] h-auto rounded-full" src={data.activity.assets.largeImage}></img>
                <div className="flex flex-col items-baseline justify-center relative">
                  <a href="/" className='cursor-default select-none font-semibold relative -top-[10px]'>{data.activity.details}</a>
                  <a href="/" className='cursor-default select-none font-bold top-[8px] text-[11px] absolute w-max tracking-widest'>{data.activity.current} ─ {data.activity.end}</a>
                </div>
              </div>
            </Tooltip>
          ) : (
            <div className='flex flex-row gap-2 items-center'>
              <Spotify width="16px" height="16px" color="#c2c2c2"/>
              <a href="/" className='cursor-default select-none font-semibold'>Hiç bir şey dinlemiyor.</a>
            </div>
          ) }

            <div className='flex flex-row gap-2 items-center relative'>
              <MdLocationOn fill="rgb(202, 71, 71)"/>
              <a href="/" className='cursor-default select-none font-semibold'>İstanbul, Türkiye</a>
            </div>

            <div className='flex flex-row gap-2 items-center mt-2'>
              <Connection connection="Twitter" to="https://twitter.com/skyhanistan"/>
              <Connection connection="Instagram" to="https://instagram.com/thiskyhan"/>
              <Connection connection="Discord" to="https://discord.com/users/949705281863032872"/>
              <Connection connection="GitHub" to="https://github.com/chimpdev"/>
            </div>
        </div>

        <Seperator/>

        <div className='w-full h-max flex items-center flex-row justify-start gap-2' id="block-titles">
          <button className='hover:bg-[#ededed] rounded-lg py-1 px-2 text-lg text-gray-700 before:w-[0%] relative transition-all active-title bg-[#ededed]' onClick={handleBlockTitle} data-content="Projects">Projelerim</button>
          <button className='hover:bg-[#ededed] rounded-lg py-1 px-2 text-lg text-gray-700 before:w-[0%] relative transition-all' onClick={handleBlockTitle} data-content="GitHub">GitHub</button>
          
          <Tooltip arrow="true" duration="225" inertia="true" theme="discord" animation="shift" title="Bu website GitHub'da açık kaynak kodlu!">
            <a href='https://github.com/chimpdev/chimpdev.github.io'>
              <button className='hover:bg-[#ededed] rounded-lg py-1 px-2 text-lg text-gray-700 before:w-[0%] relative transition-all h-full'>
                <AiOutlineLink/>
              </button>
            </a>
          </Tooltip>
        </div>

        <div id="content">
          {content}
        </div>

      </div>
    </div>
  );
}