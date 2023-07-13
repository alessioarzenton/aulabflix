import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./Components/Details/Details";
import Search from "./pages/Search";
import { ContextProvider } from "./Context/Wishlist";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    return (
        <>
            <ContextProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="details/:id" element={<Details />} />
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;
