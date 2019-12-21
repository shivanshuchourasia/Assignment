import React,{Component} from 'react'
import axios from 'axios'
import dateFormat from 'dateformat'

class Details extends Component{
  constructor(props){
		super(props)

		this.state = {
      name: '',
			email: '',
			number: '',
			course: '',
			country: [],
			dob: ''
		}

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}


	handleSubmit(e){
    e.preventDefault()

    const user = {
      email: this.state.email
    }
    
    axios.post('http://localhost:5000/details',user).then(res => {
      console.log(res.data)
      this.setState({
        name : res.data.name,
        number : res.data.number,
        course : res.data.course,
        country : res.data.country,
        dob : res.data.dob
      })
      
  })

		// window.location = '/details'
  }
  
  formatDate(date){
    if(date)
    return dateFormat(date,"mmmm dS, yyyy")
  }

  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Enter email for details</label>
              <input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.handleChange} required/>
            </div>

            <button type="submit" className="btn btn-primary m-3">
              Submit
            </button>
          </form>
        </div>

        <div className="card">
          <h4>{this.state.name}</h4>
          <h4>{this.state.number}</h4>
          <h4>{this.state.course}</h4>
          <h4>{this.state.country.map(c => c+' ')}</h4>
          <h4>{this.formatDate(this.state.dob)}</h4>
        </div>
      </div>
    )
  }
}

export default Details