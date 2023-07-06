import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./Components/Details/Details"
import Search from "./pages/Search";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="search" element={<Search />}/>
                <Route path="details/:id" element={<Details />}/>
            </Routes>
        </>
    );
}

export default App;
