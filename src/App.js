import Container from "./components/Container"
import Footer from "./components/Footer"
import Questions from "./components/Questions"
import { useState } from "react"


function App(){
const [count,setCount] = useState(0)
const [list,setList] = useState([])

    return (
        <div>
            <Container list={list} setList={setList} count={count} setCount={setCount}/>
            <Footer list={list} count={count} setCount={setCount} />

        </div>
    )
}

export default App