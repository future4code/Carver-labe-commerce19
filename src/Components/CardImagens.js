import React from "react"
import styled from 'styled-components'
import {itensDaLoja} from "./itens"

const CardContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  max-width:800px;

`
const FotosProdutos = styled.img`
  width: 50%;
  border-radius: 50px;
  border-style:ridge;

`
const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color:blueviolet;
`
const CardImagens = () => {

  return (
      <div>
        <FotosProdutos src={itensDaLoja.CardImage} alt={'Imagem do post'}/>
        <p><b> {itensDaLoja.name} </b></p>
        <br></br>
        <p> {itensDaLoja.value}</p>
        <button >Adicionar carrinho</button>
      </div>
  )

}
export default CardImagens;