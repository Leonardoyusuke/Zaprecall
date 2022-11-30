import styled from 'styled-components'
import seta from '../assets/img/seta_play.png'
const cards = [
	{position:"1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{position:"2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{position:"3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{position:"4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{position:"5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{position:"6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{position:"7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{position:"8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function CreateQuention(){
    function turnCard(){
 

    }




return(
    <div>
     {cards.map((c) =><Create onClick={turnCard}><p>PERGUNTA{c.position} </p> <button src={seta}/>   </Create>)}
    </div>
)
}

const Create = styled.div`
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
  p { font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;}
  `





