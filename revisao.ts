    
        let n1 : number = 8
        let n2 : number = 9
        //let n3 : number = 10
        
        //1º Método
        //let media = (n1 + n2 + n3)/3

        //2º Método
        //let fMedia = function(nota1:number,nota2:number,nota3:number):number{
            //return(nota1+nota2+nota3)/3
        //}

        //3º Método
        let fMedia =(nota1:number,nota2:number,nota3:number=7) => (nota1+nota2+nota3)/3
        console.log(`Sua média  é : ${fMedia(n1,n2)}`)  
    