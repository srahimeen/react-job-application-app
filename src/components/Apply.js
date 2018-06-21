import React from "react";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Apply extends React.Component {
	render() {
		return (
			<div>
				<Grid container spacing={8}>
					<Grid item xs={12} sm={12}>
						<Typography variant="display2" gutterBottom>{this.props.roleName}</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="headline" gutterBottom>{this.props.roleDescription}</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="headline" gutterBottom>{this.props.roleLocation}</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						{this.props.currentPage==="text" && <Button variant="raised" type="apply" color="primary" onClick={this.props.applyClickHandler}>Apply</Button>}
						{this.props.currentPage==="form" && <Button variant="raised" type="apply" color="primary" onClick={this.props.applyClickHandler}>Cancel</Button>}
					</Grid>
				</Grid>
			</div>
		);
	}
};

export default Apply;