import React, { Component } from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";

import axios from "axios";
import Nav from "./Nav";

export default class Bookinghistory extends Component {
	state = {
		data: []
	};
	componentDidMount() {
		const email = "";
		const password = "";
		const local_token = localStorage.getItem("token");

		const token = Buffer.from(`${email}:${password}`, "utf8").toString(
			"base64"
		);

		const url = "http://localhost:5000/api/bookings/current";

		axios
			.get(url, {
				headers: {
					Authorization: `${local_token}`
				}
			})
			.then((res) => {
				const data = res.data;
				this.setState({ data });
			});
	}

	render() {
		return (
			<BodyBackgroundColor backgroundColor="white">
				<div>
					<Nav />
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
										<th scope="col-md-12">Cleening Type</th>
										<th scope="col-md-12">Cleaning Tool</th>
										<th scope="col-md-12">Insruction</th>
										<th scope="col-md-12">Duration</th>
										<th scope="col-md-12">Phone</th>
										<th scope="col-md-12">Time</th>
										<th scope="col-md-12">Date</th>
									</tr>
								</thead>

								{this.state.data.map((data) => (
									<tbody>
										<tr>
											<th scope="row"></th>
											<td>{data.location}</td>
											<td>{data.rooms}</td>
											<td>{data.bathrooms}</td>
											<td>{data.cleaningtype}</td>
											<td>{data.cleaningproduct}</td>
											<td>{data.instruction}</td>
											<td>{data.how_offten}</td>
											<td>{data.phne}</td>
											<td>{data.time}</td>
											<td>{data.date}</td>
										</tr>
									</tbody>
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
