import React from 'react';

import './ChatContent.css';

import ChatList from '../chatList/ChatList';
import ChatForm from '../chatForm/ChatForm';

const ChatContent = () => {
    return (
        <div className="chat-content">
            <p>채팅방에 오신걸 환영합니다!</p>
            <ChatList />
            <ChatForm />
        </div>
    );
};

export default ChatContent;