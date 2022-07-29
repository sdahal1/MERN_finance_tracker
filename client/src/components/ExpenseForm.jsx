import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ExpenseForm = () => {

    const navigate = useNavigate();

    const categoriesOptions = [
        "rent_and_utilities", 
        "investing",
        "grocery",
        "gas", 
        "dining", 
        "car", 
        "social", 
        "education", 
        "health", 
        "transportation",
        "travel", 
        "entertainment", 
        "insurance",
        "style",
        "other",
        ]
    
    let [formData, setFormData] = useState({})
    let [errors, setErrors] = useState({})


    const changeHandler = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/expenses", formData, {withCredentials: true})
            .then(response=>{
                // console.log(response)
                if(response.data.errors){
                    setErrors(response.data.errors);
                }else{
                    navigate("/dashboard")
                }
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h4>Add your expense below</h4>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price" step="0.01" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Date:</label>
                    <input type="date" name="date" id="date" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.date?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Category:</label>
                    <select name="category" id="category" className='form-select' onChange={changeHandler} >
                        {
                            categoriesOptions.map((cat,i)=>{
                                return <option key={i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
                    <p className="text-danger">{errors.category?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea  className = "form-control" onChange={changeHandler} name="description" id="description" rows="4"></textarea>
                </div>
                <input type="submit" value="Add expense" className="btn btn-success m-2" />
                <Link to="/dashboard" className="btn btn-info m-2">Cancel</Link>
            </form>
        </div>
    );
};

export default ExpenseForm;