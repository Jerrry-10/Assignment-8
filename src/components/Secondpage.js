import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Balance from './Balance'
export default function Secondpage(props) {
    const [Debit, setDebit] = useState([])
    async function GetDebits(){
        await axios.get("https://moj-api.herokuapp.com/debits")
        .then(response =>{
            setDebit(response.data)
            {/*console.log(response)*/}
        })
    }
    useEffect(()=>{
        GetDebits()
    },[])
    return (
        <div>
            <h1> Look at your debits</h1>
            <h2> You have {props.bal} debt</h2>
            <h2> total balance is <Balance/></h2>
            {Debit.map( e =>{
                return(
                    <div className='inline'>
                    <ul key = {e.id}>
                        <li>Item: {e.description}</li>
                        <li>Amount: {e.amount}</li>
                        <li>Date: {e.date}</li>
                    </ul>
                    </div>
                )
            })}
            {/* <button onClick={}> Add debt</button> */}
        </div>
    )
}