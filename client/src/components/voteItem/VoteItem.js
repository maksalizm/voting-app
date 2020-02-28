import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import './VoteItem.css'
import {VoteContext} from '../../contexts/VoteContext';
import {ADD_VOTE, EDIT_VOTE} from '../actionTypes/VoteActionType';

export default function VoteItem(props) {
    // const [vote, setvote] = useState('');
    const {vote} = props;
    const [title, setTitle] = useState('');
    const [isActive, setIsActive] = useState(false);
    const {dispatch} = useContext(VoteContext);
    return (
        <li className="list-group-item vote-list-group-item">
            {isActive ?
                (<div><span>{props.count}</span>
                        <input className="vote-input"
                               onChange={(e) => {
                                   setTitle(e.target.value);
                                   dispatch({type: EDIT_VOTE, vote: {id: vote.id}})
                               }}
                                   value={title} />
                                   <FontAwesomeIcon icon={faTimes} size="sm" color="red" pull="right" />
                                   </div>)
                                   : (
                                   <div><span>{props.count}</span>
                                   <input className="vote-input" placeholder="새 항목 추가"
                                   onChange={(e) => {
                                       setTitle(e.target.value)
                                   }}
                                   onKeyPress={(e) => {
                                       if (e.key === 'Enter') {
                                           setIsActive(!isActive);
                                           dispatch({type: ADD_VOTE, vote: {title}})
                                       }
                                   }}
                                   onBlur={(e) => {
                                       setIsActive(!isActive);
                                       dispatch({type: ADD_VOTE, vote: {title}})
                                   }}
                                   value={title} />
                                   </div>
                                   )
                               }
                    </li>
                )
            };