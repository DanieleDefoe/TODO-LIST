/* eslint-disable no-param-reassign */
import addButton from './sidebarAddButton'
import addForm from './sidebarAddForm'
import project from './project'

import changeMainState from './sidebarChangeMain'

import main from './main'

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

  addButton.addEventListener('click', (e) => {
    e.stopPropagation()
    addButton.remove()
    projectSectionContainer.append(addForm)
  })

  projectSectionContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target.className === 'project__delete') {
      localStorage.removeItem(e.target.parentElement.outerHTML)
      e.target.parentElement.remove()
      main.innerHTML = ''
    }
    if (e.target.classList.contains('project') || e.target.closest('.project')) {
      if (e.target.closest('.project')) {
        e.target.closest('.project').setAttribute('data-id', e.target.closest('.project').querySelector('.project__left-section-title').textContent.toUpperCase())
        changeMainState(e.target.closest('.project'))
        return
      }
      e.target.setAttribute('data-id', e.target.querySelector('.project__left-section-title').textContent.toUpperCase())
      changeMainState(e.target)
    }
  })

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newProject = project.cloneNode(true)
      newProject.querySelector('.project__left-section-title').textContent = addForm.querySelector('.add-form__input').value
      localStorage.setItem(newProject.outerHTML, newProject.outerHTML)
      projectSectionContainer.insertBefore(newProject, projectSectionContainer.firstElementChild)
      target.reset()
    }
    target.remove()
    projectSectionContainer.append(addButton)
  }

  addForm.addEventListener('submit', closeFormOpenButton)
  addForm.addEventListener('reset', closeFormOpenButton)

  projectSection.append(projectSectionTitle, projectSectionContainer)

  Object.keys(localStorage).forEach((key) => {
    if (key.includes('class="project"')) {
      const newProject = localStorage.getItem(key)
      projectSectionContainer.insertAdjacentHTML('afterbegin', newProject)
    }
  })

  return projectSection
})()

export default createProjectSection
