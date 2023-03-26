/* eslint-disable eqeqeq */
/* eslint-disable import/no-duplicates */
//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN
import main from './main'

import inboxSection from './inboxSection'

import { todayTasks, thisWeekTasks } from './main'

import findDateDelta from './findDateDelta'

inboxSection.querySelectorAll('.task').forEach((task) => {
  if (todayTasks.indexOf(task) === -1
  && new Date(task.querySelector('.task__no-date').textContent).getDate() == new Date().getDate()) {
    todayTasks.push(task.cloneNode(true))
  } else if (thisWeekTasks.indexOf(task) === -1
  && findDateDelta(new Date(task.querySelector('.task__no-date').textContent), new Date()) <= 7) {
    thisWeekTasks.push(task.cloneNode(true))
  }
})

const generatedSection = inboxSection.cloneNode('.inbox-section__title', '.inbox__project-container-button')

const todaySection = inboxSection.cloneNode(true)
const thisWeekSection = inboxSection.cloneNode(true)
todaySection.querySelector('.inbox__project-container-button').remove()
thisWeekSection.querySelector('.inbox__project-container-button').remove()

const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  if (document.querySelector('.sidebar__todo-div_active')) {
    document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  }
  sidebarButton.classList.add('sidebar__todo-div_active')

  main.innerHTML = ''

  const identifier = sidebarButton.getAttribute('data-id') || sidebarButton.id.replace(/-+/g, ' ')

  if (identifier === 'TODAY') {
    todaySection.querySelectorAll('.task').forEach((task) => {
      if (todayTasks.indexOf(task) === -1) task.remove()
    })
    todayTasks.forEach((task) => {
      todaySection.append(task.cloneNode(true))
    })
  } else if (identifier === 'THIS WEEK') {
    thisWeekSection.querySelectorAll('.task').forEach((task) => {
      if (todayTasks.indexOf(task) === -1) task.remove()
    })
    thisWeekTasks.forEach((task) => {
      thisWeekSection.append(task.cloneNode(true))
    })
  }

  if (identifier === 'INBOX') {
    main.append(inboxSection)
  } else if (identifier === 'THIS WEEK') {
    thisWeekSection.firstElementChild.textContent = identifier
    main.append(thisWeekSection)
  } else if (identifier === 'TODAY') {
    todaySection.firstElementChild.textContent = identifier
    main.append(todaySection)
  } else if (!localStorage.getItem(identifier)) {
    const clone = generatedSection.cloneNode(true)
    clone.querySelectorAll('.task').forEach((task) => task.remove())
    clone.firstElementChild.textContent = identifier
    localStorage.setItem(identifier, clone.outerHTML)
    main.insertAdjacentHTML('afterbegin', localStorage.getItem(identifier))
  } else {
    main.insertAdjacentHTML('afterbegin', localStorage.getItem(identifier))
  }
}

export default changeMainState
