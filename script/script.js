//All Re-Usable function hgere
//  Heart Icon Count
function heartIconCount(id) {
  const number = 1;
  const heartIconNUmber = parseInt(document.getElementById(id).innerText);

  const totalHeartIconCount = heartIconNUmber + number;
  document.getElementById(id).innerText = totalHeartIconCount;
}
// Coin Count
function coinCountHandler(id) {
  const number = 20;
  const coinCount = parseInt(document.getElementById(id).innerText);
  const newCoinCount = coinCount - number;
  document.getElementById(id).innerText = newCoinCount;
}
//Heart icon event handler  11111
const allHeartIcons = document.getElementsByClassName("icon-heart-main");

for (let allHeartIcon of allHeartIcons) {
  allHeartIcon.addEventListener("click", function (e) {
    e.preventDefault;
    heartIconCount("heart-count");
  });
}
// call button event handler 2222

const allBtnHandlers = document.getElementsByClassName("btn-call");
for (let allBtnHandler of allBtnHandlers) {
  allBtnHandler.addEventListener("click", function (e) {
    const nationalEmTitle =
      allBtnHandler.parentNode.parentNode.childNodes[5].innerText;
    const nationalEmNumber =
      allBtnHandler.parentNode.parentNode.children[3].innerText;
    document.getElementById("national-em-number").innerText;
    const coinElement = document.getElementById("coin-count");
    const number = 20;
    const coinCount = parseInt(coinElement.innerText);
    const newCoinCount = coinCount - number;
    if (newCoinCount < 0) {
      newCoinCount = 0;
    }
    coinElement.innerText = newCoinCount;

    if (newCoinCount >= number) {
      alert("📞 Calling " + nationalEmTitle + " " + nationalEmNumber);
    } else if (newCoinCount < number) {
      alert(
        "⚠️ You don't have enough coins. You need at least 20 coins to make a call."
      );
    }

    const historySlide = document.getElementById("history-container");

    const newCart = document.createElement("div");
    newCart.classList.add("new-cart-container");
    newCart.innerHTML = `
    <div class="flex justify-between items-center mb-4 rounded-md p-6 mt-6  bg-[#f5fff6]">
      <div>
        <h3 class="text-[#111111] font-semibold text-[18px]">${nationalEmTitle}</h3>
        <p class="text-[18px] text-[#4A4A4A]">${nationalEmNumber}</p>
      </div>
      <div>
        <h4 class="text-[#111111] text-[18px]">
          <span>11.40.25</span>PM
        </h4>
      </div>
    </div>
  `;

    historySlide.append(newCart);
  });

  const date = new Date().toLocaleTimeString();
}
// aside section clear button handler 33333
document
  .getElementById("clear-btn-handler")
  .addEventListener("click", function (e) {
    e.preventDefault;
    const historySlide = document.getElementById("history-container");
    historySlide.remove();
  });

// copy button handler 4444

const allCopyBtns = document.getElementsByClassName("btn-copy");
for (let allCopyBtn of allCopyBtns) {
  allCopyBtn.addEventListener("click", function (e) {
    e.preventDefault;
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const number = 1;
    const nationalEmNUmberCopy =
      allCopyBtn.parentNode.parentNode.children[3].innerText;
    alert("Number has been copied  " + nationalEmNUmberCopy);
    const copyNumberInrease = copyCount + number;

    document.getElementById("copy-count").innerText = copyNumberInrease;

    navigator.clipboard.writeText(nationalEmNUmberCopy);
    then(() => {
      alert("Text copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  });
}
