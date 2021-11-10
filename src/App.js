import React from 'react';
import styled from "styled-components"
const ContainerLoja = styled.div`
  display: flex;
`

const ItensLoja = styled.div` 

`
const ItensCarrinho = styled.div` 
  
`



class App extends React.Component {
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
}

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
