console.log("heeloo")
function validateForm() {
    // Retrieve form fields
  const inputs= document.querySelectorAll('input')
  const form = document.querySelector('form')

    // Perform validation
form.addEventListener('submit', function(){
    inputs.forEach(function(e){
       e.preventDefaut();
       e.addEventListener("change", function(ev){

           console.log(ev)
       })
    })
})

   
 
}
validateForm()