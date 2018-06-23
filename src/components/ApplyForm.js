import React from "react";

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class ApplyForm extends React.Component {

	//dropdown logic start
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  dropdownOpen: false,
		  dropdownValue: "Select"
		};
	  }
	
	toggle(event) {
	this.setState(prevState => ({
		dropdownOpen: !prevState.dropdownOpen
	}));
	}

	select = async (event) => {
		this.setState({
			dropdownValue: event.target.innerText
		});
	}
	//dropdown logic end

	//click handler start
	submitClickHandler = async (event) => {
		event.preventDefault();
		//get values from form
		const firstName = event.target.elements.firstName.value; //TODO: write to api
		try {
		  console.log('Submit clicked!'); //TODO: remove
		  this.setState({
			test: firstName
		  });
		  alert(this.state.test + "-->" + this.state.dropdownValue); //TODO: remove
		} catch(err) {
		  this.setState({
			error: err
		  });
		}
	}
	//click handler end


	render() {
		return (
			<div>
				<Form onSubmit={this.submitClickHandler}>
					<Container>
						<FormGroup>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="firstName">First Name</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="firstName" placeholder="First Name"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="lastName">Last Name</Label>
								</Col>
								<Col>
									<Input type="text" className="form-control" name="lastName" placeholder="Last Name"></Input>
								</Col>
							</Row>
							<Row className="top-buffer">
								<Col>
									<Label variant="subheading" for="state">State</Label>
								</Col>
								<Col>
									<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
										<DropdownToggle caret>
											{this.state.dropdownValue}
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem onClick={this.select}>FL</DropdownItem>
											<DropdownItem onClick={this.select}>CA</DropdownItem>
											<DropdownItem onClick={this.select}>NY</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</Col>
							</Row>
							<Row className="justify-content-center top-buffer">
								<Col>
									<Button type="submit" className="btn btn-primary">Submit</Button>
								</Col>
							</Row>
						</FormGroup>
					</Container>
				</Form>
			</div>
		);
	}
};

export default ApplyForm;