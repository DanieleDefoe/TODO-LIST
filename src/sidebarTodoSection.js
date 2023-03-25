import InboxIcon from './images/inbox.svg'
import CalendarIcon from './images/calendar.svg'
import WeeklyIcon from './images/week-calendar.svg'

// click event handler
import changeMainState from './sidebarChangeMain'

const createTodoSection = (() => {
  const todoSection = document.createElement('section')
  todoSection.className = 'sidebar__todo-section'

  const todoSectionContent = [
    {
      image: InboxIcon,
      title: 'inbox',
    },
    {
      image: CalendarIcon,
      title: 'today',
    },
    {
      image: WeeklyIcon,
      title: 'this week',
    },
  ]

  todoSectionContent.forEach((content, index) => {
    const contentDiv = document.createElement('button')
    contentDiv.className = 'sidebar__todo-div'
    contentDiv.id = content.title.replace(/\W+/g, '-').toUpperCase()

    if (index === 0) contentDiv.className = 'sidebar__todo-div sidebar__todo-div_active'

    const contentDivImage = new Image()
    contentDivImage.className = 'sidebar__todo-div-image'
    contentDivImage.src = content.image

    const contentDivTitle = document.createElement('h3')
    contentDivTitle.className = 'sidebar__todo-div-title'
    contentDivTitle.textContent = content.title

    contentDiv.append(contentDivImage, contentDivTitle)

    contentDiv.addEventListener('click', () => changeMainState(contentDiv))

    todoSection.append(contentDiv)
  })

  return todoSection
})()

export default createTodoSection
