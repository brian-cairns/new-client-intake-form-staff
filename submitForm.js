let submit = document.getElementById('submit')
console.log(submit)
const formName = 'newIntakeFormStaff'
console.log('form: ' + formName)
let newForm = {}

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  })
  
let intakeDate = document.querySelector('input#intakeDate')
intakeDate.addEventListener('change', (e) => {
	newForm.intakeDate = e.target.value;
  console.log(newForm.intakeDate);
})

let dob = document.querySelector('input#dob')
dob.addEventListener('change', (e) => {
	newForm.dob = e.target.value;
  console.log(newForm.dob);
})

let age = document.querySelector('input#age')
age.addEventListener('change', (e) => {
	newForm.age = e.target.value;
  console.log(newForm.age);
})

let grade = document.querySelector('input#grade')
grade.addEventListener('change', (e) => {
	newForm.grade = e.target.value;
  console.log(newForm.grade);
})

let caregiverName = document.querySelector('input#caregiverName')
caregiverName.addEventListener('change', (e) => {
	newForm.caregiverName = e.target.value;
  console.log(newForm.caregiverName);
})

let caregiverPhone = document.querySelector('input#caregiverPhone')
caregiverPhone.addEventListener('change', (e) => {
	newForm.caregiverPhone = e.target.value;
  console.log(newForm.caregiverPhone);
})

let caregiverEmail = document.querySelector('input#caregiverEmail')
caregiverEmail.addEventListener('change', (e) => {
	newForm.caregiverEmail = e.target.value;
  console.log(newForm.caregiverEmail);
})

let diagnosis = document.querySelector('input#diagnosis')
diagnosis.addEventListener('change', (e) => {
	newForm.diagnosis = e.target.value;
  console.log(newForm.diagnosis);
})

let sensoryNeeds = document.querySelector('input#sensoryNeeds')
sensoryNeeds.addEventListener('change', (e) => {
	newForm.sensoryNeeds = e.target.value;
  console.log(newForm.sensoryNeeds);
})

let strengths = document.querySelector('input#strengths')
strengths.addEventListener('change', (e) => {
	newForm.strengths = e.target.value;
  console.log(newForm.strengths);
})

let needs = document.querySelector('input#needs')
needs.addEventListener('change', (e) => {
	newForm.needs = e.target.value;
  console.log(newForm.needs);
})

let medicalConditions = document.querySelector('input#medicalConditions')
medicalConditions.addEventListener('change', (e) => {
	newForm.medicalConditions = e.target.value;
  console.log(newForm.medicalConditions);
})

let services = document.querySelector('input#services')
services.addEventListener('change', (e) => {
	newForm.services = e.target.value;
  console.log(newForm.services);
})

let availability = document.querySelector('input#availability')
availability.addEventListener('change', (e) => {
    newForm.availability = e.target.value;
    console.log(newForm.availability)
})

let hrsOfSupport = document.querySelector('input#hrsOfSupport')
hrsOfSupport.addEventListener('change', (e) => {
    newForm.hrsOfSupport = e.target.value;
    console.log(newForm.hrsOfSupport)
})
    
let notes = document.getElementById('notes')
notes.addEventListener('change', (e) => {
    newForm.notes = e.target.value;
    console.log(newForm.notes)
})

let staff = document.querySelector('input#staff')
staff.addEventListener('change', (e) => {
    newForm.staff = e.target.value;
    console.log(newForm.staff)
})

let caregiverSignature = document.querySelector('input#caregiverSignature')
caregiverSignature.addEventListener('change', (e) => {
    newForm.caregiverSignature = e.target.value;
    console.log(newForm.caregiverSignature)
})
    
let todaysDate = document.querySelector('input#todaysDate')
todaysDate.addEventListener('change', (e) => {
    newForm.todaysDate = e.target.value;
    console.log(newForm.todaysDate)
})

let mathLevel = document.querySelector('input#mathLevel')
mathLevel.addEventListener('change', (e) => {
    newForm.mathLevel = e.target.value;
    console.log(newForm.mathLevel)
})

let assessDate = document.querySelector('input#assessDate')
assessDate.addEventListener('change', (e) => {
    newForm.assessDate = e.target.value;
    console.log(newForm.assessDate)
})

let readingLevel = document.querySelector('input#readingLevel')
readingLevel.addEventListener('change', (e) => {
    newForm.readingLevel = e.target.value;
    console.log(newForm.readingLevel)
})

let writingLevel = document.querySelector('input#writingLevel')
writingLevel.addEventListener('change', (e) => {
    newForm.writingLevel = e.target.value;
    console.log(newForm.writingLevel)
})

let OGL = document.querySelector('input#ogl')
OGL.addEventListener('change', (e) => {
    newForm.OGL = e.target.value;
    console.log(newForm.OGL)
})

let BGL = document.querySelector('input#bgl')
BGL.addEventListener('change', (e) => {
    newForm.BGL = e.target.value;
    console.log(newForm.BGL)
})


document.getElementById('submit').addEventListener("click", async (event) => {
  submitForm(newForm, 'newIntakeFormStaff')
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}