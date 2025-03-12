document.addEventListener("DOMContentLoaded", () => {
  const coursesContainer = document.getElementById("coursesContainer");
  const logoutBtn = document.getElementById("logoutBtn");

  // Course data
  const courses = [
    {
      title: "Coding 101",
      description: "Learn the basics of programming.",
      image: "../Assets/coding-101.jpg",
    },
    {
      title: "Financial Literacy",
      description: "Master financial skills and budgeting.",
      image: "../Assets/financial-literacy.jpg",
    },
    {
      title: "Math - Integrals",
      description: "Understand integral calculus step by step.",
      image: "../Assets/math-integrals.jpg",
    },
    {
      title: "Entrepreneurship",
      description: "Build and grow your own business.",
      image: "../Assets/entrepreneurship.jpg",
    },
    {
      title: "Public Speaking 101",
      description: "Improve your communication and speech skills.",
      image: "../Assets/public-speaking.jpg",
    },
  ];

  // Populate courses dynamically
  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button class="enroll-btn">Enroll Now</button>
        `;

    coursesContainer.appendChild(courseCard);
  });

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
  }
});
