import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AllUsers from './Components/AllUsers'
import AllVehicles from './Components/AllVehicles'
import AddUser from './Components/AddUser'
import AddVehicle from './Components/AddVehicle'
import EditVehicle from './Components/EditVehicle'
import Services from './Components/Services'
// import EditUser from './Components/EditUser'
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/user" element={<AllUsers />} />
        <Route path="/vehicle" element={<AllVehicles />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        <Route path="/edit/:id" element={<EditVehicle />} />        
      </Routes>
      <Services />
    </BrowserRouter>
  );
}

export default App;