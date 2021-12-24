
import './App.css';
import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/chatFeed.jsx';
const App = () => {
  return (
    
      <ChatEngine
        
      height='100vh'
      projectID=
      'a2353a67-d358-4791-80de-63e3a87fc87b'
      userName='suk'
      userSecret='suk1312'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      
      
    
  )
}

export default App

