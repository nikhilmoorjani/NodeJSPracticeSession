function placeAnOrder(orderNumber){
    console.log('Customer Order ', orderNumber);
    cookAndDeliverFood(function(){
        console.log('Delivered food on order ',orderNumber);
    })
}

//simulate a 5 sec operation==connect a db
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000); //setting a schedule not actually waiting
}


//simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);