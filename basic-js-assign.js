function seerToMon(seer){
    return seer/40;
}

function totalSales(shart,pant,shoe){
    var returnValue = (shart*100) + (pant*200) + (shoe*500);
    return returnValue; 
}

function deliveryCost(numberOfOrder){
    var basicTotalCost;
    var basicCost = 100;
    var discountCost=0;
    var specialDiscountCost=0;
    
    if(numberOfOrder >100 && numberOfOrder<=200){

        basicTotalCost = 100*basicCost;
        discountCost = (numberOfOrder-100)*80;
        return basicTotalCost+discountCost;
    }

    else if(numberOfOrder>200){
        specialDiscountCost = (numberOfOrder-200)*50;
        return (100*100) + (100*80) + specialDiscountCost;
    }

    else{
        return numberOfOrder*100;
    }
}

function perfectFriend(friendArr){
    for(var i=0;i<friendArr.length;i++){
        if(friendArr[i].length == 5){
            return friendArr[i];
            break;
        }
    }
}

arr = ["aaa","bbbbbb","aaaaaa"];
console.log(perfectFriend(arr));