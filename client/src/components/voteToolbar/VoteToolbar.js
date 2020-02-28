import React from 'react';
import './VoteToolbar.css';

export default function VoteToolbar() {
    return (
        <div className="vote-toolbar">
            <button className="btn btn-primary">
                시작
            </button>
            <button className="btn btn-secondary">
                마감
            </button>
        </div>
    )
}