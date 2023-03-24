import projectIcon from './images/project-icon.svg'

const createProject = (() => {
  const project = document.createElement('button')
  project.className = 'project'

  const leftSection = document.createElement('div')
  leftSection.className = 'project__left-section'
  const leftSectionIcon = new Image()
  leftSectionIcon.className = 'project__left-section-icon'
  leftSectionIcon.src = projectIcon
  const leftSectionTitle = document.createElement('h3')
  leftSectionTitle.className = 'project__left-section-title'
  leftSection.append(leftSectionIcon, leftSectionTitle)

  const deleteButton = document.createElement('button')
  deleteButton.className = 'project__delete'

  project.append(leftSection, deleteButton)

  return project
})()

export default createProject
