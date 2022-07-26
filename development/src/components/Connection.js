import { FaTwitter, FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';
import { Tooltip } from 'react-tippy';

export default function (props) {
  return (
  <Tooltip arrow="true" duration="225" inertia="true" theme="discord" animation="shift" title={props.connection}>
    <a href={props.to} className='flex p-1.5 items-center justify-center rounded-full bg-[#ededed]'>
      {props.connection == 'Twitter' ? <FaTwitter size="20px" color="#c2c2c2"/> : ''}
      {props.connection == 'Instagram' ? <FaInstagram size="20px" color="#c2c2c2"/> : ''}
      {props.connection == 'Discord' ? <FaDiscord size="20px" color="#c2c2c2"/> : ''}
      {props.connection == 'GitHub' ? <FaGithub size="20px" color="#c2c2c2"/> : ''}
    </a>
  </Tooltip>
  );
};