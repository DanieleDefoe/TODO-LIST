//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN
import main from './main'

import inboxSection from './inboxSection'

const createdPages = {}
const generatedSection = inboxSection.cloneNode('.inbox-section__title', '.inbox__project-container-button')

const todayWeekSection = inboxSection.cloneNode('.inbox-section__title')
todayWeekSection.children[1].remove()

const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  sidebarButton.classList.add('sidebar__todo-div_active')

  main.innerHTML = ''

  const identifier = sidebarButton.getAttribute('data-id') || sidebarButton.id.replace(/-+/g, ' ')
  const key = sidebarButton.innerHTML

  console.log(todayWeekSection)

  if (identifier === 'INBOX') {
    main.append(inboxSection)
  } else if (identifier === 'TODAY' || identifier === 'THIS WEEK') {
    todayWeekSection.firstElementChild.textContent = identifier
    main.append(todayWeekSection)
  } else if (!Object.keys(createdPages).includes(key)) {
    generatedSection.firstElementChild.textContent = identifier
    createdPages[key] = generatedSection.cloneNode(true)
    main.append(createdPages[key])
  } else {
    main.append(createdPages[key])
  }
}

export default changeMainState
