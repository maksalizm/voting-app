import React, {useContext} from 'react';

import './ChatList.css'
import ChatListItem from '../chatListItem/ChatListItem';
import {ChatContext} from '../../contexts/ChatContext';

const ChatList = () => {
    const {chat} = useContext(ChatContext);

    return (
        <ul className="list-group chat-list">
            {chat.map(chat => <ChatListItem chat={chat} key={chat.id}/>)}
        </ul>
    );
};

export default ChatList;