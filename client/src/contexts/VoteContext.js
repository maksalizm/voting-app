import React, { createContext, useReducer } from 'react';
import voteReducer from '../reducers/voteReducer';

export const VoteContext = createContext();

const VoteContextProvider = (props) => {
    const [votes, dispatch] = useReducer(voteReducer, []);


    return (
        <VoteContext.Provider value={{votes, dispatch}}>
            {props.children}
        </VoteContext.Provider>
    );
};

export default VoteContextProvider;