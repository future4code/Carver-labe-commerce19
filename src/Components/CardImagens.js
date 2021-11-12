import React from "react"
import styled from 'styled-components'



const CardContainer = styled.div`
  /* border: 1px solid red;
  width: 250px;
  margin-bottom: 10px; */

/* display:grid;
grid-template-columns: 1fr 1fr 1fr;
width: 1000px; */

  /* flex-grow: 1; */
  /* display:grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr ; */
  /* row-gap: 10px;
  column-gap: 10px; */
  /* margin: 10px;
  cursor: pointer;  */

  /* display: flex;
  flex-direction:column;
  align-items: center;
  width: 60%;
  margin-left: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
   */

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



class CardImagens extends React.Component {

render () {

    return(

        <CardContainer>
          
            <FotosProdutos src={this.props.FotosProdutos} alt={'Imagem do post'}/>
            <p><b> { this.props.nomeProdutos} </b></p>
            <p> 1250,00</p>
    
            <p >
                {this.props.botaoCarrinho}
            <button> Adicionar carrinho</button>
            </p>





        </CardContainer>


    )


}


}

export default CardImagens;