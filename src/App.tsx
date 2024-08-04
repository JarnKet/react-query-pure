import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import PrivateRoute from "./pages/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PostList from "./pages/posts/PostLists";
import PostDetail from "./pages/posts/PostDetail";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/posts" element={<PostList />} />
					<Route path="/posts/:id" element={<PostDetail />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
