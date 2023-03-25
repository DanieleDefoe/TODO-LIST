/* eslint-disable max-len */
import inboxSection from './inboxSection'

import addButton from './inboxAddButton'
import addForm from './inboxAddForm'
import task from './task'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(inboxSection)

  main.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target) {
      if (e.target.className === 'inbox__project-container-button' || e.target.parentElement.className === 'inbox__project-container-button') {
        // e.currentTarget.querySelector('.inbox__project-container-button').remove()
        main.firstElementChild.append(addForm)
      }
    }
  })

  const attachListenersToNewTask = (newTask) => {
    const checkCircle = newTask.querySelector('.task__check')
    const taskTitle = newTask.querySelector('.task__title')
    const noDateText = newTask.querySelector('.task__no-date')
    const secondSection = newTask.querySelector('.task__second-section')
    const deleteButton = newTask.querySelector('.task__delete')

    taskTitle.textContent = main.querySelector('.add-form__input').value

    checkCircle.addEventListener('click', (e) => {
      e.stopPropagation()
      checkCircle.classList.toggle('task__check_active')
      taskTitle.classList.toggle('task__title_done')
    })

    noDateText.addEventListener('click', (e) => {
      e.stopPropagation()
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

    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation()
      newTask.remove()
    })
  }

  const closeFormOpenButton = (e) => {
    e.stopPropagation()
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newTask = task.cloneNode(true)
      attachListenersToNewTask(newTask)
      main.firstElementChild.insertBefore(newTask, main.firstElementChild.firstElementChild.nextElementSibling)
      target.reset()
    }
    target.remove()
    // main.firstElementChild.append(addButton)
  }

  main.addEventListener('submit', closeFormOpenButton)
  main.addEventListener('reset', closeFormOpenButton)

  return main
})()

export default createMain
