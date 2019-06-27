import { API } from "./data.js"
import { postData, renderJournalEntries, makeJournalObj, createJournalObj } from "./entriesDOM.js"

const submitEvent = () => {
    let recordBtn = document.querySelector("#record_entry");
        recordBtn.addEventListener("click", () => {
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
    delBtn.innerHTML = "Delete"
    delBtn.setAttribute("id", `${obj.id}`)
    delBtn.addEventListener("click", () => {
        let id = obj.id
        API.deleteJournalEntry(id).then( data => postData())
    })
    return delBtn
}

const filterMood = () => {
    let mood = document.querySelector("#moodFilter");
    let pickMood = document.querySelector("#findMood");
    pickMood.addEventListener("click", () => {
        if (mood.value !== "") {
            API.getJournalEntries().then( entries => {
                let containMood = entries.filter( moods => moods.mood.includes(`${mood.value}`))
                document.querySelector("#go-here").innerHTML = ""
                renderJournalEntries(containMood)
            })
        }
    })
}
const createEditSec = obj => {
    let div = document.createElement("div");
    div.setAttribute("id", `edit-${obj.id}`);
    let editBtn = submitEdit(obj.id)
    div.innerHTML = `<form>
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="edit-journalDate" value="${obj.date}">
    </fieldset>

    <fieldset>
        <label for="journalConcepts">Journal Concepts</label>
        <input type="text" name="journalConcepts" id="edit-journalConcepts" maxlength="20" value="${obj.concept}">
    </fieldset>

    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea type="text" name="journalEntry" id="edit-journalEntry" maxlength="250">${obj.long_form}</textarea>
    </fieldset>

    <fieldset>
        <label for="mood">Mood For the Day</label>
        <select name="mood" id="edit-mood">
            <option value="Great" ${obj.mood === "Great" ? "selected" : ""}>Great</option>
            <option value="Good" ${obj.mood === "Good" ? "selected" : ""}>Good</option>
            <option value="Alright" ${obj.mood === "Alright" ? "selected" : ""}>Alright</option>
            <option value="Questionable" ${obj.mood === "Questionable" ? "selected" : ""}>Questionable</option>
            <option value="Meh" ${obj.mood === "Meh" ? "selected" : ""}>Meh</option>
        </select>
    </fieldset>

</form>
`
div.appendChild(editBtn)
return div
}
const editBtnEvent = obj => {
    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit Journal"
    editBtn.addEventListener("click", () => {
        let id = obj.id
        let newEl = createEditSec(obj)
        console.log(obj);
        document.querySelector(`#edit-${id}`).appendChild(newEl)
    })
    return editBtn
}
const submitEdit = obj => {
    let subEdit = document.createElement("button");
    subEdit.innerHTML = "Record Changes"
    subEdit.setAttribute("id", `submit-${obj}`)
    subEdit.addEventListener("click", () => {
        let dateEdit = document.querySelector("#edit-journalDate")
        let conceptEdit = document.querySelector("#edit-journalConcepts")
        let long_formEdit = document.querySelector("#edit-journalEntry")
        let moodEdit = document.querySelector("#edit-mood")
        let id = obj
        let arr = [dateEdit.value, conceptEdit.value, long_formEdit.value, moodEdit.value]
        let editObj = createJournalObj(arr)
        console.log(editObj);
        API.editJournalEntry(id, editObj).then(data => postData())


    })
    return subEdit
}

const journalSearchEvent = () => {
    document.querySelector("#inputSearch").addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            const searchTerm = event.target.value
            API.getJournalEntries()
                .then(journalEntry => {
                    const matchingEntries = []

                    journalEntry.forEach(entry => {
                        let match = false
                        for (const prop of Object.values(entry)) {
                            if (!match && typeof prop === "string" && prop.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                match = true
                                matchingEntries.push(entry)
                            }
                        }
                    })
                    event.target.value = ""
                    document.querySelector("#go-here").innerHTML = ""
                    renderJournalEntries(matchingEntries)
                })
        }
    })
}

export {deleteBtnEvent, filterMood, editBtnEvent, submitEvent, journalSearchEvent}