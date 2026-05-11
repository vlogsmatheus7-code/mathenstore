
const form = document.getElementById('form');
const lista = document.getElementById('lista');

let iphones = JSON.parse(localStorage.getItem('iphones')) || [];

function salvar(){
    localStorage.setItem('iphones', JSON.stringify(iphones));
}

function renderizar(){
    lista.innerHTML = '';

    iphones.forEach((iphone, index) => {
        lista.innerHTML += `
            <div class="card">
                <h3>${iphone.modelo}</h3>
                <p><strong>${iphone.armazenamento}</strong></p>
                <p>Cor: ${iphone.cor}</p>
                <p>Bateria: ${iphone.bateria}%</p>
                <p class="price">R$ ${iphone.preco}</p>
                <span class="status">${iphone.status}</span>
                <br><br>
                <button onclick="remover(${index})">Remover</button>
            </div>
        `;
    });
}

function remover(index){
    iphones.splice(index,1);
    salvar();
    renderizar();
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const iphone = {
        modelo: document.getElementById('modelo').value,
        armazenamento: document.getElementById('armazenamento').value,
        cor: document.getElementById('cor').value,
        bateria: document.getElementById('bateria').value,
        preco: document.getElementById('preco').value,
        status: document.getElementById('status').value
    };

    iphones.push(iphone);

    salvar();
    renderizar();

    form.reset();
});

renderizar();
