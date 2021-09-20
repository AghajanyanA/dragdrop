const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


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

////////

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
    e.target.append(item)
    
    e.target.classList.remove('hovering')
}

