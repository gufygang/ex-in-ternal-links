const anchors = document.getElementsByTagName("a");
const baseURL = document.location;
const div = document.createElement("div");

let html = `<h2>Internal Links </h2>`;
for (let anchor of anchors) {  
  if(anchor.href.includes(baseURL.hostname)){
    html += `<a href="${anchor.href}">${anchor.text}</a><br>`;    
  }
}
html += `<h2>External Links </h2>`;
for (let anchor of anchors) {  
  if(!anchor.href.includes(baseURL.hostname)){
    html += `<a href="${anchor.href}">${anchor.text}</a><br>`;    
  }
}
div.innerHTML = html;
document.body.appendChild(div);
