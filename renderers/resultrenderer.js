const ResultRenderer = {
  render(result) {
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

    const memberInfo = result.member ? `${result.member.getFullName()}` : "Ukendt medlem";

    const html =
      /*html*/
      `
            <tr>
            <td>${result.date.toLocaleString("da", { weekday: "short", month: "short", day: "numeric" })}</td>
            <td>${memberInfo}</td>
            <td>${discipline[result.discipline]}</td>
            <td>${resultTypeText}</td>
            <td>${result.time}</td>
            </tr>
        `;
    document.querySelector("table#results tbody").insertAdjacentHTML("beforeend", html);
  },
};

export { ResultRenderer };
