import React, {createContext, useReducer, useState} from 'react';
import voteReducer from '../reducers/voteReducer';

export const VoteContext = createContext();

const VoteContextProvider = (props) => {
    const [votes, dispatch] = useReducer(voteReducer, []);
    const [activeVoteId, setActiveVote] = useState('');

    const activeVote = (id) => {
        setActiveVote(id);
    };


    return (
        <VoteContext.Provider value={{votes, dispatch, activeVoteId, activeVote}}>
            {props.children}
        </VoteContext.Provider>
    );
};

export default VoteContextProvider;