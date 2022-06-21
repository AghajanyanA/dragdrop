const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const add = document.querySelector('.add')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

add.addEventListener('click', addNewTask)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}


function dragstart(event) {
    event.target.classList.add('holding')
    setTimeout(() => event.target.classList.add('hide'), 0)
}


function dragend(event) {
    event.target.className = 'item'
}

function dragover(e) {
    e.preventDefault()
}

function dragenter(e) {
        e.target.classList.add('hovering')
}

function dragleave(e) {
    e.target.classList.remove('hovering')
}

function drop(e) {
    if (e.target.classList.contains('placeholder')) {
        console.log(e)
        e.target.appendChild(item)
        e.target.classList.remove('hovering')
    }
}

function addNewTask(e) {
    console.log("clicked");
    const input = document.querySelector('.newTask')
    if (!add.contains(input)) {
        e.target.innerHTML = ''
        const newContent = document.createElement('input')
        const newButton = document.createElement('button')
        newContent.type = 'text'
        newContent.placeholder = 'New task'
        newContent.className = 'newTask'
        newButton.innerText = 'Add'
        newButton.className = 'addButton'
        add.appendChild(newContent)
        add.appendChild(newButton)

        const add_button = document.querySelector('.addButton')
        add_button.addEventListener('click', submit)
        function submit(event2) {
            const newTask = document.createElement('div')
            newTask.className = 'item'
            newTask.draggable = true
            newTask.innerText = newContent.value
            newTask.addEventListener('dragstart', dragstart)
            newTask.addEventListener('dragend', dragend)
            placeholders[0].appendChild(newTask)
            e.target.innerHTML = '+'
            newContent.remove()
            newButton.remove()
            // event2.preventDefault()
        }
    }
}
