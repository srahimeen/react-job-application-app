import React from "react";

import Typography from '@material-ui/core/Typography';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Application extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.submitClickHandler}>
					<Container>
						<div className="form-group">
							<Row className="top-buffer">
								<Col>
									<Typography variant="subheading" htmlFor="firstName">First Name</Typography>
								</Col>
								<Col>
									<input type="text" className="form-control" name="firstName" placeholder="First Name"></input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Typography variant="subheading" htmlFor="lastName">Last Name</Typography>
								</Col>
								<Col>
									<input type="text" className="form-control" name="lastName" placeholder="Last Name"></input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Typography variant="subheading" htmlFor="state">State</Typography>
								</Col>
								<Col>
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
								</Col>
							</Row>
							<div className="row justify-content-center top-buffer">
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</div>
					</Container>
				</form>
			</div>
		);
	}
};

export default Application;