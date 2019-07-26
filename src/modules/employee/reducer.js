import { ACTION_TYPES } from './actions';

const initialState = {
  employees:{},
  employeeLoading:false,
  error: undefined
};

export default function employeeReducer(state=initialState, action){
  const { response } = action;
  switch(action.type){
    case ACTION_TYPES.REQUEST_EMPLOYEE:
      return {
        ...state,
        employeeLoading: true
      };
    case ACTION_TYPES.RECEIVE_EMPLOYEE:
      return {...state, 
        [response.employeeName]: response.details
      };

    case ACTION_TYPES.FETCH_EMPLOYEE_FAILURE:
      return { ...state, error: response.error};
      
    default:
     return state;
  }
}