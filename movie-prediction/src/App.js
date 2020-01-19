import React, { useState, createContext, useEffect } from "react";
// import { withAuthenticator } from "aws-amplify-react";
// import { Auth } from "aws-amplify";
// import { signUpConfig, usernameAttributes } from "./utils/signupConfig";
import {  BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <SelectContext.Provider value={{ ...SelectState }}> */}
				{/* <AuthContext.Provider value={{ ...AuthState }}> */}
					<BrowserRouter>
						<Routes></Routes>
					</BrowserRouter>
				{/* </AuthContext.Provider> */}
			{/* </SelectContext.Provider> */}
            
		</div>
	);
}

export default App;
