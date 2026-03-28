export function setSectionSelection(sections) {
  const select = document.querySelector("#sectionNumber");

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.section;
    option.textContent = section.section;
    select.appendChild(option);
  });
}