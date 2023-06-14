const txtproject1ele = document.getElementById("txtproject1");
const hide1ele = document.getElementById("hide1");

const txtproject2ele = document.getElementById("txtproject2");
const hide2ele = document.getElementById("hide2");

const txtproject3ele = document.getElementById("txtproject3");
const hide3ele = document.getElementById("hide3");

const txtproject4ele = document.getElementById("txtproject4");
const hide4ele = document.getElementById("hide4");

const txtproject5ele = document.getElementById("txtproject5");
const hide5ele = document.getElementById("hide5");

const txtproject6ele = document.getElementById("txtproject6");
const hide6ele = document.getElementById("hide6");

const txtproject7ele = document.getElementById("txtproject7");
const hide7ele = document.getElementById("hide7");

const txtproject8ele = document.getElementById("txtproject8");
const hide8ele = document.getElementById("hide8");

const hidefigmaele = document.getElementById("hidefigma");
const txtprojectfigmaele = document.getElementById("txtprojectfigma");

const forshowimgprojectele = document.getElementById("forshowimgproject");
const showprojectele = document.getElementById("showproject");
const closeviewfullproele = document.getElementById("closeviewfullpro");

const navprojectele = document.getElementById("navproject");
const hidenavprojectele = document.getElementById("hidenavproject");
const Shownavprojectele = document.getElementById("Shownavproject");

const imgbymeele = document.getElementById("imgbyme");
const nextele = document.getElementById("next");
const preele = document.getElementById("pre");

