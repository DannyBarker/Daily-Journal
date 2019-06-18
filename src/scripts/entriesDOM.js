const renderJournalEntries = (journal) => {
    journal.forEach(entry => {
        makeJournalEntryComponent(entry)
    });
}   

const createJournalObj = ( arr) => {
    let newObj = {
        date: "",
        concept: "",
        long_form: "",
        mood: ""
    }
    newObj.date = arr[0]
    newObj.concept = arr[1]
    newObj.long_form = arr[2]
    newObj.mood = arr[3]
    return newObj

    
}

const makeJournalObj = () => {
    let dateInput = document.querySelector("#journalDate")
    let conceptInput = document.querySelector("#journalConcepts")
    let long_formInput = document.querySelector("#journalEntry")
    let moodInput = document.querySelector("#mood")
    let objArr = [dateInput.value, conceptInput.value, long_formInput.value, moodInput.value]
    let journalObj = createJournalObj(objArr)
    console.log(journalObj);
}


const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    document.querySelector(".go-here").innerHTML +=
    `
    <div>
        <h1>${journalEntry.date}</h1>
        <h2>${journalEntry.concept}</h2>
        <p>${journalEntry.long_form}</p>
        <aside><em>${journalEntry.mood}</em></aside>
    </div>
    `
}

export {renderJournalEntries, makeJournalObj}