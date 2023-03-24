// SECTIONS
import todoSection from './sidebarTodoSection'
import projectSection from './sidebarProjectSection'

const createSidebar = (() => {
  const sidebar = document.createElement('aside')
  sidebar.className = 'sidebar'

  sidebar.append(todoSection, projectSection)

  return sidebar
})()

export default createSidebar
