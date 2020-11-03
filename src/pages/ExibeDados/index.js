import React, { useState, useEffect } from 'react';
import Table from '../Table'
import Header from '../Header'

import PropertsAPI from '../../logic/PropertsAPI.js'

function App(){
    const [propertsData, setPropertsData] = useState([]);

    useEffect( async () => {
        const normalData = await PropertsAPI.getData('https://api.estagio.amfernandes.com.br/imoveis')
        const orderData = PropertsAPI.orderData(normalData)
        setPropertsData(orderData)
    },[])

    return (
        <React.Fragment>
            <Header frase="Os ímoveis em ordem alfabetica são:"/>
            <div>
                { propertsData[0] !== undefined && ( <Table data = {propertsData}/> ) }
            </div>
        </React.Fragment>
    )
}

export default App;


