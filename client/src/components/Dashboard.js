import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import UserExpenses from './UserExpenses';

const Dashboard = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("res ", res)
                setUser(res.data.results)
            })
            .catch(err=>{
                console.log("err", err)
                navigate("/")
            })
    },[])

    const logout = ()=>{
        axios.get("http://localhost:8000/api/logout", {withCredentials:true})
            .then(res=>{
                console.log("res logging out", res)
            })
            .catch(err=>console.log("err logging out", err))
            navigate("/")
    }
    return (
        <div>
            <button onClick={logout} className='btn btn-danger'>Sign Out</button>
            <h3>Welcome to Finance Tracker, {user.firstName}</h3>
            <Link to="/expenses/new" className='btn btn-success'>Add a new expense</Link>
            <p>Get rich or die tracking (your finances that is!)</p>
            <UserExpenses></UserExpenses>
        </div>
    );
};

export default Dashboard;