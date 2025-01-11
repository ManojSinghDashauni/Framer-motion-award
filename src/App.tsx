import { Route, Routes } from "react-router";
import { Home, HoverEffect, Tilt, TrackingEyes } from "./component";
import Navigation from "./component/Navigation";


const App = () => {
  return (
      <Routes>
        <Route path="*" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hover" element={<HoverEffect />} />
        <Route path="/trackingEyes" element={<TrackingEyes />} />
        <Route path="/Tilt" element={<Tilt />} />
      </Routes>
  );
};

export default App;
