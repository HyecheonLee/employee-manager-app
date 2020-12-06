import {
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	GET_EMPLOYEE,
	GET_EMPLOYEES,
	IS_LOADING,
	UPDATE_EMPLOYEE
} from "../actions/employeeActions";

const initState = {
	employee: {},
	employees: [],
	isLoading: false
}

export default function reducer(state = initState, action) {
	const {employees, employee} = state;
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			}
		case GET_EMPLOYEE:
			return {
				...state,
				employee: action.payload
			}
		case GET_EMPLOYEES:
			return {
				...state,
				employees: action.payload
			}
		case ADD_EMPLOYEE:
			return {
				...state,
				employee: action.payload,
				employees: employees.concat(action.payload),
				isLoading: false
			}
		case UPDATE_EMPLOYEE:
			const newEmployees = employees.map(
				employ => employ.id === action.payload.id ? action.payload : employ);
			return {
				...state,
				employee: action.payload,
				employees: newEmployees,
				isLoading: false
			}
		case DELETE_EMPLOYEE:
			return {
				...state,
				employees: employees.filter(employee => employee.id !== action.payload),
				isLoading: false
			}
		default:
			return state;
	}
}
