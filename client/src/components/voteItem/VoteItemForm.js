// import React, {useContext} from 'react';
// import {VoteContext} from '../../contexts/VoteContext';
// import {ADD_VOTE} from '../actionTypes/VoteActionType';
//
// const VoteItemForm = (props) => {
//     const { dispatch } = useContext(VoteContext);
//     return (
//         <div><span>{ props.count }</span>
//             <input className="vote-input" placeholder="새 항목 추가"
//                    onChange={(e) =>{
//                        setTitle(e.target.value)
//                    }}
//                    onKeyPress={(e) => {
//                        if(e.key === 'Enter') {
//                            setIsActive(!isActive);
//                            dispatch({type: ADD_VOTE, title})
//                        }
//                    }}
//                    onBlur={(e) => {
//                        setIsActive(!isActive);
//                        dispatch({type: ADD_VOTE, title})
//                    }}
//                    value={title} />
//         </div>
//     );
// };
//
// export default VoteItemForm;