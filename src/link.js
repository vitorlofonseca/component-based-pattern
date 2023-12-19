export const HOST = "http://127.0.0.1:8080";

export const createLink = (label, href) => {
  const link = document.createElement("a");
  link.innerHTML = label;
  link.href = href;
  return link;
};
