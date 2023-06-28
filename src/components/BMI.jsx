import React,{useState} from 'react'
import { Button } from 'react-bootstrap';


export default function BMI() {

const [weight, setWeight] = useState()
const [height, setHeight] = useState()
const [bmi, setBmi] = useState('')
const [meassage, setMeassage] = useState('')
const calBmi = (e)=>{
e.preventDefault()
if(weight === 0 || height === 0){
  alert("Please Enter Weigth and Height")
}else{
  let Bmi = (weight / (height * height)* 703)
  setBmi(Bmi.toFixed(1))
}
if(bmi<25){
  setMeassage('You are Under Weight')
}
else if (bmi >= 25 && bmi < 30){
  setMeassage('You are Healthy Weight')
}
else{
  setMeassage('You are Over Weight')
}
}

const reload = ()=>{
window.location.reload()
}
  return (
    <>
    <div className="app">

      <div className="container">
        <h2>BMI Calculator</h2>
          <form onSubmit={calBmi}>
          <div>
            <label>Weight</label>
            <input type="number" placeholder='Enter Weight Value' onChange={(e)=>setWeight(e.target.value)} value={weight}/>
          </div>
          <div>
            <label>Height</label>
            <input type="number" placeholder='Enter Height Value' onChange={(e)=>setHeight(e.target.value)} value={height} />
          </div>

          <div>
          <Button variant='success' className='btn' type='submit'>Submit</Button>
          <Button variant='success' className='btn btn-outline' onClick={reload}  type='submit'>Reload</Button>
          </div>
          <div className='center'>
             <h3>Your BMI is :{bmi}</h3>
             <p>{meassage}</p>
          </div>
          </form>
      </div>
    </div>
    </>
  )
}