function cambiarColorFondo() {
    let pun = document.getElementById('colorfondo')
    let punrec = document.getElementById('listaanimales')
    punrec.style.backgroundColor = pun.value
}

function cambiarColorFuente() {
    let pun = document.getElementById('colorfuente')
    let punrec = document.getElementById('listaanimales')
    punrec.style.color = pun.value
}

function cambiarTamanoFuente() {
    let pun = document.getElementById('tamanofuente')
    let punrec = document.getElementById('listaanimales')
    punrec.style.fontSize = pun.value
}

function cambiarTipoFuente() {
    let pun = document.getElementById('tipofuente')
    let punrec = document.getElementById('listaanimales')
    punrec.style.fontFamily = pun.value
}

function cambiarEstiloFuente() {
    let pun = document.getElementById('estilofuente')
    let punrec = document.getElementById('listaanimales')
    punrec.style.fontStyle = pun.value
}

function cambiarPesoFuente() {
    let pun = document.getElementById('pesofuente')
    let punrec = document.getElementById('listaanimales')
    punrec.style.fontWeight = pun.value
}

function cambiarAlineacionFuente() {
    let pun = document.getElementById('alineacionfuente')
    let punrec = document.getElementById('listaanimales')
    punrec.style.textAlign = pun.value
}

function cambiarAnchoBorde() {
    let pun = document.getElementById('anchoborde')
    let punrec = document.getElementById('listaanimales')
    punrec.style.borderWidth = pun.value
}

function cambiarColorBorde() {
    let pun = document.getElementById('colorborde')
    let punrec = document.getElementById('listaanimales')
    punrec.style.borderColor = pun.value
}

function cambiarPadding() {
    let pun = document.getElementById('padding')
    let punrec = document.getElementById('listaanimales')
    punrec.style.padding = pun.value + "px"
}

function cambiarMargin() {
    let pun = document.getElementById('margin')
    let punrec = document.getElementById('listaanimales')
    punrec.style.margin = pun.value + "px"
}