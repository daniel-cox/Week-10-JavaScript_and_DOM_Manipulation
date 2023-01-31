class Member {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class team {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  deleteMember(member) {
    let index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }
}

let teams = [];
let teamId = 0;

onClick("new-team"),
  () => {
    teams.push(new team(teamId++, getValue("new-team-name")));
    drawDOM();
  };

function onClick(id, action) {
  let element = document.getElementById(id);
  element.addEventListener("click", action);
  return element;
}

function getValue(id) {
  return document.getElementById(id).value;
}

function drawDOM() {
  let teamDiv = document.getElementById("teams");
  clearElement(teamDiv);
  //clear the team div
  for (team of teams) {
    //iterate over the teams
    let table = createTeamTable(team);
    //create a table for each team
    let title = document.createElement("h2");
    title.innderHTML = team.name;
    title.appendChild(createDeleteTeamButton(team));
    //create a delete button so you can delete each team
    teamDiv.appendChild(title);
    teamDiv.appendChild(table);
    for (memeber of team.members) {
      createMemberRow(team, table, member);
      //add all members to the team
    }
  }
}

function createMemberRow(team, table, member) {
  let row = table.insertRow(2);
  row.insertCell(0).innderHTML = member.name;
  row.insertCell(1).innderHTML = member.position;
  let actions = row.insertCell(2);
  action.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Delete";
  btn.onClick = () => {
    let index = team.member.indexOf(member);
    team.member.spl;
    ice(index, 1);
    drawDOM();
  };
}

function createDeleteTeamButton(team) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Delete Team";
  btn.onClick = () => {
    let index = teams.indexOf(team);
    teams.splice(index, 1);
    drawDOM();
  };
  return btn;
}

function createMemberButton(team) {
  let btn = document.createElement("Button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Create";
  btn.onclick = () => {
    team.members.push(
      new Member(
        getValue(`name-input-${team.id}`),
        getValue(`p osition-input-${team.id}`)
      )
    );
  };
  return btn;
}

function createTeamTable(team) {
  let table = document.createElement("table");
  table.setAttribute("class", "table table-dark table-striped");
  let row = table.insertRow(0);
  let nameColumn = document.createElement("th");
  let positionColumn = document.createElement("th");
  nameColumn.innerHTML = "Name";
  positionColumn.innderHTML = "Position";
  row.appendChild(nameColumn);
  row.appendChild(positionColumn);
  let formRow = table.insertRow(1);
  let nameTh = document.createElement("th");
  let positionTh = document.createElement("th");
  let createTh = document.createElement("th");
  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", `name-input-${team.id}`);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("class", "form-control");
  let positionInput = document.createElement("input");
  positionInput.setAttribute("id", `position-input-${team.id}`);
  positionInput.setAttribute("type", "text");
  positionInput.setAttribute("class", "form-control");
  let newMemberButton = createMemberButton(team);
  nameTh.appendChild(nameInput);
  positionTh.appendChild(positionInput);
  createTh.appendChild(newMemberButton);
  formRow.appendChild(nameTh);
  formRow.appendChild(positionTh);
  formRow.appendChild(createTh);
  return table;
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(elember.firstChild);
  }
}
