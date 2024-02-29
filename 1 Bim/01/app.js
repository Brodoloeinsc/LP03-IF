let aluno = [
    {
        nome: "João",
        nota: 9
    },
    {
        nome: "Jonas",
        nota: 8
    },
    {
        nome: "Igor",
        nota: 6
    },
    {
        nome: "Augusto",
        nota: 2
    },
]

aluno.forEach((e)=>{
    if(e.nota < 5){
        console.log(`${e.nome} Reprovado`)
    }else if(e.nota <= 6){
        console.log(`${e.nome} Em Recuperação`)
    }else if(e.nota > 6){
        console.log(`${e.nome} Aprovado`)
    }
})