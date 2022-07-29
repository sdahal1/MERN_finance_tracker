import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import CategoriesBar from './CategoriesBar';
import DateSelector from './DateSelector';

const UserExpenses = () => {

    let [myExpenses, setMyExpenses] = useState([]);
    const [selectedCat, setSelectedCat] = useState("");
    const [selectedDate, setSelectedDate] = useState(13);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getCurrentUserExpenses", {withCredentials:true})
            .then(response=>{
                // console.log(response)
                setMyExpenses(response.data.results);
            })
            .catch(err=>console.log(err))
    },[])

    const calculateTotal = ()=>{
        let sum = myExpenses.filter(expense=>expense.category.includes(selectedCat)).filter(expense=>{
            if(selectedDate<13){
                return moment.utc(expense.date).month() == selectedDate
            }else{
                return true
            }
        }).reduce((acc, obj) => { return acc + obj.price}, 0);
        return sum;
    }

    const deleteExpense = (id)=>{
        axios.delete(`http://localhost:8000/api/expenses/${id}`)
            .then(res=>{
                setMyExpenses(myExpenses.filter(exp=>{
                    return exp._id != id;
                }))
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <CategoriesBar setSelectedCat={setSelectedCat}></CategoriesBar>
            <DateSelector setSelectedDate= {setSelectedDate}></DateSelector>
            <p>Total: {calculateTotal()}</p>
            <table className="table table table-bordered mt-3">
                <thead className='table-dark'>
                    <tr>
                    <th scope="col">Item Name:</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myExpenses.filter(expense=>expense.category.includes(selectedCat)).filter(expense=>{
                            if(selectedDate<13){
                                return moment.utc(expense.date).month() == selectedDate
                            }else{
                                return true
                            }
                        }).map(expense=>{
                            return(
                                <tr key={expense._id}>
                                    <th scope="row">{expense.name}</th>
                                    <td>{expense.price}</td>
                                    <td>{expense.category}</td>
                                    <td>{moment.utc(expense.date).format("MMMM DD, YYYY")}</td>
                                    <td>
                                        <button onClick={()=>deleteExpense(expense._id)} className="btn btn-danger font-weight-bold mx-1"><i className="fa fa-trash-o"></i></button>

                                        <button className="btn btn-danger font-weight-bold"><i className="fa fa-edit"></i></button>
                                    </td>
                                </tr>   
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
        
    );
};

export default UserExpenses;


