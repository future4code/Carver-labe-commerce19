
import logo from './logo.svg';
// import './App.css';

import React from 'react';
import styled from 'styled-components';
import CardImagens from './Components/CardImagens'
import Logo from './Components/imgLoja/Logo.jpg'



const Header = styled.div`
  height: 80px;
  text-align:center;
  padding-left: 10px;
  border:solid red 1px;
  background-color: beige;
  
`
const CardItens = styled.div`
  /* display: flex;
  border: 1px solid gray;
  flex-direction:column;
  align-items: center; */
/*   
  display:grid;
  grid-template-columns: 1fr 1fr  ; */

  /* row-gap: 10px;
  column-gap: 10px; */
  /* margin: 10px;
  cursor: pointer;
  border:solid 1px black;  */
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  border:solid 1px black; */
display:flex;
flex-wrap: wrap;
max-width:800px;
`;

const Imagens = styled.div`
  flex: 1 1 200px;
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


class App extends React.Component{

state = {

  itensDaLoja: [
  
  {
    
    id: 1,
    name: "Traje Espacial 1",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  },
  {
    
    id: 2,
    name: "Traje Espacial 2",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  },
  {
    
    id: 3,
    name: "Traje Espacial 3",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  },
  {
    
    id: 4,
    name: "Traje Espacial 4",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  },
  {
    
    id: 5,
    name: "Traje Espacial 5",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  },
  {
    
    id: 6,
    name: "Traje Espacial 6",
    value: "10000.0",
    CardImage:"https://picsum.photos/200/200"
  }

],

  adicionado:false,
  numeroAdiconado: 0



}

onClickAdicionarItem =() =>{
  console.log ('adicionou')
  const adicionadoAtual = this.state.numeroAdiconado
  const novasAdicoesCarrinho = {numeroAdiconado: adicionadoAtual +1}

  this.setState (novasAdicoesCarrinho)
  console.log (this.setState)

}




  adicionaItens = () =>{

   


    // const novosItens = {
      
      // name: this.state.name,
      // value: this.state.value


    // }
      
    // const copiaItens = [...this.state.itens, adicionaItens]

    // this.setState ({itens: copiaItens})
    // this.setState({inputNome:"", inputPreco:""})


  }



  render () {

    const ListaDeItens = this.state.itensDaLoja.map((itens) =>{

    
      return (
        <p>
          {itens.name} - {itens.value} 
        </p>
      );
    });



    return (

        <div>
      
      <body>
        
      </body>
      <Header>
      {/* <img src={Logo}/> */}
                <p> LOJA ESPACE TODAAAY!!</p>
            </Header>

            {/* <div>{ListaDeItens}</div> */}
  <CardItens>
  <img src="https://picsum.photos/200/200"/>
      <div>
          <p><b>Produto da loja</b></p>
          <p>R$ 100,00</p>
          <p></p>
          <button>Adicionar Carrinho</button>
          <p></p>
        </div>
        
        </CardItens>

        <CardItens>
  <img src="https://picsum.photos/200/200"/>
      <div>
          <p><b>Produto da loja</b></p>
          <p>R$ 100,00</p>
          <p></p>
          <button>Adicionar Carrinho</button>
          <p></p>
        </div>
        
        </CardItens>

        <CardItens>
  <img src="https://picsum.photos/200/200"/>
      <div>
          <p><b>Produto da loja</b></p>
          <p>R$ 100,00</p>
          <p></p>
          <button>Adicionar Carrinho</button>
          <p></p>
        </div>
        
        </CardItens>

        <CardItens>
  <img src="https://picsum.photos/200/200"/>
      <div>
          <p><b>Produto da loja</b></p>
          <p>R$ 100,00</p>
          <p></p>
          <button>Adicionar Carrinho</button>
          <p></p>
        </div>
        
        </CardItens>

        
{/* 
        <CardImagens 
        FotosProdutos={"https://picsum.photos/200/209" }
        nomeProdutos ={"Traje Espacial"}
       
        />
        <CardImagens 
        FotosProdutos={"https://picsum.photos/200/208"}
        nomeProdutos ={"Foto da Camisa"}
        
        />
        <CardImagens 
        FotosProdutos={"https://picsum.photos/200/205"}
        nomeProdutos ={"Foto da Camisa"}
      
        /> */}

   
        




<Footer> PRODUTOS DE ALTA QUALIDADE!</Footer>
     

  </div>

    )



  }


}

export default App;





