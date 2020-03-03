import React, {createContext, useReducer, useState} from 'react';
import voteReducer from '../reducers/voteReducer';

export const VoteContext = createContext();

const VoteContextProvider = (props) => {
    const [votes, dispatch] = useReducer(voteReducer, []);
    const [activeVoteId, setActiveVote] = useState('');
    const [startVoting, setStartVoting] = useState(false);

    const activeVote = (id) => {
        setActiveVote(id);
    };

    const toggleStartVoting = (fn=null) => {
        setStartVoting(!startVoting);
        fn && fn();
    };

    return (
        <VoteContext.Provider value={{votes, dispatch, activeVoteId, activeVote, toggleStartVoting, startVoting}}>
            {props.children}
        </VoteContext.Provider>
    );
};

export default VoteContextProvider;