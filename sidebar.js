const subjects = [

    "Tiếng Anh",
    "Pháp luật đại cương",
    "Triết học Mác - Lênin",
    "Tâm lý học",
    "Tin học",
    "An ninh mạng",
    "Điều tra hình sự"

];

function renderSubjects(){

    const list = document.getElementById("subjectList");

    list.innerHTML = "";

    subjects.forEach(subject => {

        const li = document.createElement("li");

        li.textContent = subject;

        list.appendChild(li);

    });

}