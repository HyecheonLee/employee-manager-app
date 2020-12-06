import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../redux/actions/employeeActions";
import EmployeeComponent from "../components/EmployComponent";

const EmployeeContainer = props => {
	let dispatch = useDispatch();
	let employee = useSelector(state => state.employee);
	useEffect(() => {
		dispatch(getEmployees())
	}, [dispatch])
	return (
		<EmployeeComponent employees={employee.employees}/>
	);
};

EmployeeContainer.propTypes = {};

export default EmployeeContainer;
