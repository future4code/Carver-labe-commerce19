
import logo from './logo.svg';
// import './App.css';
import GlobalStyle  from './components/styles'
import React from 'react';
import styled from 'styled-components';
import CardImagens from './components/CardImagens'
import tema from './components/imgLoja/tema.jpg'
import {itensDaLoja} from "./components/itens";

const Header = styled.div`
 height: 100px;
  text-align:center;
  padding-left: 10px;
  border:solid #e67213 3px;
  background-color:#004162;
  border-radius:20px;
  `
 const CardContainer= styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr  ;
  row-gap: 10px;
  column-gap: 10px; 
  margin-top: 20px;
  margin-left: 150px;
  align-items:center;

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
  border:solid orange 3px;
  border-style:hidden;
  background-color:black;
  
  
`
const FotosProdutos = styled.img`
  width: 50%;
  border-radius: 20px;
  border-style:ridge;

`
class App extends React.Component{

state = {

  carrinho: [],
  numeroCompras: 0
}

adicionarItensCarrinho = (id) =>{

  const produto = itensDaLoja.filter(produto => {

    return produto.id === id
    
  })

    // console.log ("id", id)
    // console.log ("produto", produto)
    
    const novoCarrinho = [...this.state.carrinho, produto[0]]
    console.log ("novo carinho", novoCarrinho)

    this.setState ({carrinho: novoCarrinho})
    // console.log ("carrinho2",this.state.carrinho)
  
    // const comprasAtual = 
    // console.log(Number(this.state.produto.value))

    
}




  render () {
    // console.log (itensDaLoja)
    // const lista = itensDaLoja.map (produto => { 
    // return <CardContainer>
    //     <p>
    //       {produto.name}
    //       {produto.value}
    //       <FotosProdutos src={produto.CardImage} alt={'Imagem do post'}/>
    //     </p>
        // <button onClick = {() => this.adicionarItensCarrinho(produto.id)}>Adicionar</button>

    //   </CardContainer>
    // })
    return (
      <div>
        {/* {lista} */}
        <GlobalStyle/>
          {<img className="tema" src={tema}/>}
      
          <Header>
            <h1>ASTRODEV </h1>
            <h3><em>ESPACE TO GO</em></h3>
          </Header>

          <CardContainer>  
        {/*             
          <CardItens>
            <img src="https://picsum.photos/200/200"/>
            <div>
            <p><b>Produto da loja</b></p>
            <p>R$ 100,00</p>
            <p></p>
            <p></p>
            </div>
          </CardItens>
        
          <CardItens>
            <img src="https://picsum.photos/200/200"/>
            <div>
            <p><b>Produto da loja</b></p>
            <p>R$ 100,00</p>
            <p></p>
            <button className="botao">Adicionar Carrinho</button>
            <p></p>
            </div>
          </CardItens>
          <CardItens>
            <img src="https://picsum.photos/200/201"/>
            <div>
            <p><b>Produto da loja</b></p>
            <p>R$ 100,00</p>
            <p></p>
            <button className="botao">Adicionar Carrinho</button>
            <p></p>
            </div>
          </CardItens>
          <CardItens>
            <img src="https://picsum.photos/200/202"/>
            <div>
            <p><b>Produto da loja</b></p>
            <p>R$ 100,00</p>
            <p></p>
            <button className="botao">Adicionar Carrinho</button>
            <p></p>
            </div>
          </CardItens>
          <CardItens>
            <img src="https://picsum.photos/200/203"/>
            <div>
            <p><b>Produto da loja</b></p>
            <p>R$ 100,00</p>
            <p></p>
            <button className="botao"> Adicionar Carrinho</button>
            <p></p>
            </div>
          </CardItens>
          <CardItens>
            <img src="https://picsum.photos/200/204"/>
            <div>
            <p><b>Produto da loja</b></p>
            <p>R$ 100,00</p>
            <p></p>
            <button className="botao">Adicionar Carrinho</button>
            <p></p>
            </div>
          </CardItens> */}
          {itensDaLoja.map((produto) => {
              return (
                <div>
                  <FotosProdutos src={produto.CardImage} alt={'Imagem do post'}/>
                  <p><b> {produto.name} </b></p>
                  <br></br>
                  <p> {produto.value}</p>
                  <button onClick = {() => this.adicionarItensCarrinho(produto.id)}>Adicionar</button>
                </div>
              )
            })
          }

          {this.state.carrinho.map(produto => {
            let somaCarrinho = 0
            return (
              <div>
              <p><b> {produto.name} </b></p>
              <p> {Number(produto.value)}</p>

                
              </div>
            )
          })}

          
          </CardContainer> 
        
          <Footer>
          <h4>PRODUTOS EM ALTA QUALIDADE!</h4>
          </Footer>
        <GlobalStyle/>
      </div>
    )
  }
}

export default App;





