document.formCurso.onsubmit = function(e){
    e.preventDefault()

    num1 = document.getElementById("inpInicial");
    num2 = document.getElementById("inpFinal");

    num1= parseInt(num1.value)
    num2= parseInt(num2.value)

    let tBody = document.querySelector("#tableSerie tbody");
    tBody.innerHTML = "";

    if(num1 > num2){
        alert("El rango inicial debe ser menor al final")
    }else{
        for(let i=num1; i<=num2; i++){
            let next = false;
            let j = i;
            let list=[]
            console.log(list)
    
            while(next == false){
                if(j%3 == 0){
                    j /= 3;
                    list.push(3);
                }else if(j%4 == 0){
                    j /= 4;
                    list.push(4);
                }else if(j%5 == 0){
                    j /= 5;
                    list.push(5);
                }else{
                    next = true;
                }
            }
            
            if(j < 7){
                let tdatos;
                tdatos = `<tr><td>${i}</td><td>${j}`
                for(let num of list){
                    tdatos += ` x ${num} `
                }
                tdatos +=  `</td><tr>`
    
                tBody.innerHTML += tdatos;
            }
        }
    }
}