import React, {useContext, useEffect} from 'react';
import './VoteList.css';
import VoteItem from '../voteItem/VoteItem';
import {VoteContext} from '../../contexts/VoteContext';
import VoteItemForm from '../voteItem/VoteItemForm';


export default function VoteList() {
    const {  votes, startVoting } = useContext(VoteContext);
    let cnt = 1;

    useEffect(()=> {
        console.log(votes);
    },[votes]);

    return (
        <ul className="list-group vote-list-group">
            {
                votes.map(vote => { return <VoteItem vote={vote} count={cnt++} key={vote.id}/>})
            }
            {
                !startVoting && <VoteItemForm count={cnt++} />
            }
        </ul>
    )
}