const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:8088/journal")
            .then(response => response.json())
    },
    addJournalEntry: ( journalObj) => {
        return fetch("http://localhost:8088/journal", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(journalObj)
        })
        .then( data => data.json())
    }
}

export {API}