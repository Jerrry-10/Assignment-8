import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Balance from './Balance'
export default function Secondpage(props) {
    const [Debit, setDebit] = useState([])
    const [Amount, setAmount] = useState(0)
    const [Description, setDescription] = useState("");
    const [newDebit,SetnewDebit] = useState([])
    let [baltotal, setbaltotal] = useState(props.bal)

    async function GetDebits(){
        await axios.get("https://moj-api.herokuapp.com/debits")
        .then(response =>{
            setDebit(response.data)
            {/*console.log(response)*/}
        })
        // setbaltotal(props.bal)
        // baltotal = props
        // console.log(baltotal)
        
    }
    useEffect(()=>{
        GetDebits()
      
    },[])
    let total = props.bal
  baltotal = total
   console.log(baltotal)
    const onchangeAmount = (e) =>{
        setAmount(e.target.value)
    }
    const onchangeDescription = (e) =>{
        setDescription(e.target.value)
    }
    const AddDebt = (e) =>{
        let dummyAmount = Amount
        Debit.push({amount: parseInt(dummyAmount) ,description:`${Description}`})
       
       baltotal += parseInt(dummyAmount)
    //    console.log(Debit)
       
       setbaltotal(parseInt(dummyAmount))
    //    console.log(baltotal)
       e.preventDefault();
    //    updateDebt()
    }
    let dummyAmount = Amount
    baltotal += parseInt(dummyAmount)
    console.log(baltotal)

    return (
        <div>
            <h1> Look at your debits</h1>
            <h2 id='update'> You have ${baltotal} debt</h2> 
            {/* <Balance bal = {baltotal}/> */}
            {/* <h2> total balance is <Balance/></h2> */}
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
           {/* { newDebit.map(debit,key) =>{
                return(
                    <div>
                        {newDebit.description}
                    </div>
                )
            }} */}
             <div> 
             <h2> Add new debts</h2>
             <span>(Type anything in item to refresh the list after sumbitting)</span>
             <form>
             <label for="item">Item:</label><br></br>
             <input  onChange={onchangeDescription}name = 'item' id = 'item' type='text'></input> <br></br>
             <label for="Amount">Amount:</label><br></br>
             <input  onChange={onchangeAmount} name = 'amount' id = 'amount' type="number" ></input> <br></br>
             {/* <label for="Date">Date:</label><br></br>
             <input name = 'date' id = 'date' type='text'></input> <br></br> */}
             </form>
             <button onClick={AddDebt}> Add debt</button> 
             <p> updated amount: ${baltotal}</p>
             {console.log(baltotal)}
             </div>
        </div>
    )
}