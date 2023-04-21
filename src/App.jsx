
import { Paper } from "@mui/material";
import Gallery from "./gallery";

import ReactPlayer from "react-player";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ResponsivePlayer from "./ResponsivePlayer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";

export default function App() {
  return(
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}