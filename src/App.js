import Container from "./components/Container"
import Footer from "./components/Footer"
import Questions from "./components/Questions"
import { useState } from "react"


function App(){
const [count,setCount] = useState(0)

    return (
        <div>
            <Container count={count} setCount={setCount}/>
            <Footer count={count} setCount={setCount} />

        </div>
    )
}

export default App