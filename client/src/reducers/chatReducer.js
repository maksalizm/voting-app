import {SEND_CHAT, VOTE} from '../actionTypes/ChatActionType';
import {v1 as uuidv1} from 'uuid';

const ChatReducer = (state, action) => {
    switch (action.type) {
        case SEND_CHAT:
            return [...state, {id: uuidv1(), content: action.chat.content}];
        default:
            return state
    }
};

export default ChatReducer;