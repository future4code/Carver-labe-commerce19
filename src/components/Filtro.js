import React from 'react';

import "./Filtro.css"



export function Filtro(){
    return (
            <div>
            <>
                <h2>Filtros</h2>
            </>
            <>
                <h4>Valor Mínimo em $:</h4>
                <input type="number" value="100"></input>
            </>
            <>
                <h4>Valor Máximo em $:</h4>
                <input type="number" value="1000"></input>

            </>
            <>
                <h4> Busca por nome: </h4>
                <input type="text" placeholder="Digite um produto"></input>
            </>
        </div>
    )
}

export default Filtro;