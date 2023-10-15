function osBancos() {
    var select = document.getElementById("bancos");
    var selectedBank = select.options[select.selectedIndex].value;
    
    if (selectedBank === "") {
        document.getElementById("resultado").textContent = "";
    } else {
        document.getElementById("resultado").textContent = `Você escolheu o banco: ${selectedBank}`;
    }
}

function asParcelas() {
    var select = document.getElementById("parcelas");
    var parcelaEscolhida = select.options[select.selectedIndex].value;
    
    if (parcelaEscolhida === "") {
        document.getElementById("resultado").textContent = "";
    } else {
        document.getElementById("resultado").textContent = `Você escolheu ${parcelaEscolhida} parcelas`;
    }
}
