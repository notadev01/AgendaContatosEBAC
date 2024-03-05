const form = document.querySelector('#form');
const nomeContato = document.querySelector('#nomeContato');
const telefone = document.querySelector('#telefone');
const tbody = document.querySelector('#tbody');
let contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (contatos.includes(nomeContato.value)) {
        alert("Essa contato já existe!")
    } else {
        contatos.push(nomeContato.value)
    
        let novaLinha = `<tr>
        <td>${nomeContato.value}</td>
        <td>${telefone.value}</td>
        </tr>`
    
        tbody.innerHTML += novaLinha
    
    }

    nomeContato.value = '';
    telefone.value = '';

})