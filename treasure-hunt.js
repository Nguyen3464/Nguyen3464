var rainbowTreasure = Math.floor(Math.random() * 9)
var daBomb = Math.floor(Math.random() * 9)

if (rainbowTreasure === daBomb) {  
    daBomb = Math.floor(Math.random() * 9) 
}

var counter = 10
 counter = counter - 1
    document.getElementById("counter").innerHTML = `Turns remaining: ${counter}`


const treasure = (id) => {
    counter = counter - 1
     if (id === daBomb) {
        document.getElementById(id).innerHTML = "💣"
        alert("Booms goes the Dynomite")
        location.reload()
    } else if (id === rainbowTreasure) {
       document.getElementById(id).innerHTML = "🌈"
       alert("Congrats you found Me Lucky Charms")
       location.reload();
    } else  {
       document.getElementById(id).innerHTML = "💩"

    }
}






const restartButton = () => {
    location.reload();
}







