// STYLES
import './styles/index.css'

// CORE PARTS
import header from './header'
import sidebar from './sidebar'
import main from './main'
import footer from './footer'

// import Icon from './images/icon.svg
// const image = new Image()
// image.src = Icon

const createApp = (() => {
  const content = document.createElement('div')
  content.className = 'content'

  content.append(header)
  content.append(sidebar)
  content.append(main)
  content.append(footer)

  return content
})()

document.body.append(createApp)
