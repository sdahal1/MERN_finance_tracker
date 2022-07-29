import React from 'react';

const CategoriesBar = (props) => {
    const {setSelectedCat} = props;
    const categoriesOptions = [
        "all",
        "rent", 
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
    
    return (
        <div className='cat-bar'>
            <p>Filter by category by checking a category below</p>
            <div className="cat-nav">
                {
                categoriesOptions.map((cat,i)=>{
                    return(
                        <button onClick={()=>setSelectedCat(cat=="all"? "":cat)} key={i} className='btn btn-info m-1'>{cat.toUpperCase()}</button>
                    )
                })
                
                }
            </div>
        </div>
    );
};


export default CategoriesBar;