import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import './VoteItem.css'
import {VoteContext} from '../../contexts/VoteContext';
import {EDIT_VOTE, DELETE_VOTE} from '../../actionTypes/VoteActionType';
import VoteItemForm from './VoteItemForm';
import ProgressBar from '../utilities/ProgressBar';

export default function VoteItem(props) {
    const {vote} = props;
    const [title, setTitle] = useState(props.vote.title);
    const {dispatch, activeVote, activeVoteId, startVoting} = useContext(VoteContext);
    const handleClick = (e) => {
        activeVote(vote.id);
    };
    useEffect(()=> {
        setTitle(vote.title);
    },[props]);


    return (
        activeVoteId === vote.id ?
            <VoteItemForm
                count={props.count}
                type={EDIT_VOTE}
                vote={vote}
                font={<FontAwesomeIcon icon={faTimes} size="xs" className="vote-delete-icon" color="red" pull="right" />} /> :
        <li className="list-group-item vote-list-group-item" onClick={handleClick}>
            <div>
                <span className="vote-list-count">{props.count}</span>
                {title}
                {startVoting ? (
                    <ProgressBar done={0} />) :
                    (<FontAwesomeIcon
                    onClick={(e) => dispatch({type: DELETE_VOTE, vote: {id: vote.id}})}
                    icon={faTimes} size="xs" className="vote-delete-icon" color="red" pull="right"/>)}
            </div>
        </li>
    )
};