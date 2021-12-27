
import './App.css';
import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/chatFeed.jsx';
import LoginForm from './components/loginForm.jsx'

const projectID='a2353a67-d358-4791-80de-63e3a87fc87b'
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>;
  return (
    
      <ChatEngine
        
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      
      
    
  )
}

export default App

