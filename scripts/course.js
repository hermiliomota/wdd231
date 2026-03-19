const courses = [
    { name: "WDD131 - HTML & CSS", type: "WDD", credits: 3, completed: true },
    { name: "CSE132 - Programming Fundamentals", type: "CSE", credits: 3, completed: false },
    
];

function displayCourses(filter = "all") {
    const container = document.getElementById("courseCards");
    container.innerHTML = "";

    const filtered = courses.filter(course => filter === "all" ? true : course.type === filter);

    filtered.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card ${course.completed ? "completed" : ""}`;
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>Type: ${course.type}</p>
            <p>Credits: ${course.credits}</p>
        `;
        container.appendChild(card);
    });

    // Total credits
    const total = filtered.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("totalCredits").textContent = total;
}

// Event listeners
document.getElementById("allCourses").addEventListener("click", () => displayCourses("all"));
document.getElementById("wddCourses").addEventListener("click", () => displayCourses("WDD"));
document.getElementById("cseCourses").addEventListener("click", () => displayCourses("CSE"));

// Initial render
displayCourses();