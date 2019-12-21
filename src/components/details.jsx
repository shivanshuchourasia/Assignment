import React,{Component} from 'react'

class Details extends Component{
  render(){
    return(
      <div className="container">
        <form>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Enter email for details</label>
            <input type="email" className="form-control" id="inputEmail4" required/>
          </div>

          <button type="submit" className="btn btn-primary m-3">
						Submit
					</button>
        </form>
      </div>
    )
  }
}

export default Details