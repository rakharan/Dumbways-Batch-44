const projects = []
const getData = () => {


    // delaclaration variable dom selection
    let title = document.getElementById('projectTitle').value

    // date grouping
    let startDate = new Date(document.getElementById('startDate').value)
    let endDate = new Date(document.getElementById('endDate').value)
    let date = `${startDate.getFullYear()} - ${endDate.getFullYear()}`
    let timeInMs = endDate.getTime() - startDate.getTime()
    let duration = Math.round(timeInMs / (1000 * 60 * 60 * 24))

    // Getting all checked technology checkbox
    let description = document.getElementById('description').value
    let image = document.getElementById('image').files
    let isUsingReact = document.getElementById('react').checked
    let isUsingNode = document.getElementById('node').checked
    let isUsingJs = document.getElementById('javascript').checked
    let isUsingAngular = document.getElementById('angular').checked

    // Convert spesific image to blob object
    image = URL.createObjectURL(image[0])

    let dataProject = {
        title,
        date,
        duration,
        description,
        isUsingReact,
        isUsingAngular,
        isUsingJs,
        isUsingNode,
        image,
    }

    projects.push(dataProject)
    showData()
}

//clear form function
const form = document.getElementById('projectForm')
form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault()
    form.reset()
})

//arrow func to show list of projects
const showData = () => {
    document.getElementById('projects').innerHTML = ""

    projects.map((project) => {
        return document.getElementById('projects').innerHTML +=
            `<div class="projectListItem">
             <div class="projectThumbnail" id="projectThumbnail">
                 <img src="${project.image}" width="100%" alt="">
             </div>
            <div class="projectDetails" id="projectDetails">
                 <div class="detailsHeader">
                     <h4>${project.title} ${project.date}</h4>
                     <span>Durasi pengerjaan: ${isNaN(project.duration) ? `-` : `${project.duration} hari`}</span>
                 </div>
                 <div class="detailsParagraph">
                     ${project.description}
                     <div><a href="./projectDetail.html" class="readMore">Read More</a></div>
                 </div>
                <div class="detailsTech">
                 ${project.isUsingReact ? `<i class="fa-brands fa-react fa-2xl"></i>` : ``}
                 ${project.isUsingNode ? `<i class="fa-brands fa-node fa-2xl"></i>` : ``}
                 ${project.isUsingJs ? `<i class="fa-brands fa-js fa-2xl"></i>` : ``}
                 ${project.isUsingAngular ? `<i class="fa-brands fa-angular fa-2xl"></i>` : ""}
                </div>
            <div class="projectButton">
                     <a href="#">Edit</a>
                     <a href="#">Delete</a>
                 </div>
             </div>
         </div>
        `
    })
}