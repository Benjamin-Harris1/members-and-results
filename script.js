import { initTabs } from "./tabs.js";
import { createResult } from "./result.js";
import { constructMember } from "./member.js";

window.addEventListener("load", initApp);

async function initApp() {
  initTabs();
  await buildMembersList();

  showMembers(memberArray);

  await buildResultList();
  showResults(resultArray);
}

const memberArray = [];

async function buildMembersList() {
  const originalObjects = await getMembers();

  for (const orgobj of originalObjects) {
    const memberObj = constructMember(orgobj);
    memberArray.push(memberObj);
  }
}

async function getMembers() {
  const response = await fetch("/data/members.json");
  const data = await response.json();
  return data;
}

function showMembers(memberArray) {
  document.querySelector("table#members tbody").innerHTML = "";
  for (const member of memberArray) {
    const html = /*HTML*/ `
    <tr>
      <td>${member.getFullName()}</td>
      <td>${member.isActive()}</td>
      <td>${member.birthday}</td>
      <td>${member.getAge()}</td>
      <td>${member.isJuniorSenior()}</td>
    </tr>
    `;
    document.querySelector("table#members tbody").insertAdjacentHTML("beforeend", html);
  }
}

const resultArray = [];

async function buildResultList() {
  const originalObjects = await getResults();

  for (const orgobj of originalObjects) {
    const resultObj = createResult(orgobj);
    resultArray.push(resultObj);
  }
}

async function getResults() {
  const response = await fetch("/data/results.json");
  const data = await response.json();
  return data;
}

function showResults() {
  document.querySelector("table#results tbody").innerHTML = "";
  resultArray.sort((a, b) => a.time.localeCompare(b.time));
  for (const result of resultArray) {
    let resultTypeText;

    if (result.isTraining()) {
      resultTypeText = "Træning";
    } else if (result.isCompetition()) {
      resultTypeText = "Konkurrence";
    }

    const discipline = {
      backstroke: "ryg",
      butterfly: "butterfly",
      crawl: "crawl",
      breaststroke: "bryst",
      freestyle: "freestyle",
    };

    const html =
      /*html*/
      `
            <tr>
            <td>${result.date.toLocaleString("da", { weekday: "short", month: "short", day: "numeric" })}</td>
            <td>${result.memberId}</td>
            <td>${discipline[result.discipline]}</td>
            <td>${resultTypeText}</td>
            <td>${result.time}</td>
            </tr>
        `;
    document.querySelector("table#results tbody").insertAdjacentHTML("beforeend", html);
  }
}
