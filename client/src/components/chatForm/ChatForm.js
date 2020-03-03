import React, {useContext, useState} from 'react';

import './ChatForm.css'
import {ChatContext} from '../../contexts/ChatContext';
import {SEND_CHAT} from '../../actionTypes/ChatActionType';

const ChatForm = () => {

    const [content, setContent] = useState('');
    const {dispatch} = useContext(ChatContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: SEND_CHAT, chat: {content}});
        setContent('');
    };

    return (
        <div className="chat-form">
            <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={e => setContent(e.target.value)} className="chat-textarea" placeholder="메시지보내기"/>
                <button className="btn btn-primary" type="submit">채팅</button>
            </form>
        </div>
    );
};

export default ChatForm;