const form = document.querySelector('#form');
const nomeContato = document.querySelector('#nomeContato');
const numero = document.querySelector('#numero');
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
        <td>${numero.value}</td>
        </tr>`
    
        tbody.innerHTML += novaLinha
    
    }

    nomeContato.value = '';
    numero.value = '';

})