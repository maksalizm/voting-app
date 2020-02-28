import React from 'react';
import './VoteCotainer.css'

import VoteToolbar from '../voteToolbar/VoteToolbar';
import VoteList from '../voteList/VoteList';

export default function VoteContainer()  {
    return (
        <div className="vote-container">
            <VoteToolbar />
            <VoteList />
        </div>
    )
}