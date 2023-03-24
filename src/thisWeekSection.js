const createThisWeekSection = (() => {
  const thisWeekSection = document.createElement('section')
  thisWeekSection.className = 'this-week-section'

  const thisWeekSectionTitle = document.createElement('h2')
  thisWeekSectionTitle.className = 'this-week-section__title'
  thisWeekSectionTitle.textContent = 'this week'

  thisWeekSection.append(thisWeekSectionTitle)

  return thisWeekSection
})()

export default createThisWeekSection
