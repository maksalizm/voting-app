import React from 'react';
import './VotingList.css';
import VotingItem from '../votingItem/VotingItem';

export default function VotingList() {
    return (
        <ul className="voting-list">
            <VotingItem />
        </ul>
    )
}