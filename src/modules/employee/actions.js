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
  response
});

export const requestFailure = response => ({
  type: ACTION_TYPES.FETCH_EMPLOYEE_FAILURE,
  response
});