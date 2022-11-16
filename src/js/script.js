function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = (nota1+nota2+nota3+nota4)/4

    if (media < 6) {
        alert("A média  foi de " + media + "! (Reprovado)")
    } else {
        alert("A média  foi de " + media + "! (Aprovado)")
    }
}