import AddProjectIcon from './images/add-project.svg'

const createAddButton = (() => {
  const addProjectButton = document.createElement('button')
  addProjectButton.className = 'sidebar__project-container-button'

  const addProjectButtonIcon = new Image()
  addProjectButtonIcon.className = 'sidebar__project-container-add'
  addProjectButtonIcon.src = AddProjectIcon

  const addProjectButtonTitle = document.createElement('h3')
  addProjectButtonTitle.className = 'sidebar__project-container-title'

  addProjectButton.append(addProjectButtonIcon, addProjectButtonTitle)

  return addProjectButton
})()

export default createAddButton
