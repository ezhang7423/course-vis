   // Get the modal
   modal = document.querySelector('.modal');
   child = document.querySelector(".children");

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

function updateModalContent(courseKey) {
    let data = getCourseDetail(courseKey);
    let course = document.querySelector(".course")

    let html;
    html = `<div class="header">
            <div class="name">
                <div class="skeleton skeleton-name"></div>
                <div class="short_name skeleton skeleton-short">LIN ALG W/ APP</div>
            </div>
            <span class="unit">Unit: 4.0</span>
        </div>
        <div class="info">
            ${data.description}
            <br><br>
            <span class="extra_box button">
            Math 3A
        </span>
            &nbsp;
            <span class="extra_box button">
            Math 3B
        </span>
        </div>`;
    course.innerHTML = html;
    html = `<div class="header">
            <div class="name">
                Math ${data.text}
                <br>
                <div class="short_name">LIN ALG W/ APP</div>
            </div>
            <span class="unit">Unit: 4.0</span>
        </div>
        <div class="info">
            ${data.description}
            <br><br>
            <span class="extra_box button">
            Math 3A
        </span>
            &nbsp;
            <span class="extra_box button">
            Math 3B
        </span>
        </div>`;
    setTimeout(()=>{course.innerHTML = html;}, 300)
}

function openModal(currentCourse) {
    //change modal based on which button is clicked
    toggleModal(getChildCourses(currentCourse.text));
    updateModalContent(currentCourse.text)
}
function toggleModal(courseContent){
    modal.classList.toggle("show-modal");
    child.classList.toggle("show-modal");

    if (!courseContent){
        child.innerHTML = "";
        return
    }
    let html = "";
    courseContent.forEach((v)=>{
        console.log(v);
        html += `
        <div class="container" onclick="goNewCourse('${v.text}')" id="${v.text + '_course'}">
            ${v.text}
        </div>`
    });
    child.innerHTML = html
}

function goNewCourse(courseKey) {
    setTimeout(()=>{
        let html = "";
        getChildCourses(courseKey).forEach((v)=>{
            html += `
                <div class="container" onclick="goNewCourse('${v.text}')" id="${v.text + '_course'}">
                    ${v.text}
                </div>`
        });
        updateModalContent(courseKey);
        child.innerHTML = html;
    }, 250);
    setTimeout(()=>{
        document.querySelector(".childContainer").classList.toggle("trans");
    }, 500);
    document.querySelector(".childContainer").classList.toggle("trans");

}