let waitclose;
const link = {
  r4: [
    "url4-1",
    "url4-2",
    "url4-3",
    "url4-4",
    "url4-6",
    "url4-7",
    "url4-9",
    "url4-10",
    "url4-11",
    "url4-12",
    "url4-13",
    "url4-14",
    "url4-15",
    "url4-16",
    "url4-17",
    "url4-18",
    "url4-19",
    "url4-20",
    "url4-21",
    "url4-22",
    "url4-23",
  ],
  r2: [
    "url2-4",
    "url2-2",
    "url2-3",
    "url2-1",
    "url2-5",
    "url2-8",
    "url2-9",
    "url2-6",
    "url2-10",
    "url2-11",
    "url2-12",
    "url2-13",

    "url2-15",
    "url2-16",
    "url2-14",
    "url2-17",
    "url2-18",
    "url2-19",
    "url2-20",
    "url2-21",
  ],
  r8: [
    "url8-4",
    "url8-3",
    "url8-5",
    "url8-2",
    "url8-1",
    "url8-7",
    "url8-8",
    "url8-6",
    "url8-14",
    "url8-13",
    "url8-11",
    "url8-12",
  ],
  r3: [
    "url3-1",
    "url3-4",
    "url3-2",
    "url3-3",
    "url3-5",
    "url3-8",
    "url3-9",
    "url3-6",
    "url3-10",
    "url3-11",
    "url3-12",
    "url3-13",

    "url3-15",
    "url3-16",
    "url3-14",
    "url3-17",
    "url3-18",
  ],
  r1: [
    "url1-1",
    "url1-5",
    "url1-3",
    "url1-4",
    "url1-9",
    "url1-7",
    "url1-6",
    "url1-2",
    "url1-10",
    "url1-8",
    "url1-11",
    // "url1-14",

    "url1-13",
    "url1-15",
    "url1-23",

    "url1-18",
    "url1-22",
    "url1-25",
    "url1-16",
    "url1-20",
    "url1-24",
    "url1-17",
    "url1-19",
    "url1-21",
  ],
  figma: [
    "urlma-1",
    "urlma-2",
    "urlma-4",
    "urlma-5",
    "urlma-3",
    "urlma-6",
    "urlma-9",
    "urlma-10",
    "urlma-11",
    "urlma-12",
    "urlma-8",
    "urlma-7",
    "urlma-14",
    "urlma-13",
    "urlma-15",
    "urlma-17",
    "urlma-19",
    "urlma-16",
    "urlma-18",
    "urlma-20",
  ],
  art: [
    "url50916",
    "url50913",
    "url50902",
    "url50912",
    "url50915",
    "url50911",
    "url50903",
    "url50914",
    "url50909",
    "url50910",
    "url50904",
    "url50907",
    "url50906",
    "url50905",
    "url50908",
  ],
  r7: ["url7-4", "url7-1", "url7-2", "url7-7", "url7-5", "url7-8", "url7-6"],
  r5: ["url5-1", "url5-2", "url5-3", "url5-5", "url5-4", "url5-6"],
  r10: [
    "url10-3",
    "url10-3",
    "url10-1",
    "url10-2",
    "url10-7",
    "url10-11",
    "url10-4",
  ],
};
const text = {
  r4: [
    `Song Name Typing Game with Difficulty Levels<br>
The game features a mode selection and difficulty system. You choose your favorite artist, and a
random song name will be generated. Your task is to type the song name correctly within a
specified time frame, which varies based on the selected difficulty level and mode.<br>

Each mode is accompanied by a beautifully themed interface.`,
    `Once the player has entered the complete answer, they can press the button to save and start the
    game.`,
    `The game will start by counting down three seconds
    to
    prepare.`,
    `The randomly generated song name that you
    type
    will be displayed and stored as part of your word history.
    prepare.`,
    `You can click on the settings icon to change
    the
    mode,
    difficulty level, or select the artist whose song names you want to generate randomly.`,
    `This is the settings section for changing the difficulty level.`,
    `This is a scoreboard that keeps track of your
    scores, categorized by mode and difficulty level.`,
    `With the design intention in mind, I have
    designed
    the toolbar for exiting this scoreboard window to dynamically change according to the selected
    statistics mode.`,
    `You can open both the statistics and settings windows simultaneously, allowing you to view the
    statistics and make configuration changes concurrently.`,
    `On the left side is the page displaying the complete word history, which is designed with different
    appearances for each mode to match the themes.<br>

    On the right side is the main page, where you can find the button to clear all the recorded word
    history. The clear button is located next to the button for opening the page that contains all the
    saved
    word history.`,
    `This is the endgame screen, which appears when the game is over and the
    time has run out.
    Within
    the endgame
    screen, it will display a report of the mode played, the difficulty level, and the maximum
    achievable score
    within the game. If your score surpasses your previous high score, the area on the right side
    that shows the
    highest score achieved within each mode will be updated accordingly.`,
  ],
  r2: [
    `Income and Expense Calculator Program
<br>
    On the left-hand side, it displays the total amount, including the overall sum of all transactions, total income, and total expenses. The right-hand side is the input and display area for the latest transaction entries. The income and expense system allows for adjustable font sizes, including small, medium, and large sizes, to enhance readability and flexibility for different devices displaying the website.`,
    `In the transaction list, income transactions will be represented by a green symbol, while expense transactions will be represented by a red symbol. Additionally, the most recently added transaction will have a distinct colored bar to easily differentiate it from previous entries.`,
    `If there are more transactions, the old transactions will still remain. You can use a scroll to view the data or click on a button to see all transactions.`,
    `The system supports deleting individual transactions by tapping or clicking on the transaction entry. A confirmation window will appear to confirm the deletion. <br>
    For the most recent transaction that the user wishes to delete, it will have a slightly faded colored bar and a distinct symbol to make it easier for the user to identify which transaction they are about to delete.`,
    `In addition to the distinction for the most recent transaction, the other transaction entries will also have different colored bars to indicate which transactions are marked for deletion. Income transactions will have a green-colored bar, while expense transactions will have a red-colored bar.
<br>
    Apart from deleting individual transaction entries, the system also supports clearing all transactions at once by clicking on the 'Clear all transactions' button.`,
    `This is an example of how the display appears on different devices with varying sizes.`,
  ],
  r8: [
    `
Time Calculation Program in Python<br>
The usage of the program is as follows:
<br><br>
- Enter the initial time, specifying whether it is in AM or PM.<br>
- Enter the number of hours and minutes to be added to the initial time.<br>
- Finally, enter the starting date for the calculation.`,
    `In case you don't want to know the result related to the calculation of the common day, you can enter the number '0'.`,
    `In cases where the result of adding the specified number of hours and minutes to the initial time causes a change in the day, such as transitioning to the next day, the program will calculate and indicate the updated date as shown in the example image.`,
    `The result for cases where there is no change in the day or the initial time range is calculated by adding the specified number of hours and minutes will not cause a change in the day.`,
    `Example of entering data or input in an incorrect format and the response to entering data in an incorrect format.`,
    `The system will notify the user that they have entered an incorrect format. In the system notification, it will provide the correct format for input before displaying the question and a blank space for re-entering the data.`,
  ],
  r3: [
    `Music search system by entering the artist's name, band, or song title. The system will search for songs by the artist or band.`,
    `Displaying results on different devices with varying sizes.`,
    `There are two search points available. The first one is located at the topmost stationary section of the website, designed to remain fixed and unaffected by scrolling. The second one is positioned in the upper section of the website as well but is designed to move along with the score. It is used when users want to search for information without having to scroll back up to the top of the website to use the search bar.`,
    `The search bar in the upper right-hand corner is designed to initially remain hidden. However, as the scroll reaches the point where the list of songs is being viewed, the search bar gradually fades in and becomes visible.`,
    `After performing a song search, you can click on a "Details" button to access the page displaying the detailed information of the desired song. This page will include elements such as the album cover image, song title, band/artist name, and album name. Additionally, there will be an audio player playing the song that the user is currently viewing the details of.`,
    `There is a notification window that informs the user if they have entered search details that the system cannot find any matching songs for.`,
  ],
  r1: [
    `Currency exchange system:<br>
  - It allows users to toggle between the currencies they are currently viewing.<br>
  - There is a system that displays the exchange rates between the currencies.<br>
  - Users can specify the decimal places for viewing the results of currency exchange rates.`,
    `There is a website theme customization system that is designed with various sky-themed options for different time periods.`,
    `There are different sky themes available based on the time of day, including morning, evening, and nighttime skies. Additionally, there may be sky themes that change based on weather conditions.`,
    `By default, the system is set to a default theme and the decimal places for the currency exchange rates are configured to display up to 6 decimal places.`,
    `When you change the theme, the display and calculations will remain the same. However, when you change the currency settings, both the exchange rate information displayed below and the results of currency exchange will be updated immediately.`,
    `When you change the decimal places setting, both the decimal places in the results and the exchange rate ratios will be updated accordingly.`,
  ],
  figma: [
    `This is the design of an application created using Figma. The design topic is a car-related store app, featuring products related to automobiles. The image above represents the home page of the store app.`,
    `This is a section of the storefront category page in the application. It displays various categories, and users can click on them to access and use them.`,
    `Once you select a category in the store, you can click on the items to make a purchase or view the details of the desired product.`,
    `In the product page, upon clicking, important information will be displayed. There will be buttons for making a purchase and adding items to the cart. The design of the purchase button will be eye-catching with vibrant colors to attract the user's attention and make it easy to use.`,
    `If users are interested in a product but still have doubts and require additional information to make an informed decision, they can click on a button to read more details about that particular item.`,
    `There is a system where users can click on a three-dot icon located at the top right corner, which will trigger a popup window on the side. The information within the side panel includes shortcuts to various pages, a QR code for contacting, user profile details, and a button for logging out of the system.`,
  ],
  r7: [
    `
  Program to answer questions about COVID-19 infection statistics, specifically for the period from 12th April 2022 to 1st May 2022. The program can answer questions regarding the total number of infections, the number of infections within a specific timeframe, and statistics related to infections based on gender.`,
    `Example of using a program to ask questions in all three formats.`,
    `To inquire about the number of COVID-19 cases separated by gender, the format requires specifying the necessary answer. It can either be the total number from the first day to the last day available in the database or a specific time period that you want to know.`,
    `Example of responding to a case where the specified answer is not in the correct format.`,
    `Example of how to end the program usage and the program's response when entering '0' to stop the specified inquiries.`,
    ``,
    ``,
    ``,
    ``,
  ],
  r5: [
    `Performing addition and subtraction calculations, showing the results in a vertical format with the option to specify whether the answer should be provided or kept hidden. This task focuses on presenting the calculation methods in an organized and aesthetically pleasing manner, as well as creating conditions for using the program for practice purposes.`,
    `Example of system usage, where the program is configured with lowercase and uppercase letter settings. When the user enters data or provides answers correctly according to the format, the program will execute and display the desired response.`,
    `Example of the program's response when using the system in an incorrect format`,
    `The program is configured to allow a maximum of 5 rounds of calculations and the number of digits used for calculations must not exceed 4 digits.`,
    `Furthermore, since the program is designed for addition and subtraction only, if the user enters a multiplication or division symbol for calculations, it will be considered as providing an answer in an incorrect format.`,
  ],
  r10: [
    `A program that simulates real-time donation statistics graph, displaying the donations received per second. This program requires two input answers for usage:
    <br>
        - How long do you want to simulate the program for?<br>
        - How many seconds of recent data do you want the visualization to display?`,
    `An example simulation of the program, where the simulated donation amounts are generated randomly. In the example image, the program is set to display the data from the past twenty seconds`,
    `The program supports multiple rounds of data simulation. Therefore, if you still wish to use the system for the question section, it should be specified as 'no'.`,
    `Sample image for usage when typing in the correct format but with differences in lowercase and uppercase letters, which can still function normally.`,
    `For this simulation, the donation amounts will be in USD ($), and the time unit will be counted in seconds.

    In the program header section, on the right-hand side, there will be the current total donation amount updated in real-time.`,
  ],
};
let countadd = 0;
function imgskillbyme(forlink) {
  let ID = [];
  for (let countID = 0; countID < 11; countID++) {
    ID.push(Math.random() * 100);
  }
  value = `
   <div class="flexreal w h">
       <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${
    forlink[0 + countadd]
  } w h img-size contain flexone"></div>
       <div id='id${ID[1]}' onclick='imgview(${ID[1]})' class="${
    forlink[1 + countadd]
  } w h img-size contain flexone"></div>
       <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${
    forlink[2 + countadd]
  } w h img-size contain flexone"></div>
       <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${
    forlink[3 + countadd]
  } w h img-size contain flexone"></div>
       <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${
    forlink[4 + countadd]
  } w h img-size contain flexone"></div>
    </div>`;
  countadd !== 10
    ? nextele.classList.remove("none")
    : nextele.classList.add("none");
  countadd == 0
    ? preele.classList.add("none")
    : preele.classList.remove("none");

  return value;
}

