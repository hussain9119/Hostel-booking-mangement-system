const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav?.classList.remove("open"));
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent("CampusNest Hostel Enquiry - " + data.get("name"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") || "Not provided"}\nRoom preference: ${data.get("room")}\nMessage: ${data.get("message") || "No additional message"}`
    );
    document.getElementById("formMessage").textContent = "Opening your email app with the enquiry details…";
    window.location.href = `mailto:hello@campusnest.example?subject=${subject}&body=${body}`;
  });
}