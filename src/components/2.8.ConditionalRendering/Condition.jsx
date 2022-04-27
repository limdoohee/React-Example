import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name ? props.name + "," : ""} Welcome {props.count ? `It's ${props.count} times` : ""} </h1>
}

function GuestGreeting(props) {
    return <h1>Please, Sign up</h1>
}

function Greeting (props) {
    // console.log(props)
    // if(props.isLoggedIn) {
    //     return <UserGreeting name="Jimmy" count={0} />
    // }
    // return <GuestGreeting />;
    return props.isLoggedIn ? <UserGreeting name="Jimmy" count={1} /> : <GuestGreeting />;
}

export default function Condition() {
    const isLoggedIn = true;
  return (
    <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
    </div>
  )
}