function countaddplus() {
  countadd += 5;
  callimgele();
}
function countadddiff() {
  countadd -= 5;
  callimgele();
}

function imgview(IDforimg) {
  forshowimgprojectele.classList.remove("none");
  waitclose = document.getElementById(`id${IDforimg}`).classList[0];
  showprojectele.classList.add(waitclose);
}

function txtfun(forlink, fortxt) {
  let ID = [];
  for (let countID = 0; countID < 12; countID++) {
    ID.push(Math.random() * 100);
  }
  value = `
 <div class="flexreal">
     <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${forlink[0]} w h45 img-size contain"></div>
     <div class="BOX flexreal ml1 bg-one bor30">
         <h4 class="font_25 noneB">
         ${fortxt[0]}
         </h4>
     </div>
 </div>
 <div class="grid grid3">
     <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${forlink[2]} w h img-size contain "></div>
     <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${forlink[3]} w h img-size contain "></div>
     <div id='id${ID[1]}' onclick='imgview(${ID[1]})'class="${forlink[1]} w h img-size contain "></div>
 </div>
 <div class="flexreal mb2">
     <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${forlink[4]} w h70 img-size contain "></div>
     <div class="BOX font_25 flexreal noneb bg-one bor30 ml1">
     ${fortxt[1]}
     </div>
     </div>
     <div class="grid grid2 h">
     <div id='id${ID[5]}' onclick='imgview(${ID[5]})' class="${forlink[5]} w h img-size contain "></div>
     <div id='id${ID[6]}' onclick='imgview(${ID[6]})' class="${forlink[6]} w h img-size contain "></div>
     </div>
     <div class="BOX bg-one flexreal mt5 bor30 font_25 noneb">
     ${fortxt[2]}
     </div>
     <div class="flexreal mb2">
     <div id='id${ID[7]}' onclick='imgview(${ID[7]})' class="${forlink[7]} w h70 img-size contain flextwo"></div>
     <div class="BOX bg-one flexreal mt5 bor30 font_25 ml1 flexone noneb">
     ${fortxt[3]}
     </div>
     </div>
     <div class="grid grid3 h">
     <div id='id${ID[8]}' onclick='imgview(${ID[8]})' class="${forlink[8]} w h img-size contain "></div>
     <div id='id${ID[9]}' onclick='imgview(${ID[9]})' class="${forlink[9]} w h img-size contain "></div>
     <div id='id${ID[10]}' onclick='imgview(${ID[10]})' class="${forlink[10]} w h img-size contain "></div>
     </div>
     <div class="BOX bg-one flexreal mt2 mb2 bor30 font_25 noneb">
     ${fortxt[4]}
     </div>
     <div class="flexreal mb2">
     <div id='id${ID[11]}' onclick='imgview(${ID[11]})' class="${forlink[11]} w h70 img-size contain flextwo"></div>
     <div class="BOX bg-one flexreal bor30 font_25 ml1 flexone noneb">
     ${fortxt[5]}
     </div>
     </div>`;
  return value;
}

