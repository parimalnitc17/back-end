var rect=require('./rectangle');
function solvingRect(l,b){
    console.log("by solving the rectangle the area and the perimeter of the rectangle is");
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR " , err.message);
        }
        else{
            console.log("area = "+ rectangle.area()+" perimeter = "+ rectangle.perimeter());
        }
    });
    console.log("this message after the call of rect()");
}

solvingRect(2,3);
solvingRect(4,5);
solvingRect(-3,4);