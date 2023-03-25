//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN
import addButton from './inboxAddButton'

const createInboxSection = (() => {
  const inboxSection = document.createElement('section')
  inboxSection.className = 'inbox-section'

  const inboxSectionTitle = document.createElement('h2')
  inboxSectionTitle.className = 'inbox-section__title'
  inboxSectionTitle.textContent = 'inbox'

  addButton.querySelector('.inbox__project-container-title').textContent = 'add task'

  inboxSection.append(inboxSectionTitle, addButton)

  return inboxSection
})()

export default createInboxSection
