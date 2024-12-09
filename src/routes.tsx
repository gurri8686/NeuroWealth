import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./pages/dashboard/layout/DashboardLayout";
import WealthFrequency from "./pages/dashboard/WealthFrequency";
import AudioPlayer from "./pages/dashboard/AudioPlayer";
import NeuralPatternScore from "./pages/dashboard/NeuralPatternScore";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<NeuralPatternScore />} />
        <Route path="neural-pattern-score" element={<NeuralPatternScore />} />
        <Route path="wealth-frequency-chart" element={<WealthFrequency />} />
        <Route path="audio-player" element={<AudioPlayer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
