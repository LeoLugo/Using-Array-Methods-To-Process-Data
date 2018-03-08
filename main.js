// 1 calculate avg price

var ans1 = items.reduce(function(a, b) {
  return a + b.price
},0) / items.length

var answer11 = ans1.toFixed(2)

var answer1 = document.querySelector("#answer1")
answer1.innerHTML = "The average price is $" + answer11

// 2 Show me how to get an array of items that cost between $14.00 and $18.00 USD
var ans = items.filter(function (x) {
let cost = x.price
if (cost > 14 && cost < 18) {
	return true
}
})

var htmlStr = ''
ans.forEach(function(item){
	htmlStr += item.title + "\n"
})

var answer2 = document.querySelector("#answer2")
answer2.innerHTML = htmlStr

// 3 Which item has a "GBP" currency code? Display it's name and price.

var arr = items.filter(function(x) {
	let code = x.currency_code
	if (code === "GBP") {
		return true
	}
	return false
})

var answer3 = document.querySelector("#answer3")
answer3.innerHTML = arr[0].title

//4 Display a list of all items who are made of wood.


var ans4 = items.filter(function (x) {
	if (x.materials.indexOf("wood") != -1) {
		return true
	} 
	return false
}) 

var str = ""
ans4.forEach(function(item) {
	str = str + item.title + "\n"
})
console.log(str)
var answer4 = document.querySelector("#answer4")
answer4.innerHTML = str

// 5 Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightmat = items.filter(function (item) {
	if(item.materials.length >= 8) {
		return true
	}
})


var htmlStr5 = ""
eightmat.forEach(function(item) {
	htmlStr5 += item.title + " is made of " + item.materials.length	+ " materials:" + "\n"
	// itemlist += item.materials 
	item.materials.forEach(function(material){
		htmlStr5 += material + "\n"
	})
} )

var answer5 = document.querySelector("#answer5")
answer5.innerHTML = htmlStr5

// 6 How many items were made by their sellers?

var arr6 = items.filter(function(x) {
	if (x.who_made === "i_did") {
		return true
	}
	return false
})

var answer6 = document.querySelector("#answer6")
answer6.innerHTML = arr6.length + " were made by their sellers"













