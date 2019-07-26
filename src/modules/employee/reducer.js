import { ACTION_TYPES } from './actions';

export const initialState = {
  employees:{},
  error: undefined,
  searches: []
};

export default function employeeReducer(state=initialState, action){
  const { response } = action;
  switch(action.type){
    case ACTION_TYPES.RECEIVE_EMPLOYEE:
    console.log(state);
      return {...state, 
        [response.employeeName]: { "designation": response[0], "direct-subordinates": response[1] && response[1]["direct-subordinates"]}
      };

    case ACTION_TYPES.FETCH_EMPLOYEE_FAILURE:
      return { ...state, error: response.error};

    default:
     return state;
  }
}