// Importamos a lib fs
const fs = require('fs');

//SalePrice,YearBuilt,YrSold,MonthSold,Size(sqf),Floor,HallwayType,HeatingType,AptManageType,N_Parkinglot(Ground),N_Parkinglot(Basement),TimeToBusStop,TimeToSubway,N_APT,N_manager,N_elevators,SubwayStation,N_FacilitiesNearBy(PublicOffice),N_FacilitiesNearBy(Hospital),N_FacilitiesNearBy(Dpartmentstore),N_FacilitiesNearBy(Mall),N_FacilitiesNearBy(ETC),N_FacilitiesNearBy(Park),N_SchoolNearBy(Elementary),N_SchoolNearBy(Middle),N_SchoolNearBy(High),N_SchoolNearBy(University),N_FacilitiesInApt,N_FacilitiesNearBy(Total),N_SchoolNearBy(Total)

// Usamos ela pra abrir o arquivo 'output.csv' e guardá-lo como String na variável data
// obs: O 'utf-8' é o "Encoding" da leitura, se não especificado, você vai armazenar os "binários" do arquivo na variável.
let data = fs
    .readFileSync('output.csv', 'utf-8')
    .split('\n'); // Nessa linha estamos quebrando a String em uma Array, usando a quebra de linha como separador

// Vamos printar no console a primeira linha:
let colunas = data[0];
console.log(colunas);
// Output: SalePrice,YearBuilt,YrSold,MonthSold,Size(sqf),Floor,HallwayType,HeatingType,AptManageType,N_Parkinglot(Ground),
// N_Parkinglot(Basement),TimeToBusStop,TimeToSubway,N_APT,N_manager,N_elevators,SubwayStation,N_FacilitiesNearBy(PublicOffice),
// N_FacilitiesNearBy(Hospital),N_FacilitiesNearBy(Dpartmentstore),N_FacilitiesNearBy(Mall),N_FacilitiesNearBy(ETC),
// N_FacilitiesNearBy(Park),N_SchoolNearBy(Elementary),N_SchoolNearBy(Middle),N_SchoolNearBy(High),N_SchoolNearBy(University),
// N_FacilitiesInApt,N_FacilitiesNearBy(Total),N_SchoolNearBy(Total)

// Temos na primeira linha o nome de cada coluna da nossa planilha. 
// Cada linha subsequente dessa Array é um imóvel

// Precisamos escrever uma função que une os dados da linha do imóvel com cada coluna da linha de descrição

function parseDadosDoApartamento (linhaDasColunas, linhaDoCSV) {
    // Vamos converter a string em uma array usando a vírgula como separador
    let nomesColunas = linhaDasColunas.split(',')
    let listaDadosApartamento = linhaDoCSV.split(',') 

    // Agora vamos mapear pelos índices essa array com a array 
    let dadosDoApartamento = {}
    nomesColunas.forEach((coluna, indice) => {
        dadosDoApartamento[coluna] = listaDadosApartamento[indice]
    })

    return dadosDoApartamento
}

// vamos testar?
console.log(parseDadosDoApartamento(colunas, data[2]));

// Deve ter aparecido um objeto descrevendo um dos imoveis.
// Agora é com você, converta toda a array data em objetos de apartamento (ignorando a primeira linha)
// Em seguida, carregue todos esses objetos no MongoDB para ser usado na sua API!