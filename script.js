let colic = document.getElementsByClassName("colic")[0]
let yena = document.getElementsByClassName("yena")[0]
let rabov = document.getElementsByClassName("rabov")[0]
let zarplataRabov = document.getElementsByClassName("zarplataRabov")[0]
let zarplataJlavu = document.getElementsByClassName("zarplataJlavu")[0]
let zarplataJlavuTwo = document.getElementsByClassName("zarplataJlavuTwo")[0]
let rac = document.getElementsByClassName("rac")[0]
let newRac = document.getElementsByClassName("newRac")[0]
let result = 0;
let text = document.getElementsByClassName("text")[0]
let stoimost = document.getElementsByClassName("stoimost")[0]
let srok = document.getElementsByClassName("srok")[0]



rac.onclick = function (event) {
    console.log(rac);
    console.log(colic.value * yena.value);
    result = colic.value * yena.value - rabov.value * zarplataRabov.value - zarplataJlavu.value * zarplataJlavuTwo.value
    result = result * srok.value
    if (result >= stoimost.value) {
        text.innerHTML = "У вас будет новый завод:)"
    }
    else {
        text.innerHTML = "У вас не будет новый завод:("
    }
    console.log(result);
}

newRac.onclick = function (event) {
    text.innerHTML = "Директор построит новый завод?"
    colic.value = ""
    yena.value = ""
    rabov.value = ""
    zarplataRabov.value = ""
    zarplataJlavu.value = ""
    zarplataJlavuTwo.value = ""
    stoimost.value = ""
    srok.value = ""

}


