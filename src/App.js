import './App.css';
import  {Navbar}  from "./components/layout/Navbar";
import  Footer  from "./components/layout/Footer";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Instructions } from "./pages/Instructions";
import { Terms } from "./pages/Terms";
import ScrollToTop  from "./components/ScrollToTop";
import Form  from "./pages/Form";
import MatchingGame  from "./pages/MatchingGame";
import Login from "./pages/Login";
import Winning from "./pages/Winning";
import Lose from "./pages/Lose";
import Game from "./pages/Game";

function App() {
	return (
		<div className="App">
			<Router>
            <ScrollToTop/>
				<Navbar/>
				<Routes>
					<Route index element={<Home/>} />
					<Route path="instructions" element={<Instructions/>}/>
					<Route path="term&conditions" element={<Terms/>} />
               <Route path="Game" element={<Game/>}/>
					<Route path="registration" element={<Form/>}/>
               <Route path="MatchGame" element={<MatchingGame/>}/>
               <Route path="login" element={<Login/>}/>
               <Route path="Win" element={<Winning/>}/>
               <Route path="Lose" element={<Lose/>}/>
				</Routes>
			</Router>
			<Footer/>
		</div>
	);
}

export default App;
