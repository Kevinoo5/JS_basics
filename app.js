const firstname = "Kevin"
const surname = "Noormets"
const email = "kevin.noormets@voco.ee"
const department = "IKT"

let result = "<ul>" +
    "<li>" + firstname + "</li>" +
    "<li>" + surname + "</li>" +
    "<li>" + email + "</li>" +
    "<li>" + department + "</li>" +
    "</ul>"

result =`
    <ul>
        <li><b>Name:</b>${firstname}</li>
        <li><b>Name:</b>${surname}</li>
        <li><b>Name:</b>${email}</li>
        <li><b>Name:</b>${department}</li>
    </ul>`

console.log(result)
document.body.innerHTML = result