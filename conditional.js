var firstName = "Collins";
var surname = "McKnight";
var age = 18;
var gender = "male";
var isTall = true;
var nationality = "Nigeria";

if(firstName == "Collins Rollins"){
    // if person is equal to collins rollins, then check the surname
    if(surname == "McKnight"){
        // Check if age is greater than 17
        if(age > 17){
            console.log("Congratulations! You can start work on monday as BarTender");
        } else{
                console.log("Sorry, you are not qualified to work with us.")
        }

    } else{
        console.log("Sorry, you are not the Collins Rollins We were expecting.")
    }

}else{
    console.log("This Person Does not exist");
}
