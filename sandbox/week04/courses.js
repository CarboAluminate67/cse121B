// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'}, 
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
        ],
    enrollStudents: function EnrollStudents(sectionNum)
    {
        sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        section = this.sections[sectionIndex];
        section.enrolled += 1;
        DisplaySection(this.section[sectionIndex]);
    },
    dropStudent: function DropStudent(sectionNum)
    {
        sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        this.sections[sectionIndex].enrolled -= 1;
        DisplaySection(this.sections[sectionIndex]);    
    }
};

SetName(aCourse);

aCourse.sections.forEach(section => DisplaySection(section));

function SetName(course)
{
    document.getElementById("courseName").innerText = course.name;
    document.getElementById("courseCode").innerText = course.code;
}

function DisplaySection(section)
{
    const table = document.getElementById("sections");
    table.innerHTML += `<tr> 
    <th>${section.sectionNum}</th> 
    <th>${section.roomNum}</th>
    <th>${section.enrolled}</th> 
    <th>${section.days}</th> 
    <th>${section.instructor}</th> 
    </tr>`;
}

document.getElementById("enrollStudent").addEventListener('click', aCourse.enrollStudents(document.getElementById("sectionNumber").value))
document.getElementById("dropStudent").addEventListener('click', aCourse.dropStudent(document.getElementById("sectionNumber").value))
