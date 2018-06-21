import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Form extends React.Component {
	render() {
		return (
			<form>
				<Grid container>
					<Grid item sm={6}>
						<Typography variant="subheading" gutterBottom>First Name:</Typography>
						<Typography variant="subheading" gutterBottom>Last Name:</Typography> 
					</Grid>
					<Grid item sm={6}>
						<TextField label="First Name" floatingLabelText="First Name" name="firstName" onChange={this.change}/> <br />
						<TextField label="Last Name" floatingLabelText="Last Name" name="lastName" onChange={this.change} />
					</Grid>
					<Grid item sm={12}>
						<Button variant="raised" color="primary" type="submit">Submit</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
};

export default Form;