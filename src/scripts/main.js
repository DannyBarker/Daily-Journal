import{API} from "./data.js"
import{renderJournalEntries,} from "./entriesDOM.js"
import {addToDB} from "./entryComponent.js"
import {long_formAlert, conceptAlert, conceptInvalid, formInvalid} from "./alerts.js"
import {filterMood, journalSearchEvent} from "./eventListeners.js"

API.getJournalEntries().then(renderJournalEntries)

conceptInvalid()
formInvalid()
long_formAlert()
conceptAlert()
journalSearchEvent()

addToDB()
filterMood()


