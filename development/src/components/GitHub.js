import { AiFillStar } from 'react-icons/ai';
import { SiJavascript, SiCss3 } from 'react-icons/si';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (props) {
  const filterRepos = props.repos.filter(repo => !repo.fork && !repo.archive && repo.description && repo.language)

  return (
    <div className="flex flex-row flex-wrap items-center justify-start gap-4 mt-4">
      {filterRepos.map(repo => (
        <div className="bg-[#ededed] p-4 w-[250px] h-max flex flex-col rounded-lg">
          <a href={repo.html_url} className="truncate hover:underline w-max max-w-[200px]">{repo.name}</a>
          <p className="w-[225px] truncate text-xs text-gray-500">{repo.description}</p>

          <div className="mt-4 flex flex-row gap-3 h-full w-full items-center">
            <div className='text-[14px] flex flex-row gap-1 items-center justify-center'>
              <AiFillStar size="14px" className="text-yellow-500" />
              <span className="text-gray-500">{repo.stargazers_count}</span>
            </div>

            <div className='text-[14px] flex flex-row gap-1 items-center justify-end flex-1'>
                {repo.language === 'JavaScript' && <SiJavascript size="14px" className="text-yellow-500 rounded-xs" />}
                {repo.language === 'CSS' && <SiCss3 size="14px" className="text-blue-700" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};