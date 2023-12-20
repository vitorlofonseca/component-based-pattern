export const HOST = "http://127.0.0.1:8080";

const rootDiv = document.getElementById("root");

const homeLink = document.createElement("a");
homeLink.innerHTML = "Home";
homeLink.href = HOST;

const detailsLink = document.createElement("a");
detailsLink.innerHTML = "Details";
detailsLink.href = HOST + "/detail.html";

const header = document.createElement("header");
header.appendChild(homeLink);
header.appendChild(detailsLink);
header.style.cssText = `
      display: flex;
      gap: 20px;
      background-color: #d1d1d1;
      padding: 20px;
    `;

const bodyContainer = document.createElement("div");
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "This is detail page";
bodyContainer.appendChild(pageTitle);
bodyContainer.style.cssText = `
    display: flex;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

rootDiv.appendChild(header);
rootDiv.appendChild(bodyContainer);
