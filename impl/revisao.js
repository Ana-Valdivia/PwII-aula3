var n1 = 8;
var n2 = 9;
//let n3 : number = 10
//1º Método
//let media = (n1 + n2 + n3)/3
//2º Método
//let fMedia = function(nota1:number,nota2:number,nota3:number):number{
//return(nota1+nota2+nota3)/3
//}
//3º Método
var fMedia = function (nota1, nota2, nota3) {
    if (nota3 === void 0) { nota3 = 7; }
    return (nota1 + nota2 + nota3) / 3;
};
console.log("Sua m\u00E9dia  \u00E9 : " + fMedia(n1, n2));
