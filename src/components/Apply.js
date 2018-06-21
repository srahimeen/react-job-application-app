import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

class Apply extends React.Component {
	render() {
		return (
			<form>
				<Grid container>
					<Grid item sm={12}>
                        <Typography variant="display1" gutterBottom>{this.props.roleName}</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography variant="Subheading" gutterBottom>{this.props.roleDescription}</Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography variant="Subheading" gutterBottom>{this.props.roleLocation}</Typography>
                    </Grid>
				</Grid>
			</form>
		);
	}
};

export default Apply;