let disabledMonthly = document.getElementById("idMonthly")
addEventListener("click", function () {
    disabledMonthly.removeAttribute("disabled")
})


let disabledSemesterly = document.getElementById("idSemesterly")
addEventListener("click", function () {
    disabledSemesterly.removeAttribute("disabled")
})


let disabledYearly = document.getElementById("idYearly")
addEventListener("click", function () {
    disabledYearly.removeAttribute("disabled")
})




function monthly() {

    document.getElementById("idMonthly").setAttribute("style", "background-image: linear-gradient(to bottom, #3A3A3A 0, #3A3A3A 30%, #ffc107 30%);")


}


function semesterly() {
    document.getElementById("idSemesterly").setAttribute("style", "background-image: linear-gradient(to bottom, #3A3A3A 0, #3A3A3A 30%, #ffc107 30%);")
}


function yearly() {

    document.getElementById("idYearly").setAttribute("style", "background-image: linear-gradient(to bottom, #3A3A3A 0, #3A3A3A 30%, #ffc107 30%);")
}