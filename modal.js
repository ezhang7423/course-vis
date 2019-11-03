   // Get the modal
   modal = document.querySelector('.modal')
   child = document.getElementById("child");

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == modal) {
           toggleModal();
       }
   }

   
function nodeDoubleClick(_, obj) {
    let clicked = obj.part;
    if (clicked !== null) {
        let currentCourse = clicked.data;
        openModal(currentCourse)
    }
}

function openModal(currentCourse) {
    //change modal based on which button is clicked
    toggleModal();
    console.log(getChildCourses(currentCourse.text))
}

function toggleModal(){
    modal.classList.toggle("show-modal");
}

