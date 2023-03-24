import Icon from './images/header-icon.svg'
// IIFE
const createHeader = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const headerIcon = new Image()
  headerIcon.className = 'header__icon'
  headerIcon.src = Icon

  const headerTitle = document.createElement('h1')
  headerTitle.className = 'header__title'
  headerTitle.textContent = 'todo list'

  header.append(headerIcon)
  header.append(headerTitle)

  return header
})()

export default createHeader
