const skillsFolder = document.querySelector('.skills-folder');
const skillsRed = document.querySelector('#skills-tab-red');
const skillsTab = document.querySelector('.skills-tab');

skillsFolder.addEventListener("click", () => {
    console.log("skills folder clicked")
    if(skillsTab.style.display === "none")
        skillsTab.style.display = "block";
        
});

skillsRed.addEventListener("click", () => {
    console.log("skills red button clicked")
    if(skillsTab.style.display === "block")
        skillsTab.style.display = "none";
})