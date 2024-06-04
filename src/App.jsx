import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/404Page";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodElement from "./pages/FoodElement";
import Contact from "./pages/Contact";

function App() {
	const Layout = () => {
		return (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		);
	};
	return (
		<>
			<Routes>
				<Route path="/" errorElement={<NotFound />} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="menu" element={<Menu />} />
					<Route path="menu/:id" element={<FoodElement />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
