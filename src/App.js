

import logo from './logo.svg';
// import './App.css';

import React from 'react';
import styled from 'styled-components';
import CardImagens from './Components/CardImagens'

const ContainerLoja = styled.div`
  display: flex;
`

const ItensLoja = styled.div` 

`
const ItensCarrinho = styled.div` 

const Header = styled.div`
  height: 80px;
  text-align:center;
  padding-left: 10px;
  border:solid red 1px;
  background-color: blue;
  
`
const CardItens = styled.div`
  /* display: flex;
  border: 1px solid gray;
  flex-direction:column;
  align-items: center; */
  /* flex-grow: 1;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr 1fr ;
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
  cursor: pointer;
  border:solid 1px black; */
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; */

`;
const TextoLaranja = styled.p`
  color: orange;
`;


const Footer = styled.div`
  height: 80px;
  text-align:center;
  padding-left: 10px;
  border:solid red 1px;
  background-color:blue;

  
`


//parte edson

class Appe extends React.Component {
  state = {
    itens: [
      {
        id: Date.now(),
        descricao: "Produto 1",
        preco: 40,
        carrinho: false
      }
    ]
  }

  selectItem = (id) => {
    const itemCarrinhoCompra = {
      id: Date.now(),
      descricao: this.state.descricao,
      preco: this.state.preco,
      carrinho: !this.state.carrinho
    }

    const novoItemCarrinho = [...this.state.itens, itemCarrinhoCompra];

    this.setState({
      itens: novoItemCarrinho
    });
  };

  render() {
    const listaItens = this.state.itens.map((item) => {
      return item.descricao
    })
    return (
      <ContainerLoja>

      
      <ItensLoja>
          {listaItens}
          <button onClick={this.selectItem}>Add</button>
      </ItensLoja>

      <ItensCarrinho>
          <h1>
            Carrinho de compras
          </h1>
          {}

        </ItensCarrinho>
      </ContainerLoja>
    )
  }
=======
class App extends React.Component{

state = {

  itensDaLoja: [
  
  {
    
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  }

]


}

  adicionaItens = () =>{

    const novosItens = {
      



    }

    // const copiaItens = [...this.state.itens, adicionaItens]

    // this.setState ({itens: copiaItens})
    // this.setState({inputNome:"", inputPreco:""})


  }



  render () {

    
    
    
    return (

        <div>
      
      <Header>
                <p> LOJA ESPACE TODAAAY!!</p>
            </Header>
<CardItens>
     
        <CardImagens 
        FotosProdutos={"https://picsum.photos/200/200"}
        nomeProdutos ={"Foto da Camisa"}
        preçoProduto ={"90,00"}
        />

    

<Footer> PRODUTOS DE ALTA QUALIDADE!</Footer>
      
</CardItens>
     

  </div>

    )



  }







