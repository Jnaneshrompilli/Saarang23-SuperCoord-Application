import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card/card";
import Navbar from "./components/NavBar/navbar";
import Tshirt from "./components/Tshirts/Tshirt";
import Footer from "./components/Footer/footer";

import axios from "axios";
import { useQuery } from "react-query";


function App() {
	console.log("HI");

	return (
		<div className="App">
			<Navbar />
            <Tshirt />
            <Footer />
		</div>
	);
}

export default App;
