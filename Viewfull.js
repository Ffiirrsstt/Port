const Viewuniversityel = document.getElementById("Viewuniversity");
const Viewschoolel = document.getElementById("Viewschool");
const educationel = document.getElementById("educationpage");

const navel = document.getElementById("nav");

const viewfullel = document.getElementById("viewfull");
const imgscoreel = document.getElementById("imgscore");

const closeviewfullel = document.getElementById("closeviewfull");
const backviewfullel = document.getElementById("backviewfull");
const nextviewfullel = document.getElementById("nextviewfull");

const educationuniel = document.getElementById("educationuni");
const educationschoolel = document.getElementById("educationschool");

const titleeducationuniel = document.getElementById("titleeducationuni");
const titleeducationschoolel = document.getElementById("titleeducationschool");

let uniORschool;
let timedelay;

function noneimage() {
  imgscoreel.classList.remove("urlschool1");
  imgscoreel.classList.remove("urlschool2");
  imgscoreel.classList.remove("urluni1");
  imgscoreel.classList.remove("urluni2");
}

function openimage() {
  viewfullel.classList.toggle("none");
  // educationel.classList.toggle("none");
  // navel.classList.toggle("none");
}

function close() {
  openimage();
  noneimage();
}

function check() {
  if (uniORschool) {
    if (imgscoreel.classList.contains("urlschool1")) {
      noneimage();
      imgscoreel.classList.add("urlschool2");
    } else {
      noneimage();
      imgscoreel.classList.add("urlschool1");
    }
  } else {
    if (imgscoreel.classList.contains("urluni1")) {
      noneimage();
      imgscoreel.classList.add("urluni2");
    } else {
      noneimage();
      imgscoreel.classList.add("urluni1");
    }
  }
}

Viewschoolel.addEventListener("click", () => {
  imgscoreel.classList.add("urlschool1");
  uniORschool = true;
  openimage();
});
Viewuniversityel.addEventListener("click", () => {
  imgscoreel.classList.add("urluni1");
  uniORschool = false;
  openimage();
});

titleeducationuniel.addEventListener("click", () => {
  educationuniel.classList.toggle("none");
  titleeducationuniel.classList.toggle("m0");
  titleeducationuniel.classList.toggle("bor-bottom");
});

titleeducationschoolel.addEventListener("click", () => {
  educationschoolel.classList.toggle("none");
  titleeducationschoolel.classList.toggle("m0");
  titleeducationschoolel.classList.toggle("bor-bottom");
});

closeviewfullel.addEventListener("click", close);
backviewfullel.addEventListener("click", check);
nextviewfullel.addEventListener("click", check);
