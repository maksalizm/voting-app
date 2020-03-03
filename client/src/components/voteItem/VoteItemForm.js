import React, {useContext, useState} from 'react';
import {VoteContext} from '../../contexts/VoteContext';
import {ADD_VOTE, EDIT_VOTE} from '../../actionTypes/VoteActionType';

const VoteItemForm = (props) => {
    const {dispatch} = useContext(VoteContext);
    const {vote ,type} = props;
    const [title, setTitle] = useState(vote && vote.title || '');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title) {
            return;
        }
        if(type=== EDIT_VOTE) {
            dispatch({type: EDIT_VOTE, vote: {title: title, id: vote.id}});
        } else {
            dispatch({type: ADD_VOTE, vote: {title}});
            setTitle('');
        }
    };
    return (
        <li className="list-group-item vote-list-group-item">
            <form onSubmit={handleSubmit}>
            <div>
                <span className="vote-list-count">{props.count}</span>
                <input className="vote-input" placeholder="새 항목 추가"
                       onChange={(e) => {
                           setTitle(e.target.value)
                       }}
                       onBlur={handleSubmit}
                       value={title}/>
                {props.font}
            </div>
            </form>
        </li>
    );
};

export default VoteItemForm;