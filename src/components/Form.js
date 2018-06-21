import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

class Form extends React.Component {
	render() {
		return (
			<form>
				<Grid container>
					<Grid item sm={12}>
						<TextField
						id="firstName"
						label="First Name"
						margin="normal"
						/> <span /> <br />
						<TextField
						id="lastName"
						label="Last Name"
						margin="normal"
						/> <span /> <br />
						<br />
						<Button variant="raised" color="primary" type="submit">Submit</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
};

export default Form;