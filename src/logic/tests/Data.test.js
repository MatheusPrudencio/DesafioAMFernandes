const PropertsAPI = require('../PropertsAPI')

it('getting correct data from API', async () =>{
    let data = await PropertsAPI.getData('https://api.estagio.amfernandes.com.br/imoveis')
    expect(data[0]).toEqual( {"bairro": "Jardim", "cep": "09090-090", "cidade": "Santo André", "fachada": "https://firebasestorage.googleapis.com/v0/b/easyhouse-am.appspot.com/o/img_fachada%2Fsajardimgoya.jpeg?alt=media", "location": {"_lat": -23.6486174, "_long": -46.545358}, "nome": "Goya", "num": "215", "planta": {"dorms": 3, "metragem": 190, "preco": 1450000, "vagas": null}, "rua": "Rua das Nogueiras"}     )
})

it('order the properts data without repeated letters', () => {
    const data = [{"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandes", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "Francisco Rabelo", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "Corinthians", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "Ragnarok", "num": "215"}]

    const orderData = PropertsAPI.orderData(data)
    expect(orderData).toEqual([
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandes", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Corinthians", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Francisco Rabelo", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Ragnarok", "num": "215"}])
})

it('order the properts data with repeated letters', () => {
    const data = [{"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandes", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandez", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMF", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "Agnarok", "num": "215"}]

    const orderData = PropertsAPI.orderData(data)
    expect(orderData).toEqual([
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Agnarok", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMF", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandes", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandez", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"}])
})

it('order the properts data with upper and low case', () => {
    const data = [{"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandes", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandez", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "amf", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "agnarok", "num": "215"}]

    const orderData = PropertsAPI.orderData(data)
    expect(orderData).toEqual([
        {"bairro": "Jardim", "cep": "09090-090", "nome": "agnarok", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "amf", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandes", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandez", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"}])
})

it('order the properts data with space', () => {
    const data = [{"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AM Fernandes", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandez", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "amf", "num": "215"},
    {"bairro": "Jardim", "cep": "09090-090", "nome": "agnarok", "num": "215"}]

    const orderData = PropertsAPI.orderData(data)
    expect(orderData).toEqual([
        {"bairro": "Jardim", "cep": "09090-090", "nome": "agnarok", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AM Fernandes", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "amf", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "AMFernandez", "num": "215"},
        {"bairro": "Jardim", "cep": "09090-090", "nome": "Goya", "num": "215"}])
})