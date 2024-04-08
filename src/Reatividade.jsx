import React from "react"


const Reatividade = () => {

    const [itens, setItens] = React.useState(["Item 1", "Item 2"])

    function handleClick(){
        // É a maneira ERRADA de adicionar itens
        itens.push("Novo Item")
    }

    function handleClickReativo(){
        setItens([...itens, "Novo Array"])
    }

    return(
        <>
        {itens.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        <button onClick={handleClickReativo}>Adicionar item</button>
        </>
    )

}

export default Reatividade;