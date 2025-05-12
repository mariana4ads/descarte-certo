function definirSaudacao(hora) {
    if (hora >= 5 && hora < 12) return "Bom dia";
    if (hora >= 12 && hora < 18) return "Boa tarde";
    return "Boa noite";
}

function atualizarSaudacao() {
    const saudacao = definirSaudacao(new Date().getHours());
    document.getElementById('saudacao').textContent = 
        `${saudacao}, seja bem-vindo(a)!`;
}

atualizarSaudacao();
setInterval(atualizarSaudacao, 3600000);

const seletorMaterial = document.getElementById('material');
const descricoes = document.querySelectorAll('.descricao-material');

seletorMaterial.addEventListener('change', () => {
    descricoes.forEach(desc => desc.classList.remove('selecionado'));

    const materialSelecionado = seletorMaterial.value;
    if (materialSelecionado) {
        const descricao = document.querySelector(`[data-material="${materialSelecionado}"]`);
        descricao.classList.add('selecionado');
    }
});

document.querySelector('button').addEventListener('click', function() {
    const material = document.getElementById('material').value;
    const bairro = document.getElementById('bairro').value;

    const resultados = buscarLocais(material, bairro);
    mostrarResultados(resultados);
});

function mostrarResultados(locais) {
    const divResultados = document.querySelector('.resultados');
    divResultados.innerHTML = '';

    locais.forEach(local => {
        divResultados.innerHTML += `
            <article>
                <h2>${local.nome}</h2>
                <p>${local.tipo}</p>
                <p>${local.endereco}</p>
                <p>${local.telefone} | <a href="${local.mapa}" target="_blank">Ver no mapa</a></p>
            </article>
        `;
    });
}

