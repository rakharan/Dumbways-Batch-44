const getData = () => {

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let description = document.getElementById('description').value

    console.log(email)
    console.log(name)
    console.log(phone)
    console.log(subject)
    console.log(description)

    const defaultEmail = "rakhasaga@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${description} tolong hubungin saya ${phone}`
    mailTo.click()
}