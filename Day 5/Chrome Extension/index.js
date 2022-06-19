let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    //   ulEl.innerHTML += "<li>" + leads[i] + "</li>";

    //   listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>";
    // TEMPLATE STRING
    listItems += `<li>
                                 <a target='_blank' href='${leads[i]}'>
                                      ${leads[i]}
                                 </a>
                            </li>`;

    //   const li = document.createElement("li");
    //   li.textContent = leads[i];
    //   ulEl.append(li);
  }

  ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });

  myLeads.push();
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = ""; //clearing the input field

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
