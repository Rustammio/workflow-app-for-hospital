export const createInput = (arrayOptions, inputWrapper) => {

  arrayOptions.forEach(field => {

    const clientHealthyItem = document.createElement("div")

    clientHealthyItem.classList.add('input-group', 'mb-3')
    clientHealthyItem.insertAdjacentHTML('beforeend', `
      <input type="text" class="form-control" placeholder=${field} aria-label=${field} aria-describedby="basic-addon2" required>
      <span class="input-group-text" id="basic-addon2">${field}</span>
      `)
      
    inputWrapper.append(clientHealthyItem)
  })

}