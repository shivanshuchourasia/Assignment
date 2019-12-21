import React,{Component} from 'react'

class Details extends Component{
  constructor(props){
		super(props)

		this.state = {
			email: ''
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

		console.log(this.state)

		// window.location = '/details'
	}

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Enter email for details</label>
            <input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.handleChange} required/>
          </div>

          <button type="submit" className="btn btn-primary m-3">
						Submit
					</button>
        </form>
    )
  }
}

export default Details