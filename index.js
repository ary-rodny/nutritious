
const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link");


navToggle.addEventListener("click", (e) => {
    document.body.classList.toggle("nav-open")
})


navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // e.preventDefault()
        
        

        navLinks.forEach(link => link.classList.remove('active'));

        link.classList.add('active');

        //close the nav when i click an item, mobile
        document.body.classList.remove("nav-open")

    })
})