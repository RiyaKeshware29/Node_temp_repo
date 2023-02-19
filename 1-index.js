require('./2-circle');
const calculateArea = (rad) =>{
    if(rad <= 4){
        console.log(`radius of center is less then 4 , Radius is : ${rad}`);
    }else{
        console.log(`radius of center is greater then 4 , Radius is : ${rad}`);
    }
    console.log(`The parameter is : ${rad} & the value of area is : ${area(rad)}`);
    console.log(`The parameter is : ${rad} & the value of perimeter is : ${perimeter(rad)}`);
}
calculateArea(5);

setInterval(() => {
    console.log('It is printing in by the intervel of 1 sec');
}, 2000);