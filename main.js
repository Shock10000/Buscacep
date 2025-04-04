function BuscarCep() {
    let  cep = document.querySelector("#cep").value
    console.log(cep)
    Dados (cep)
}



async function Dados (cep) {
    let Dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    console.log(Dados)
    Dadostela(Dados)
   
}


function Dadostela(Dados) {
    document.querySelector("#Endereço").innerHTML = Dados.logradouro
    document.querySelector("#Bairro").innerHTML = Dados.bairro 
    document.querySelector("#Cidade").innerHTML = Dados.localidade 
    document.querySelector("#Estado").innerHTML = Dados.estado 
    document.querySelector("#Região").innerHTML = Dados.regiao 
}


