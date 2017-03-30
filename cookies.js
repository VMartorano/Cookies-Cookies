var sugarBtn = document.querySelector("#sugar-button")
var chocBtn = document.querySelector("#chocolate-button")
var lemonBtn = document.querySelector("#lemon-button")
var sugar = 0
var chocolate = 0
var lemon = 0
var cookies = 0

sugarBtn.addEventListener("click", function(){
  sugar++
  Cookies.set("sugar", sugar);
  var sCount = document.querySelector("#sCount")
  sCount.textContent = "Sugar Cookies: " + sugar
})

chocBtn.addEventListener("click", function(){
  chocolate++
  Cookies.set("chocolate", chocolate);
  var cCount = document.querySelector("#cCount")
  cCount.textContent = "Chocolate Cookies: " + chocolate
})

lemonBtn.addEventListener("click", function(){
  lemon++
  Cookies.set("lemon", lemon);
  var lCount = document.querySelector("#lCount")
  lCount.textContent = "Lemon Cookies: " + lemon
})
