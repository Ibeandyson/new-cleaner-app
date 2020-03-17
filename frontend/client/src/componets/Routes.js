import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
import Bookinghistory from "./Bookinghistory";
import Message from "./Message";
import Dashboard from "./Dashboard";
import User_booking from "./User_booking";
import Register_success from  "./Register_success"

export default function Routes() {
	
	return (
				<div className="App">
				<BrowserRouter>
						<div>
						<Route exact path="/Register_success" component={Register_success} />
							<Route exact path="/User_booking" component={User_booking} />
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/Bookinghistory" component={Bookinghistory} />
							<Route exact path="/Message" component={Message} />
						</div>
						</BrowserRouter>
				</div>
			
	);
}
