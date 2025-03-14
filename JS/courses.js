document.addEventListener("DOMContentLoaded", () => {
  const coursesContainer = document.getElementById("coursesContainer");
  const logoutBtn = document.getElementById("logoutBtn");

  // Course data
  const courses = [
    {
      title: "Coding 101",
      description: "Learn the basics of programming.",
      image: "../Images/coding-101.jpg", // ✅ Ensure correct path
    },
    {
      title: "Financial Literacy",
      description: "Master financial skills and budgeting.",
      image: "../Images/financial-literacy.jpg", // ✅ Ensure correct path
    },
    {
      title: "Math - Integrals",
      description: "Understand integral calculus step by step.",
      image: "../Images/math-integrals.jpg", // ✅ Ensure correct path
    },
    {
      title: "Entrepreneurship",
      description: "Build and grow your own business.",
      image: "../Images/entrepreneurship.jpg", // ✅ Ensure correct path
    },
    {
      title: "Public Speaking 101",
      description: "Improve your communication and speech skills.",
      image: "../Images/public-speaking.jpg", // ✅ Ensure correct path
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

  // Handle course click - Redirect to lesson page
  if (coursesContainer) {
    coursesContainer.addEventListener("click", (event) => {
      const target = event.target.closest(".course-card");
      if (target) {
        window.location.href = "lesson.html"; // ✅ Correct path since `lesson.html` is inside `HTML/`
      }
    });
  }

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("You have been logged out.");
      window.location.href = "login.html"; // ✅ Correct path since `login.html` is inside `HTML/`
    });
  }
});
