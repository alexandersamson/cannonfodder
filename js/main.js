var player_currency = {
    "money"         : 10,
    "food"          : 10,
    "housing"       : 10,
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

var player_currency_names = {
    "money"         : "Gold",
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

var gameIntervalTimer = 100;

var objects = {"object_house": {
        "owned":0,
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
        "adds_housing": 20,
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
        "hitpoints": 100,
        "damage": 0,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "none"
    },"object_peasant": {
        "owned":0,
        "money": 0,
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
        "adds_tick_money": 0.01,
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
    },"object_soldier": {
        "owned":0,
        "money": 5,
        "food": 5,
        "housing": 1,
        "metal": 1,
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
        "adds_tick_intelligence": 0.001,
        "adds_tick_moral": 0.01,
        "hitpoints": 30,
        "damage": 10,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_farmer": {
        "owned":0,
        "money": 5,
        "food": 5,
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
        "adds_tick_moral": 0.01,
        "hitpoints": 10,
        "damage": 10,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    }
};


// set interval
var tId = setInterval(gameLoop, gameIntervalTimer);
function gameLoop() {
    updateCurrencyTicks();
    getCurrentHousing()
    updateCurrency();
    updateObjectAmounts();
    updateObjectBuildcost();
}


function abortTimer() { // to be called when you want to stop the timer
    clearInterval(tId);
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
            currency_per_tick[key] = 0;
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
                        $("#buildcost_" + objectName).append(objects[objectName][key] + " " + player_currency_names[key] + "<br />");
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
                        $("#adds_per_tick_" + objectName).append((objects[objectName]["adds_tick_"+key]*10).toFixed(1) + " " + player_currency_names[key] + " p/sec<br />");
                    }
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
            if(objects[objectName]["housing"] > (player_currency["housing"]-currentHousing)){
                return;
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
}
