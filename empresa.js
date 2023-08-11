let cartao = Number (prompt("Insira um numero"));
let cor = document.body.style;
let um = 'Alfa'
let dois = 'Sigma'
let tres = 'BETA'
let troll = document.getElementById('troll');

if(cartao >=1000 && cartao<=1999) {
    var acesso = "Acesso liberado";
    alert(acesso);
}
else if (cartao >=2000 && cartao<=2999) {
    var acesso = "Acesso restrito";
    alert(acesso);
}
else {
    var acesso="Acesso negado";
    alert (acesso)
}

switch(acesso) {
    case "Acesso liberado":
        cor.backgroundColor = 'green';
        troll="Alfa"
        break;

    case "Acesso restrito":
        cor.backgroundColor = 'yellow';
        troll="sigma"
        break;

    case "Acesso negado":
        cor.backgroundColor = 'red';
        troll="BETA"
        break;
    default:
        cor.backgroundColor = 'white';
}

