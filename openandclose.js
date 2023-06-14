const historypersonalE = document.getElementById("historypersonal");
const PersonalHistoryE = document.getElementById("PersonalHistory");

const educationE = document.getElementById("education");
const educationpageE = document.getElementById("educationpage");

const certificateE = document.getElementById("certificate");
const CertificatepageE = document.getElementById("Certificatepage");

const projectE = document.getElementById("project");
const ProjectE = document.getElementById("Project");

const pageMainE = document.getElementById("pageMain");
const MyProfileE = document.getElementById("MyProfile");

const backviewfullEl = document.getElementById("backviewfull");
const nextviewfullEl = document.getElementById("nextviewfull");
const closeviewfullEl = document.getElementById("closeviewfull");
const closeviewfullcerE = document.getElementById("closeviewfullcer");

const navE = document.getElementById("nav");

function removeall() {
  pageMainE.classList.add("none");
  navE.classList.remove("fixed");
  PersonalHistoryE.classList.add("none");
  educationpageE.classList.add("none");
  CertificatepageE.classList.add("none");
  ProjectE.classList.add("none");
}

function openmain() {
  pageMainE.classList.remove("none");
  navE.classList.add("fixed");
}

MyProfileE.addEventListener("click", () => {
  removeall();
  openmain();
});
historypersonalE.addEventListener("click", () => {
  removeall();
  PersonalHistoryE.classList.remove("none");
});
educationE.addEventListener("click", () => {
  removeall();
  educationpageE.classList.remove("none");
  closeviewfullcerE.classList.add("none");
  backviewfullEl.classList.remove("none");
  nextviewfullEl.classList.remove("none");
  closeviewfullEl.classList.remove("none");
});
certificateE.addEventListener("click", () => {
  removeall();
  CertificatepageE.classList.remove("none");
  closeviewfullcerE.classList.remove("none");
  backviewfullEl.classList.add("none");
  nextviewfullEl.classList.add("none");
  closeviewfullEl.classList.add("none");
});
projectE.addEventListener("click", () => {
  removeall();
  ProjectE.classList.remove("none");
});
