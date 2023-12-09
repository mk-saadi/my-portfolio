import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import About from "./pages/home/homeComponent/About";
import Contacts from "./pages/home/homeComponent/Contacts";
import Projects from "./pages/home/homeComponent/Projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: "/",
						element: <About />,
					},
					{
						path: "/projects",
						element: <Projects />,
					},
					{
						path: "/contacts",
						element: <Contacts />,
					},
				],
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
