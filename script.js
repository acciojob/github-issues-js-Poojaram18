//your code here
var span = document.getElementsByTagName("span")[0]
var orderedList = document.getElementById("orderedList")
var prevBtn = document.getElementById("load_prev")
var nextBtn = document.getElementById("load_next")

var i = 1

var apiLink = `https://api.github.com/repositories/1296269/issues?page= + ${i}  + &per_page=5`

async function fetching() {
    try {
        var apiData = await fetch(apiLink)
        var apiDataConvert = await apiData.json()
        // console.log(apiDataConvert)
        insert(apiDataConvert)
    }
    catch (error) {
        console.log("Unable to fetch data" + error);
    }
}

document.addEventListener('DOMContentLoaded', fetching)

var listItem = ''
function insert(dataName) {
    dataName.map((e) => {
       span.textContent = i
        // var listItem = document.createElement("li")
        // listItem.textContent = e.title
        // orderedList.append(listItem)
        listItem += `<li>${e.node_id}</li>`
    })
    orderedList.innerHTML = listItem
    console.log(dataName)
}


function nextPage() {
    orderedList.textContent = ''
    listItem = ''
    i++
    apiLink = `https://api.github.com/repositories/1296269/issues?page= + ${i}  + &per_page=5`
    fetching()
}

nextBtn.addEventListener('click', nextPage)


function prevPage() {
    if (i > 1) {
        orderedList.textContent = ""
        listItem = ''
        i--
        apiLink = `https://api.github.com/repositories/1296269/issues?page= + ${i}  + &per_page=5`
        fetching()
    }
}

prevBtn.addEventListener('click', prevPage)