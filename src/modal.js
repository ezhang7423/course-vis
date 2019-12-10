   // Get the modal
   modal = document.querySelector('.modal');
   child = document.querySelector(".children");
   parents = document.querySelector(".parents");

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

function getLongDescription(course_key) {
    
    // if x[course_key] != undefined{
    //     return x[course_key].descr
    // }
    return ""
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function updateModalContent(courseKey) {
    let data = getCourseDetail(courseKey);
    console.log(data)
    let course = document.querySelector(".course")
    let html;
    htmlFriendlyDescription = getLongDescription(data.text).replaceAll('\n', '<br>')
    for (let i in x){
        if (i.includes(courseKey)){
            short = i;
        }
        // if (courseKey == "CS16"){
        //     short = "CS16. Problem Solving with Computers I";
        // }
    }
    course.innerHTML = `<div style><div class = "header">
    <div class = "name">
    ${data.description}
    </div>
    </div>
    <div style = "margin: 10px"
    ${x[courseKey]["desc"]}</div></div>`
}

function openModal(currentCourse) {
    //change modal based on which button is clicked
    toggleModal(
        getChildCourses(currentCourse.text),
        getParentCourses(currentCourse.text)
    );
    updateModalContent(currentCourse.text)
}

function renderBottom(courseContent) {
    if (!courseContent){
        child.innerHTML = "";
        return
    }
    let html = "";
    courseContent.forEach((v)=>{
        html += `
        <div class="container" onclick="goNewCourse('${v.text}')" id="${v.text + '_course'}">
            ${v.text}
        </div>`
    });
    child.innerHTML = html
}

function renderTop(courseContent) {
    if (!courseContent){
        parents.innerHTML = "";
        return
    }
    let html = "";
    courseContent.forEach((v)=>{
        html += `
        <div class="container" onclick="goNewCourse('${v.text}')" id="${v.text + '_course'}">
            ${v.text}
        </div>`
    });
    parents.innerHTML = html
}

function toggleModal(bottomCourseContent, topCourseContent){
    modal.classList.toggle("show-modal");
    child.classList.toggle("show-modal")
    parents.classList.toggle("show-modal");
    renderBottom(bottomCourseContent);
    renderTop(topCourseContent)
}

function goNewCourse(courseKey) {
    setTimeout(()=>{
        renderBottom(getChildCourses(courseKey));
        renderTop(getParentCourses(courseKey));
        updateModalContent(courseKey);
    }, 250);
    setTimeout(()=>{
        document.querySelector(".childContainer").classList.toggle("trans");
        document.querySelector(".parentContainer").classList.toggle("trans");
    }, 500);
    document.querySelector(".childContainer").classList.toggle("trans");
    document.querySelector(".parentContainer").classList.toggle("trans");

}
