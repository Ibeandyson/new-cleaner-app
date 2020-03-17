import React from "react";
import { Icon } from "evergreen-ui";
import Component from "@reactions/component";
import { Paragraph } from "evergreen-ui";
import { SideSheet } from "evergreen-ui";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import BodyBackgroundColor from "react-body-backgroundcolor";
import "../App.css";

export default function Admin_Drawar() {
	return (
		<BodyBackgroundColor backgroundColor="#DBE9F4">
			<div className="tex-center">
				<Component initialState={{ isShown: false }}>
					{({ state, setState }) => (
						<React.Fragment>
							<SideSheet
								style={{ backgroundColor: "#DBE9F4" }}
								isShown={state.isShown}
								onCloseComplete={() => setState({ isShown: false })}
								preventBodyScrolling>
								<div className="cancel">
									 
									 <Icon icon="cross" color="white" size={40}  margin={30} style={{size:'50px', borderRadius:'50px', backgroundColor:'#DBE9F4'}} onClick={() => setState({ isShown: false })}/>
								</div>
								<Link as={Link} to="/AdminDashboard">
									<Paragraph style={{fontSize:'20PX', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										 Dash Board
									</Paragraph>
								</Link>
								<Link as={Link} to="/Bookingrequest">
									<Paragraph style={{fontSize:'20px', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										  Booking Request
									</Paragraph>
								</Link>
                                <Link as={Link} to="/Completedbooking">
									<Paragraph style={{fontSize:'20px', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										  Completed Booking 
									</Paragraph>
								</Link>
                                <Link as={Link} to="/Admin_pendingbooking">
									<Paragraph style={{fontSize:'20px', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										  Pending Booking
									</Paragraph>
								</Link>
                                <Link as={Link} to="/Admin_total_user">
									<Paragraph style={{fontSize:'20px', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										  Total Users
									</Paragraph>
								</Link>
								
								
								
								<Link as={Link} to="/Indox">
									<Paragraph style={{fontSize:'20PX', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										Inbox
									</Paragraph>
								</Link>
								<a>
									<Paragraph style={{fontSize:'20PX', fontFamily:'lato'}}
										margin={50}
										onClick={() => setState({ isShown: false })}>
										log Out
									</Paragraph>
								</a>
							</SideSheet>
							<AiOutlineMenu
								onClick={() => setState({ isShown: true })}
								style={{ fontSize: "30px", color: "white" }}
							/>
						</React.Fragment>
					)}
				</Component>
			</div>
		</BodyBackgroundColor>
	);
}
