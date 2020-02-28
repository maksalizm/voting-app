import React, {useContext, useState} from 'react';
import './VoteList.css';
import VoteItem from '../voteItem/VoteItem';
import {VoteContext} from '../../contexts/VoteContext';


export default function VoteList() {
    const {  votes } = useContext(VoteContext);
    // const {count, setCount} =  useState(1);
    let cnt = 1;
    return (
        <ul className="list-group vote-list-group">
            {votes.map((vote) => <
                VoteItem vote={votes} count={cnt++} key={vote.id}
            />)}
            <VoteItem count={cnt++}  />
        </ul>
    )
}