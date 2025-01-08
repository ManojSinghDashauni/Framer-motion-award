import { Link, Route, Routes } from "react-router";
import { Home } from "./component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <nav className="p-4 uppercase flex justify-center">
        <Link
          to="/home"
          className="font-bold hover:text-red-400 font-serif"
        >
          stack nav
        </Link>
      </nav>
    </div>
  );
};

export default App;
