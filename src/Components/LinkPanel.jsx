import './LinkPanel.css'
import { FaGithub, FaTwitter, FaTwitch } from 'react-icons/fa';

export default function LinkPanel() {
    return (
        <div class='linkList'>
            <FaTwitch  size = {96} color="white" onClick={() => window.open('https://twitch.tv/srluul', '_blank')}/>
            <FaGithub  size = {96} color="white" onClick={() => window.open('https://github.com/SrLuuL', '_blank')}/>
            <FaTwitter  size = {96} color="white" onClick={() => window.open('https://twitter.com/srluul1', '_blank')}/>
        </div>
    )
}
