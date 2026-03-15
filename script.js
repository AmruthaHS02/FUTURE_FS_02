let leads = JSON.parse(localStorage.getItem("leads")) || []

function addLead(){

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const source = document.getElementById("source").value
const status = document.getElementById("status").value

if(name=="" || email==""){
alert("Please enter name and email")
return
}

const lead = {
name:name,
email:email,
source:source,
status:status
}

leads.push(lead)

localStorage.setItem("leads",JSON.stringify(leads))

displayLeads()

document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("source").value=""

}

function displayLeads(){

const table = document.getElementById("leadTable")

table.innerHTML=""

leads.forEach((lead,index)=>{

table.innerHTML += `
<tr>
<td>${lead.name}</td>
<td>${lead.email}</td>
<td>${lead.source}</td>
<td>${lead.status}</td>
<td>
<button class="delete-btn" onclick="deleteLead(${index})">Delete</button>
</td>
</tr>
`

})

}

function deleteLead(index){

leads.splice(index,1)

localStorage.setItem("leads",JSON.stringify(leads))

displayLeads()

}

displayLeads()