function txttwo(forlink, fortxt) {
  let ID = [];
  for (let countID = 0; countID < 10; countID++) {
    ID.push(Math.random() * 100);
  }
  let value = `
     <div class="mt2 grid grid2 h">
     <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${forlink[12]} w h img-size contain "></div>
     <div id='id${ID[1]}' onclick='imgview(${ID[1]})' class="${forlink[13]} w h img-size contain "></div>
     </div>
     <div class="BOX bg-one flexreal mt2 mb2 bor30 font_25 noneb">
     ${fortxt[6]}
     </div>
     <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${forlink[13]} w h70 img-size contain mb2"></div>
     <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${forlink[14]} w h70 img-size contain mb2 flextwo"></div>
     <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${forlink[15]} w h70 img-size contain mb2"></div>
     <div class="BOX bg-one flexreal mt5 mb2 bor30 font_25 noneb">
     ${fortxt[7]}
     </div>
     <div class="flexreal">
     <div id='id${ID[5]}' onclick='imgview(${ID[5]})' class="${forlink[16]} w h70 img-size contain flextwo"></div>
     <div class="BOX bg-one flexreal bor30 font_25 ml1 flexone noneb">
     ${fortxt[8]}   
     </div>
     </div>
     <div class="grid grid2 mt2">
     <div id='id${ID[6]}' onclick='imgview(${ID[6]})' class="${forlink[17]} w h img-size contain "></div>
     <div id='id${ID[7]}' onclick='imgview(${ID[7]})' class="${forlink[18]} w h img-size contain "></div>
     </div>
     <div class="BOX bg-one flexreal mt5 mb2 bor30 font_25 noneb">
     <p>
     ${fortxt[9]}   
     </p>
     </div>
     <div class="flexreal w mt5 mb5">
     <div class="grid2col flextwo">
     <div id='id${ID[8]}' onclick='imgview(${ID[8]})' class="${forlink[19]} w h45 img-size contain mb2"></div>
     <div id='id${ID[9]}' onclick='imgview(${ID[9]})' class="${forlink[20]} w h45 img-size contain "></div>
     </div>
     <div class="BOX bg-one flexreal bor30 flexone">
     <p class="font_25 noneb ml1">
     ${fortxt[10]}   
         </p>
     </div>
 </div>`;
  return value;
}
function txtthree(forlink, fortxt) {
  let ID = [];
  for (let countID = 0; countID < 12; countID++) {
    ID.push(Math.random() * 100);
  }
  let value = `
       <div class="mt2 grid grid2 h">
       <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${forlink[0]} w h img-size contain "></div>
       <div id='id${ID[1]}' onclick='imgview(${ID[1]})' class="${forlink[1]} w h img-size contain "></div>
       </div>
       <div class="BOX bg-one flexreal mt2 mb2 bor30 font_30 noneB">
       ${fortxt[0]}
       </div>
       <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${forlink[2]} w h70 img-size contain mb2"></div>
       <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${forlink[3]} w h70 img-size contain mb2 flextwo"></div>
       <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${forlink[4]} w h70 img-size contain mb2"></div>
       <div class="BOX bg-one flexreal mt5 mb2 bor30 font_25 noneb">
       ${fortxt[1]}
       </div>
       <div class="flexreal">
       <div id='id${ID[5]}' onclick='imgview(${ID[5]})' class="${forlink[5]} w h70 img-size contain flextwo"></div>
       <div class="BOX bg-one flexreal bor30 font_25 ml1 flexone noneb">
       ${fortxt[2]}   
       </div>
       </div>
       <div class="grid grid2 mt2">
       <div id='id${ID[6]}' onclick='imgview(${ID[6]})' class="${forlink[6]} w h img-size contain "></div>
       <div id='id${ID[7]}' onclick='imgview(${ID[7]})' class="${forlink[7]} w h img-size contain "></div>
       </div>
       <div class="BOX bg-one flexreal mt5 mb2 bor30 font_25 noneb">
       <p>
       ${fortxt[3]}   
       </p>
       </div>
    <div class="flexreal w mt5 mb5">
        <div class="grid2col flextwo">
            <div id='id${ID[8]}' onclick='imgview(${ID[8]})' class="${forlink[8]} w h45 img-size contain mb2"></div>
            <div id='id${ID[9]}' onclick='imgview(${ID[9]})' class="${forlink[9]} w h45 img-size contain "></div>
        </div>
        <div class="BOX bg-one flexreal bor30 flexone">
            <p class="font_25 noneb ml1">
                ${fortxt[4]}
           </p>
       </div>
    </div>
    <div class="grid grid2 mt2">
       <div id='id${ID[10]}' onclick='imgview(${ID[10]})' class="${forlink[10]} w h img-size contain "></div>
       <div id='id${ID[11]}' onclick='imgview(${ID[11]})' class="${forlink[11]} w h img-size contain "></div>
    </div>
    <div class="BOX bg-one flexreal mt5 mb2 bor30 font_25 noneb">
       ${fortxt[5]}   
    </div>
   </div>`;
  return value;
}

