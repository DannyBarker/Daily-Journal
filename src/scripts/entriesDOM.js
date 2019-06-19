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
    return journalObj
}

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    document.querySelector("#go-here").innerHTML +=
    `
    <div>
        <h1>Journal Entry: ${journalEntry.id}</h1>
        <h4>Date: ${journalEntry.date}</h4>
        <h5>Concept(s) Learned: ${journalEntry.concept}</h5>
        <p>Entry: ${journalEntry.long_form}</p>
        <aside>Mood: <em>${journalEntry.mood}</em></aside>
    </div>
    `
}

export {renderJournalEntries, makeJournalObj}