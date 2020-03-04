import React, {useContext, useEffect, useState} from 'react';
import './VoteToolbar.css';
import {VoteContext} from '../../contexts/VoteContext';

export default function VoteToolbar() {
    const {startVoting, toggleStartVoting, toggleEndVote} = useContext(VoteContext);
    const [activeVoting, setActiveVoting] = useState(startVoting);

    const handleClick = () => {
        setActiveVoting(!activeVoting);
        toggleStartVoting();
    };

    return (
        <div className="vote-toolbar">
            <button className={`btn btn-primary ${activeVoting ? "disabled" :""}`}
                    onClick={handleClick}
                    disabled={activeVoting}>
                시작
            </button>
            <button className={`btn btn-secondary ${activeVoting ? "" : "disabled"}`}
                    onClick = {e => toggleEndVote()}
                    disabled={!activeVoting}>
                마감
            </button>
        </div>
    )
}