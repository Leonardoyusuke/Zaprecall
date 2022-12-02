import { useState } from 'react'
import styled from 'styled-components'
import seta from '../assets/img/seta_play.png'
import seta2 from '../assets/img/seta_virar.png'


export default function Question ({cards}){
    const [QuestionStage,setQuestionStage] = useState(QuestionClosed)
    const [text,setText] = useState(`Pergunta ${cards.position}`)
    const [image,setImage] = useState(<img onClick={() => changeQuestion()} src={seta} />)
    function changeQuestion(){
        setQuestionStage(QuestionOpen)
        setText(cards.question)
        setImage(<img  src={seta2} />)

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
  }`