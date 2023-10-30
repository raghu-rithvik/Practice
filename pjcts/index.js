function editit(ind) {
  deleted(ind);
  document.getElementById("editit").style.display = "block";
}
function saveit() {
  title = document.getElementById("etitle").value;
  desc = document.getElementById("edesc").value;
  if (localStorage.getItem("notes") == null) {
    notesArray = [];
    notesArray.push([title, desc]);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  } else {
    exnotes = localStorage.getItem("notes");
    notesArray = JSON.parse(exnotes);
    notesArray.push([title, desc]);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }
  update();
  document.getElementById("editit").style.display = "none";
}
function getandupdate() {
  title = document.getElementById("title").value;
  desc = document.getElementById("desc").value;
  if (localStorage.getItem("notes") == null) {
    notesArray = [];
    notesArray.push([title, desc]);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  } else {
    exnotes = localStorage.getItem("notes");
    notesArray = JSON.parse(exnotes);
    notesArray.push([title, desc]);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }
  update();
}
function update() {
  //     title = document.getElementById("title").value;
  // desc = document.getElementById("desc").value;
  if (localStorage.getItem("notes") == null) {
    notesArray = [];
    //   notesArray.push([title, desc]);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  } else {
    exnotes = localStorage.getItem("notes");
    notesArray = JSON.parse(exnotes);
    //   notesArray.push([title, desc]);
    //   localStorage.setItem("notes", JSON.stringify(notesArray));
  }
  let div = document.getElementById("items");
  let str = "";
  notesArray.forEach((element, index) => {
    str += `<div class="note"><h2>${element[0]}</h2>
  <p>${element[1]}</p>
  <button class="icon-button">
    <i class="material-symbols-outlined" onclick="editit(${index})"> edit </i>
  </button>
  <button class="icon-button">
    <i class="material-symbols-outlined" onclick="deleted(${index})"> delete </i>
  </button></div>`;
  });
  div.innerHTML = str;
  document.getElementById("title").value = null;
  document.getElementById("desc").value = null;
}
add = document.getElementById("add");
add.addEventListener("click", getandupdate);
update();
function deleted(note) {
  nots = localStorage.getItem("notes");
  not = JSON.parse(nots);
  not.splice(note, 1);
  localStorage.setItem("notes", JSON.stringify(not));
  update();
}
