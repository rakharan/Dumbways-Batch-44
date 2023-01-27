const projects = []

let technologies = []

const getData = () => {


    // delaclaration variable dom selection
    let title = document.getElementById('projectTitle').value
    // date grouping
    let startDate = new Date(document.getElementById('startDate').value)
    let endDate = new Date(document.getElementById('endDate').value)
    let date = `${startDate.getFullYear()} - ${endDate.getFullYear()}`


    // Getting all checked technology checkbox


    let description = document.getElementById('description').value
    let image = document.getElementById('image').files
    let react = document.getElementById('react')
    let nodejs = document.getElementById('node')
    let javascript = document.getElementById('javascript')
    let angular = document.getElementById('angular')
    if (react.checked) {
        technologies.push(react.id)
    }
    if (nodejs.checked) {
        technologies.push(nodejs.id)
    }
    if (javascript.checked) {
        technologies.push(javascript.id)
    }
    if (angular.checked) {
        technologies.push(angular.id)
    }


    // Convert spesific image to blob object
    image = URL.createObjectURL(image[0])

    let dataProject = {
        title,
        date,
        description,
        technologies,
        image,
    }

    projects.push(dataProject)
    console.log(projects)
    showData()
}

//clear form function
const form = document.getElementById('projectForm')
form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault()

    form.reset()
    technologies = []
})



//arrow func to show list of projects
const showData = () => {
    document.getElementById('projects').innerHTML = ""
    for (let i = 0; i <= projects.length - 1; i++) {
        document.getElementById('projects').innerHTML += `<div class="projectListItem">
    <div class="projectThumbnail" id="projectThumbnail">
        <img src="${projects[i].image}" width="100%" alt="">
    </div>
    <div class="projectDetails" id="projectDetails">
        <div class="detailsHeader">
            <h4>${projects[i].title} ${projects[i].date}</h4>
            <span>durasi: 3 bulan</span>
        </div>
        <div class="detailsParagraph">
            ${projects[i].description}
            <div><a href="./projectDetail.html" class="readMore">Read More</a></div>
        </div>
        <div class="detailsTech">
        ${technologies.includes("react") ? `<i class="fa-brands fa-react fa-2xl"></i>` : ``}
        ${technologies.includes("node") ? `<i class="fa-brands fa-node fa-2xl"></i>` : ``}
        ${technologies.includes("javascript") ? `<i class="fa-brands fa-js fa-2xl"></i>` : ``}
        ${technologies.includes("angular") ? `<i class="fa-brands fa-angular fa-2xl"></i>` : ""}
        </div>
        <div class="projectButton">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
        </div>
    </div>
</div>`
    }
}