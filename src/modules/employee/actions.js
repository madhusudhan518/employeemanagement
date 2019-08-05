const API_URL = process.env.API_URL;
 
 export const ACTION_TYPES = {
   REQUEST_EMPLOYEE: 'employee/REQUEST_EMPLOYEE',
   RECEIVE_EMPLOYEE: 'employee/RECEIVE_EMPLOYEE',
   FETCH_EMPLOYEE_FAILURE: 'employee/FETCH_EMPLOYEE_FAILURE',
   STORE_SEARCHES: 'employee/STORE_SEARCHES'
 }

export const requestEmployee = () => ({
  type: ACTION_TYPES.REQUEST_EMPLOYEE
});

export const receivedEmployee = ({result, name}) => ({
  type: ACTION_TYPES.RECEIVE_EMPLOYEE,
  response: result,
  name: name.toLowerCase()
});

export const requestFailure = response => ({
  type: ACTION_TYPES.FETCH_EMPLOYEE_FAILURE,
  response: response
});

export const storeSearch = name => ({
  type: ACTION_TYPES.STORE_SEARCHES,
  name: name
})

export function fetchEmployee(name){
  return dispatch => {
    return fetch(`${API_URL}/${name}`,
      {
        method: "GET"
      })
      .then(res => res.json())
      .then(json => {
        dispatch(receivedEmployee({result: json , name: name}));
        json.length && json[1]["direct-subordinates"] && json[1]["direct-subordinates"].forEach((subordinate)=>{
           dispatch(fetchEmployee(subordinate));
        })
      })
      .catch(error => dispatch(requestFailure(error)));
  };
}

export function dispatchSearch(name){
  return dispatch => {
    dispatch(storeSearch(name));
  }
}