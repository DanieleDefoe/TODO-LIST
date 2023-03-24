import inboxSection from './inboxSection'
import addForm from './inboxAddForm'
import task from './task'

const createDynamicProjectSection = (identifier) => {
  const projectSection = inboxSection.cloneNode('.inbox-section__title', '.inbox__project-container-button')

  const projectTitle = projectSection.querySelector('.inbox-section__title')
  projectTitle.textContent = identifier

  const appendForm = addForm.cloneNode(true)

  const addButton = projectSection.querySelector('.inbox__project-container-button')
  addButton.addEventListener('click', () => {
    addButton.remove()
    projectSection.appendChild(appendForm)
  })

  const attachListenersToNewTask = (newTask) => {
    const checkCircle = newTask.querySelector('.task__check')
    const taskTitle = newTask.querySelector('.task__title')
    const noDateText = newTask.querySelector('.task__no-date')
    const secondSection = newTask.querySelector('.task__second-section')
    const deleteButton = newTask.querySelector('.task__delete')

    taskTitle.textContent = appendForm.querySelector('.add-form__input').value

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
      projectSection.insertBefore(newTask, projectTitle.nextElementSibling)
      target.reset()
    }
    target.remove()
    projectSection.append(addButton)
  }

  appendForm.addEventListener('submit', closeFormOpenButton)
  appendForm.addEventListener('reset', closeFormOpenButton)

  return projectSection
}

export default createDynamicProjectSection
