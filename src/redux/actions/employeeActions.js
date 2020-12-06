import Axios from "axios";

export const IS_LOADING = "employee/IS_LOADING"
export const isLoading = (isLoading = true) => ({
	type: GET_EMPLOYEE,
	payload: isLoading,
});

export const GET_EMPLOYEE = 'employee/GET_EMPLOYEE';
export const getEmployee = (id) => dispatch => {
	return Axios.get(`http://localhost:8080/employee/${id}`)
	.then(response => response.data)
	.then(employee => dispatch({
		type: GET_EMPLOYEE,
		payload: employee,
	}))
	.catch(error => {
		throw(error)
	})
}
export const GET_EMPLOYEES = "employee/GET_EMPLOYEES"
export const getEmployees = () => dispatch => {
	return Axios.get(`http://localhost:8080/employee`)
	.then(response => response.data)
	.then(employees => dispatch({
		type: GET_EMPLOYEES,
		payload: employees,
	}))
	.catch(error => {
		throw(error)
	})
}

export const ADD_EMPLOYEE = 'employee/ADD_EMPLOYEE';
export const addEmployee = (employee) => dispatch => {
	dispatch(isLoading())
	return Axios.post(
		`http://localhost:8080/employee`,
		JSON.stringify(employee)
	)
	.then(response => response.data)
	.then(employee => dispatch({
		type: ADD_EMPLOYEE,
		payload: employee,
	}))
	.catch(error => {
		throw(error)
	})
}
export const UPDATE_EMPLOYEE = 'employee/UPDATE_EMPLOYEE';
export const updateEmployee = (employee) => dispatch => {
	dispatch(isLoading())
	return Axios.put(
		`http://localhost:8080/employee`,
		JSON.stringify(employee)
	)
	.then(response => response.data)
	.then(employee => dispatch({
		type: UPDATE_EMPLOYEE,
		payload: employee,
	}))
	.catch(error => {
		throw(error)
	})
}
export const DELETE_EMPLOYEE = 'employee/DELETE'
export const deleteEmployee = (id) => dispatch => {
	dispatch(isLoading())
	return Axios.delete(
		`http://localhost:8080/${id}`
	)
	.then(response => dispatch({
		type: DELETE_EMPLOYEE,
		payload: id,
	}))
	.catch(error => {
		throw(error)
	})
}
