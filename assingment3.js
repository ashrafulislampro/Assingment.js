//  First Problem ........Converting Feet to Mile

function feetToMile(feet){
    
    if(mile < 0){
            var mileResult = "Error! Negative value is not counted."
    }
    else{
         var mile = feet / 5280      //[1 Mile = 5280 Feet]   
         var mileResult = mile.toFixed(3); 
    }
    console.log("Length of Mile :", mileResult);
    return mileResult;
}
// Function called below 
 feetToMile();      
 


// Second Problem.......Calculate Total Require Wood

function woodCalculator(chair, table, bed){
    if((chair < 0) && (table < 0) && (bed < 0)){
        var totalWood = "Error! Whenever,Negative wood value cannot be accepted."
    }
    else{
        var chairWood = chair * 1;
        var tableWood = table * 3;
        var bedWood = bed * 5;
        var totalWood = chairWood + tableWood + bedWood;
    }
    console.log("Total of Wood :",totalWood,"cubic feet");
    return totalWood;
}
 // Function called below
var result = woodCalculator();



// Third Problem......Total Brick Calculate

// Brick require per feet = 1000;
// First Ten floor = 15 feet;
// Then NextTen floor = 12 feet;
// Finally Every floor = 10 feet;

function brickCalculator(floor){
    if(floor < 0){
        var brickResult = "Error! Negative value cannot be accepted."
    }
    else if(floor > 0 && floor <= 10){
        var firstTenFloor = 10 * 15 * 1000;
        var brickResult = firstTenFloor;
    }
    else if(floor >= 11 && floor <= 20){
        var nextTenFloor = (10 * 15 * 1000) + ( 12 * 1000 * (floor - 10));
        var brickResult = nextTenFloor;
    }
    else{
        var finalNextTenFloor = (10 * 15 * 1000) + (10 * 12 * 1000) + (10 * 1000 * (floor - 20));
        var brickResult = finalNextTenFloor;
    }
    console.log("Total Number of Brick :", brickResult);
    return brickResult;
}
// Called the Function
brickCalculator(); 


// Fourth Problem......Find The Smallest  friend

 function tinyFriends(friendsName){
     var min = friendsName.length;
     var shortestName;
     for(var i= 0; i <friendsName.length; i++){
         if(friendsName[i].length < min && friendsName[i] != " "){
            var min = friendsName[i].length;
            shortestName = friendsName[i];

         }    
     }
     console.log("The shortest name :",shortestName);
     return shortestName;
 }
 //Function called below
tinyFriends();