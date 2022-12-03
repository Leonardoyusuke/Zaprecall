import { useState } from 'react'
import styled from 'styled-components'
import seta from '../assets/img/seta_play.png'
import seta2 from '../assets/img/seta_virar.png'
import erro from '../assets/img/icone_erro.png'
import certo from '../assets/img/icone_certo.png'
import quase from '../assets/img/icone_quase.png'


export default function Question ({cards}){
    const [QuestionStage,setQuestionStage] = useState(QuestionClosed)
    const [text,setText] = useState(`Pergunta ${cards.position}`)
    const [image,setImage] = useState(<img onClick={() => changeQuestion()} src={seta} />)
    function changeQuestion(){
        setQuestionStage(QuestionOpen)
        setText(cards.question)
        setImage(<img onClick={() => turnQuestion()} src={seta2} />)

    }
    function turnQuestion(){
        setText(cards.answer)
        setImage(<FixButton><Vermelho onClick={() => red()} > Não lembrei</Vermelho><Laranja onClick={orange}>Quase não lembrei </Laranja><Verde onClick={() => green()}>Zap!</Verde></FixButton>)
    }
    function red(){
      setQuestionStage(QuestionClosed)
      setText(<TextRed>Pergunta {cards.position}</TextRed> )
      setImage(<img src={erro}/>)
    }
    function green(){
      setQuestionStage(QuestionClosed)
      setText(<TextGreen>Pergunta {cards.position}</TextGreen> )
      setImage(<img src={certo}/>)
    }
    function orange(){
      setQuestionStage(QuestionClosed)
      setText(<TextOrange>Pergunta {cards.position}</TextOrange> )
      setImage(<img src={quase}/>)
    }
    return(
        <QuestionStage > {text} {image} </QuestionStage>
  )
    }





const QuestionClosed = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Verde = styled.button`
background-color: #2FBE34`

const Vermelho = styled.button`
background-color: #FF3030`

const TextRed = styled.h1`
text-decoration-line: line-through;
color: #FF3030;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
`
const TextGreen = styled.h1`
text-decoration-line: line-through;
color: #2FBE34;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
`
const TextOrange = styled.h1`
text-decoration-line: line-through;
color:#FF922E;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
`

const Laranja = styled.button`
background-color: #FF922E`

const FixButton = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  `

const QuestionOpen = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
  button{
    width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  }`
