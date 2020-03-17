import React, { Component } from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";

import axios from "axios";
import Admin_Nav from "./Admin_Nav";

export default class Admin_pendingbooking extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		const url = "http://localhost:5000/api/bookings/adminpending";

		axios.get(url, {}).then((res) => {
			const data = res.data;
			this.setState({ data });
		});
	}

	async deleteBooking(_id) {
		await axios.delete(
			`http://localhost:5000/api/bookings/adminpending/${_id}`
		);
		let userListCopy = this.state.data; // grab a copy of the todo list
		for (let i = 0; i < userListCopy.length; i++) {
			let users = userListCopy[i];
			if (users._id === _id) {
				// if it’s the correct ID...
				userListCopy.splice(i, 1); // delete the item
				break; // we’re done! break the loop
			}
		}
		this.setState({ data: userListCopy }); // we update state
	}

	//
	async updateBooking(_id) {
		await axios.put(`http://localhost:5000/api/bookings/mark/${_id}`);
		let userListCopy = this.state.data; // grab a copy of the todo list
		for (let i = 0; i < userListCopy.length; i++) {
			let users = userListCopy[i];
			if (users._id === _id) {
				// if it’s the correct ID...
				userListCopy.splice(i, 1); // delete the item
				break; // we’re done! break the loop
			}
		}
		this.setState({ data: userListCopy }); // we update state
	}

	render() {
		return (
			<BodyBackgroundColor backgroundColor="white">
				<div>
					<Admin_Nav />
					<div className="container">
						<div className="col-md-12 pt-5">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<table className="table col-md-12">
											<thead class="thead-dark">
												<tr>
													<th scope="col-md-12"></th>
													<th scope="col-md-12">Location</th>
													<th scope="col-md-12">Rooms</th>
													<th scope="col-md-12">Restrooms</th>
													<th scope="col-md-12"> Type</th>
													<th scope="col-md-12"> Tool</th>
													<th scope="col-md-12">Insruction</th>
													<th scope="col-md-12">Duration</th>
													<th scope="col-md-12">Phone</th>
													<th scope="col-md-12">Time</th>
													<th scope="col-md-12">Date</th>
													<th scope="col-md-12">Action</th>
													<th scope="col-md-12">Action</th>
												</tr>
											</thead>

											{this.state.data.map((users) => (
												<tr key={users._id}>
													<th scope="row"></th>
													<td>{users.location} </td>
													<td>{users.rooms} </td>
													<td>{users.bathrooms}</td>
													<td>{users.cleaningtype}</td>
													<td>{users.cleaningproduct}</td>
													<td>{users.instruction}</td>
													<td>{users.how_offten}</td>
													<td>{users.phone}</td>
													<td>{users.time}</td>
													<td>{users.date}</td>

													<td deleteUser={this.deleteUser}>
														<button
															type="button"
															className="btn btn-danger btn-sm"
															data-toggle="modal"
															data-target="#exampleModal">
															Delete
														</button>

														<div
															className="modal fade"
															id="exampleModal"
															tabindex="-0"
															role="dialog"
															aria-labelledby="exampleModalLabel"
															aria-hidden="true">
															<div className="modal-dialog" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5
																			className="modal-title"
																			id="exampleModalLabel">
																			Are you sure that you want to delete this
																			data!!! ?
																		</h5>
																	</div>

																	<div className="modal-footer">
																		<button
																			type="button"
																			className="btn btn-dark btn-sm"
																			data-dismiss="modal">
																			Cancel
																		</button>
																		<button
																			class="btn btn-danger btn-sm"
																			data-dismiss="modal"
																			onClick={() =>
																				this.deleteBooking(users._id)
																			}>
																			delete
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</td>

													<td>
														<button
															type="button"
															className="btn btn-success btn-sm"
															data-toggle="modal"
															data-target="#exampleModal">
															Comfirm
														</button>

														<div
															className="modal fade"
															id="exampleModal"
															tabindex="-2"
															role="dialog"
															aria-labelledby="exampleModalLabel"
															aria-hidden="true">
															<div className="modal-dialog" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5
																			className="modal-title"
																			id="exampleModalLabel">
																			Are you sure that you want to comfirm this
																			booking!!! ?
																		</h5>
																	</div>

																	<div className="modal-footer">
																		<button
																			type="button"
																			className="btn btn-dark btn-sm"
																			data-dismiss="modal">
																			Cancel
																		</button>
																		<button
																			class="btn btn-success btn-sm"
																			data-dismiss="modal"
																			onClick={() =>
																				this.updateBooking(users._id)
																			}>
																			comfirm
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</td>
												</tr>
											))}
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BodyBackgroundColor>
		);
	}
}
