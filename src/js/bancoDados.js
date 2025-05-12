// bancoDados.js
const locaisColeta = [
    {
        id: 1,
        nome: "EcoPonto Jardim Rosemary",
        tipo: "Ponto de coleta seletiva",
        endereco: "R. Marcolino Bernardes, 07 - Jardim Rosemary",
        telefone: "Telefone: (11) 91237-7500",
        mapa: "https://maps.app.goo.gl/V3pjcfeAGvC9oAht8",
        materiais: ["reciclaveis", "moveis", "pneus", "oleo", "entulho", "eletronicos", "eletrodomesticos", "pilhas"],
        bairros: ["Jardim Rosemary", "Parque Suburbano"]
    },
    {
        id: 2,
        nome: "EcoPonto Jardim Santa Rita",
        tipo: "Ponto de coleta seletiva",
        endereco: "Rod. Eng. Renê Benedito da Silva, 1402 - Jardim Santa Rita",
        telefone: "Telefone: (11) 91237-7500",
        mapa: "https://maps.app.goo.gl/FzZnPC1i3vPxeLwq5",
        materiais: ["reciclaveis", "moveis", "pneus", "oleo", "entulho", "eletronicos", "eletrodomesticos", "pilhas"],
        bairros: ["Amador Bueno", "Vila Nova Itapevi - Cidade da Saúde", "Condomínio Nova São Paulo", "Refúgio dos Pinheiros", "Jardim Nova Itapevi", "Jardim Portela", "Jardim Santa Rita", "Parque Boa Esperança"]
    },
    {
        id: 3,
        nome: "EcoPonto Cohab",
        tipo: "Ponto de coleta seletiva",
        endereco: "Av. Pedro Paulino, 51 - Cohab - St. D",
        telefone: "Telefone: (11) 91237-7500",
        mapa: "https://maps.app.goo.gl/FmVZZ79TMzAH5Zmj7",
        materiais: ["reciclaveis", "moveis", "pneus", "oleo", "entulho", "eletronicos", "eletrodomesticos", "pilhas"],
        bairros: ["Alto da Colina", "Cohab I e II", "Jardim Paulista", "Quatro Encruzilhadas"]
    },
    {
        id: 4,
        nome: "EcoPonto Vila Dr Cardoso",
        tipo: "Ponto de coleta seletiva",
        endereco: "R. Nelson Ferreira da Costa - Jardim Vitapolis",
        telefone: "Telefone: (11) 91237-7500",
        mapa: "https://maps.app.goo.gl/q42GCZ8NzxAV3zX8A",
        materiais: ["reciclaveis", "moveis", "pneus", "oleo", "entulho", "eletronicos", "eletrodomesticos", "pilhas"],
        bairros: ["Centro", "Vila Nova Itapevi - Cidade da Saúde", "Condomínio Nova São Paulo", "Refúgio dos Pinheiros", "Jardim Briquet", "Jardim Vitápolis", "Parque Itamarati", "Vila Dr. Cardoso"]
    },
    {
        id: 5,
        nome: "Farmacias ou Drogarias",
        tipo: "Descarte seu remédio vencido",
        endereco: "ou sem uso em uma farmacia ou",
        telefone: "drogaria mais proxima.",
        mapa: "https://maps.app.goo.gl/BEptz56WodpTS8ye8",
        materiais: ["medicamentos"],
        bairros: ["Alto da Colina", "Amador Bueno", "Centro", "Cohab I e II", "Condomínio Nova São Paulo", "Jardim Briquet", "Jardim Nova Itapevi", "Jardim Paulista", "Jardim Portela", "Jardim Rosemary", "Jardim Santa Rita", "Jardim Vitápolis", "Parque Boa Esperança", "Parque Itamarati", "Parque Suburbano", "Quatro Encruzilhadas", "Refúgio dos Pinheiros", "Vila Dr. Cardoso", "VVila Nova Itapevi - Cidade da Saúdeila Nova Itapevi"]
    },
    {
        id: 6,
        nome: "UBS e Postos de Saúde",
        tipo: "Coloque as agulhas e seringas usadas em um recipiente rígido, ",
        endereco: "como uma garrafa PET ou caixa de leite e entregue em um posto de saúde ",
        telefone: "ou unidade básica de saúde mais próxima",
        mapa: "https://maps.app.goo.gl/JM99uPiGbBzTXKMw7",
        materiais: ["seringas"],
        bairros: ["Alto da Colina", "Amador Bueno", "Centro", "Cohab I e II", "Condomínio Nova São Paulo", "Jardim Briquet", "Jardim Nova Itapevi", "Jardim Paulista", "Jardim Portela", "Jardim Rosemary", "Jardim Santa Rita", "Jardim Vitápolis", "Parque Boa Esperança", "Parque Itamarati", "Parque Suburbano", "Quatro Encruzilhadas", "Refúgio dos Pinheiros", "Vila Dr. Cardoso", "Vila Nova Itapevi - Cidade da Saúde"]    
    },
    {
        id: 8,
        nome: "Área de Reciclagem",
        tipo: "Cada condomínio da Cohab tem pontos próprios de descarte",
        endereco: "Os moradores separam o lixo e o depositam em lixeiras coletivas,",
        telefone: "que são esvaziadas por uma empresa responsável pela triagem.",
        mapa: "https://maps.app.goo.gl/2FG4erjWnRLaBYms6",
        materiais: ["reciclaveis", "oleo"],
        bairros: ["Cohab I e II"]
    },
    {
        id: 9,
        nome: "Itapevi Center",
        tipo: "Lopes Supermercados",
        endereco: " Rod. Eng. Renê Benedito da Silva, 200",
        telefone: "Telefone: (11) 4142-5368",
        mapa: "https://maps.app.goo.gl/FiyaK3gu94qd2kf97",
        materiais: ["oleo"],
        bairros: ["Centro", "Vila Nova Itapevi - Cidade da Saúde"]
    }
];

// Função para buscar locais (será usada no seu arquivo principal)
function buscarLocais(materialSelecionado, bairroSelecionado) {
    return locaisColeta.filter(local => 
        local.materiais.includes(materialSelecionado) && 
        local.bairros.includes(bairroSelecionado)
    );
}