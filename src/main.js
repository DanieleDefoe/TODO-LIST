/* eslint-disable max-len */
import inboxSection from './inboxSection'

import addForm from './inboxAddForm'
import task from './task'

import findDateDelta from './findDateDelta'

const todayTasks = []
const thisWeekTasks = []

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(inboxSection)

  main.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target) {
      if (e.target.className === 'inbox__project-container-button' || e.target.parentElement.className === 'inbox__project-container-button') {
        // e.currentTarget.querySelector('.inbox__project-container-button').remove()
        main.firstElementChild.insertBefore(addForm, document.querySelector('.inbox__project-container-button'))
      } else if (e.target.classList.contains('task__check')) {
        localStorage.removeItem(e.target.closest('.task').outerHTML)
        e.target.classList.toggle('task__check_active')
        e.target.nextElementSibling.classList.toggle('task__title_done')
        localStorage.setItem(e.target.closest('.task').outerHTML, e.target.closest('.task').outerHTML)
      } else if (e.target.className === 'task__no-date') {
        localStorage.removeItem(e.target.closest('.task').outerHTML)
        const calendarInput = document.createElement('input')
        calendarInput.type = 'date'
        calendarInput.className = 'task__date'
        e.target.closest('.task').querySelector('.task__second-section').prepend(calendarInput)
        calendarInput.addEventListener('input', () => {
          e.target.textContent = calendarInput.value.split('-').join('/')
          const currentDate = new Date()
          const plannedDate = new Date(calendarInput.value)

          const dateDelta = findDateDelta(currentDate, plannedDate)

          if (dateDelta >= 0 && dateDelta <= 1) {
            todayTasks.push(main.firstElementChild.firstElementChild.nextElementSibling)
          } else if (dateDelta <= 7 && dateDelta > 1) {
            thisWeekTasks.push(main.firstElementChild.firstElementChild.nextElementSibling)
          }

          calendarInput.closest('.task').querySelector('.task__second-section').prepend(e.target)
          calendarInput.remove()
          localStorage.setItem(e.target.closest('.task').outerHTML, e.target.closest('.task').outerHTML)
        })
        e.target.remove()
      } else if (e.target.className === 'task__delete') {
        localStorage.removeItem(e.target.closest('.task').outerHTML)
        todayTasks.splice(todayTasks.indexOf(e.target.closest('.task')), 1)
        thisWeekTasks.splice(thisWeekTasks.indexOf(e.target.closest('.task')), 1)
        e.target.closest('.task').remove()
      }
    }
    localStorage.setItem(document.querySelector('.inbox-section__title').textContent, document.querySelector('.inbox-section').outerHTML)
  })

  main.addEventListener('keypress', () => {
    localStorage.setItem(document.querySelector('.inbox-section__title').textContent, document.querySelector('.inbox-section').outerHTML)
  })

  const closeFormOpenButton = (e) => {
    e.stopPropagation()
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newTask = task.cloneNode(true)
      newTask.querySelector('.task__title').textContent = main.querySelector('.add-form__input').value
      main.firstElementChild.insertBefore(newTask, main.firstElementChild.firstElementChild.nextElementSibling)
      localStorage.setItem(newTask.outerHTML, newTask.outerHTML)
      target.reset()
    }
    target.remove()
    // main.firstElementChild.append(addButton)
  }

  main.addEventListener('submit', closeFormOpenButton)
  main.addEventListener('reset', closeFormOpenButton)

  Object.keys(localStorage).forEach((key) => {
    if (key.includes('class="task')) {
      inboxSection.insertAdjacentHTML('afterbegin', key)
      inboxSection.insertBefore(inboxSection.firstElementChild, inboxSection.firstElementChild.nextElementSibling.nextElementSibling)
    }
  })

  return main
})()

export default createMain

export { todayTasks, thisWeekTasks }
