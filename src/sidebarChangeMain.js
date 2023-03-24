import main from './main'

import inboxSection from './inboxSection'
import todaySection from './todaySection'
import thisWeekSection from './thisWeekSection'

import dynamicProjectSection from './dynamicProjectSection'

const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  sidebarButton.classList.add('sidebar__todo-div_active')

  main.innerHTML = ''

  const identifier = sidebarButton.getAttribute('data-id') || sidebarButton.id

  if (identifier === 'inbox') {
    main.append(inboxSection)
  } else if (identifier === 'today') {
    main.append(todaySection)
  } else if (identifier === 'this-week') {
    main.append(thisWeekSection)
  } else {
    main.append(dynamicProjectSection(identifier))
  }
}

export default changeMainState
