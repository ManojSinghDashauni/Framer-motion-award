import { Route, Routes } from "react-router";
import { Home } from "./component";
import HoverEffect from "./component/Hover/HoverEffect";
import Navigation from "./component/Navigation";

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hover" element={<HoverEffect />} />
      </Routes>
    </div>
  );
};

export default App;
