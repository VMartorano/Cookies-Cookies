var sugarBtn = document.querySelector("#sugar-button")
var chocBtn = document.querySelector("#chocolate-button")
var lemonBtn = document.querySelector("#lemon-button")
var clearBtn = document.querySelector("#clear-button")

if (document.cookie.indexOf('sugar') == -1) {
    Cookies.set('sugar', 0)
  }

if (document.cookie.indexOf('chocolate') == -1) {
    Cookies.set('chocolate', 0)
  }

if (document.cookie.indexOf('lemon') == -1) {
    Cookies.set('lemon', 0)
  }

clearBtn.addEventListener("click", function(event){
  Cookies.set('sugar', document.querySelector("#sCount").innerHTML = 0)
  Cookies.set('chocolate', document.querySelector("#cCount").innerHTML = 0)
  Cookies.set('lemon', document.querySelector("#lCount").innerHTML = 0)
  })

document.getElementById('sugar-clicks').innerHTML = Cookies.get("sugar");

sugarBtn.addEventListener("click", function(event){
  sugarNumber = Cookies.get("sugar")
  sugarI = parseInt(sugarNumber)
  sugarI ++
  Cookies.set("sugar", sugarI);
  document.querySelector("#sCount").innerHTML = sugarI
})

document.getElementById('chocolate-clicks').innerHTML = Cookies.get("chocolate");

chocBtn.addEventListener("click", function(event){
  chocolateNumber = Cookies.get("chocolate")
  chocolateI = parseInt(chocolateNumber)
  chocolateI ++
  Cookies.set("chocolate", chocolateI);
  document.querySelector("#cCount").innerHTML = chocolateI
})

document.getElementById('lemon-clicks').innerHTML = Cookies.get("lemon");

lemonBtn.addEventListener("click", function(event){
  lemonNumber = Cookies.get("lemon")
  lemonI = parseInt(lemonNumber)
  lemonI ++
  Cookies.set("lemon", lemonI);
  document.querySelector("#lCount").innerHTML = lemonI
})

// document.getElementById('total-clicks').innerHTML = parseInt(document.querySelector("#sugar-clicks")) + parseInt(document.querySelector("#chocolate-clicks")) + parseInt(document.querySelector("#lemon-clicks"))
