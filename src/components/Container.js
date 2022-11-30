import styled from "styled-components"
import Questions from "./Questions"
import Logo from "./Logo"

export default function Container() {
    return(
        <div>
        <Conteudo >
        <Logo/>
        <Questions/>
        </Conteudo >
        
        </div>
    )
}

const Conteudo = styled.div`
  background-color: #F86B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px
`


