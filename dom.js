 const homeTab = document.querySelector('.home-tab');
const skillsFolder = document.querySelector('.skills-folder');
const skillsRed = document.querySelector('#skills-tab-red');
const skillsTab = document.querySelector('.skills-tab');
const projectsFolder = document.querySelector('.projects-folder');
const projectsRed = document.querySelector('#projects-tab-red');
const projectsTab = document.querySelector('.projects-tab');
const experienceFolder = document.querySelector('.experience-folder');
const experienceRed = document.querySelector('#experience-tab-red');
const experienceTab = document.querySelector('.experience-tab');
const clientProjectsFolder = document.querySelector('.client-projects-folder');
const clientProjectsRed = document.querySelector('#client-projects-tab-red');
const clientProjectsTab = document.querySelector('.client-projects-tab');
const teamProjectsFolder = document.querySelector('.team-projects-folder');
const teamProjectsRed = document.querySelector('#team-projects-tab-red');
const teamProjectsTab = document.querySelector('.team-projects-tab');
const personalProjectsFolder = document.querySelector('.personal-projects-folder');
const personalProjectsRed = document.querySelector('#personal-projects-tab-red');
const personalProjectsTab = document.querySelector('.personal-projects-tab');

const skillsFolderClose = document.querySelector('.skills-folder-close');
const skillsFolderOpen = document.querySelector('.skills-folder-open');
const projectsFolderClose = document.querySelector('.projects-folder-close');
const projectsFolderOpen = document.querySelector('.projects-folder-open');
const experienceFolderClose = document.querySelector('.experience-folder-close');
const experienceFolderOpen = document.querySelector('.experience-folder-open');
const clientProjectsFolderClose = document.querySelector('.client-projects-folder-close');
const clientProjectsFolderOpen = document.querySelector('.client-projects-folder-open');
const teamProjectsFolderClose = document.querySelector('.team-projects-folder-close');
const teamProjectsFolderOpen = document.querySelector('.team-projects-folder-open');
const personalProjectsFolderClose = document.querySelector('.personal-projects-folder-close');
const personalProjectsFolderOpen = document.querySelector('.personal-projects-folder-open');

const tabArr = [homeTab, skillsTab, projectsTab, experienceTab, clientProjectsTab, teamProjectsTab, personalProjectsTab ];

homeTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== homeTab);
    let tabOpenCheck = tempTabArr.filter(tab => tab.style.display === "block" );
    if(tabOpenCheck.length > 1) {
    tabOpenCheck.map(tab => {tab.style.zIndex = 1});
    homeTab.style.zIndex = 2;
    }
});

skillsTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== skillsTab);
    tempTabArr.map(tab => {tab.style.zIndex = 1});
    skillsTab.style.zIndex = 2;
});

projectsTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== projectsTab);
    tempTabArr.map(tab => {tab.style.zIndex = 1});
    projectsTab.style.zIndex = 2;
});

experienceTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== experienceTab);
    tempTabArr.map(tab => {tab.style.zIndex = 1});
    experienceTab.style.zIndex = 2;
});

clientProjectsTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== clientProjectsTab);
    tempTabArr.map(tab => {tab.style.zIndex = 1});
    clientProjectsTab.style.zIndex = 2;
});

teamProjectsTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== teamProjectsTab);
    tempTabArr.map(tab => {tab.style.zIndex = 1});
    teamProjectsTab.style.zIndex = 2;
});

personalProjectsTab.addEventListener("click", () => {
    let tempTabArr = tabArr.filter(tab => tab !== personalProjectsTab);
    tempTabArr.map(tab => {tab.style.zIndex = 1});
    personalProjectsTab.style.zIndex = 2;
});

skillsFolder.addEventListener("click", () => {
    console.log("skills folder clicked")
    if(skillsTab.style.display === "none")
        skillsTab.style.display = "block";
        skillsTab.style.zIndex = 10;
        skillsFolderClose.style.display = "none";
        skillsFolderOpen.style.display = "block";
});

skillsRed.addEventListener("click", () => {
    console.log("skills red button clicked")
    if(skillsTab.style.display === "block")
        skillsTab.style.display = "none";
        skillsFolderClose.style.display = "block";
        skillsFolderOpen.style.display = "none";
});

projectsFolder.addEventListener("click", () => {
    console.log("projects folder clicked")
    if(projectsTab.style.display === "none")
        projectsTab.style.display = "block";
        projectsFolderClose.style.display = "none";
        projectsFolderOpen.style.display = "block";
});

projectsRed.addEventListener("click", () => {
    console.log("projects red button clicked")
    if(projectsTab.style.display === "block")
        projectsTab.style.display = "none";
        projectsFolderClose.style.display = "block";
        projectsFolderOpen.style.display = "none";
});

experienceFolder.addEventListener("click", () => {
    console.log("experience folder clicked")
    if(experienceTab.style.display === "none")
        experienceTab.style.display = "block";
        experienceFolderClose.style.display = "none";
        experienceFolderOpen.style.display = "block";
});

experienceRed.addEventListener("click", () => {
    console.log("experience red button clicked")
    if(experienceTab.style.display === "block")
        experienceTab.style.display = "none";
        experienceFolderClose.style.display = "block";
        experienceFolderOpen.style.display = "none";
});

clientProjectsFolder.addEventListener("click", () => {
    console.log("clientProjects folder clicked")
    if(clientProjectsTab.style.display === "none")
        clientProjectsTab.style.display = "block";
        clientProjectsFolderClose.style.display = "none";
        clientProjectsFolderOpen.style.display = "block";
});

clientProjectsRed.addEventListener("click", () => {
    console.log("clientProjects red button clicked")
    if(clientProjectsTab.style.display === "block")
        clientProjectsTab.style.display = "none";
        clientProjectsFolderClose.style.display = "block";
        clientProjectsFolderOpen.style.display = "none";
});

teamProjectsFolder.addEventListener("click", () => {
    console.log("teamProjects folder clicked")
    if(teamProjectsTab.style.display === "none")
        teamProjectsTab.style.display = "block";
        teamProjectsFolderClose.style.display = "none";
        teamProjectsFolderOpen.style.display = "block";
});

teamProjectsRed.addEventListener("click", () => {
    console.log("teamProjects red button clicked")
    if(teamProjectsTab.style.display === "block")
        teamProjectsTab.style.display = "none";
        teamProjectsFolderClose.style.display = "block";
        teamProjectsFolderOpen.style.display = "none";
});

personalProjectsFolder.addEventListener("click", () => {
    console.log("personalProjects folder clicked")
    if(personalProjectsTab.style.display === "none")
        personalProjectsTab.style.display = "block";
        personalProjectsFolderClose.style.display = "none";
        personalProjectsFolderOpen.style.display = "block";
});

personalProjectsRed.addEventListener("click", () => {
    console.log("personalProjects red button clicked")
    if(personalProjectsTab.style.display === "block")
        personalProjectsTab.style.display = "none";
        personalProjectsFolderClose.style.display = "block";
        personalProjectsFolderOpen.style.display = "none";
});
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  dragElement(document.querySelector('.home-tab'));
  dragElement(document.querySelector('.skills-tab'));
  dragElement(document.querySelector('.projects-tab'));
  dragElement(document.querySelector('.experience-tab'));
  dragElement(document.querySelector('.client-projects-tab'));
  dragElement(document.querySelector('.team-projects-tab'));
  dragElement(document.querySelector('.personal-projects-tab'));