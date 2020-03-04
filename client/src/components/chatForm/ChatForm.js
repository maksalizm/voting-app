import React, {useContext, useState} from 'react';

import './ChatForm.css'
import {ChatContext} from '../../contexts/ChatContext';
import {SEND_CHAT, VOTE} from '../../actionTypes/ChatActionType';
import {VoteContext} from '../../contexts/VoteContext';

const ChatForm = () => {

    const [content, setContent] = useState('');
    const chatContext = useContext(ChatContext);
    const voteContext = useContext(VoteContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        chatContext.dispatch({type: SEND_CHAT, chat: {content}});
        const r = /\d+/;
        if(!voteContext.endVote && content.trim().indexOf('!') === 0 && content.match(r)) {
            voteContext.dispatch({type:VOTE, vote: {idx: parseInt(content.match(r)[0],10) - 1 }});
            voteContext.setTotalVotes(voteContext.totalVotes + 1);
        }
        setContent('');
    };

    const handleKeyPress= (e) => {
        if(e.key === 'Enter'){
            handleSubmit(e);
        }
    };

    return (
        <div className="chat-form">
            <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={e => setContent(e.target.value)} onKeyPress={handleKeyPress} className="chat-textarea" placeholder="메시지보내기"/>
                <button className="btn btn-primary" type="submit">채팅</button>
            </form>
        </div>
    );
};

export default ChatForm;