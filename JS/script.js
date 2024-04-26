// function bienvenu() {
//     alert("Bienvenue à la page de devoirs !");
//   }
//   bienvenu();
  var newCommandForm = document.forms.formDevoir;
  function ajouter() {
    console.log(document.forms.formDevoir.devoir.value);
    console.log(document.forms.formDevoir.date.value);

    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    taskTd.textContent = document.formDevoir.devoir.value
    dateTd.textContent = document.formDevoir.date.value
    categorieTd.textContent = document.formDevoir.sect.value

    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)

    if (!document.formDevoir.devoir.checkValidity() ||
          !document.formDevoir.date.checkValidity() ||
          !document.formDevoir.sect.checkValidity()
         ) {
               return
        }
    
     newItem.append(taskTd, dateTd, categorieTd)

     const table = document.querySelector('.datatable tbody')

     table.appendChild(newItem)
    
  }
  function supprimer() {
    const tbody = document.querySelector('.datatable tbody' )
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild)
    }

}