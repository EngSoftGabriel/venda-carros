function buscarCarrosPorFiltro() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const precoMinimo = document.getElementById('preco-minimo').value;
    const precoMaximo = document.getElementById('preco-maximo').value;
}

function exibirCarros(carros) {
    
    const carrosSection = document.querySelector('.carros');
    carrosSection.innerHTML = '';

  
    carros.forEach(carro => {
        const carroElement = document.createElement('div');
        carroElement.classList.add('carro');

      
        carroElement.innerHTML = `
            <h2>${carro.nome}</h2>
            <img src="${carro.imagem}" alt="${carro.nome}">
            <p>${carro.descricao}</p>
            <span class="preco">R$ ${carro.preco}</span>
        `;

        
        carroElement.addEventListener('click', () => {
            exibirDetalhesCarro(carro.id);
        });

        carrosSection.appendChild(carroElement);
    });
}
