import logo from "./logo.svg";
import "./App.css";
import data from "./constants/data.json";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { UserCard } from "./components/UserCard/UserCard";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <UserCard /> */}
			<div className="card-container">
				{data.map((userData) => {
					return <UserCard data={userData} />;
				})}
			</div>

			<Footer />
		</div>
	);
}

export default App;
