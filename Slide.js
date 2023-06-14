const imgSlide1E = document.getElementById("imgSlide1");
const imgSlide2E = document.getElementById("imgSlide2");
const imgSlide3E = document.getElementById("imgSlide3");

const click1E = document.getElementById("click1");
const click2E = document.getElementById("click2");
const click3E = document.getElementById("click3");

const imgMain1E = document.getElementById("imgMain1");
const imgMain2E = document.getElementById("imgMain2");
const imgMain3E = document.getElementById("imgMain3");

const setimgE = document.getElementById("setimg");
const setimg1E = document.getElementById("setimg1");
const setimg2E = document.getElementById("setimg2");
const setimg3E = document.getElementById("setimg3");

const MyProfileEl = document.getElementById("MyProfile");
const titleimageEL = document.getElementById("titleimage");
const historypersonalEL = document.getElementById("historypersonal");
const educationEL = document.getElementById("education");
const certificateEL = document.getElementById("certificate");
const projectEL = document.getElementById("project");

const message1 =
  "รูปภาพขณะเป็นตัวแทนประจำเซคเรียนขึ้นนำเสนอผลงานในงานสัมมนาและงานนำเสนอผลงาน 'make Life ให้ Beautiful' โดยมีวิทยากรเป็นคุณ 'ณัฐชา คุ้มวงษ์ดี' (Senior markeing executive บริษัทเอฟเวอร์พิงค์)";

const linkImage1 = [
  "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/345654175_567335771933198_532647323781512923_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFEfi8uQjDVstk3wkJ0CSj-DSypacJjkJINLKlpwmOQkmlQOZgW-cp7tT77vhkMcqmU1OrL2B7i5nKCwLdGKs-r&_nc_ohc=mRa7_nC4Vb8AX8FX7pU&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfCEdDIAVL5Z3Is-IkuKJJcdtj5JOCvSlxp_O7E6GWQCKw&oe=64874201",
  "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/345876150_3408829226023395_6892781101989006146_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVG6Cmh8_ONrsqasSEX62pGXnBDw30Ug0ZecEPDfRSDf__Bc1-jXctQe4KneV6vDNh-mq7jcNEgFD5u4wFEcmq&_nc_ohc=2cq1mk6LIR0AX9pO7eN&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfBAVU3mvpczj0uUiwEfIOufTjyYyhYcsE5zcmL8mg7UmQ&oe=6487F036",
  "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/346112974_288147196985275_6595936766585058630_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFS3LO-SVCEpfkIRlrzgyd_TlDwocrLeR1OUPChyst5HY2EU-NvSFoX-y5B-tn1gGxKTSxtq8CnJay74Fl4i3yF&_nc_ohc=M3lsKG8uI9AAX-2RHsT&_nc_ht=scontent.fbkk22-6.fna&oh=03_AdS1oE2R9GBbkQoTqfah3qobu7Lp5lAyK5Z8oJHiXQ7ZPg&oe=6491F23E",
];

const message2 =
  "รูปภาพขณะทำกิจกรรม Openhouse 2022 ของภาควิชาวิศวกรรมคอมพิวเตอร์ วิทยาลัยวิศวกรรมศาสตร์ [ประจำฐาน Computer Network]";

const linkImage2 = ["/img1/2-2.jpg", "/img1/2-3.jpg"];
const message3 =
  "รูปภาพขณะทำกิจกรรม Workshop ของภาควิชาวิศวกรรมคอมพิวเตอร์ วิทยาลัยวิศวกรรมศาสตร์ ให้นักเรียนจากโรงเรียนอัสสัมชัญ ศรีราชา [ประจำฐาน Computer Network]";

const linkImage3 = ["/img1/0-1.jpg", "/img1/1.jpg", "/img1/2.jpg"];

let time;
let countnumber = 2;
let countimgmain = 1;

function addop0formain() {
  imgSlide1E.classList.add("op0");
  imgSlide2E.classList.add("op0");
  imgSlide3E.classList.add("op0");
  click1E.classList.remove("flextwo");
  click2E.classList.remove("flextwo");
  click3E.classList.remove("flextwo");
}

