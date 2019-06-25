import { API } from "./data.js"
import { postData, renderJournalEntries, makeJournalObj, createJournalObj } from "./entriesDOM.js"

const submitEvent = () => {
    let recordBtn = document.querySelector("#record_entry");
        recordBtn.addEventListener('click', () => {
            let dateInput = document.querySelector("#journalDate")
            let conceptInput = document.querySelector("#journalConcepts")
            let long_formInput = document.querySelector("#journalEntry")
            let moodInput = document.querySelector("#mood")
            
            if (dateInput.value && conceptInput.value && long_formInput.value && moodInput.value) {
                let conceptCharacters = conceptInput.value
                let long_formCharacters = long_formInput.value
                let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g
                let conceptContain = conceptCharacters.match(x)
                let long_formContain = long_formCharacters.match(x)
                
                if (conceptContain === null && long_formContain === null) {
                        let newObj = makeJournalObj()
                        API.addJournalEntry(newObj).then( data => postData())
                } 
    }
            dateInput.value = ""
            conceptInput.value = ""
            long_formInput.value = ""
            moodInput.value = ""
                 
        })
}

const deleteBtnEvent = obj => {
    let delBtn = document.createElement("button")
    delBtn.innerHTML = `Delete`
    delBtn.setAttribute('id', `${obj.id}`)
    delBtn.addEventListener('click', () => {
        let id = obj.id
        API.deleteJournalEntry(id).then( data => postData())
    })
    return delBtn
}

const filterMood = () => {
    let mood = document.querySelector("#moodFilter");
    let pickMood = document.querySelector("#findMood");
    pickMood.addEventListener('click', () => {
        if (mood.value !== '') {
            API.getJournalEntries().then( entries => {
                let containMood = entries.filter( moods => moods.mood.includes(`${mood.value}`))
                document.querySelector("#go-here").innerHTML = ''
                renderJournalEntries(containMood)
            })
        }
    })
}
const createEditSec = id => {
    let div = document.createElement('div');
    div.setAttribute('id', `edit-${id}`);
    let editBtn = submitEdit(id)
    div.innerHTML = `<form>
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="edit-journalDate">
    </fieldset>
    
    <fieldset>
        <label for="journalConcepts">Journal Concepts</label>
        <input type="text" name="journalConcepts" id="edit-journalConcepts" maxlength="20" placeholder="Concepts Learned">
    </fieldset>

    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea type="text" name="journalEntry" id="edit-journalEntry" maxlength="250" placeholder="Journal entry goes here."></textarea>
    </fieldset>

    <fieldset>
        <label for="mood">Mood For the Day</label>
        <select name="mood" id="edit-mood">
            <option value="">How Do You Feel?</option>
            <option value="Great">Great</option>
            <option value="Good">Good</option>
            <option value="Alright">Alright</option>
            <option value="Questionable">Questionable</option>
            <option value="Meh">Meh</option>
        </select>
    </fieldset>

</form>
`
div.appendChild(editBtn)
return div
}
const editBtnEvent = obj => {
    let editBtn = document.createElement('button')
    editBtn.innerHTML = `Edit Journal`
    editBtn.addEventListener('click', () => {
        let id = obj.id
        let newEl = createEditSec(id)
        document.querySelector(`#edit-${id}`).appendChild(newEl)
    })
    return editBtn
}
const submitEdit = obj => {
    let subEdit = document.createElement('button');
    subEdit.innerHTML = 'Record Changes'
    subEdit.setAttribute('id', `submit-${obj}`)
    subEdit.addEventListener('click', () => {
        let dateEdit = document.querySelector("#edit-journalDate")
        let conceptEdit = document.querySelector("#edit-journalConcepts")
        let long_formEdit = document.querySelector("#edit-journalEntry")
        let moodEdit = document.querySelector("#edit-mood")
        let id = event.target.id
        let arr = [dateEdit.value, conceptEdit.value, long_formEdit, moodEdit]
        let editObj = createJournalObj(arr)
        console.log(editObj);
       
    })
    return subEdit
}


export {deleteBtnEvent, filterMood, editBtnEvent, submitEvent}