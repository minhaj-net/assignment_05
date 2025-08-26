//All Re-Usable function hgere
//  Hear Icon Count
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

document
  .getElementById("heart-icon-main")
  .addEventListener("click", function (e) {
    e.preventDefault;
    heartIconCount("heart-count");
  });

document.getElementById("call-btn").addEventListener("click", function (e) {
  e.preventDefault;
  const nationalEmTitle =
    document.getElementById("national-em-title").innerText;
  const nationalEmNumber =
    document.getElementById("national-em-number").innerText;

  coinCountHandler("coin-count");
  const coinCount = parseInt(document.getElementById("coin-count").innerText);
  if (coinCount >= 19) {
    alert("Calling  " + nationalEmTitle + "  " + nationalEmNumber);
  } else if (coinCount <= 18) {
    alert(
      "You don't have enough coins.You need at least 20 coins to make a call"
    );
  }
});
