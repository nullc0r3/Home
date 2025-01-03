document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("aboutBtn");
    const skillsBtn = document.getElementById("skillsBtn");

    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");

    aboutSection.classList.add("active");
    skillsSection.classList.remove("active");

    function toggleTabs(target) {
        if (target === 'about') {
            aboutSection.classList.add("active");
            skillsSection.classList.remove("active");
            aboutBtn.classList.add("active");
            skillsBtn.classList.remove("active");
        } else if (target === 'skills') {
            skillsSection.classList.add("active");
            aboutSection.classList.remove("active");
            skillsBtn.classList.add("active");
            aboutBtn.classList.remove("active");
        }
    }

    aboutBtn.addEventListener("click", () => toggleTabs('about'));
    skillsBtn.addEventListener("click", () => toggleTabs('skills'));
});
