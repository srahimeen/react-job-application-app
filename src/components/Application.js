import React from "react";

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class Application extends React.Component {

	//dropdown logic start
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  dropdownOpen: false
		};
	  }
	
	toggle(event) {
	this.setState(prevState => ({
		dropdownOpen: !prevState.dropdownOpen
	}));
	}

	//dropdown logic end

	render() {
		return (
			<div>
				<Form onSubmit={this.props.submitClickHandler}>
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
											{this.state.stateSelected}
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem>FL</DropdownItem>
											<DropdownItem>CA</DropdownItem>
											<DropdownItem>NY</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</Col>
							</Row>
							<Row className="justify-content-center top-buffer">
								<Col>
									<Button type="submit" className="btn btn-secondary">Submit</Button>
								</Col>
							</Row>
						</FormGroup>
					</Container>
				</Form>
			</div>
		);
	}
};

export default Application;