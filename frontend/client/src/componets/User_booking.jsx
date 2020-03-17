import React, { Component } from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import Nav from "./Nav";
import axios from "axios";

export default class User_booking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected_plan: "",
			selected_room: "",
			selected_duration: "",
			amount: "",
			location: "uzuoba",
			book_date: "",
			time: "",
			phone: "08051515612",
			instruction: "clean up",
			email: "vick@gmail.com",
			errors: "",
			room_pricing: {
				regular: {
					onebedroom: {
						once: "5590",
						"bi-monthly": "8600",
						"weekly/monthly": "17200"
					},
					twobedroom: {
						once: "6987",
						"bi-monthly": "9406",
						"weekly/monthly": "18812"
					},
					threebedroom: {
						once: "8385",
						"bi-monthly": "9943",
						"weekly/monthly": " 19887"
					},
					fourbedroom: {
						once: "6987",
						"bi-monthly": "15910",
						"weekly/monthly": "31820"
					},
					fivebedroom: {
						once: "6987",
						"bi-monthly": "19887",
						"weekly/monthly": "39775"
					}
				},
				deep: {
					onebedroom: {
						once: "5000"
					},
					twobedroom: {
						once: "25000"
					},
					threebedroom: {
						once: "35000"
					},
					fourbedroom: {
						once: "45000"
					},
					fivebedroom: {
						once: "55000"
					}
				},
				post: {
					onebedroom: {
						once: "25000"
					},
					twobedroom: {
						once: "35000"
					},
					threebedroom: {
						once: "45000"
					},
					fourbedroom: {
						once: "45000"
					},
					fivebedroom: {
						once: "65000"
					}
				}
			}
		};
		this.handlePlanChange = this.handlePlanChange.bind(this);
		this.handleRoomChange = this.handleRoomChange.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleInstructionChange = this.handleInstructionChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleBookChange = this.handleBookChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.initializePayment = this.initializePayment.bind(this);
		
		
	}
	// initializePayment = async form => {
	// 	console.log(JSON.stringify({'init_form: ': form}))
	// 	const options = {
	// 		url: 'https://api.paystack.co/transaction/initialize',
	// 		headers: {
	// 			'authorization': 'Bearer sk_test_d1a5c1f0bf5fb16d1971d0a1a0660929dfb96651',
	// 			'content-type': 'application/json',
	// 			'cache-control': 'no-cache'
	// 		},
	// 		method: 'POST',
	// 		data: form
	// 	};
	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const response = await axios.request(options);
	// 			resolve(response.data);
	// 			this.props.history.push(response.data.authorization_url)
	// 			console.log(JSON.stringify({'init_form_res: ': response.data}))
	// 		} catch (error) {
	// 			console.log(JSON.stringify({'init_res_error: ': error}))
	// 			reject(error);
	// 		};
	// 	});
	// };
	//  verifyPayment = async ref => {
	// 	const options = {
	// 		url: 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
	// 		headers: {
	// 			'authorization': 'Bearer sk_test_d1a5c1f0bf5fb16d1971d0a1a0660929dfb96651',
	// 			'content-type': 'application/json',
	// 			'cache-control': 'no-cache'
	// 		},
	// 		method: 'GET'
	// 	};
	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const data = await axios.request(options)
	// 			resolve(data);
	// 			console.log(JSON.stringify({'verify_pay_res: ': data}))
	// 		} catch (error) {
	// 			console.log(JSON.stringify({'verify_pay_res_error: ': error}))
	// 			reject(error);
	// 		};
	// 	});
	// };
	handleSubmit = (event) => {
		event.preventDefault();
		const booking = {
			selected_plan: this.state.selected_plan,
			selected_room: this.state.selected_room,
			selected_duration: this.state.selected_duration,
			amount: this.state.amount,
			location: this.state.location,
			book_date: this.state.book_date,
			time: this.state.time,
			phone: this.state.phone,
			instruction: this.state.book_date,
			email: this.state.email
		};

		const local_token = localStorage.getItem("token");
		// this.initializePayment(booking)

		axios({
			method: "post",
			url: "http://localhost:5000/api/bookings/booking", 
			data: {
				selected_plan: booking.selected_plan,
				selected_room: booking.selected_room,
				selected_duration: booking.selected_duration,
				amount: booking.amount,
				location: booking.location,
				book_date: booking.book_date,
				time: booking.time,
				phone: booking.phone,
				instruction: booking.book_date,
				email: booking.email
			},
			headers: {
				Authorization: `${local_token}`,
				"Content-Type": "application/json",
			
				"Access-Control-Allow-Origin": "*",	
				"X-Content-Type-Options": "nosniff",
				"Access-Control-Allow-Credentials": true,
				"Access-Control-Allow-Origin": " https://checkout.paystack.com/",
                "Access-Control-Allow-Methods": "PUT, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Special-Request-Header",
				"crossdomain": true 
			},
		
		})
			.then((res) => {
				console.log(res);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		
	};

	handleLocationChange = (event) => {
		this.setState({ location: event.target.value });
	};
	handleInstructionChange = (event) => {
		this.setState({ instruction: event.target.value });
	};
	handlePhoneChange = (event) => {
		this.setState({ phone: event.target.value });
	};
	handleTimeChange = (event) => {
		this.setState({ time: event.target.value });
	};
	handleBookChange = (event) => {
		this.setState({ book_date: event.target.value });
	};
	handleAmountChange = (event) => {
		this.setState({ amount: event.target.value });
		
	};
	handleEmailChange = (event) => {
		this.setState({ email: event.target.value });
		
	};

	handlePlanChange(event) {
		this.setState({ selected_plan: event.target.value });
		console.log("selected_plan: " + event.target.value);
		// this.handleAmountChange()
	}
	handleRoomChange(event) {
		this.setState({ selected_room: event.target.value });
		console.log("selected_plan: " + event.target.value);
		// this.handleAmountChange()
	}
	handleDurationChange(event) {
		this.setState({ selected_duration: event.target.value });
		console.log("selected_duration: " + event.target.value);
		// this.handleAmountChange()
		
	}

	render() {
		const { errors } = this.state;

		var avail_plans = Object.keys(this.state.room_pricing);

		var avail_rooms = () => {
			if (this.state.selected_plan == "") {
				return [];
			} else {
				return Object.keys(
					this.state.room_pricing[`${this.state.selected_plan}`]
				);
			}
		};

		var avail_durations = () => {
			if (this.state.selected_room == "" || this.state.selected_plan == "") {
				return [];
			} else {
				return Object.keys(
					this.state.room_pricing[`${this.state.selected_plan}`][
						`${this.state.selected_room}`
					]
				);
			}
		};
		var viable_cost = () => {
			if (
				this.state.selected_duration == "" ||
				this.state.selected_room == "" ||
				this.state.selected_plan == ""
			) {
				return [];
			} else {
				var viable_price = this.state.room_pricing[
					`${this.state.selected_plan}`
				][`${this.state.selected_room}`][`${this.state.selected_duration}`];
				// console.log("viable_price: " + viable_price);
				return viable_price;
			}
		};
		var avail_plans_radio = avail_plans.map((plan) => (
			<div key={`${plan}_container`}>
				<label key={`${plan}_plan_label`} for={plan}>
					<input
						key={`${plan}_plan_input`}
						type="radio"
						onClick={this.handlePlanChange}
						id={plan}
						name="plan"
						value={plan}
					/>
					{plan}
				</label>
			</div>
		));
		var avail_rooms_radio = avail_rooms().map((room) => (
			<div key={`${room}_room_container`}>
				<label key={`${room}_room_label`} for={room}>
					<input
						key={`${room}_room_input`}
						type="radio"
						onClick={this.handleRoomChange}
						id={room}
						name="room"
						value={room}
					/>
					{room}
				</label>
			</div>
		));
		var avail_duration_radio = avail_durations().map((duration) => (
			<div key={`${duration}_duration_container`}>
				<label key={`${duration}_duration_label`} for={duration}>
					<input
						key={`${duration}_duration_input`}
						type="radio"
						onClick={this.handleDurationChange}
						id={duration}
						name="duration"
						value={duration}
					/>
					{duration}
				</label>
			</div>
		));
		var final_cost = viable_cost();

		return (
			<BodyBackgroundColor backgroundColor="#DBE9F4">
				<div>
					<Nav />
					<div className="content">
						<div className="container ">
							<form onSubmit={this.handleSubmit}>
								<div class="card">
									<div class="card-body  shadow-sm">
										<div className="form-row">
											<div className="col-md-6">
												<div className="md-form mt-0">
													<input
														type="text"
														name="location"
														className="form-control"
														placeholder="location"
														id="location"
														value={this.state.locaction}
														onChange={this.handleLocationChange}
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="md-form mt-0">
													<input
														type="text"
														name="phone"
														className="form-control"
														placeholder="Phone"
														id="phone"
														value={this.state.phone}
														onChange={this.handlePhoneChange}
													/>
												</div>
											</div>
											<div className="col-md-4">
												<div className="md-form mt-0">
													<input
														type="email"
														name="email"
														className="form-control"
														id="eamil"
														value={this.state.email}
														onChange={this.handleEmailChange}
													/>
												</div>
												</div>
											<div className="col-md-4">
												<div className="md-form mt-0">
													<input
														type="time"
														name="time"
														className="form-control"
														id="time"
														value={this.state.time}
														onChange={this.handleTimeChange}
													/>
												</div>
											</div>
											<div className="col-md-4">
												<div className="md-form mt-0">
													<input
														type="date"
														name="book_date"
														className="form-control"
														id="date"
														placeholder="Date"
														value={this.state.book_date}
														onChange={this.handleBookChange}
													/>
												</div>
											</div>

											<div className="col-md-12 pb-3">
												<textarea
													style={{ height: "40px" }}
													className="form-control rounded"
													id="instruction"
													name="instruction"
													value={this.state.instruction}
													onChange={this.handleInstructionChange}
													placeholder="Instruction"></textarea>
											</div>

											<div>{avail_plans_radio}</div>
											<hr />
											<div>
												{this.state.selected_plan == "" || avail_rooms_radio}
											</div>
											<hr />
											<div className="pt-5">
												{this.state.selected_plan == "" ||
													this.state.selected_room == "" ||
													avail_duration_radio}
											</div>
											<hr />
											<div style={{ color: "blue" }}>
												{this.state.selected_plan == "" ||
													this.state.selected_room == "" ||
													this.state.selected_duration == "" ||
													<div className="col-md-6">
													<div className="md-form mt-0">
														<input
															type="number"
															name="amount"
															className="form-control"
															placeholder="Input Amount"
															id="amount"
															value={this.state.amount}
															onChange={this.handleAmountChange}
														/>
													</div>
												</div>	}
											</div>
										</div>
									</div>
								</div>
								<div className="text-center pt-3">
									<h4 style={{color:'blue'}}> Your Booking Amount: {final_cost} </h4>
									</div>
								<div class="pt-3 pb-3 text-center">
									<button
										type="submit"
										className="btn-sm btn-primary text-center">
										<b>Submit</b>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</BodyBackgroundColor>
		);
	}
}
