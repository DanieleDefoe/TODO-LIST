const createAddForm = (() => {
  const form = document.createElement('form')
  form.className = 'add-form'
  form.id = 'add-form'

  const projectInput = document.createElement('input')
  projectInput.className = 'add-form__input'
  projectInput.id = 'add-form__input'
  projectInput.name = 'add-form__input'
  projectInput.setAttribute('required', true)
  projectInput.setAttribute('minlength', 1)

  const submitButton = document.createElement('button')
  submitButton.className = 'add-form__submit'
  submitButton.type = 'submit'
  submitButton.textContent = 'add'
  submitButton.id = 'sidebar-submit'

  const resetButton = document.createElement('button')
  resetButton.className = 'add-form__reset'
  resetButton.type = 'reset'
  resetButton.textContent = 'cancel'
  resetButton.id = 'sidebar-reset'

  form.append(projectInput, submitButton, resetButton)

  return form
})()

export default createAddForm
