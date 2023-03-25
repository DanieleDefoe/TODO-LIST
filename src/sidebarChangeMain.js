//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN
import main from './main'

import inboxSection from './inboxSection'
import todaySection from './todaySection'
import thisWeekSection from './thisWeekSection'

const createdPages = {}
const generatedSection = inboxSection.cloneNode('.inbox-section__title', '.inbox__project-container-button')

const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  sidebarButton.classList.add('sidebar__todo-div_active')

  main.innerHTML = ''

  const identifier = sidebarButton.getAttribute('data-id') || sidebarButton.id
  const key = sidebarButton.innerHTML

  if (identifier === 'INBOX') {
    main.append(inboxSection)
  } else if (identifier === 'TODAY') {
    main.append(todaySection)
  } else if (identifier === 'THIS-WEEK') {
    main.append(thisWeekSection)
  } else if (!Object.keys(createdPages).includes(key)) {
    generatedSection.querySelector('.inbox-section__title').textContent = identifier
    createdPages[key] = generatedSection.cloneNode(true)
    main.append(createdPages[key])
  } else {
    main.append(createdPages[key])
  }
  console.log(createdPages)
}

export default changeMainState
