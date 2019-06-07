const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <h1>${journalEntry.date}</h1>
    <h2>${journalEntry.concepts}</h2>
    <p>${journalEntry.long_form}</p>
    <aside><em>${journalEntry.mood}</em></aside>
    `
}

fetch("http://localhost:8088/entries")

.then( entries => entries.json())  // Parse as JSON

.then(  entry => {
    let journalAddition = document.querySelector(".go-here")
    entry.forEach( day => journalAddition.innerHTML += makeJournalEntryComponent(day));
})




