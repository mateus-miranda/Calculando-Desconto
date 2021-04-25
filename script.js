
function calcular(){
    let valorProduto = Number(document.getElementById('valorProduto').value)
    let desconto = Number(document.getElementById('desconto').value)
    let res = document.getElementById('res')
    let valorDesconto = (desconto * valorProduto) / 100
    res.innerHTML = `O produto que custava R$${valorProduto}, na promoção com desconto de ${desconto}% vai custar R$${(valorProduto - valorDesconto).toFixed(2)}`
    if(valorProduto == ''){
        res.innerHTML = ''
        alert('Preencha os campos antes de continuar')
    }
    if(desconto == ''){
        res.innerHTML = ''
        alert('Preencha os campos antes de continuar')
    }
}