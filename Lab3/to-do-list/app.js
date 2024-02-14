const taskElement = document.getElementById('task')
const addBtn = document.getElementById('add')
const listElement = document.getElementById('taskList')
const removeBtn = document.getElementById('remove')

const notes = [
    {
        value: "бегит",
        completed: true
    },
    {
        value: "атжумания",
        completed: false
    },
    {
        value: "турник",
        completed: false
    }
]



function getNoteTemplate(note, idx) {
    return `<li> <input type="checkbox" ${notes[idx].completed ? "checked" : ""} id="${idx}" >
        <label for="${idx}">${note}</label>
        <span data-index="${idx}" class="main">&times;
    </span>
    </li>`
}

function render () {
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i].value, i))
    }
}

render()

addBtn.onclick = function () {

    if (taskElement.value.length === 0) {
        return
    }
    const newNote = {
        value: taskElement.value,
        completed: false
    }

    notes.push(newNote)

    render()
    
    taskElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        notes.splice(index, 1)
        render()
        return
    }

    notes[event.target.id].completed = (event.target.checked ? true : false)
    render()
}

