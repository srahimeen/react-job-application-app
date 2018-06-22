import React from "react";

class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.submitClickHandler}>
					<div class="container">
						<div className="form-group">
							<div class="row">
								<div class="col">
									<label for="exampleInputEmail1">First Name</label>
								</div>
								<div class="col">
									<input type="text" class="form-control" name="firstName" placeholder="First Name"></input>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default Form;