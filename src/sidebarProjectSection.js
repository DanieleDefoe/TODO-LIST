/* eslint-disable no-param-reassign */
import addButton from './sidebarAddButton'
import addForm from './sidebarAddForm'
import project from './project'

import changeMainState from './sidebarChangeMain'

const createProjectSection = (() => {
  const projectSection = document.createElement('section')
  projectSection.className = 'sidebar__project-section'

  const projectSectionTitle = document.createElement('h2')
  projectSectionTitle.className = 'sidebar__project-section-title'
  projectSectionTitle.textContent = 'projects'

  const projectSectionContainer = document.createElement('div')
  projectSectionContainer.className = 'sidebar__project-container'

  addButton.querySelector('.sidebar__project-container-title').textContent = 'add project'

  projectSectionContainer.append(addButton)

  addButton.addEventListener('click', () => {
    addButton.remove()
    projectSectionContainer.append(addForm)
  })

  const attachListenersToNewProject = (newProject) => {
    newProject.addEventListener('click', () => changeMainState(newProject))

    const deleteButton = newProject.querySelector('.project__delete')
    const projectTitle = newProject.querySelector('.project__left-section-title')

    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation()
      newProject.remove()
    })

    const newMainSectionTitle = addForm.querySelector('.add-form__input').value

    newProject.setAttribute('data-id', newMainSectionTitle.toUpperCase())

    projectTitle.textContent = newMainSectionTitle
  }

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newProject = project.cloneNode(true)
      attachListenersToNewProject(newProject)
      projectSectionContainer.insertBefore(newProject, projectSectionContainer.firstElementChild)
      target.reset()
    }
    target.remove()
    projectSectionContainer.append(addButton)
  }

  addForm.addEventListener('submit', closeFormOpenButton)
  addForm.addEventListener('reset', closeFormOpenButton)

  projectSection.append(projectSectionTitle, projectSectionContainer)

  return projectSection
})()

export default createProjectSection
