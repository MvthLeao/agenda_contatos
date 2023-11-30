const form = document.getElementById('contact-form');
const clear = document.getElementById('clear');
const contatos = []

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
});

clear.addEventListener('click', function() {
    if (contatos.length >= 1) {
        window.location.reload();
    }
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value;
    const inputFone = document.getElementById('cel').value;
    const inputEmail = document.getElementById('email').value;

    if(contatos.includes(inputFone) | contatos.includes(inputEmail)){
        alert(`Esse telefone ${inputFone} já foi inserido na seu agenda!`);
        alert(`Esse E-mail ${inputEmail} já foi interido na sua agenda`);
    }
    else{
        contatos.push(inputFone, inputEmail)
        let linha = '<tr>';
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputFone}</td>`;
        linha += `<td>${inputEmail}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
