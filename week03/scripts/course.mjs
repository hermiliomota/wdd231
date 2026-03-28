const byuiCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  sections: [
    { section: 1, enrolled: 10, instructor: "Smith" },
    { section: 2, enrolled: 8, instructor: "Johnson" },
    { section: 3, enrolled: 12, instructor: "Lee" }
  ],

  changeEnrollment(sectionNumber, add = true) {
    const section = this.sections.find(
      (sec) => sec.section === sectionNumber
    );

    if (!section) return;

    add ? section.enrolled++ : section.enrolled--;
  }
};

export default byuiCourse;