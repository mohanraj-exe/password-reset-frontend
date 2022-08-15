import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/main";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import EmailVerify from "./components/EmailVerify/emailVerify";
import ForgotPassword from "./components/ForgotPassword/forgotPassword";
import PasswordReset from "./components/PasswordReset/passwordReset";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />}/>
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />	
		</Routes>
	);
}

export default App;