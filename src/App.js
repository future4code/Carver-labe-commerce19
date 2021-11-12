
import logo from './logo.svg';
// import './App.css';

import React from 'react';
import styled from 'styled-components';
import CardImagens from './components/CardImagens'
import Logo from './components/imgLoja/Logo.jpg'



const Header = styled.div`
  height: 80px;
  text-align:center;
  padding-left: 10px;
  border:solid red 1px;
  background-color: beige;
  
`
const CardItens = styled.div`
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
    item: [
      {
        id: 1,
        name: "Traje Espacial 1",
        value: "10000.0",
        cardImage:"https://www.bing.com/th?id=OP.Enn8nOdDDAyHnw474C474&o=5&pid=21.1&w=160&h=160&qlt=100&dpr=1",
        carrinho: false
      },
      {
        
        id: 2,
        name: "Traje Espacial 2",
        value: "10000.0",
        cardImage:"https://picsum.photos/200/200",
        carrinho: false
      },
      {
        id: 3,
        name: "Traje Espacial 3",
        value: "10000.0",
        cardImage:"https://picsum.photos/200/200",
        carrinho: false
      },
      {
        id: 4,
        name: "Traje Espacial 4",
        value: "10000.0",
        cardImage:"https://picsum.photos/200/200",
        carrinho: false
      },
      {
        id: 5,
        name: "Traje Espacial 5",
        value: "10000.0",
        cardImage:"https://picsum.photos/200/200",
        carrinho: false
      },
      {
        id: 6,
        name: "Traje Espacial 6",
        value: "10000.0",
        cardImage:"https://picsum.photos/200/200",
        carrinho: false
      }
    ],
    numeroAdiconado: 0
  }

  listaCarrinho = (itemId) => {
    console.log("fununcia")
    const alternaCarrinho = this.state.item.map((item) => {
      if (itemId === item.id) {
        const boolean = {
          ...item,
          carrinho: true
        }
        return boolean
      } else {
        return item
      }
    })
    this.setState({ item: alternaCarrinho })
    console.log(alternaCarrinho)
  }
  renderizaCarrinho = () => {
  }


  render () {

    return (

      <div>
      <Header>
        {/* <img src={Logo}/> */}
        <p> LOJA ESPACE TODAAAY!!</p>
      </Header>

              {/* <div>{ListaDeItens}</div> */}
    

        {this.state.item.map((item) => {
            return (
              <CardImagens
                key={item.id}  
                item={item}
                listaCarrinho={this.listaCarrinho}
                
              />
            )
          })
        }
        {/* {this.state.item.filter((item) => {
          
          if (item.carrinho === true){
            return (
              <p>ok</p>
            )
          } else {
            return (
              <p>nok</p>
            )
          }
          })
        } */}
        



      <Footer> PRODUTOS DE ALTA QUALIDADE!</Footer>
     </div>
    )
  }
}

export default App;





