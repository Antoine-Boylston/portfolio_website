async function loadProjects() {
  try {
    console.log("loadProjects.js is running");

    const response = await fetch("https://7gg5fguzi9.execute-api.us-east-1.amazonaws.com/projects");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw API response:", data);

    let projects = data;

    if (!Array.isArray(projects) && typeof data.body === "string") {
      projects = JSON.parse(data.body);
    }

    if (!Array.isArray(projects)) {
      throw new Error("API response is not an array of projects.");
    }

    console.log("Projects loaded:", projects);
    renderProjects(projects);
  } catch (error) {
    console.error("Error loading projects:", error);

    const container = document.getElementById("one");
    container.innerHTML = `
      <section>
        <div class="content">
          <div class="inner">
            <h2>Projects unavailable</h2>
            <p>There was a problem loading project data.</p>
          </div>
        </div>
      </section>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadProjects);