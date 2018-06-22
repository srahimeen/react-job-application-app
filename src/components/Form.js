import React from "react";

import Typography from '@material-ui/core/Typography';

import { DropdownButton, MenuItem} from 'react-bootstrap';


class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.submitClickHandler}>
					<div className="container">
						<div className="form-group">
							<div className="row top-buffer">
								<div className="col">
									<Typography variant="subheading" htmlFor="firstName">First Name</Typography>
								</div>
								<div className="col">
									<input type="text" className="form-control" name="firstName" placeholder="First Name"></input>
								</div>
							</div>
							<div className="row top-buffer">
								<div className="col">
									<Typography variant="subheading" htmlFor="lastName">Last Name</Typography>
								</div>
								<div className="col">
									<input type="text" className="form-control" name="lastName" placeholder="Last Name"></input>
								</div>
							</div>
							<div className="row top-buffer">
								<div className="col">
									<Typography variant="subheading" htmlFor="state">State</Typography>
								</div>
								<div className="col">
									<div className="dropdown">
										<button 
											className="btn btn-secondary dropdown-toggle" 
											type="button" 
											id="dropdownMenuButton" 
											data-toggle="dropdown" 
											aria-haspopup="true">
											Dropdown
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item" href="#nogo">Item 1</a>
											<a className="dropdown-item" href="#nogo">Item 2</a>
											<a className="dropdown-item" href="#nogo">Item 3</a>
										</div>
									</div>
								</div>
							</div>
							<div className="row justify-content-center top-buffer">
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default Form;