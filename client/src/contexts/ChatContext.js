import React, {createContext, useReducer} from 'react';

import chatReducer from '../reducers/chatReducer';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
    const [chat, dispatch] = useReducer(chatReducer, []);

    return (
        <ChatContext.Provider value={{dispatch, chat}}>
            {props.children}
        </ChatContext.Provider>
    );
};

export default ChatContextProvider;