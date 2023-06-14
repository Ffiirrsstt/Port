const CertificatepageEl = document.getElementById("Certificatepage");
const cerReultEl = document.getElementById("cerReult");

const navEl = document.getElementById("nav");

const selectcertificateEl = document.getElementById("selectcertificate");

const viewfullEl = document.getElementById("viewfull");
const imgscoreEl = document.getElementById("imgscore");
const closeviewfullcerEl = document.getElementById("closeviewfullcer");

const allcerEl = document.getElementById("allcer");
const lancerEl = document.getElementById("lancer");
const toolcerEl = document.getElementById("toolcer");

const txt = [
  "Learn Python Language Basics and Fundamental Data Processing",
  "Learn Python: Data Processing with NumPy and Matplotlib",
  "เขียนโปรแกรมพื้นฐาน Python",
  "Fundamental Web Dev with HTML5 & CSS3",
  "สร้างเว็บไซต์จากเริ่มต้นจนถึงมือโปร ด้วย HTML5/CSS3/Javascript",
  "The rank of Dev 3 on the borntodev website is 788th",
  "Upgrading your English: Vocabulary Building for Reading",
  "GitHub for Developer",
  "ChatGPT for Developers",
  "ChatGPT Basic & Update",
  "เพิ่มประสิทธิภาพในการทำงานด้วย Chat GPT เรียนรู้เทคนิคการใช้งาน AI เพื่อให้การทำงานของคุณง่ายมากขึ้น",
  "Basic React 1: ความรู้พื้นฐานสำหรับ Components และ JSX",
  "Basic React 2: การจัดการ State และ Events",
];
const form = [
  "Chulalongkorn University",
  "Chulalongkorn University",
  "MARKPRUET",
  "BornToDEV",
  "FutureSkill",
  "BornToDEV",
  "Chulalongkorn University",
  "BornToDEV",
  "BornToDEV",
  "FutureSkill",
  "FutureSkill",
  "FutureSkill",
  "FutureSkill",
];
const date = [
  "13 May 2023",
  "15 May 2023",
  "29 August 2022",
  "2 June 2023",
  "22 May 2023",
  "17 May 2023",
  "15 May 2023",
  "19 May 2023",
  "17 May 2023",
  "16 May 2023",
  "15 May 2023",
  "22 May 2023",
  "28 May 2023",
];
const classurl = [
  "urlcer1lp",
  "urlcer2lp",
  "urlcer3lp",
  "urlcer1lh",
  "urlcer2lh",
  "urlcer1",
  "urlcer1e",
  "urlcer1t",
  "urlcer2t",
  "urlcer3t",
  "urlcer4t",
  "urlcer5t",
  "urlcer6t",
];

let changecount = false;
let forchangeimg;

function cerReulttotal() {
  cerReultEl.innerHTML = "";
  let max = classurl.length;
  let count = 0;
  if (changecount) {
    selectcertificateEl.value == "tool" ? (count = 7) : (max = 7);
  }
  for (count; count < max; count++) {
    cerReultEl.innerHTML += `<div class="boxs flexreal w h45 mb3">
      <div class="flexone w h">
          <div id=${count} class="${classurl[count]} w h img-size contain"></div>
      </div>
      
        <div class="bg-one flexone h w flexreal flexcol around p2">
          <h3 class="font_30 txt-center">
              ${txt[count]}
          </h3>
          <h3 class="font_30 txt-center ">
              ${form[count]}
          </h3>
          <h4 class="font_25 noneB mb2 txt-center">
              ${date[count]}
          </h4>
          <button title="Click the button to enlarge the image." 
          class="font_25 txt-center btncer" 
          onclick='forimagefull(document.getElementById(${count}).classList[0])'>
              View Full Screen Image
          </button>
      </div>
  </div>`;
  }
}

function forimagefull(url) {
  forchangeimg = url;
  imgscoreEl.classList.add(url);
  fortoggle();
}

function fortoggle() {
  viewfullEl.classList.toggle("none");
  navEl.classList.toggle("none");
  // CertificatepageEl.classList.toggle("none");
}

function call() {
  changecount = true;
  cerReulttotal();
}

function removeboxs() {
  allcerEl.classList.remove("boxs");
  toolcerEl.classList.remove("boxs");
  lancerEl.classList.remove("boxs");
}

selectcertificateEl.addEventListener("change", () => {
  selectcertificateEl.value !== "all"
    ? (changecount = true)
    : (changecount = false);
  if (selectcertificateEl.value == "all") {
    removeboxs();
    allcerEl.classList.add("boxs");
  } else if (selectcertificateEl.value == "tool") {
    removeboxs();
    toolcerEl.classList.add("boxs");
  } else {
    removeboxs();
    lancerEl.classList.add("boxs");
  }
  cerReulttotal();
});
cerReulttotal();

allcerEl.addEventListener("click", () => {
  removeboxs();
  allcerEl.classList.add("boxs");
  selectcertificateEl.value = "all";
  changecount = false;
  cerReulttotal();
});
toolcerEl.addEventListener("click", () => {
  removeboxs();
  toolcerEl.classList.add("boxs");
  selectcertificateEl.value = "tool";
  call();
});
lancerEl.addEventListener("click", () => {
  removeboxs();
  lancerEl.classList.add("boxs");
  selectcertificateEl.value = "language";
  call();
});
closeviewfullcerEl.addEventListener("click", () => {
  imgscoreEl.classList.remove(forchangeimg);
  fortoggle();
});
