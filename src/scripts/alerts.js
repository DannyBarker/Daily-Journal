const conceptAlert = () => {
    let conceptInput = document.querySelector("#journalConcepts")
    conceptInput.addEventListener("keyup", () => {
        if (conceptInput.value.length === 20) {
            alert("Maximum character length of 20, met!")
        }
    })

}


const long_formAlert = () => {
    let long_formInput = document.querySelector("#journalEntry")
    long_formInput.addEventListener("keyup", () => {
        if (long_formInput.value.length === 250) {
            alert("Maximum character length of 250, met!")
        }
    })

}


let conceptInput = document.querySelector("#journalConcepts")
let long_formInput = document.querySelector("#journalEntry")

const conceptInvalid = () => {
    conceptInput.addEventListener("keyup", createConceptAlert)
}
const createConceptAlert = () => {
    let conceptCharacters = conceptInput.value
    let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g
    let conceptContain = conceptCharacters.match(x)
    if (conceptContain) {
        alert(`${conceptContain[0]} is an invalid character!`)
    }

}
const formInvalid = () => {
    long_formInput.addEventListener("keyup", createFormAlert)
}

const createFormAlert = () => {
    let long_formCharacters = long_formInput.value
    let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g
    let long_formContain = long_formCharacters.match(x)
    if (long_formContain) {
        alert(`${long_formContain[0]} is an invalid character!`)
    }

}



export {long_formAlert, conceptAlert, conceptInvalid, formInvalid}