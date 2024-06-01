const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

function addStudent() {
  const name = document.getElementById("name").value;
  const rollNo = document.getElementById("rollNo").value;

  if (name && rollNo) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${name}</span><span>${rollNo}</span><button onclick="deleteStudent(this)">Delete</button>`;
    studentList.appendChild(li);

    // Clear the form fields
    studentForm.reset();
  } else {
    alert("Please enter both name and roll number.");
  }
}

function deleteStudent(button) {
  const li = button.parentNode;
  studentList.removeChild(li);
}
