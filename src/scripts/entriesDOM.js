const renderJournalEntries = (journal) => {
    journal.forEach(entry => {
        makeJournalEntryComponent(entry)
    });
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