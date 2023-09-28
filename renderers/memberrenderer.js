const MemberRenderer = {
  render(member) {
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
  },
};

export { MemberRenderer };
