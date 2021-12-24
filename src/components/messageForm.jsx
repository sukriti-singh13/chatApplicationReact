import React from 'react'
import  {useState} from 'react'
import {SendOutlined,PictureOutlined} from '@ant-design/icons';
import {sendMessage,isTyping} from 'react-chat-engine';
const MessageForm = (props) => {
    const [value,setValue]= useState('');
    const{chatId,creds}= props;

    const handleChange=(event)=>{
        setValue(event.target.value);
        isTyping(props,chatId);


    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const {msgfield}= event.target.elements;
        const text=msgfield.value.trim();
        if(text.length>0){
            sendMessage(creds,chatId,{text:text,sender_username:'suk'});
            setTimeout(() => {
                const div = document.getElementById("chatWindow");
                // div.scrollTop = div.scrollHeight - div.clientHeight;
                div.scrollTo({
                    top: div.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }, 1000);
            
        }
        setValue(" ");
           
    }
    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
      };


    return (
       <form className='message-form' onSubmit={handleSubmit}>
           <input
           className='message-input'
           placeholder='send a message...'
           name='msgfield'
           value={value}
           onChange={handleChange}
           />

           <label htmlFor='upload-button'>
               <span className='image-button'>
                  <PictureOutlined className='picture-icon'/>
               </span>
           </label>
           <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>

       

       </form>
    )
}

export default MessageForm
