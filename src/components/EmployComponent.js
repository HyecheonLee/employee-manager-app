import React from 'react';
import PropTypes from 'prop-types';

const EmployeeRow = ({
	id,
	name,
	email,
	jobTitle,
	phone,
	imageUrl,
	createdDate,
	lastModifiedDate
}) => {
	return (<div className="col-md-6 col-xl-3">
		<div className="card m-b-30">
			<div className="card-body row">
				<div className="col-6">
					<a href="">
						<img src={imageUrl} alt=""
						     className="img-fluid rounded-circle w-60"/>
					</a>
				</div>
				<div className="col-6 card-title align-self-center mb-0">
					<h5>{name}</h5>
					<p className="m-0">{jobTitle}</p>
				</div>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<i className="fa fa-envelope float-right"/>Email :<a
					href="#">PaulGoyette@gmail.com</a></li>
				<li className="list-group-item">
					<i className="fa fa-phone float-right"/>Phone : {phone}
				</li>
			</ul>
			<div className="card-body">
				<div className="float-right btn-group btn-group-sm">
					<a href="#" className="btn btn-primary tooltips"
					   data-placement="top" data-toggle="tooltip"
					   data-original-title="Edit">
						<i className="fa fa-pencil"/>
					</a>
					<a href="#" className="btn btn-secondary tooltips"
					   data-placement="top" data-toggle="tooltip"
					   data-original-title="Delete">
						<i className="fa fa-times"/>
					</a>
				</div>
				<ul className="social-links list-inline mb-0">
					<li className="list-inline-item">
						<a title="" data-placement="top" data-toggle="tooltip"
						   className="tooltips" href=""
						   data-original-title="Facebook">
							<i className="fa fa-facebook-f"/>
						</a>
					</li>
					<li className="list-inline-item">
						<a title="" data-placement="top" data-toggle="tooltip"
						   className="tooltips" href=""
						   data-original-title="Twitter">
							<i className="fa fa-twitter"/>
						</a>
					</li>
					<li className="list-inline-item">
						<a title="" data-placement="top" data-toggle="tooltip"
						   className="tooltips" href="" data-original-title="Skype">
							<i className="fa fa-skype"/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>)
}
const EmployeeComponent = ({employees}) => {
	return (
		<div className="container">
			<div className="row">
				{employees.map(employee =>
					<EmployeeRow {...employee} key={`employee_${employee.id}`}/>)}
			</div>
		</div>
	);
};

EmployeeComponent.propTypes = {
	employees: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		email: PropTypes.string,
		jobTitle: PropTypes.string,
		phone: PropTypes.string,
		imageUrl: PropTypes.string,
		createdDate: PropTypes.string,
		lastModifiedDate: PropTypes.string
	}))
};

export default EmployeeComponent;
