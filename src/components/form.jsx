import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import axios from 'axios'

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
	constructor(props){
		super(props)

		this.state = {
			name: '',
			email: '',
			number: '',
			course: 'UG',
			country: [],
			dob: ''
		}

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let target = e.target;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleMultiChange = country => {
    this.setState({ country });
  };


	handleSubmit(e){
		e.preventDefault()

		const user = {
			name: this.state.name,
			email: this.state.email,
			number: this.state.number,
			course: this.state.course,
			country: this.state.country,
			dob: this.state.dob
		}

		axios.post('http://localhost:5000/info',user).then(res => console.log(res.data))

		window.location = '/details'
	}


	render() {
		const { country } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group col-md-6">
					<label htmlFor="inputName">Name</label>
					<input type="text" className="form-control" id="inputName" name="name" value={this.state.name} onChange={this.handleChange} required/>
				</div>

				<div className="form-group col-md-6">
					<label htmlFor="inputEmail4">Email</label>
					<input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.handleChange} required/>
				</div>

				<div className="form-group col-md-6">
					<label htmlFor="inputNumber">Contact Number</label>
					<input type="number" className="form-control" id="inputNumber" min="1000000000" max="9999999999" name="number" value={this.state.number} onChange={this.handleChange} required/>
				</div>

				<div className="form-row m-2">
					<div className="form-group col-md-6">
						<label htmlFor="inputDob">Date of Birth</label>
						<input type="date" className="form-control" id="inputDob" name="dob" value={this.state.dob} onChange={this.handleChange} />
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="inputCourse">Course</label>
						<select id="inputCourse" className="form-control" name="course"  value={this.state.course} onChange={this.handleChange} required>
							<option value="UG">UG</option>
							<option value="PG">PG</option>
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
						onChange={this.handleMultiChange}
						value={country}
						className="basic-multi-select"
						classNamePrefix="select"
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary m-3">
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
