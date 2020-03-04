import { v1 as uuidv1 } from 'uuid';

import {ADD_VOTE, DELETE_VOTE, EDIT_VOTE} from '../actionTypes/VoteActionType';
import {VOTE} from '../actionTypes/ChatActionType';

const VoteReducer = (state, action) => {
    switch (action.type) {
        case ADD_VOTE:
            return [...state, {
                id: uuidv1(),
                title: action.vote.title,
                count: 0
            }];
        case DELETE_VOTE:
            return state.filter((vote) => vote.id !== action.vote.id);
        case EDIT_VOTE:
            return state.filter((vote) => {
                if(vote.id === action.vote.id){
                    vote.title = action.vote.title;
                }
                return true;
            });
        case VOTE:
            return state.filter((vote,idx) => {
                if(action.vote.idx === idx) {
                    ++vote.count;
                }
                return true;
            });
        default:
            return state
    }
};

export default VoteReducer;