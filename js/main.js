var player_currency = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "metal"         : 0,
    "plastics"      : 0,
    "wood"          : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0
};

var update_currency = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "metal"         : 0,
    "plastics"      : 0,
    "wood"          : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0
};

var currency_per_tick = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "metal"         : 0,
    "plastics"      : 0,
    "wood"          : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0
};

var currency_per_tick_base = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "metal"         : 0,
    "plastics"      : 0,
    "wood"          : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0.025
};

var player_currency_names = {
    "money"         : "Money",
    "food"          : "Food",
    "housing"       : "Housing",
    "metal"         : "Steel",
    "plastics"      : "Plastics",
    "wood"          : "Wood",
    "electronics"   : "Electronics",
    "intelligence"  : "Intelligence",
    "moral"         : "Moral"
};

var currentHousing = 0;
var lastBoughtObject = "none";
var gameIntervalTimer = 100;


var objects = {"object_house": {
        "name":"House",
        "owned":1,
        "money": 100,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 25,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 200,
        "damage": 0,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "none"
    },"object_peasant": {
        "name":"Citizen",
        "owned":0,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 1,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0.015,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 10,
        "damage": 0,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "none"
    },"object_servant": {
        "name":"Civil servant",
        "owned":0,
        "money": 180,
        "food": 75,
        "housing": 1,
        "metal": 50,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0.005,
        "hitpoints": 30,
        "damage": 10,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_farmer": {
        "name":"Farmer",
        "owned":0,
        "money": 50,
        "food": 0,
        "housing": 1,
        "metal": 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0.01,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 10,
        "damage": 10,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_woodchopper": {
        "name":"Wood chopper",
        "owned":0,
        "money": 100,
        "food": 50,
        "housing": 1,
        "metal": 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0.01,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 10,
        "damage": 10,
        "speed": 8,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_ironminer": {
        "name":"Iron miner",
        "owned":0,
        "money": 100,
        "food": 50,
        "housing": 1,
        "metal": 0,
        "plastics": 0,
        "wood": 75,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0.008,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 10,
        "damage": 10,
        "speed": 8,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_scrapper": {
        "name":"Scrapyard worker",
        "owned":0,
        "money": 1200,
        "food": 100,
        "housing": 0,
        "metal": 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0.001,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0.001,
        "adds_tick_plastics": 0.006,
        "adds_tick_wood": 0.001,
        "adds_tick_electronics": 0.006,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 10,
        "damage": 10,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_scientist": {
        "name":"Scientist",
        "owned":0,
        "money": 2500,
        "food": 100,
        "housing": 1,
        "metal": 100,
        "plastics": 100,
        "wood": 0,
        "electronics": 100,
        "intelligence": 0,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0.005,
        "adds_tick_moral": 0,
        "hitpoints": 8,
        "damage": 10,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_lighttank": {
        "name":"Scientist",
        "owned":0,
        "money": 9800,
        "food": 250,
        "housing": 4,
        "metal": 1600,
        "plastics": 400,
        "wood": 0,
        "electronics": 600,
        "intelligence": 200,
        "moral": 0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "hitpoints": 900,
        "damage": 300,
        "speed": 60,
        "buildspeed": 1,
        "consumes": "object_servant"
    }
};

var upgrades= {"increase_taxes":{
        "add_to_object":"object_peasant",
        "add_type":"adds_tick_money",
        "add_amount":0.002,
        "cost":"moral",
        "cost_amount":500,
        "current_level":0,
        "max_level":9999}
};


// set interval
var tId = setInterval(gameLoop, gameIntervalTimer);
function gameLoop() {
    updateHousing();           //Housing only
    updateCurrencyTicks();
    getCurrentHousing();
    updateCurrency();
    updateObjectAmounts();
    updateObjectBuildcost();
    setAdaptiveBuildPrices();
}


function abortTimer() { // to be called when you want to stop the timer
    clearInterval(tId);
}

function updateHousing(){
    var housing = 0;
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            if (objects[objectName]["adds_housing"] > 0) {
                housing = objects[objectName]["adds_housing"] * objects[objectName]["owned"];
            }
        }
    }
    player_currency["housing"] = housing;
}

function updateCurrencyTicks(){
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            for (var key in player_currency) {
                if (player_currency.hasOwnProperty(key)) {
                    if (objects[objectName]["adds_tick_"+key] > 0) {
                        currency_per_tick[key] += objects[objectName]["adds_tick_"+key] * objects[objectName]["owned"];
                    }
                }
            }
        }
    }
}

function updateCurrency(){
    for (var key in player_currency){
        if (player_currency.hasOwnProperty(key)) {
            if(update_currency[key] !== 0)
                player_currency[key] += update_currency[key];
                player_currency[key] += currency_per_tick[key];
                update_currency[key] = 0;
                if(key === "housing"){
                    $("#currency_" + key).html(currentHousing+"/"+Math.trunc(player_currency[key]));
                }
                else {
                    $("#currency_" + key).html(Math.trunc(player_currency[key]));
                }
        }
    }
    for (var key in currency_per_tick){
        if (currency_per_tick.hasOwnProperty(key)) {
            currency_per_tick[key] = currency_per_tick_base[key];
        }
    }
}


function updateObjectAmounts(){
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            $( "#amount_" + objectName ).html(objects[objectName]["owned"]);
        }
    }
}


