function tinyFriends(name){
    var min = name[0];
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}
var friendsName = 12;
var result = tinyFriends(friendsName);
console.log(result);






// Third Problem......Total Brick Calculate
//Brick require per feet = 1000;
//First Ten floor = 15 feet;
//Then NextTen floor = 12 feet;
//Finally Every floor = 10 feet;

function brickCalculator(floor){
    if(floor < 0){
        var requireBrick ="Error ! Negative value is not accepted."
    }
    else if((floor > 0) && (floor <= 10)){
        var element = floor * 15;
        var requireBrick1 = element * 1000;
    }
    else if((floor > 10) && (floor <= 20)){
        var element1 = floor * 12;
        var requireBrick2 = (element1 * 1000) + requireBrick1;
    }
    else if(floor > 21){
         
        var element3 = floor * 10;
        var requireBrick = (element3 * 1000) + requireBrick2;
    }
    console.log("Require of Brick :",requireBrick);
    return requireBrick;
}
brickCalculator(40);
  