const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:8088/journal")
            .then(response => response.json())
    },
    addJournalEntry: journalObj => {
        return fetch("http://localhost:8088/journal", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(journalObj)
        })
        .then( data => data.json())
    },
    deleteJournalEntry: id => {
        return fetch(`http://localhost:8088/journal/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( newData => newData.json)
    },
    editJournalEntry: (obj) => {
        return fetch(`http://localhost:8088/journal/${obj.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then( update => update.json())
    }
}

export {API}