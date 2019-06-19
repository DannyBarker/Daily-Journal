import { API } from "./data.js";

const renderJournalEntries = (journal) => {
    let entries = document.querySelector("#go-here")
    journal.forEach(entry => {
        entries.appendChild(makeJournalEntryComponent(entry))
    });
}   
const postData = () => {
    document.querySelector("#go-here").innerHTML = ''
    API.getJournalEntries().then(renderJournalEntries)
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
    let el = document.createElement("div")
    let secEl = document.createElement("section")
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = `Delete`
    deleteBtn.setAttribute('id', `${journalEntry.id}`)
    deleteBtn.addEventListener('click', () => {
        let id = event.target.id
        API.deleteJournalEntry(id).then( data => postData())
    })
    secEl.innerHTML =  `
   
        <h1>Journal Entry: ${journalEntry.id}</h1>
        <h4>Date: ${journalEntry.date}</h4>
        <h5>Concept(s) Learned: ${journalEntry.concept}</h5>
        <p>Entry: ${journalEntry.long_form}</p>
        <aside>Mood: <em>${journalEntry.mood}</em></aside>
    `
    el.appendChild(secEl)
    el.appendChild(deleteBtn)
return el 
    
}

export {renderJournalEntries, makeJournalObj, postData}