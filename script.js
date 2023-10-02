
// Variaveis utilizadas para a SELEÇÃO de CRÉDITO OU DÉBITO
const dadosPix = document.getElementById("dadosPix");
const dadosCredito = document.getElementById("dadosCredito");
const pix = document.getElementById("pix");
const credito = document.getElementById("credito");


/* FUNÇÃO QUE VERIFICA O VALOR INSERIDO E VALIDA SE É O CORRETO, ALÉM DE EXIBIR OS
DADOS DE PAGAMENTO PARA PIX OU CRÉDITO*/

function InformarDados() {

    let resultado;
    let valor = document.getElementById("valor").value;


    /*CONDICIONAL ONDE, SE O VALOR FOR INCORRETO OU ZERO, NÃO FUNCIONA E NEM EXIBE INFORMAÇOES
        SOBRE OS PAGAMENTOS EM PIX E CRÉDITO*/

    if (isNaN(valor) || valor <= 0) {

        alert("O valor no campo está inválido, por favor insira dados corretamente.")
        return;

    } else {

        dadosPix.style.display = "none";
        dadosCredito.style.display = "none";

        if (pix.checked) { // CASO O PIX SEJA MARCADO, EXIBE OS DADOS

            dadosPix.style.display = "block";
            resultado = valor - valor * 0.1;
            document.getElementById("totalPagar").innerHTML = "Total: R$" + resultado.toFixed(2);

        } else if (credito.checked) { // CASO CRÉDITO SEJA MARCADO, EXIBE CRÉDITO

            dadosCredito.style.display = "block";
            calcularParcelas();

        }
    }
}


//FUNÇÃO QUE CALCULA AS PARCELAS
function calcularParcelas() {

    let resultado;
    let valor = parseFloat(document.getElementById('valor').value);
    const numParcelas = document.getElementById("parcelas").value;

    /*CONDICIONAL QUE CAPTA A SELEÇÃO DO PARCELAMENTO, DIVIDE E EXIBE VALORES*/
    if (numParcelas == 1) {

        resultado = valor;
        document.getElementById("valorParcela1").innerHTML = "1x R$ " + resultado.toFixed(2);
        document.getElementById("totalPagar").innerHTML = "Total: R$ " + valor.toFixed(2);

    } else if (numParcelas == 2) {

        resultado = valor / 2;
        document.getElementById("valorParcela1").innerHTML = "1x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela2").innerHTML = "2x R$ " + resultado.toFixed(2);
        document.getElementById("totalPagar").innerHTML = "Total: R$ " + valor.toFixed(2);

    } else if (numParcelas == 3) {

        resultado = valor / 3;
        document.getElementById("valorParcela1").innerHTML = "1x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela2").innerHTML = "2x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela3").innerHTML = "3x R$ " + resultado.toFixed(2);
        document.getElementById("totalPagar").innerHTML = "Total: R$ " + valor.toFixed(2);

    } else if (numParcelas == 4) {

        valor = (valor + (valor * 0.05));
        resultado = valor / 4;
        document.getElementById("valorParcela1").innerHTML = "1x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela2").innerHTML = "2x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela3").innerHTML = "3x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela4").innerHTML = "4x R$ " + resultado.toFixed(2);
        document.getElementById("totalPagar").innerHTML = "Total: R$ " + valor.toFixed(2);

    } else if (numParcelas == 5) {

        valor = (valor + (valor * 0.1));
        resultado = valor / 5;
        document.getElementById("valorParcela1").innerHTML = "1x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela2").innerHTML = "2x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela3").innerHTML = "3x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela4").innerHTML = "4x R$ " + resultado.toFixed(2);
        document.getElementById("valorParcela5").innerHTML = "5x R$ " + resultado.toFixed(2);
        document.getElementById("totalPagar").innerHTML = "Total: R$ " + valor.toFixed(2);

    }

}

/*ESSA LINHA TEM A FUNÇÃO DE ATUALIZAR AS PARCELAS SEMPRE QUE O NÚMERO DE PARCELAS
FOR ALTERADO */

document.getElementById("parcelas").addEventListener("change", calcularParcelas);

/* FUNÇÃO RESPONSÁVEL POR DIFINIR A BANDEIRA DE CARTÃO A SER EXIBIDA */

function verificaNumeroCartao() {

    let numeroCartao = document.getElementById("numeroCartao").value;
    let visa = document.getElementById("visa");
    let mastercard = document.getElementById("mastercard");
    let validaCartao = document.getElementById("validaCartao");

    /*CONDICIONAL QUE VERIFICA O QUE ESTÁ SENDO DIGITADO NO CAMPO NUMERO DE CARTÃO*/

    if (numeroCartao.startsWith("1234")) {

        visa.style.display = "none";
        mastercard.style.display = "inline";
        validaCartao.innerHTML = "";

    } else if (numeroCartao.startsWith("4321")) {

        mastercard.style.display = "none";
        visa.style.display = "inline";
        validaCartao.innerHTML = "";

    } else {

        mastercard.style.display = "none";
        visa.style.display = "none";
        validaCartao.innerHTML = "Número de cartão inválido";
    }


}