function updateObjectBuildcost(){
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            var buildcostSet = 0;
            var addsSet = 0;
            var addsTickSet = 0;
            for (var key in player_currency) {
                if (player_currency.hasOwnProperty(key)) {
                    if (objects[objectName][key] > 0) {
                        if(buildcostSet === 0){
                            $( "#buildcost_" + objectName ).html('Building cost:<br />');
                            buildcostSet = 1;
                        }
                        if(key === "housing") {
                            if(objects[objectName]["consumes"] !== "none") {
                                if ((objects[objectName]["housing"] - objects[objects[objectName]["consumes"]]["housing"]) > (player_currency["housing"] - currentHousing)) {
                                    $("#buildcost_" + objectName).append(objects[objectName][key] + " " + player_currency_names[key] + "<br />");
                                }
                                else{
                                    $("#buildcost_" + objectName).append("<b>" + objects[objectName][key] + " " + player_currency_names[key] + "</b><br />");
                                }
                            }
                            else {
                                if (objects[objectName]["housing"] > (player_currency["housing"] - currentHousing)) {
                                    $("#buildcost_" + objectName).append(objects[objectName][key] + " " + player_currency_names[key] + "<br />");
                                }
                                else{
                                    $("#buildcost_" + objectName).append("<b>" + objects[objectName][key] + " " + player_currency_names[key] + "</b><br />");
                                }
                            }
                        }
                        else if(player_currency[key] >= objects[objectName][key]){
                            $("#buildcost_" + objectName).append("<b>" + objects[objectName][key] + " " + player_currency_names[key] + "</b><br />");
                        }
                        else {
                            $("#buildcost_" + objectName).append(objects[objectName][key] + " " + player_currency_names[key] + "<br />");
                        }
                    }
                    if (objects[objectName]["adds_"+key] > 0) {
                        if(addsSet === 0){
                            $( "#adds_" + objectName ).html('Adds:<br />');
                            addsSet = 1;
                        }
                        $("#adds_" + objectName).append(objects[objectName]["adds_"+key] + " " + player_currency_names[key] + "<br />");
                    }
                    if (objects[objectName]["adds_tick_"+key] > 0) {
                        if(addsTickSet === 0){
                            $( "#adds_per_tick_" + objectName ).html('Adds per second:<br />');
                            addsTickSet = 1;
                        }
                        $("#adds_per_tick_" + objectName).append((objects[objectName]["adds_tick_"+key]*10).toFixed(2) + " " + player_currency_names[key] + "<br />");
                    }
                }
            }
            if(objects[objectName]["consumes"] !== "none") {
                if (objects[objects[objectName]["consumes"]]["owned"] > 0) {
                    $("#buildcost_" + objectName).append("<b>" + "1" + " " + objects[objects[objectName]["consumes"]]["name"] + "</b><br />");
                }
                else{
                    $("#buildcost_" + objectName).append("1" + " " + objects[objects[objectName]["consumes"]]["name"] + "<br />");
                }
            }
        }
    }
}



function getCurrentHousing(){
    currentHousing = 0;
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            if (objects[objectName]["owned"] > 0) {
                currentHousing += objects[objectName]["housing"] * objects[objectName]["owned"];
                if (currentHousing > player_currency["housing"]){
                    currentHousing = player_currency["housing"];
                    objects[lastBoughtObject]["owned"] -= 1;
                }
            }
        }
    }
}

function buyClick(objectName){
    for (var key in player_currency) {
        if (player_currency.hasOwnProperty(key)) {
            if (objects[objectName][key] > player_currency[key]) {
                return;
            }
            if(objects[objectName]["consumes"] !== "none"){
                if(objects[objects[objectName]["consumes"]]["owned"] < 1){
                    return;
                }
                if((objects[objectName]["housing"] - objects[objects[objectName]["consumes"]]["housing"]) > (player_currency["housing"]-currentHousing)){
                    return;
                }
            }
            else{
                if(objects[objectName]["housing"] > (player_currency["housing"]-currentHousing)){
                    return;
                }
            }
        }
    }
    for (var k in player_currency) {
        if (player_currency.hasOwnProperty(k)) {
            if (objects[objectName][k] >0) {
                if (k !== "housing") {
                    update_currency[k] -= objects[objectName][k]
                }
            }
        }
    }
    objects[objectName]["owned"] += 1;
    lastBoughtObject = objectName;
    if(objects[objectName]["consumes"] !== "none") {
        objects[objects[objectName]["consumes"]]["owned"] -= 1;
    }
}

function upgradeClick(upgradeName){
    if(upgradeName === "increase_taxes"){
        if(player_currency[upgrades[upgradeName]["cost"]] >= upgrades[upgradeName]["cost_amount"]){
            if(upgrades[upgradeName]["current_level"] <= upgrades[upgradeName]["max_level"]){
                upgrades[upgradeName]["current_level"] += 1;
                player_currency[upgrades[upgradeName]["cost"]] -= upgrades[upgradeName]["cost_amount"];
                objects[upgrades[upgradeName]["add_to_object"]][upgrades[upgradeName]["add_type"]] += upgrades[upgradeName]["add_amount"];
            }

        }
    }
}

function setAdaptiveBuildPrices(){
    objects["object_house"]["money"] = 200 * objects["object_house"]["owned"];
}
