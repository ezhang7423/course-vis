// Get the modal
modal = document.querySelector('.modal');
child = document.querySelector(".children");
parents = document.querySelector(".parents");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function updateModalContent(courseKey) {
    let data = getCourseDetail(courseKey);
    if (courseKey.substr(0, 2) != 'CS') {
        externalCSContent(courseKey)
    }
    else {
        let course = document.querySelector(".course")
        let html;
        htmlFriendlyDescription = getLongDescription(data.text).replaceAll('\n', '<br>')
        for (let i in x) {
            if (i.includes(courseKey)) {
                short = i;
            }
            // if (courseKey == "CS16"){
            //     short = "CS16. Problem Solving with Computers I";
            // }
        }
        course.innerHTML = `<div><div class = "header">
        <div class = "name">
        ${data.description}
        </div>
        </div>
        <div style = "margin: 10px"
        ${x[courseKey]["desc"]}</div></div>`
    }
}

function externalCSContent(courseKey) {
    let course = document.querySelector(".course")
    for (let course in outsideCS) {
        firstPeriod = /^([^.]+)/
        couS = firstPeriod.exec(course)[0]
        cou = couS.replace(/\s/g, '')
        title = course.split('.')[1]
        title = title.substr(1, title.length)
        if (courseKey == cou) {
            templateHTML =
                `    
                <div class = "header">
                    <div class = "name">
                    ${title}
                    </div>
                </div>
                <div style = "margin: 10px"
                <div>
                <div>
                    <div class="numJS label-inline"> Number: </div> ${couS}
                </div>
                <div class="field
                        field-name-field-course-level">
                    <div class="label-inline"> Level: </div> Undergraduate
                </div>
                <div>
                    <div class="unitsJS label-inline"> Units: </div> ${outsideCS[course].units}
                </div>
                <h2 class="label-above"> Description </h2>
                <p class="descripJS"> ${outsideCS[course].description} </p>
                </div>
                </div>
                `

        }
    }
    course.innerHTML = templateHTML;
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
    if (!courseContent) {
        child.innerHTML = "";
        return
    }
    let html = "";
    courseContent.forEach((v) => {
        html += `
        <div class="container" onclick="goNewCourse('${v.text}')" id="${v.text + '_course'}">
            ${v.text}
        </div>`
    });
    child.innerHTML = html
}

function renderTop(courseContent) {
    if (!courseContent) {
        parents.innerHTML = "";
        return
    }
    let html = "";
    courseContent.forEach((v) => {
        html += `
        <div class="container" onclick="goNewCourse('${v.text}')" id="${v.text + '_course'}">
            ${v.text}
        </div>`
    });
    parents.innerHTML = html
}

function toggleModal(bottomCourseContent, topCourseContent) {
    modal.classList.toggle("show-modal");
    child.classList.toggle("show-modal")
    parents.classList.toggle("show-modal");
    renderBottom(bottomCourseContent);
    renderTop(topCourseContent)
}

function goNewCourse(courseKey) {
    setTimeout(() => {
        renderBottom(getChildCourses(courseKey));
        renderTop(getParentCourses(courseKey));
        updateModalContent(courseKey);
    }, 250);
    setTimeout(() => {
        document.querySelector(".childContainer").classList.toggle("trans");
        document.querySelector(".parentContainer").classList.toggle("trans");
    }, 500);
    document.querySelector(".childContainer").classList.toggle("trans");
    document.querySelector(".parentContainer").classList.toggle("trans");

}
