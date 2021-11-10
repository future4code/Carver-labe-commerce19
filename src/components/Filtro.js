import React from 'react';
import "./Filtro.css"



export function Filtro(){


    return (
            <div className="container">
                <div className="elements">
                    <h2>Filtros</h2>
                </div>
                <div className="elements">
                    <h4>Valor Mínimo em $:</h4>
                    <input type="number" value="100"></input>
                </div>
                <div className="elements">
                    <h4>Valor Máximo em $:</h4>
                    <input type="number" value="1000"></input>

                </div>
                <div className="elements">
                    <h4> Busca por nome: </h4>
                    <input type="text" placeholder="Digite um produto"></input>
                </div>
        </div>
    )
}

export default Filtro;