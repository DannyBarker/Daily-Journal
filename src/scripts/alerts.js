const conceptAlert = () => {
    let conceptInput = document.querySelector("#journalConcepts")
    conceptInput.addEventListener('keyup', () => {
        if (conceptInput.value.length == 20) {
            alert('Maximum character length of 20, met!')
        }
    })
    
}


const long_formAlert = () => {
    let long_formInput = document.querySelector("#journalEntry")
    long_formInput.addEventListener('keyup', () => {
        if (long_formInput.value.length == 250) {
            alert('Maximum character length of 250, met!')
        }
    })
    
}

export {long_formAlert, conceptAlert}