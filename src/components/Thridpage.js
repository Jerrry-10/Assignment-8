import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
export default function Thrid() {
    const [Debit, setDebit] = useState([])
    async function GetDebits(){
        await axios.get("https://moj-api.herokuapp.com/Credits")
        .then(response =>{
            setDebit(response.data)
            {/*console.log(response)*/}
        })
    }
    useEffect(()=>{
        GetDebits()
    })
    return (
        <div>
            <h1> Look at your credits</h1>
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
        </div>
    )
}
