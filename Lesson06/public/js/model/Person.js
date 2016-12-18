class Person {
  constructor(props) {
    const {id, name, message} = props
    this.id = id
    this.name = name
    this.message = message
  }
  render() {
    return `<td>${this.name}</td><td>${this.message}</td>`
  }
}
