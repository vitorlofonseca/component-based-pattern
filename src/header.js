import { createLink, HOST } from "./link.js";

export const mountHeader = () => {
  const header = document.createElement("header");

  const homeLink = createLink("Home", HOST);
  const detailsLink = createLink("Details", HOST + "/detail.html");
  header.appendChild(homeLink).appendChild(detailsLink);

  return header;
};
