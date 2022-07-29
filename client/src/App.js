import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App container">
      <div className="">
        <NavBar></NavBar>
        <Routes>
          <Route exact path = "/register" element={<SignIn/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path = "/expenses/new" element = {<ExpenseForm/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
