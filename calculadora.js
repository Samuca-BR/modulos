var somar = require("./modulos/somar");
var subtrair =require("./modulos/subtrair");
var media = require("./modulos/media");
var dividir = require("./modulos/dividir");
var multi = require("./modulos/multiplicar");
var mensagem = require("./modulos/mensagem");
var nome = "Joédio";
var mensagem1 = "Hi,";
var mensagem2 = ".Play genshin impact, this is amazing game";

console.log(mensagem(mensagem1,nome,mensagem2));
console.log("A soma de x e y é:"+somar(20,90));
console.log("A subtração de x e y é:"+subtrair(20,90));
console.log("A media de x e y é:"+media(20,90));
console.log("O dividendo de x e y é:"+dividir(20,90));
console.log("O produto de x e y é:"+multi(20,90));