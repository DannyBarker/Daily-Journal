import{API} from "./data.js"
import{renderJournalEntries, makeJournalObj} from "./entriesDOM.js"

const addToDB = () => {
        let dateInput = document.querySelector("#journalDate")
        let conceptInput = document.querySelector("#journalConcepts")
        let long_formInput = document.querySelector("#journalEntry")
        let moodInput = document.querySelector("#mood")
        if (dateInput.value && conceptInput.value && long_formInput.value && moodInput.value) {
               let conceptCharacters = conceptInput.value
               let long_formCharacters = long_formInput.value
                let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g
                let conceptContain = conceptCharacters.match(x)
                let long_formContain = long_formCharacters.match(x)
                if (conceptContain === null && long_formContain === null) {
                        document.querySelector("#go-here").innerHTML = ''
                        let newObj = makeJournalObj()
                        API.addJournalEntry(newObj).then( data => API.getJournalEntries().then(renderJournalEntries))

                } 
               
                
        }
        dateInput.value = ""
        conceptInput.value = ""
        long_formInput.value = ""
        moodInput.value = ""
}   
export {addToDB}