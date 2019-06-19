import{API} from "./data.js"
import{renderJournalEntries,} from "./entriesDOM.js"
import {addToDB} from "./entryComponent.js"

API.getJournalEntries().then(renderJournalEntries)

let recordBtn = document.querySelector("#record_entry");
    recordBtn.addEventListener('click', addToDB)




