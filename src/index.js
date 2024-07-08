import './style.css';

const heading = document.createElement("div");
heading.id = "heading";
heading.classList.add("heading-text");
heading.textContent = "Ready to conquer today's tasks and make things happen? Let's get started!"

//project-container
const project_container = document.createElement("div");
project_container.id = "project_container";
project_container.classList.add("project-content");

//project-content
project_container.textContent = "MyProjects"

const addbtn = document.createElement("button");
addbtn.id = "addbtn";
addbtn.textContent = "Add";

const dropdownbtn = document.createElement("button");
dropdownbtn.id = "dropdownbtn";




document.getElementById("container").appendChild(heading);
document.getElementById("container").appendChild(project_container);
document.getElementById("project_container").appendChild(addbtn);
document.getElementById("project_container").appendChild(dropdownbtn);
document.getElementById("project_container").appendChild(dropdownbtn);


