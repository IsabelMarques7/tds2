function adicionarItem(){
    // obter os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade= document.getElementById("quantidade").value;

    // validar se os campos estão preenchidos
    if(!nome || !valor || !quantidade){
        alert("preencha todos os campos")
        return;
    }

    // usada para imprimir mensagens no console do navegador
    // console.log(nome, valor, quantidade)

    // criar linha na tabela com 3 celulas
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows,length);

    var celulaNome = novaLinha.insertCell(0)
    var celulaValor = novaLinha.insertCell(1)
    var celulaQuantidade = novaLinha.insertCell(2)

    // atribuir as celulas os valores digitados
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    //limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""
}

function exportParaExcel(){
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_produtos.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "tabela de produtos "})
    XLSX.writeFile(wb, nomeArquivo)
}

