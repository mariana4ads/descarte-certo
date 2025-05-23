function definirSaudacao(hora = new Date().getHours()) {
    if (hora >= 5 && hora < 12) return "Bom dia";
    if (hora >= 12 && hora < 18) return "Boa tarde";
    return "Boa noite";
}

function atualizarSaudacao() {
    const saudacao = definirSaudacao();
    const saudacaoElemento = document.getElementById('saudacao');
    if (saudacaoElemento) {
        saudacaoElemento.textContent = `${saudacao}, seja bem-vindo(a)!`;
    }
}

atualizarSaudacao();
setInterval(atualizarSaudacao, 3600000); // Atualiza a cada hora

const seletorMaterial = document.getElementById('material');
const descricoes = document.querySelectorAll('.descricao-material');

seletorMaterial?.addEventListener('change', () => {
    descricoes.forEach(desc => desc.classList.remove('selecionado'));

    const materialSelecionado = seletorMaterial.value;
    if (materialSelecionado) {
        const descricao = document.querySelector(`[data-material="${materialSelecionado}"]`);
        descricao?.classList.add('selecionado');
    }
});

document.querySelector('button')?.addEventListener('click', () => {
    const material = document.getElementById('material')?.value;
    const bairro = document.getElementById('bairro')?.value;

    if (material && bairro) {
        const resultados = buscarLocais(material, bairro);
        mostrarResultados(resultados);
    }
});

function criarElementoResultado(local) {
    const artigo = document.createElement('article');
    artigo.innerHTML = `
        <h2>${local.nome}</h2>
        <p>${local.tipo}</p>
        <p>${local.endereco}</p>
        <p>${local.telefone} | <a href="${local.mapa}" target="_blank">Ver no mapa</a></p>
    `;
    return artigo;
}

function mostrarResultados(locais = []) {
    const divResultados = document.querySelector('.resultados');
    if (!divResultados) return;

    divResultados.innerHTML = ''; // Limpa resultados anteriores
    locais.forEach(local => {
        const artigo = criarElementoResultado(local);
        divResultados.appendChild(artigo);
    });
}


