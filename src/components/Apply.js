import React from "react";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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