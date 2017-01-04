$(document).ready(() => {

    const container = $("#dynamic")
    const personList = new PersonList()

    personList.loadData(pl => personList.render(container))

})
