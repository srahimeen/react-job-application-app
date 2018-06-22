import React from "react";

class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.submitClickHandler}>
					<div className="container">
						<div className="form-group">
							<div className="row top-buffer">
								<div className="col">
									<label htmlFor="firstName">First Name</label>
								</div>
								<div className="col">
									<input type="text" className="form-control" name="firstName" placeholder="First Name"></input>
								</div>
							</div>
							<div className="row top-buffer">
								<div className="col">
									<label htmlFor="lastName">Last Name</label>
								</div>
								<div className="col">
									<input type="text" className="form-control" name="lastName" placeholder="Last Name"></input>
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