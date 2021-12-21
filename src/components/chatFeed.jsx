import React from 'react'
// import MessageForm from './messageForm'
// import MyMessage from './myMessageForm'
// import TheirMessage from './theirMessageForm'

const ChatFeed = (props) => {
   const {chats,activeChat,userName, messages} =props; //Destructuring from props
   const chat= chats && chats[activeChat];
   console.log(chat)
   return (
        <div>
            chatfeed
            
        </div>
    )
}

export default ChatFeed
