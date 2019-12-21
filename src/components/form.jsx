import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

const countryOptions = [
	{
		label: 'USA',
		value: 'USA'
	},
	{
		label: 'Australia',
		value: 'Australia'
	},
	{
		label: 'New Zealand',
		value: 'New Zealand'
	},
	{
		label: 'Canada',
		value: 'Canada'
	},
	{
		label: 'UK',
		value: 'UK'
	},
	{
		label: 'Ireland',
		value: 'Ireland'
	},
	{
		label: 'Germany',
		value: 'Germany'
	}
];

class Form extends Component {
	render() {
		return (
			<div className="container">
				<form>
					<div className="form-group col-md-6">
						<label htmlFor="inputName">Name</label>
						<input type="text" className="form-control" id="inputName" required/>
					</div>

					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Email</label>
						<input type="email" className="form-control" id="inputEmail4" required/>
					</div>

					<div className="form-group col-md-6">
						<label htmlFor="inputNumber">Contact Number</label>
						<input type="number" className="form-control" id="inputNumber" min="1000000000" max="9999999999" required/>
					</div>

					<div className="form-row m-2">
						<div className="form-group col-md-6">
							<label htmlFor="inputDob">Date of Birth</label>
							<input type="date" className="form-control" id="inputDob" />
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="inputCourse">Course</label>
							<select id="inputCourse" className="form-control" required>
								<option selected>UG</option>
								<option>PG</option>
							</select>
						</div>
					</div>
					
					<div className="form-group col-md-6">
						<label htmlFor="inputCountries">Country Preference</label>
						<Select
							defaultValue={[countryOptions[2], countryOptions[3]]}
							isMulti
							name="countries"
							options={countryOptions}
							className="basic-multi-select"
							classNamePrefix="select"
							required
						/>
					</div>

					<button type="submit" className="btn btn-primary m-3">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
