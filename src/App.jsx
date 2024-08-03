import { Route, Routes } from "react-router-dom";
import EChart from "./EChart";
import Header from "./Header";
import HomePage from "./HomePage";
import { sankeyOption, sunBurstOption } from "./charting";

function App() {
  return (
    <div className="flex justify-center items-center flex-col main font-opensans">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sankey" element={<EChart options={sankeyOption}/>}></Route>
        <Route path="/sunburst" element={<EChart options={sunBurstOption}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
