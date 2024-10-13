function cadastro(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const sexo = document.getElementById('sexo').value;
    console.log(nome);
    
    const dadosElement = document.getElementById('ixibirdados');
    
    dadosElement.innerHTML =
    `nome: ${nome}
    <br>
    idade: ${idade}
    <br>
    peso: ${peso + 'kg'}
    <br>
    sexo: ${sexo}`;
}