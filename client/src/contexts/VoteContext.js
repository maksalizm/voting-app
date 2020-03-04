import React, {createContext, useReducer, useState} from 'react';
import voteReducer from '../reducers/voteReducer';

export const VoteContext = createContext();

const VoteContextProvider = (props) => {
    const [votes, dispatch] = useReducer(voteReducer, []);
    const [activeVoteId, setActiveVote] = useState('');
    const [startVoting, setStartVoting] = useState(false);
    const [totalVotes, setTotalVotes] = useState(0);
    const [endVote, setEndVote] = useState(false);

    const activeVote = (id) => {
        setActiveVote(id);
    };

    const toggleStartVoting = (fn=null) => {
        setStartVoting(!startVoting);
        fn && fn();
    };

    const toggleEndVote = () => {
        setEndVote(!endVote);
    };

    const voteContextState = {
        votes, dispatch, activeVoteId,
        activeVote, toggleStartVoting, startVoting,
        totalVotes, setTotalVotes, toggleEndVote,
        endVote,
    };

    return (
        <VoteContext.Provider value={voteContextState}>
            {props.children}
        </VoteContext.Provider>
    );
};

export default VoteContextProvider;