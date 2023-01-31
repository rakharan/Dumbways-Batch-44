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

    let description = document.getElementById('description').value
    let image = document.getElementById('image').files

    // Getting all checked technology checkbox
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
        postedAt: new Date()
    }
    projects.push(dataProject)
    showData()
    setInterval(showData, 1000)
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
                     <span>Durasi pengerjaan: ${projectDuration(project.postedAt)}</span>
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

const projectDuration = (timepost) => {
    const timePosted = timepost;
    const timeNow = new Date();
    const timeDifference = timeNow - timePosted;

    const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const weeksDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesDifference = Math.floor(timeDifference / (1000 * 60))
    const secondsDifference = Math.floor(timeDifference / (1000));


    switch (true) {
        case monthsDifference > 1:
            return `${monthsDifference} months ago`
        case monthsDifference > 0:
            return `${monthsDifference} month ago`

        case weeksDifference > 1:
            return `${daysDifference} weeks ago`
        case weeksDifference > 0:
            return `${weeksDifference} week ago`

        case daysDifference > 1:
            return `${monthsDifference} days ago`
        case daysDifference > 0:
            return `${daysDifference} day ago`

        case hoursDifference > 1:
            return `${hoursDifference} hours ago`
        case hoursDifference > 0:
            return `${hoursDifference} hour ago`

        case minutesDifference > 1:
            return `${minutesDifference} minutes ago`
        case minutesDifference > 0:
            return `${minutesDifference} minute ago`

        case secondsDifference > 1:
            return `${secondsDifference} seconds ago`
        case secondsDifference > 0:
            return `${secondsDifference} second ago`
        default:
            return `just now`

    }
}