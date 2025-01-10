import { Route, Routes } from "react-router";
import { Home } from "./component";
import HoverEffect from "./component/Hover/HoverEffect";
import Navigation from "./component/Navigation";
import TrackingEyes from "./component/TrackingEyes/TrackingEyes";

const App = () => {
  return (
      <Routes>
        <Route path="*" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hover" element={<HoverEffect />} />
        <Route path="/trackingEyes" element={<TrackingEyes />} />
      </Routes>
  );
};

export default App;
