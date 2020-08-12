module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0){
        setTimeout(()=>callback(new Error("one or both of the parameters are not valid to calculate the area and perimeter")),
        2000);
    }
    else{
        setTimeout(()=>callback(null,{area : ()=>(x*y),
                                      perimeter : ()=>(2*(x+y))}),
                                      2000);
    }
}