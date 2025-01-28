import { Route, Routes } from "react-router";
import { Avatar, Home, HoverEffect, Tilt, Zoop } from "./component";
import Navigation from "./component/Navigation";
import { Suspense, lazy } from "react";

const Cursor = lazy(() => import('./component/custom/Cursor'))
const TrackingEyes = lazy(() => import('./component/TrackingEyes/TrackingEyes'))
const VideoPlayer = lazy(()=> import('./component/VideoPlayer/VideoPlayer'))

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hover" element={<HoverEffect />} />
        <Route path="/trackingEyes" element={<TrackingEyes />} />
        <Route path="/Tilt" element={<Tilt />} />
        <Route path="/Cursor" element={<Cursor />} />
        <Route path="/videoPlayEffect" element={<VideoPlayer />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/Zoop" element={<Zoop />} />
      </Routes>
      </Suspense>
  );
};

export default App;
