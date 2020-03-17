import React from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import { Link } from "react-router-dom";
import Admin_Nav from "./Admin_Nav";
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GoIssueOpened } from 'react-icons/go';
import { FaRegEnvelopeOpen, FaRegCheckCircle } from 'react-icons/fa';





export default function AdminDashboard() {
	return (
		<BodyBackgroundColor backgroundColor="#DBE9F4">
			<div>
				<Admin_Nav />

				<div className="dashboard">
					<div className="container">
						<div className="row">
							<div className="col-md-3 px-3 my-3 text-center ">
								<Link as={Link} to="/Bookingrequest">
									<div
										className="card shadow-sm"
										style={{ background: "#F9F9FB" }}>
										<div className="card-body">
											<h5
												className="card-title"
												style={{ fontSize: "15px", fontFamily: "lato" }}>
												MASSAGES
											</h5>
											<div className="card-text">
											<FaRegEnvelopeOpen style={{fontSize:'100px', color: "#DBE9F4"}}/>
											</div>
										</div>
									</div>
								</Link>
							</div>

							<div className="col-md-3 px-3 my-3 text-center">
								<Link as={Link} to="/Completedbooking">
									<div
										className="card shadow-sm"
										style={{ background: "#F1FAF5" }}>
										<div className="card-body">
											<h5
												className="card-title"
												style={{ fontSize: "15px", fontFamily: "lato" }}>
												COMPELETED BOOKING
											</h5>
											<div className="card-text">
												<FaRegCheckCircle style={{fontSize:'100px', color: "#DBE9F4"}}/>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-md-3 px-3 my-3 text-center">
								<Link as={Link} to="/Admin_pendingbooking">
									<div
										className="card shadow-sm"
										style={{ background: "#FEF6F6" }}>
										<div className="card-body">
											<h5
												className="card-title"
												style={{ fontSize: "15px", fontFamily: "lato" }}>
												PENDING BOOKING
											</h5>
											<div className="card-text">
												<GoIssueOpened style={{fontSize:'100px', color: "#DBE9F4"}} />
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-md-3 px-3 my-3 text-center">
								<Link as={Link} to="/Admin_total_user">
									<div
										className="card shadow-sm"
										style={{ background: "#F8F7FC" }}>
										<div className="card-body">
											<h5
												className="card-title"
												style={{ fontSize: "15px", fontFamily: "lato" }}>
												TOTAL USERS
											</h5>
											<div className="card-text">
											<AiOutlineUsergroupAdd  style={{fontSize:'100px',  color: "#DBE9F4"}}/>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BodyBackgroundColor>
	);
}
