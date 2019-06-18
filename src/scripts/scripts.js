import{API} from "./data.js"
import{renderJournalEntries, makeJournalObj} from "./entriesDOM.js"


// In your main JavaScript module (journal.js) add a click event listener to the 
// Record Journal Entry button at the bottom of your form. When the user clicks the button, 
// you need to create a new entry in your API. The HTTP method that you use to create resources is POST. 
// Guidance on syntax is provided below.

let recordBtn = document.querySelector("#record_entry");
recordBtn.addEventListener('click', makeJournalObj)

API.getJournalEntries().then(renderJournalEntries)



