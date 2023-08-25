import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="main">
      <Layout>
        <div>
        <Routes>
        <Route exact path="/" >
        <Homepage/>
        </Route>

        <Route exact path="/cryptocurrencies" >
        <Cryptocurrencies/>
        </Route>

        <Route exact path="/exchanges" >
        <Exchanges/>
        </Route>

        <Route exact path="/news" >
        <News/>
        </Route>
        <Route exact path="/crytpdetails" >
        <CryptoDetails/>
        </Route>


        </Routes>
        </div>
      </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
