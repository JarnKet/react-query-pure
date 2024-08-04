import { Link } from "react-router-dom";

// UI
import { Button } from "@/components/ui/button";

const Home = () => {
	return (
		<main>
			<h1 className="text-3xl font-bold">Hello React Query</h1>
			<Button>
				<Link to={"/login"}>Login</Link>
			</Button>
		</main>
	);
};

export default Home;
