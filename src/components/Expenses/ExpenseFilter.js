import './ExpenseFilter.css'
import React from 'react'

const ExpenseFilter = (props)=>{
    const filterHandler = (e)=>{
        props.filterSubmitHandler(e.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by Year</label>
                <select value = {props.selected} onChange = {filterHandler}>
                    <option value = "2019">2019</option>
                    <option value = "2020">2020</option>
                    <option value = "2021">2021</option>
                    <option value = "2022">2022</option>
                </select>

            </div>
        </div>
    )
}

export default ExpenseFilter;