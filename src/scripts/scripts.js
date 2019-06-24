import{API} from "./data.js"
import{renderJournalEntries,} from "./entriesDOM.js"
import {addToDB, filterMood} from "./entryComponent.js"
import {long_formAlert, conceptAlert, conceptInvalid, formInvalid} from "./alerts.js"

API.getJournalEntries().then(renderJournalEntries)

conceptInvalid()
formInvalid()
long_formAlert()
conceptAlert()

addToDB()
filterMood()