function txtex(forlink, fortxt) {
  let ID = [];
  for (let countID = 0; countID < 6; countID++) {
    ID.push(Math.random() * 100);
  }
  let value = `
  <div class="grid grid3 h">
     <div id='id${ID[5]}' onclick='imgview(${ID[5]})' class="${forlink[14]} w h img-size contain "></div>
     <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${forlink[15]} w h img-size contain "></div>
     <div id='id${ID[1]}' onclick='imgview(${ID[1]})' class="${forlink[16]} w h img-size contain "></div>
     </div>
  <div class="grid grid3 h">
     <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${forlink[17]} w h img-size contain "></div>
     <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${forlink[18]} w h img-size contain "></div>
     <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${forlink[19]} w h img-size contain "></div>
     </div>
     `;
  return value;
}

function txt3(forlink, fortxt) {
  let ID = [];
  for (let countID = 0; countID < 7; countID++) {
    ID.push(Math.random() * 100);
  }
  let value = `
  <div class="flexreal">
     <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${forlink[0]} w h45 img-size contain"></div>
     <div class="BOX flexreal ml1 bg-one bor30">
         <h4 class="font_25 noneB">
         ${fortxt[0]}
         </h4>
     </div>
 </div>
  <div class="grid grid3 h">
     <div id='id${ID[1]}' onclick='imgview(${ID[1]})' class="${forlink[1]} w h img-size contain "></div>
     <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${forlink[2]} w h img-size contain "></div>
     <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${forlink[3]} w h img-size contain "></div>
     </div>
     <div class="BOX bg-one flexreal mt2 mb2 bor30 font_25 noneb">
     ${fortxt[1]}
     </div>
  <div class="grid grid3 h">
     <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${forlink[4]} w h img-size contain "></div>
     <div id='id${ID[5]}' onclick='imgview(${ID[5]})' class="${forlink[5]} w h img-size contain "></div>
     <div id='id${ID[6]}' onclick='imgview(${ID[6]})' class="${forlink[6]} w h img-size contain "></div>
     </div>
  <div class="BOX bg-one flexreal mt2 mb2 bor30 font_25 noneb">
  <div class='flexone flexreal p3 BOX'>${fortxt[2]}</div>
  <div class='flexone flexreal p3 BOX borrl'>${fortxt[3]}</div>
  <div class='flexone flexreal p3 BOX'>${fortxt[4]}</div>
  </div>`;
  return value;
}

