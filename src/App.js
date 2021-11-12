
import logo from './logo.svg';
// import './App.css';
import  GlobalStyle  from './Components/styles'
import React from 'react';
import styled from 'styled-components';


import CardImagens from './Components/CardImagens'
import tema from './Components/imgLoja/tema.jpg'
import {itensDaLoja} from "./Components/itens";




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


class App extends React.Component{

state = {

carrinho: []

}

adicionarItensCarrinho = (id) =>{

  const produto = itensDaLoja.filter (produto =>{
    return produto.id === id
    
  })

    // console.log ("id", id)
    // console.log ("produto", produto)

    const novoCarrinho = [...this.state.carrinho, produto[0]]
    console.log ("novo carinho", novoCarrinho)

    this.setState ({carrinho: novoCarrinho})
    // console.log ("carrinho2",this.state.carrinho)
}




  render () {
// console.log (itensDaLoja)
  
const lista = itensDaLoja.map (produto => { 


return <div>
    <p>{produto.name}
    {produto.value}</p>
    <button onClick = {() => this.adicionarItensCarrinho(produto.id)}>Adicionar</button>

  </div>



})



    return (
      
        <div>

          {lista}
          <GlobalStyle/>
      { <img className="tema" src={tema}/>}
      
      <Header> <h1>ASTRODEV </h1>
                <h3><em>ESPACE TO GO</em></h3>
          
      {/* { <img className="tema" src={tema}/>} */}
      </Header>

  <CardContainer>        

{/* <button onClick = {() => this.adicionarItensCarrinho(produto.id)}>Adicionar</button> */}

  <CardItens>
  <img src="https://picsum.photos/200/200"/>
      <div>
          <p><b>Produto da loja</b></p>
          <p>R$ 100,00</p>
          <p></p>
          {/* <button className="botao" onClick = {() => this.adicionarItensCarrinho(produto.id)}>Adicionar</button> */}
          {/* <button className="botao">Adicionar Carrinho</button> */}
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
        
        </CardItens>

return (
//       <div className="App">
//         <div>
//           <input
//             type="text"
//             onChange={this.onChangeTextoNovoPost}
//             value={this.state.textoNovoPost}
//           />
//           <button onClick={this.adicionarPost}>Adicionar</button>
//         </div>
//         <br />
//         {this.state.listaDePosts.length > 0 ? this.state.listaDePosts.map(post => {
//           return (
//             <Post
//               key={post.id}
//               post={post}
//               alterarCurtida={this.alterarCurtida}
//               apagarPost={this.apagarPost}
//             />
//           );
//           }) : <p>Sem postagem ainda</p>
//         }
//       </div>
//     );
//   }
// }

        

</CardContainer>   



<Footer> <h4>PRODUTOS EM ALTA QUALIDADE!</h4></Footer>
     
<GlobalStyle/>
  </div>

  )

    

  }
}

export default App;





