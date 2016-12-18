class PersonList {
  constructor(props = []) {
    this.setPersonList(props)
  }
  setPersonList(props = []) {
    this.personList = props.map(person => new Person(person))
  }
  loadData(cb) {
    $.getJSON('/data', data => {
      this.setPersonList(data)
      cb(this.personList)
    })
  }
  render(element) {
    let tbody = ''
    this.personList.forEach(person => {
        const {name, message} = person
        tbody += `<tr>${person.render()}</tr>`
    })
    element.html(tbody)
  }
}
