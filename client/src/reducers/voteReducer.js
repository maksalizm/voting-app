import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import update from 'immutability-helper';

import {ADD_VOTE, DELETE_VOTE, EDIT_VOTE} from '../actionTypes/VoteActionType';

const VoteReducer = (state, action) => {
    switch (action.type) {
        case ADD_VOTE:
            return [...state, {
                id: uuidv1(),
                title: action.vote.title
            }];
        case DELETE_VOTE:
            return state.filter((vote) => vote.id !== action.vote.id);
        case EDIT_VOTE:
            return state.filter((vote) => {
                if(vote.id === action.vote.id){
                    vote.title = action.vote.title;
                    console.log(vote);
                }
                return true;
            });
        default:
            return state
    }
};

export default VoteReducer;