import { MemberRenderer } from "./memberrenderer.js";
import { ResultRenderer } from "./resultrenderer.js";

function constructListRenderer(list) {
  const ListRenderer = {
    memberList: list,
    render() {
      document.querySelector("table#members tbody").innerHTML = "";
      for (const member of this.memberList) {
        MemberRenderer.render(member);
      }
    },
  };
  return ListRenderer;
}

export { constructListRenderer };
