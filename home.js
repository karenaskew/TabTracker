
var jay_sum = 0;
var karen_sum = 0;
var jay_rounds = document.getElementById("jay_rounds")


function change (direction, person) {
//set direction of change
    if (direction =="plus") {
        var diff = 1;
    }
    else if (direction == "minus") {
        var diff = -1;
    }

//set who is applies to
    if (person == "jay") {
        jay_sum = jay_sum + diff;
    }
    else if (person == "karen") {
        karen_sum = karen_sum + diff;
    }

//update total
    total_sum = jay_sum + karen_sum;

// set the round counter to display updated rounds
    document.getElementById("jay_rounds").innerHTML = jay_sum;
    document.getElementById("karen_rounds").innerHTML = karen_sum;
    document.getElementById("total_rounds").innerHTML = total_sum;


//update who is next up!
    var next_person = document.getElementById("next_round_person")
    
    if (karen_sum > jay_sum) {
        next_person.innerHTML = "Jay"
    }
    else if (jay_sum > karen_sum) {
        next_person.innerHTML = "Karen"
    }
    else {
        next_person.innerHTML = "Whoever"
    }
}


document.getElementById("+jay").addEventListener("click", function() {
    change("plus", "jay");
});
document.getElementById("-jay").addEventListener("click", function() {
    change("minus", "jay");
});
document.getElementById("+karen").addEventListener("click", function() {
    change("plus", "karen");
});
document.getElementById("-karen").addEventListener("click", function() {
    change("minus", "karen");
});
document.getElementById("reset_button").addEventListener("click", function(){
    location.reload()
})

