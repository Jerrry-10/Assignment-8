import React from 'react'

export default function Home(props) {
    return (
        <div> 
            <div className='inline'>
            <h1>Bank of React</h1>
            <h2> You have ${Math.floor(props.bal)} in your account </h2>
            </div>
            <img className = 'rounded float-right' src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank"/>
            
        </div>
    )
}