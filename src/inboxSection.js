import addButton from './inboxAddButton'
import addForm from './inboxAddForm'
import task from './task'

const createInboxSection = (() => {
  const inboxSection = document.createElement('section')
  inboxSection.className = 'inbox-section'

  const inboxSectionTitle = document.createElement('h2')
  inboxSectionTitle.className = 'inbox-section__title'
  inboxSectionTitle.textContent = 'inbox'

  addButton.querySelector('.inbox__project-container-title').textContent = 'add task'

  inboxSection.append(inboxSectionTitle, addButton)

  addButton.addEventListener('click', () => {
    addButton.remove()
    inboxSection.append(addForm)
  })

  const attachListenersToNewTask = (newTask) => {
    const checkCircle = newTask.querySelector('.task__check')
    const taskTitle = newTask.querySelector('.task__title')
    const noDateText = newTask.querySelector('.task__no-date')
    const secondSection = newTask.querySelector('.task__second-section')
    const deleteButton = newTask.querySelector('.task__delete')

    taskTitle.textContent = addForm.querySelector('.add-form__input').value

    checkCircle.addEventListener('click', () => {
      checkCircle.classList.toggle('task__check_active')
      taskTitle.classList.toggle('task__title_done')
    })

    noDateText.addEventListener('click', () => {
      noDateText.remove()
      const calendarInput = document.createElement('input')
      calendarInput.type = 'date'
      calendarInput.className = 'task__date'
      calendarInput.addEventListener('change', () => {
        noDateText.textContent = calendarInput.value.split('-').reverse().join('/')
        calendarInput.remove()
        secondSection.prepend(noDateText)
      })
      secondSection.prepend(calendarInput)
    })

    deleteButton.addEventListener('click', () => {
      newTask.remove()
    })
  }

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newTask = task.cloneNode(true)
      attachListenersToNewTask(newTask)
      inboxSection.insertBefore(newTask, inboxSectionTitle.nextElementSibling)
      target.reset()
    }
    target.remove()
    inboxSection.append(addButton)
  }

  addForm.addEventListener('submit', closeFormOpenButton)
  addForm.addEventListener('reset', closeFormOpenButton)

  return inboxSection
})()

export default createInboxSection
