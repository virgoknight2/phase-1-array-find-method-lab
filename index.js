// code your solution here
function superbowlWin(object){
    for (const record of object) {
        if (record.result == "w") {
          return console.log(record.year(object));
        }
 
    }   
}