function txt1(forlink, fortxt, num, txt) {
  let ID = [];
  let countID =
    Math.random() *
    1000`<div class="flexreal mb2">
  <div id='id${countID}' onclick='imgview(${countID})' class="${forlink[num]} w h70 img-size contain "></div>
  <div class="BOX font_25 flexreal noneb bg-one bor30 ml1">
  ${txt}
  </div>
  </div>`;
  return value;
}

function txtex2(forlink, fortxt) {
  let ID = [];
  for (let countID = 0; countID < 6; countID++) {
    ID.push(Math.random() * 100);
  }
  let value = `
    <div class="grid grid3 h10">
       <div id='id${ID[5]}' onclick='imgview(${ID[5]})' class="${forlink[20]} w h img-size contain "></div>
       <div id='id${ID[0]}' onclick='imgview(${ID[0]})' class="${forlink[21]} w h img-size contain "></div>
       <div id='id${ID[1]}' onclick='imgview(${ID[1]})' class="${forlink[22]} w h img-size contain "></div>
       </div>
    <div class="grid grid3 h10">
       <div id='id${ID[2]}' onclick='imgview(${ID[2]})' class="${forlink[23]} w h img-size contain "></div>
       <div id='id${ID[3]}' onclick='imgview(${ID[3]})' class="${forlink[24]} w h img-size contain "></div>
       <div id='id${ID[4]}' onclick='imgview(${ID[4]})' class="${forlink[25]} w h img-size contain "></div>
       </div>
       `;
  return value;
}

