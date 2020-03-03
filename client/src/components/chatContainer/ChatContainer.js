import React from 'react';
import ChatHeader from '../chatHeader/ChatHeader';
import ChatContent from '../chatContent/ChatContent';

import './ChatContainer.css';

const ChatContainer = () => {
    return (
        <div className="chat-container">
            <ChatHeader/>
            <ChatContent/>
        </div>
    );
};

export default ChatContainer;