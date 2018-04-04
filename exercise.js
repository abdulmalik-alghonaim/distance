var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;  
    return Math.sqrt( dx*dx + dy*dy );    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    data.forEach(element => {
        var dx = element.x - newPoint.x;
        var dy = element.y - newPoint.y;  
        element.distance= Math.sqrt( dx*dx + dy*dy );
    });
    return data;
};
// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //------------------- 
    data.sort((a,b)=>{
        return a.distance - b.distance;
    });
    return data.slice(0,k);    
};

module.exports = exercise;
