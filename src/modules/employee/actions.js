 export const ACTION_TYPES = {
   REQUEST_EMPLOYEE: 'employee/REQUEST_EMPLOYEE',
   RECEIVE_EMPLOYEE: 'employee/RECEIVE_EMPLOYEE',
   FETCH_EMPLOYEE_FAILURE: 'employee/FETCH_EMPLOYEE_FAILURE'
 }

export const requestEmployee = () => ({
  type: ACTION_TYPES.REQUEST_EMPLOYEE
});

export const receivedEmployee = response => ({
  type: ACTION_TYPES.RECEIVE_EMPLOYEE,
  response: response
});

export const requestFailure = response => ({
  type: ACTION_TYPES.FETCH_EMPLOYEE_FAILURE,
  response: response
});

export function fetchEmployee(name){
  return dispatch => {
    return fetch(`http://api.additivasia.io/api/v1/assignment/employees/${name}`,
      {
        method: "GET"
      })
      .then(res => res.json())
      .then(json => {
        dispatch(receivedEmployee(json));
      })
      .catch(error => dispatch(requestFailure(error)));
  };
}