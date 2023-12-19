import { mountHeader } from "./header.js";

const rootDiv = document.getElementById("root");

const header = mountHeader();

rootDiv.appendChild(header);
