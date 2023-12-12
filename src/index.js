import React from "react"
import ReactDOM from "react-dom/client"
//const div = React.createElement('div',{className: 'text'},"Hello from Sukanya,I am inside react now")
const child1 = React.createElement('p',{},"I am child2")
const child2 = React.createElement('p',{},"I am child2")
// const div =React.createElement('div',{className: 'text'},[child1,child2])
const apiData = "hello 2 form api"
const isMorning = false
const morningText = "good morning text"
const afternoonText = "Afternoon User"
function handleClick(state) {
    console.log("I was clicked",state)
}
const morningElement = <div>{morningText} <span onClick={()=> handleClick(isMorning)}>
it is 8 am </span></div>
const afternoonElement = <div>{afternoonText}It is 6 pm</div>
// const div =<div className="text">{apiData}</div>
// const mesage =<div className="text">{isMorning? morningText: afternoonText}</div>
const greetingElement = isMorning?morningElement: afternoonElement
const GreetingComponent = () => 
<>
 {greetingElement}
 I am inside component 
    </>
console.log(GreetingComponent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<GreetingComponent/>) 