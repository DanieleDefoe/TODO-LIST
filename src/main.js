import inboxSection from './inboxSection'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(inboxSection)

  return main
})()

export default createMain

/*
addButton.addEventListener('click', () => {
    addButton.remove()
    inboxSection.append(addForm)
  })
*/
