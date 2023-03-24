const createTodaySection = (() => {
  const todaySection = document.createElement('section')
  todaySection.className = 'today-section'

  const todaySectionTitle = document.createElement('h2')
  todaySectionTitle.className = 'today-section__title'
  todaySectionTitle.textContent = 'today'

  todaySection.append(todaySectionTitle)

  return todaySection
})()

export default createTodaySection
