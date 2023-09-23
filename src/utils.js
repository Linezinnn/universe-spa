export function changeStyle(button, bg){
    button = button || document.querySelector("header nav a:nth-child(2)")

    const allLinks = document.querySelectorAll("header nav a")

    if(button.tagName == "BUTTON"){
        button = document.querySelector("header nav a:nth-child(3)")
    }

    allLinks.forEach((link) => {
        link.classList.remove("link-bolded")
    })

    button.classList.add("link-bolded")

    document.querySelector("body").style.backgroundImage = `url(${bg})`
}