function navpro() {
  navprojectele.classList.toggle("none");
  Shownavprojectele.classList.toggle("none");
}

function callimgele() {
  imgbymeele.innerHTML = imgskillbyme(link["art"]);
}

txtproject1ele.innerHTML = txtfun(link["r4"], text["r4"]);
txtproject1ele.innerHTML += txttwo(link["r4"], text["r4"]);
hide1ele.addEventListener("click", () =>
  txtproject1ele.classList.toggle("none")
);
txtproject2ele.innerHTML = txtfun(link["r2"], text["r2"]); //14
txtproject2ele.innerHTML += txtex(link["r2"], text["r2"]);
hide2ele.addEventListener("click", () =>
  txtproject2ele.classList.toggle("none")
);
txtproject3ele.innerHTML = txtfun(link["r8"], text["r8"]);
hide3ele.addEventListener("click", () =>
  txtproject3ele.classList.toggle("none")
);
txtproject4ele.innerHTML = txtfun(link["r3"], text["r3"]);
hide4ele.addEventListener("click", () =>
  txtproject4ele.classList.toggle("none")
);
txtproject5ele.innerHTML = txtfun(link["r1"], text["r1"]);
txtproject5ele.innerHTML += `<div class="BOX bg-one flexreal mt5 mb5 bor30 font_25 noneb">Next, I will explain the display on devices with different sizes.
</div>`;
txtproject5ele.innerHTML += txtex(link["r1"], text["r1"]);
txtproject5ele.innerHTML += txtex2(link["r1"], text["r1"]);
hide5ele.addEventListener("click", () =>
  txtproject5ele.classList.toggle("none")
);

txtproject6ele.innerHTML += txt3(link["r7"], text["r7"]);
hide6ele.addEventListener("click", () =>
  txtproject6ele.classList.toggle("none")
);

txtproject7ele.innerHTML += txt3(link["r5"], text["r5"]);
hide7ele.addEventListener("click", () =>
  txtproject7ele.classList.toggle("none")
);

txtproject8ele.innerHTML += txt3(link["r10"], text["r10"]);
hide8ele.addEventListener("click", () =>
  txtproject8ele.classList.toggle("none")
);

txtprojectfigmaele.innerHTML = txtthree(link["figma"], text["figma"]);
txtprojectfigmaele.innerHTML += `<div class="BOX bg-one flexreal mt5 mb5 bor30 font_25 noneb">Next, we have the member system section, where the member page is designed to display details and buttons for accessing various features of the application. This is the most feature-rich section of the application. The designed app also includes a login page, and there is a sample feature for changing the theme to a dark mode
</div>`;
txtprojectfigmaele.innerHTML += txtex(link["figma"], text["figma"]);
hidefigmaele.addEventListener("click", () =>
  txtprojectfigmaele.classList.toggle("none")
);

callimgele();

closeviewfullproele.addEventListener("click", () => {
  forshowimgprojectele.classList.add("none");
  showprojectele.classList.remove(waitclose);
});

hidenavprojectele.addEventListener("click", navpro);
Shownavprojectele.addEventListener("click", navpro);

nextele.addEventListener("click", countaddplus);
preele.addEventListener("click", countadddiff);
