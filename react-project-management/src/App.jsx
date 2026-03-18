import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectListPage />} />
				<Route path="*" element={<h1>Page not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
