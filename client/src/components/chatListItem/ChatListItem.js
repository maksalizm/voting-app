import React from 'react';

import "./ChatListItem.css"

const ChatListItem = ({chat}) => {
    return (
        <li className="list-group-item chat-list-item">
            <p>
                <span className="user-name">maksalizm</span>:
                <span className="content">{chat.content}</span>
            </p>
        </li>
    );
};

export default ChatListItem;