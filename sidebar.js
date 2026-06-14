const subjects = [
{
name: “Tâm lý học”,
file: “subjects/tamlyhoc.html”
},
{
name: “Tiếng Anh”,
file: “subjects/tienganh.html”
},
{
name: “Pháp luật đại cương”,
file: “subjects/phapluat.html”
}
];

function renderSubjects() {
const list = document.getElementById(“subjectList”);

list.innerHTML = "";
subjects.forEach(subject => {
    list.innerHTML += `
        <li onclick="loadSubject('${subject.file}')">
            ${subject.name}
        </li>
    `;
});

}

async function loadSubject(file) {
const response = await fetch(file);
const html = await response.text();

document.getElementById("content").innerHTML = html;
closeSidebar();

}