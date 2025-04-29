function mensagem(){
  alert("SEJA BEM VINDO(a)!")
  console.log("SEJA BEM VINDO(a)!")
  console.log("vc e muito legal!")
}

mensagem()




function somar(numero1, numero2) {
  console.log(numero1 + numero2)

}

let numero1 = 40
let numero2 = 23

somar(numero1, numero2)
somar(30, 12)
somar(19, 289)



function raizQuadrada(numero) {
  console.log(Math.sqrt(numero))
}

function potenciacao(valor1, valor2) {
  console.log(Math.pow(valor1, valor2))
}

function multiplicacao(valor1, valor2) {
    console.log(valor1 * valor2)
}


let numero1 = Number(prompt("Digite o numero 1:"))
let numero2 = Number(prompt("Digite o numero 2:"))

raizQuadrada(numero1)
potenciacao(numero1, numero2)
multiplicacao(numero2, numero1)

