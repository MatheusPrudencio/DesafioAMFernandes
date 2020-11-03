const axios = require('axios')

async function getData(url){
    const api = await axios.get(url)
    return api.data
}

function orderData(data){
    data.sort((a,b) => {
        let A = a.nome.toUpperCase()
        let B = b.nome.toUpperCase()

        if ( A < B ){
            return -1;
          }
          if ( A > B ){
            return 1;
          }
          return 0;
        })
        return data
    }

module.exports = {
    getData,
    orderData,
    }