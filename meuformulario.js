function meuformulario(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const sexo = document.getElementById('sexo').value;
    
    const dadosElement = document.getElementById('dados');
    
    dadosElement.innerHTML =
    `nome: ${nome} 
    <br>
    idade: ${idade}
    <br>
    peso: ${peso}
    <br>
    sexo: ${sexo}`;
}