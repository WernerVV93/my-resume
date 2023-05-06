import Navbar from "./Navbar";
import References from "./pages/References";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Education from "./pages/Education"
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import { HashRouter as Route } from "react-router-dom";

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Routes>
      <App />
    </Routes>
  )

return (
<>
<Navbar />
<div className="sitebody">

      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/References" element={<References />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div>
      </div>
      {/* <Footer /> */}
      </div>

</div></>

)
}

export default App;