function count() {
  if (countnumber == 1) {
    addop0formain();
    titleimageEL.title =
      "The picture shows me studying at Suankularb Wittayalai Nonthaburi School It was taken when I was receiving the Nonthaburi Suankularb Diamond Award, which is given to students who have made contributions and sacrifices for the benefit of the community";
    imgSlide1E.classList.remove("op0");
    click1E.classList.add("flextwo");
  } else if (countnumber == 2) {
    addop0formain();
    titleimageEL.title =
      "รูปภาพขณะเป็นตัวแทนประจำเซคเรียนขึ้นนำเสนอผลงานในงานสัมมนาและงานนำเสนอผลงาน 'make Life ให้ Beautiful' โดยมีวิทยากรเป็นคุณ 'ณัฐชา คุ้มวงษ์ดี' (Senior markeing executive บริษัทเอฟเวอร์พิงค์)";
    imgSlide2E.classList.remove("op0");
    click2E.classList.add("flextwo");
  } else {
    addop0formain();
    imgSlide3E.classList.remove("op0");
    click3E.classList.add("flextwo");
    countnumber = 0;
  }
  countnumber++;
}

function slideimage() {
  time = setInterval(count, "6000");
}

function addop0forSelect() {
  setimg1E.classList.add("op0");
  setimg2E.classList.add("op0");
  setimg3E.classList.add("op0");
}

function select() {
  if (countimgmain == 1) {
    addop0forSelect();
    setimgE.title = message1;
    setimg1E.classList.remove("op0");
  } else if (countimgmain == 2) {
    addop0forSelect();
    setimgE.title = message2;
    setimg2E.classList.remove("op0");
  } else {
    addop0forSelect();
    setimgE.title = message3;
    setimg3E.classList.remove("op0");
  }
}

function countdiff() {
  --countimgmain;
  countimgmain == 0 ? (countimgmain = 3) : countimgmain;
  select();
}
function countplus() {
  countimgmain++;
  countimgmain == 4 ? (countimgmain = 1) : countimgmain;
  select();
}

function presentmain1() {
  imgMain1E.innerHTML += `
  <div class="flexreal flex-4 h w" onclick="countdiff()">
    <i class="fa-solid fa-chevron-left fa-2xl chevron"></i>
  </div>`;
  linkImage1.forEach((value) => {
    imgMain1E.innerHTML += `
    <div style="background: url('${value}')" class='flex-15 h45 img-size'
    ></div>`;
  });
  imgMain1E.innerHTML += `
  <div class='flexreal flex-4 h w'  onclick="countplus()">
    <i class="fa-solid fa-chevron-right fa-2xl chevron"></i></div>`;
}
function presentmain2() {
  imgMain2E.innerHTML += `
  <div class="flexreal flexthree h w" onclick="countdiff()">
    <i class="fa-solid fa-chevron-left fa-2xl chevron"></i>
  </div>`;
  linkImage2.forEach((value) => {
    imgMain2E.innerHTML += `
    <div style="background: url('${value}')" class='flex-15 h45 img-size'
    ></div>`;
  });
  imgMain2E.innerHTML += `
  <div class='flexreal flexthree h w'  onclick="countplus()">
    <i class="fa-solid fa-chevron-right fa-2xl chevron"></i></div>`;
}
function presentmain3() {
  imgMain3E.innerHTML += `
  <div class="flexreal flex-4 h w" onclick="countdiff()">
    <i class="fa-solid fa-chevron-left fa-2xl chevron"></i>
  </div>`;
  linkImage3.forEach((value) => {
    imgMain3E.innerHTML += `
    <div style="background: url('${value}')" class='flex-15 h45 img-size' 
    ></div>`;
  });
  imgMain3E.innerHTML += `
  <div class='flexreal flex-4 h w'  onclick="countplus()">
    <i class="fa-solid fa-chevron-right fa-2xl chevron"></i></div>`;
}

click1E.addEventListener("click", () => {
  countnumber = 1;
  count();
});
click2E.addEventListener("click", () => {
  countnumber = 2;
  count();
});
click3E.addEventListener("click", () => {
  countnumber = 3;
  count();
});

historypersonalEL.addEventListener("click", () => {
  clearInterval(time);
});
educationEL.addEventListener("click", () => clearInterval(time));
certificateEL.addEventListener("click", () => clearInterval(time));
projectEL.addEventListener("click", () => clearInterval(time));

MyProfileEl.addEventListener("click", slideimage);

select();
presentmain1();
presentmain2();
presentmain3();
slideimage();
titleimageEL.title =
  "The picture shows me studying at Suankularb Wittayalai Nonthaburi School It was taken when I was receiving the Nonthaburi Suankularb Diamond Award, which is given to students who have made contributions and sacrifices for the benefit of the community";
