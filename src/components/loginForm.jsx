import { useState } from 'react'
import axios from 'axios';

const projectID = 'a2353a67-d358-4791-80de-63e3a87fc87b';


const LoginForm = () => {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObj = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObj });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');
        }
        catch (err) {
            setError('Oops,incorrect crendentials.')

        }

    };


    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='username' />
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='password' />
                


                    <div alighn='center'>
                        <button type="submit" className="button" style={{marginLeft:'1rem'}}>
                            <span>Start chatting</span>
                        </button>

                    </div>
                </form>
                <h1>{error}</h1>

            </div>

        </div>
    )
}

export default LoginForm
