import { ACTION_TYPES } from './actions';

export const initialState = {
  employees:{},
  error: undefined,
  searches: []
};

export default function employeeReducer(state=initialState, action){
  const { response, name } = action;
  switch(action.type){
    case ACTION_TYPES.RECEIVE_EMPLOYEE:
     if(response && response.length){
       return {
         ...state,
         employees: {
           ...state.employees,
           [name]: { "designation": response[0], "direct-subordinates": response[1] && response[1]["direct-subordinates"],
            }
         }
       };
     }
     break;

    case ACTION_TYPES.STORE_SEARCHES:
     return {
       ...state,
       searches: Array.from(new Set([...state.searches, name]))
     }
    case ACTION_TYPES.FETCH_EMPLOYEE_FAILURE:
      return { ...state, error: response.error};

    default:
     return state;
  }
}
