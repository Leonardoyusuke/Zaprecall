import Question from './Question'
export default function CreateQuestion({count,setCount}){
    const cards = [
        {position:"1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        {position:"2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        {position:"3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        {position:"4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        //{position:"5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        //{position:"6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        //{position:"7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        //{position:"8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

return(
    <div >
     {cards.map((c) => <Question count={count} setCount={setCount} cards={c} key={c.position} />)}
    </div>
)
}






