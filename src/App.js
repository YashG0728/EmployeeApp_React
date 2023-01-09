import './App.css';
import PayrollForm from './Components/Payroll-form/payroll-form';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Homepage from './Components/Homapage/Homepage';
import Update from './Components/Update/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path = "/" element = {<PayrollForm/>} />
          <Route exact path = "/Submit" element = {<Homepage/>} />
          <Route exact path =  "/user/edit/:emplyeeId" element = {<Update/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;