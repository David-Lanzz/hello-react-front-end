import { getGreeting } from "../store/greetingSlice"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"

const Greetings = ({defaultGreetng}) => {
const dispatch = useDispatch()
const {greeting} = useSelector(store => store)
useEffect(()=> {
    dispatch(getGreeting())
},[])
  return (
    <div>
     <h1>{greeting? <div>{greeting.data?.text}</div>: <div>{defaultGreetng.text}</div>}</h1>
    </div>
  )
}

export default Greetings
