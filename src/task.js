const createTask = (() => {
  const task = document.createElement('div')
  task.className = 'task'

  const firstSection = document.createElement('div')
  firstSection.className = 'task__first-section'
  const checkCircle = document.createElement('div')
  checkCircle.className = 'task__check'
  const taskTitle = document.createElement('h4')
  taskTitle.className = 'task__title'
  firstSection.append(checkCircle, taskTitle)

  const secondSection = document.createElement('div')
  secondSection.className = 'task__second-section'
  const noDateText = document.createElement('p')
  noDateText.className = 'task__no-date'
  noDateText.textContent = 'No Date'
  const deleteButton = document.createElement('button')
  deleteButton.className = 'task__delete'
  secondSection.append(noDateText, deleteButton)

  task.append(firstSection, secondSection)

  return task
})()

export default createTask
