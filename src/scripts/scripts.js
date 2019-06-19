import{API} from "./data.js"
import{renderJournalEntries,} from "./entriesDOM.js"
import {addToDB} from "./entryComponent.js"
import {long_formAlert, conceptAlert, conceptInvalid, formInvalid} from "./alerts.js"

API.getJournalEntries().then(renderJournalEntries)

conceptInvalid()
formInvalid()

let recordBtn = document.querySelector("#record_entry");
    recordBtn.addEventListener('click', addToDB)

long_formAlert()
conceptAlert()


