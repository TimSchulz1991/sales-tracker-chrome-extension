let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
})

const renderLeads = () => {
    let listItems = "";
    for (let lead of myLeads) {
        listItems += `
            <a href="${lead}" target="_blank">
                <li>
                    ${lead}
                </li>
            </a>`;
    }
    ulEl.innerHTML = listItems;
}