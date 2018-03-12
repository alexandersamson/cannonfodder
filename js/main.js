var versioning = {"version":"1.2","build":11,"contact":"alexander@gm7.nl"};

var player_currency = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "wood"          : 0,
    "metal"         : 0,
    "oil"           : 0,
    "plastics"      : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 10,
    "firepower"     : 0
};

var update_currency = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "wood"          : 0,
    "metal"         : 0,
    "oil"           : 0,
    "plastics"      : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0,
    "firepower"     : 0
};

var currency_per_tick = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "wood"          : 0,
    "metal"         : 0,
    "oil"           : 0,
    "plastics"      : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0,
    "firepower"     : 0
};

var currency_per_tick_base = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "wood"          : 0,
    "metal"         : 0,
    "oil"           : 0,
    "plastics"      : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0,
    "firepower"     : 0
};

var cost_per_tick_total = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "wood"          : 0,
    "metal"         : 0,
    "oil"           : 0,
    "plastics"      : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0,
    "firepower"     : 0
};

var delta_per_tick = {
    "money"         : 0,
    "food"          : 0,
    "housing"       : 0,
    "wood"          : 0,
    "metal"         : 0,
    "oil"           : 0,
    "plastics"      : 0,
    "electronics"   : 0,
    "intelligence"  : 0,
    "moral"         : 0,
    "firepower"     : 0
};

var player_currency_names = {
    "money"         : "Money",
    "food"          : "Food",
    "housing"       : "Housing",
    "wood"          : "Wood",
    "metal"         : "Steel",
    "oil"           : "Oil",
    "plastics"      : "Plastics",
    "electronics"   : "Electronics",
    "intelligence"  : "Intelligence",
    "moral"         : "Moral",
    "firepower"     : "Firepower"
};


var objects = {"object_headquarters": {
        "name":"Headquarters",
        "build_text":"Build headquarters",
        "amount_text":"Headquarters",
        "buyable":false,
        "visible":true,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 500,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0.2,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_clandestineoperations": {
        "name":"Clandestine Operations facility",
        "build_text":"Open Clandestine ops facility",
        "amount_text":"Clandestine Operations facilities",
        "buyable":false,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_clandestineoperations",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_humantrafficking": {
        "name":"Traffic humans",
        "build_text":"Traffic citizen",
        "amount_text":"Citizens trafficked",
        "buyable":true,
        "visible":false,
        "requires":"object_clandestineoperations",
        "requires_amount":1,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 250,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0.05,
        "cost_per_tick_firepower":0,
        "adds_money": 1000000,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_blackhathacker": {
        "name":"Black hat hacker",
        "build_text":"Train black hat hacker",
        "amount_text":"Black hat hackers",
        "buyable":true,
        "visible":false,
        "requires":"none",
        "requires_amount":1,
        "requires_research":"enable_hacker",
        "requires_research_level":1,
        "owned":0,
        "money": 50000,
        "food": 200,
        "housing": 30,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 2500,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0.6,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0.2,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0.8,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0.1,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_researchfacility": {
        "name":"Research facility",
        "build_text":"Build research facility",
        "amount_text":"Research facilities",
        "buyable":false,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_researchfacility",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0.01,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_scientist": {
        "name":"Scientist",
        "build_text":"Train scientist",
        "amount_text":"Scientists",
        "buyable":true,
        "visible":false,
        "requires":"object_researchfacility",
        "requires_amount":1,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 500,
        "food": 75,
        "housing": 15,
        "metal": 100,
        "oil" : 0,
        "plastics": 150,
        "wood": 0,
        "electronics": 100,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.05,
        "cost_per_tick_food": 0.125,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0.005,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 4,
        "damage": 2,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_house": {
        "name":"House",
        "build_text":"Build house",
        "amount_text":"Houses",
        "buyable":true,
        "visible":true,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 150,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 100,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0.001,
        "adds_tick_firepower":0,
        "hitpoints": 500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_mansion": {
        "name":"Mansion",
        "build_text":"Build mansion",
        "amount_text":"Mansions",
        "buyable":true,
        "visible":false,
        "requires":"object_house",
        "requires_amount":10,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 5000,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 200,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 2000,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0.01,
        "hitpoints": 1500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_cityhall": {
        "name":"City hall",
        "build_text":"Build city hall",
        "amount_text":"City halls",
        "buyable":true,
        "visible":false,
        "requires":"object_mansion",
        "requires_amount":10,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 900000,
        "food": 0,
        "housing": 0,
        "metal": 20000,
        "oil" : 0,
        "plastics": 20000,
        "wood": 40000,
        "electronics": 15000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 25000,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 2.25,
        "adds_tick_firepower":0,
        "hitpoints": 5500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_senate": {
        "name":"Senate building",
        "build_text":"Build Senate building",
        "amount_text":"Senate buildings",
        "buyable":true,
        "visible":false,
        "requires":"object_cityhall",
        "requires_amount":10,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 38000000,
        "food": 0,
        "housing": 0,
        "metal": 500000,
        "oil" : 0,
        "plastics": 100000,
        "wood": 900000,
        "electronics": 85000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 150,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 20,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 15,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 250000,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 15,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 50,
        "adds_tick_firepower":0,
        "hitpoints": 5500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "object_cityhall"
    },"object_worldforum": {
        "name":"World forum building",
        "build_text":"Build World forum building",
        "amount_text":"World forum Buildings",
        "buyable":true,
        "visible":false,
        "requires":"object_senate",
        "requires_amount":10,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 25000000000,
        "food": 0,
        "housing": 0,
        "metal": 25000000,
        "oil" : 0,
        "plastics": 0,
        "wood": 90000000,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 6000,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 1000,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 5000000,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 350,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 1250,
        "adds_tick_firepower":0,
        "hitpoints": 5500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "object_senate"
    },"object_worldgovernment": {
        "name":"World government",
        "build_text":"Establish World government",
        "amount_text":"World governments",
        "buyable":true,
        "visible":false,
        "requires":"object_worldforum",
        "requires_amount":10,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 775000000000,
        "food": 0,
        "housing": 0,
        "metal": 2900000000,
        "oil" : 5000000000,
        "plastics": 5000000000,
        "wood": 5000000000,
        "electronics": 5000000000,
        "intelligence": 5000000000,
        "moral": 5000000000,
        "firepower":1500000000000,
        "cost_per_tick_money": 150000,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 15000,
        "cost_per_tick_plastics": 5000,
        "cost_per_tick_wood": 15000,
        "cost_per_tick_oil": 1000,
        "cost_per_tick_electronics": 8500,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":500,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing":750000000,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 8500,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 100000,
        "adds_tick_firepower":0,
        "hitpoints": 5500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_drillingcompany": {
        "name":"Oil drilling company",
        "build_text":"Build oil drilling company",
        "amount_text":"Oil drilling companies",
        "buyable":false,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_drillingcompany",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 2.5,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0.5,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_oilwell": {
        "name":"Oil well",
        "build_text":"Drill oil well",
        "amount_text":"Oil wells",
        "buyable":true,
        "visible":false,
        "requires":"object_drillingcompany",
        "requires_amount":1,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 650000,
        "food": 0,
        "housing": 0,
        "metal": 12000,
        "oil" : 0,
        "plastics": 0,
        "wood": 5000,
        "electronics": 1000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 2,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0.25,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0.05,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0.3,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 2,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_oiltanker": {
        "name":"Oil tanker",
        "build_text":"Build oil tanker",
        "amount_text":"Oil tankers",
        "buyable":true,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_oiltanker",
        "requires_research_level":1,
        "owned":0,
        "money": 75000,
        "food": 0,
        "housing": 0,
        "metal": 2000,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0.050,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 1.050,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0.1,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 100,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_oilrefinery": {
        "name":"Oil refinery",
        "build_text":"Build Oil refinery",
        "amount_text":"Oil refineries",
        "buyable":true,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_oilrefinery",
        "requires_research_level":1,
        "owned":0,
        "money": 2500000,
        "food": 0,
        "housing": 0,
        "metal": 16000,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 15000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 20,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 2,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 33.3,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 1,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 99.9,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 500,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_peasant": {
        "name":"Citizen",
        "build_text":"Welcome a citizen",
        "amount_text":"Citizens",
        "buyable":true,
        "visible":true,
        "requires":"object_house",
        "requires_amount":1,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 0,
        "food": 0,
        "housing": 1,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 1,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0.015,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 4,
        "damage": 1,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "none"
    },"object_farmer": {
        "name":"Farmer",
        "build_text":"Train farmer",
        "amount_text":"Farmers",
        "buyable":true,
        "visible":false,
        "requires":"object_peasant",
        "requires_amount":1,
        "requires_research":"teach_farming",
        "requires_research_level":1,
        "owned":0,
        "money": 10,
        "food": 0,
        "housing": 5,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.001,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0.01,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5,
        "damage": 2,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_woodchopper": {
        "name":"Wood chopper",
        "build_text":"Train wood chopper",
        "amount_text":"Wood choppers",
        "buyable":true,
        "visible":false,
        "requires":"object_peasant",
        "requires_amount":1,
        "requires_research":"teach_lumbering",
        "requires_research_level":1,
        "owned":0,
        "money": 20,
        "food": 50,
        "housing": 5,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.002,
        "cost_per_tick_food": 0.005,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0.01,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5,
        "damage": 3,
        "speed": 8,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_ironminer": {
        "name":"Iron miner",
        "build_text":"Train iron miner",
        "amount_text":"Iron miners",
        "buyable":true,
        "visible":false,
        "requires":"object_peasant",
        "requires_amount":1,
        "requires_research":"teach_mining",
        "requires_research_level":1,
        "owned":0,
        "money": 50,
        "food": 70,
        "housing": 5,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 150,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.007,
        "cost_per_tick_food": 0.007,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0.001,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0.008,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5,
        "damage": 3,
        "speed": 8,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_banker": {
        "name":"Banker",
        "build_text":"Hire banker",
        "amount_text":"Bankers",
        "buyable":true,
        "visible":false,
        "requires":"object_peasant",
        "requires_amount":1,
        "requires_research":"teach_banking",
        "requires_research_level":1,
        "owned":0,
        "money": 500,
        "food": 100,
        "housing": 20,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.1,
        "cost_per_tick_food": 0.010,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0.001,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 2.6,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5,
        "damage": 3,
        "speed": 8,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_servant": {
        "name":"Civil servant",
        "build_text":"Train civil servant",
        "amount_text":"Civil servants",
        "buyable":true,
        "visible":false,
        "requires":"object_peasant",
        "requires_amount":1,
        "requires_research":"teach_civilservice",
        "requires_research_level":1,
        "owned":0,
        "money": 100,
        "food": 50,
        "housing": 20,
        "metal": 50,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.030,
        "cost_per_tick_food": 0.050,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0.005,
        "adds_tick_firepower":0,
        "hitpoints": 4,
        "damage": 1,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_scrapper": {
        "name":"Scrapyard worker",
        "build_text":"Hire scrapyard worker",
        "amount_text":"Scrapyard workers",
        "buyable":true,
        "visible":false,
        "requires":"object_peasant",
        "requires_amount":1,
        "requires_research":"teach_scrapping",
        "requires_research_level":1,
        "owned":0,
        "money": 250,
        "food": 100,
        "housing": 2,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.15,
        "cost_per_tick_food": 0.016,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0.001,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0.001,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0.006,
        "adds_tick_wood": 0.001,
        "adds_tick_electronics": 0.006,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5,
        "damage": 2,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_peasant"
    },"object_barracks": {
        "name":"Barracks",
        "build_text":"Build barracks",
        "amount_text":"Barracks",
        "buyable":false,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_barracks",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_soldier": {
        "name":"Soldier",
        "build_text":"Train soldier",
        "amount_text":"Soldiers",
        "buyable":true,
        "visible":false,
        "requires":"object_barracks",
        "requires_amount":1,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 4500,
        "food": 100,
        "housing": 25,
        "metal": 500,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.06,
        "cost_per_tick_food": 0.1,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0.001,
        "hitpoints": 50,
        "damage": 30,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_servant"
    },"object_sergeant": {
        "name":"Sergeant",
        "build_text":"Train sergeant",
        "amount_text":"Sergeants",
        "buyable":true,
        "visible":false,
        "requires":"object_barracks",
        "requires_amount":1,
        "requires_research":"enable_sergeant",
        "requires_research_level":1,
        "owned":0,
        "money": 60000,
        "food": 200,
        "housing": 50,
        "metal": 500,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 125,
        "intelligence": 50,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 1,
        "cost_per_tick_food": 0.2,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0.001,
        "adds_tick_firepower":0.1,
        "hitpoints": 50,
        "damage": 30,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_soldier"
    },"object_lieutenant": {
        "name":"Lieutenant",
        "build_text":"Train lieutenant",
        "amount_text":"Lieutenants",
        "buyable":true,
        "visible":false,
        "requires":"object_barracks",
        "requires_amount":1,
        "requires_research":"enable_lieutenant",
        "requires_research_level":1,
        "owned":0,
        "money": 1350000,
        "food": 500,
        "housing": 60,
        "metal": 500,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 500,
        "intelligence": 425,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 35,
        "cost_per_tick_food": 0.35,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0.01,
        "adds_tick_moral": 0.05,
        "adds_tick_firepower":0.8,
        "hitpoints": 50,
        "damage": 30,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_sergeant"
    },"object_colonel": {
        "name":"Colonel",
        "build_text":"Train colonel",
        "amount_text":"Colonels",
        "buyable":true,
        "visible":false,
        "requires":"object_barracks",
        "requires_amount":1,
        "requires_research":"enable_colonel",
        "requires_research_level":1,
        "owned":0,
        "money": 9500000,
        "food": 1000,
        "housing": 90,
        "metal": 6500,
        "oil" : 0,
        "plastics": 1000,
        "wood": 0,
        "electronics": 7250,
        "intelligence": 3000,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 500,
        "cost_per_tick_food": 0.50,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0.1,
        "adds_tick_moral": 1.2,
        "adds_tick_firepower":10,
        "hitpoints": 50,
        "damage": 30,
        "speed": 10,
        "buildspeed": 1,
        "consumes": "object_lieutenant"
    },"object_tankfactory": {
        "name":"Research tank factory",
        "build_text":"Build tank factory",
        "amount_text":"Tank factories",
        "buyable":false,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_tankfactories",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },"object_lighttank": {
        "name":"Light combat tank",
        "build_text":"Build light tank",
        "amount_text":"Light tanks",
        "buyable":true,
        "visible":false,
        "requires":"object_tankfactory",
        "requires_amount":1,
        "requires_research":"none",
        "requires_research_level":1,
        "owned":0,
        "money": 15000,
        "food": 500,
        "housing": 80,
        "metal": 2500,
        "oil" : 100,
        "plastics": 400,
        "wood": 0,
        "electronics": 600,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.5,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0.01,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0.05,
        "hitpoints": 9000,
        "damage": 3000,
        "speed": 100,
        "buildspeed": 1,
        "consumes": "object_soldier"
    },"object_mainbattletank": {
        "name":"Main battle tank",
        "build_text":"Build Main battle tank",
        "amount_text":"Main battle tanks",
        "buyable":true,
        "visible":false,
        "requires":"object_tankfactory",
        "requires_amount":1,
        "requires_research":"enable_mainbattletank",
        "requires_research_level":1,
        "owned":0,
        "money": 200000,
        "food": 2500,
        "housing": 300,
        "metal": 225000,
        "oil" : 500,
        "plastics": 1500,
        "wood": 0,
        "electronics": 2000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 2,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0.5,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":250,
        "hitpoints": 9000,
        "damage": 3000,
        "speed": 100,
        "buildspeed": 1,
        "consumes": "object_sergeant"},
    "object_howitzer": {
        "name":"Howitzer",
        "build_text":"Build howitzer",
        "amount_text":"Howitzers",
        "buyable":true,
        "visible":false,
        "requires":"object_tankfactory",
        "requires_amount":1,
        "requires_research":"enable_howitzer",
        "requires_research_level":1,
        "owned":0,
        "money": 500000,
        "food": 6500,
        "housing": 500,
        "metal": 2500000,
        "oil" : 2500,
        "plastics": 9000,
        "wood": 0,
        "electronics": 9000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 25,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 5,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":5000,
        "hitpoints": 9000,
        "damage": 3000,
        "speed": 100,
        "buildspeed": 1,
        "consumes": "object_colonel"},
    "object_roboticsfactory": {
        "name":"Robotics factory",
        "build_text":"Open robotics factory",
        "amount_text":"Robotics factories",
        "buyable":false,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_roboticsfactory",
        "requires_research_level":1,
        "owned":1,
        "money": 0,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },
    "object_supercomputer": {
        "name":"Supercomputer",
        "build_text":"Build supercomputer",
        "amount_text":"Supercomputers",
        "buyable":true,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_supercomputer",
        "requires_research_level":1,
        "owned":0,
        "money": 5000,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 500,
        "wood": 0,
        "electronics": 1000,
        "intelligence": 100,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.25,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0.15,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 1,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },
    "object_quantumcomputer": {
        "name":"Quantum computer",
        "build_text":"Build quantum computer",
        "amount_text":"Quantum computers",
        "buyable":true,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_quantumcomputer",
        "requires_research_level":1,
        "owned":0,
        "money": 750000,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 5000,
        "wood": 0,
        "electronics": 10000,
        "intelligence": 5000,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 5,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 2,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 125,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    },
    "object_3dprinter": {
        "name":"Industrial 3D Printer",
        "build_text":"Build Industrial 3D Printer",
        "amount_text":"Industrial 3D Printers",
        "buyable":true,
        "visible":false,
        "requires":"none",
        "requires_amount":0,
        "requires_research":"enable_3dprinter",
        "requires_research_level":1,
        "owned":0,
        "money": 2500,
        "food": 0,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 100,
        "wood": 0,
        "electronics": 2000,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0.01,
        "cost_per_tick_plastics": 0.1,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0.01,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0,
        "cost_per_tick_firepower":0,
        "adds_money": 0,
        "adds_food": 0,
        "adds_housing": 0,
        "adds_metal": 0,
        "adds_oil" : 0,
        "adds_plastics": 0,
        "adds_wood": 0,
        "adds_electronics": 0,
        "adds_intelligence": 0,
        "adds_moral": 0,
        "adds_firepower":0,
        "adds_tick_money": 0.5,
        "adds_tick_food": 0,
        "adds_tick_housing": 0,
        "adds_tick_metal": 0,
        "adds_tick_oil" : 0,
        "adds_tick_plastics": 0,
        "adds_tick_wood": 0,
        "adds_tick_electronics": 0,
        "adds_tick_intelligence": 0,
        "adds_tick_moral": 0,
        "adds_tick_firepower":0,
        "hitpoints": 5000,
        "damage": 0,
        "speed": 0,
        "buildspeed": 1,
        "consumes": "none"
    }
};

objects_descriptions = {
    "object_headquarters":"All your base are belong to us.",
    "object_researchfacility":"Why researching if you can search it once? A research facility allows you to train scientists.",
    "object_barracks":"Allows the training of general purpose cannonfodder. You gotta feed those cannons, right!",
    "object_tankfactory":"Allows the bulding of combat thanks",
    "object_house":"Home sweet home. I may be built from just money, I'm still well isolated.",
    "object_mansion":"Home sweet better home. House party. Someone?",
    "object_cityhall":"Home sweet mother of all homes. This big hive full of civil servants also gives you a serious moral boost; so you know!",
    "object_peasant":"They bring their own food, sleeps and lives on a single square meter and they pay taxes. Gen pop. Sheeple. Sleepers. Whatever you want to call them.",
    "object_farmer":"Without food there is noone willing to do the hard work for you.",
    "object_woodchopper":"These guys know how to swing an axe. Be careful they don't swing it towards you.",
    "object_ironminer":"These guys like to be in deep dark holes. To mine iron. Obviously.",
    "object_servant":"They know how to make a cup of barely drinkable coffee.",
    "object_scrapper":"They smell like shit, but brings home a lot of resources. But yeah, that's where you will pay for. Good thing is: They sleep at the dump yard and they only need 2 square meters to store their gear.",
    "object_scientist":"Socially awkward, but smarter than one stone. They do ransack your wallet though.",
    "object_soldier":"Your general purpose cannon fodder.",
    "object_sergeant":"Sir, yes sir!",
    "object_lieutenant":"I don't even know myself why I've added this annoying-to-spell rank",
    "object_colonel":"Hey yo Captain Jack, Bring me back to the railroad track... Oh, wait. I'm sorry colonel!",
    "object_lighttank":"Tank you.",
    "object_clandestineoperations":"You should not even know what happens behind the curtains, you, sheep.",
    "object_humantrafficking":"This is sooo bad, but the money is sooo good. Be careful with the high Moral/sec per traffick; don't be too greedy! <br>Human trafficking still exists and it is <b>really bad shit</b>. Please do enjoy this game, but also consider donating to charities, like: https://www.stopthetraffik.org/donate/",
    "object_drillingcompany":"Did you notice you are paying a lot of Moral/sec, but only receiving a small amount of business tax? Everything comes with a dirty price, especially in the oil business, where you where unable to keep your dirty hands off.",
    "object_oilwell":"This is not a drill! Oh wait... it might be one, actually.",
    "object_oiltanker":"Did you ever wonder how far a oil tanker could travel using it's own tank AND it's cargo?.",
    "object_blackhathacker":"01001001 00100000 01101100 01101111 01110110 01100101 00100000 01110100 01101000 01101001 01110011 00100000 01100111 01100001 01101101 01100101 00100000 00111010 00101001",
    "object_mainbattletank":"You will need a sergeant for this nice piece of cold steel.",
    "object_howitzer":"How it's done, you ask? Howitzer!",
    "object_roboticsfactory":"Beep beep beep blip blip beep beep",
    "object_supercomputer":"Just a lot more Beep beep beep blip blip beep beep",
    "object_3dprinter":"Mass production of plastic fantastic objects for huge profits.",
    "object_oilrefinery":"Creating more mass out of the same product? Total neglecting basic physics? This refinery can do just that!",
    "object_quantumcomputer":"SHA-3 encryption? Ha-ha-ha.",
    "object_senate":"Why the government has to be involved in this game? Why?",
    "object_worldforum":"Did you know that there actually is an existing 'World Forum' in The Hague, Netherlands?",
    "object_worldgovernment":"Yup, the Illuminati exists. ",
    "object_banker":"This banker makes money out of thin air. Almost looks like a real banker. Not everyone is happy with the banks, so watch the Moral cost carefully."
};

var upgrades= {
    "enable_drillingcompany":{
        "name":"Open Oil drilling company",
        "button_placement":"object_headquarters",
        "available":true,
        "affected_object":"object_drillingcompany",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"moral",
        "cost_amount_base":0,
        "cost_level_increment_power":1,
        "cost_amount":10000,
        "current_level":0,
        "max_level":1},
    "enable_oiltanker":{
        "name":"Acquire Shipyard",
        "button_placement":"object_drillingcompany",
        "available":true,
        "affected_object":"object_oiltanker",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":0,
        "cost_level_increment_power":1,
        "cost_amount":1000000,
        "current_level":0,
        "max_level":1},
    "sailing_enemy_waters":{
        "name":"Sail through enemy waters",
        "button_placement":"object_oiltanker",
        "available":true,
        "affected_object":"object_oiltanker",
        "add_type":"adds_tick_money",
        "add_amount":600,
        "set_type":"cost_per_tick_firepower",
        "set_amount":2,
        "cost":"firepower",
        "cost_amount_base":0,
        "cost_level_increment_power":1,
        "cost_amount":5000000,
        "current_level":0,
        "max_level":1},
    "enable_oilrefinery":{
        "name":"Research Oil refinery",
        "button_placement":"object_drillingcompany",
        "available":true,
        "affected_object":"object_oilrefinery",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":0,
        "cost_level_increment_power":1,
        "cost_amount":750000000,
        "current_level":0,
        "max_level":1},
    "route_pipes_trough_population":{
        "name":"Route pipes through villages",
        "button_placement":"object_oilwell",
        "available":true,
        "affected_object":"object_oilwell",
        "add_type":"adds_tick_oil",
        "add_amount":8,
        "set_type":"cost_per_tick_moral",
        "set_amount":0.5,
        "cost":"money",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":50000000,
        "current_level":0,
        "max_level":1},
    "create_plastics":{
        "name":"Refine waste into plastics",
        "button_placement":"object_oilrefinery",
        "available":true,
        "affected_object":"object_oilrefinery",
        "add_type":"adds_tick_plastics",
        "add_amount":5,
        "set_type":"none",
        "set_amount":0,
        "cost":"intelligence",
        "cost_amount_base":6000000,
        "cost_level_increment_power":3,
        "cost_amount":6000000,
        "current_level":0,
        "max_level":5},
    "teach_farming":{
        "name":"Teach farming",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_farmer",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":0,
        "cost_level_increment_power":1,
        "cost_amount":50,
        "current_level":0,
        "max_level":1},
    "equip_steelplows":{
        "name":"Equip steel plows",
        "button_placement":"object_farmer",
        "available":true,
        "affected_object":"object_farmer",
        "add_type":"adds_tick_food",
        "add_amount":0.015,
        "set_type":"none",
        "set_amount":true,
        "cost":"metal",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":350000,
        "current_level":0,
        "max_level":1},
    "equip_tractors":{
        "name":"Fuel the tractors",
        "button_placement":"object_farmer",
        "available":true,
        "affected_object":"object_farmer",
        "add_type":"adds_tick_food",
        "add_amount":0.90,
        "set_type":"cost_per_tick_oil",
        "set_amount":0.001,
        "cost":"oil",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":70000,
        "current_level":0,
        "max_level":1},
    "teach_lumbering":{
        "name":"Teach lumbering",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":350,
        "current_level":0,
        "max_level":1},
    "self_sharpening_axes":{
        "name":"Use self-sharpening axes",
        "button_placement":"object_woodchopper",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"adds_tick_wood",
        "add_amount":0.008,
        "set_type":"none",
        "set_amount":true,
        "cost":"metal",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":250,
        "current_level":0,
        "max_level":1},
    "log_backyards":{
        "name":"Log backyards of citizens",
        "button_placement":"object_woodchopper",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"adds_tick_wood",
        "add_amount":0.016,
        "set_type":"none",
        "set_amount":true,
        "cost":"moral",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":15000,
        "current_level":0,
        "max_level":1},
    "log_national_woods":{
        "name":"Log all national woods",
        "button_placement":"object_woodchopper",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"adds_tick_wood",
        "add_amount":0.064,
        "set_type":"none",
        "set_amount":true,
        "cost":"moral",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":1200000,
        "current_level":0,
        "max_level":1},
    "log_rainforest":{
        "name":"Log all global rainforests",
        "button_placement":"object_woodchopper",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"adds_tick_wood",
        "add_amount":0.256,
        "set_type":"none",
        "set_amount":true,
        "cost":"firepower",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":25000000,
        "current_level":0,
        "max_level":1},
    "teach_mining":{
        "name":"Teach mining",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_ironminer",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":1500,
        "current_level":0,
        "max_level":1},
    "teach_scrapping":{
        "name":"Teach scrapping",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":2500,
        "current_level":0,
        "max_level":1},
    "teach_banking":{
        "name":"Teach banking",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_banker",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":10000,
        "current_level":0,
        "max_level":1},
    "teach_civilservice":{
        "name":"Teach civil service",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_servant",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":25000,
        "current_level":0,
        "max_level":1},
    "increase_taxes":{
        "name":"Increase taxes",
        "button_placement":"object_peasant",
        "available":true,
        "affected_object":"object_peasant",
        "add_type":"adds_tick_money",
        "add_amount":0.003,
        "set_type":"none",
        "set_amount":false,
        "cost":"moral",
        "cost_amount_base":1500,
        "cost_level_increment_power":3,
        "cost_amount":1500,
        "current_level":0,
        "max_level":500},
    "self_expanding_walls":{
        "name":"Self expanding walls",
        "button_placement":"object_house",
        "available":true,
        "affected_object":"object_house",
        "add_type":"adds_tick_housing",
        "add_amount":0.003,
        "set_type":"none",
        "set_amount":false,
        "cost":"wood",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":2500,
        "current_level":0,
        "max_level":20},
    "appealing_architecture":{
        "name":"Use appealing architecture",
        "button_placement":"object_mansion",
        "available":true,
        "affected_object":"object_mansion",
        "add_type":"adds_tick_moral",
        "add_amount":0.025,
        "set_type":"none",
        "set_amount":false,
        "cost":"wood",
        "cost_amount_base":10000,
        "cost_level_increment_power":3,
        "cost_amount":5000,
        "current_level":0,
        "max_level":20},
    "upgrade_cannon":{
        "name":"Upgrade cannon",
        "button_placement":"object_lighttank",
        "available":true,
        "affected_object":"object_lighttank",
        "add_type":"adds_tick_firepower",
        "add_amount":0.002,
        "set_type":"none",
        "set_amount":false,
        "cost":"intelligence",
        "cost_amount_base":1000,
        "cost_level_increment_power":3,
        "cost_amount":5000,
        "current_level":0,
        "max_level":500},
    "enable_researchfacility":{
        "name":"Open Research fac.",
        "button_placement":"object_headquarters",
        "available":true,
        "affected_object":"object_researchfacility",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":5000,
        "current_level":0,
        "max_level":1},
    "enable_barracks":{
        "name":"Open Barracks",
        "button_placement":"object_headquarters",
        "available":true,
        "affected_object":"object_barracks",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":500,
        "current_level":0,
        "max_level":1},
    "strict_rations":{
        "name":"Enforce strict rationing",
        "button_placement":"object_soldier",
        "available":true,
        "affected_object":"object_soldier",
        "add_type":"cost_per_tick_food",
        "add_amount":-0.05,
        "set_type":"none",
        "set_amount":true,
        "cost":"moral",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":150000,
        "current_level":0,
        "max_level":1},
    "enforce_conscription":{
        "name":"Enforce conscription",
        "button_placement":"object_soldier",
        "available":true,
        "affected_object":"object_soldier",
        "add_type":"none",
        "add_amount":1,
        "set_type":"cost_per_tick_money",
        "set_amount":0.0,
        "cost":"moral",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":5000000,
        "current_level":0,
        "max_level":1},
    "enable_sergeant":{
        "name":"Sergeant training",
        "button_placement":"object_barracks",
        "available":true,
        "affected_object":"object_sergeant",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":15000,
        "current_level":0,
        "max_level":1},
    "enable_lieutenant":{
        "name":"Lieutenant training",
        "button_placement":"object_barracks",
        "available":true,
        "affected_object":"object_lieutenant",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":175000,
        "current_level":0,
        "max_level":1},
    "enable_colonel":{
        "name":"Colonel training",
        "button_placement":"object_barracks",
        "available":true,
        "affected_object":"object_colonel",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":2750000,
        "current_level":0,
        "max_level":1},
    "equip_screwdrivers":{
        "name":"Equip precision screwdrivers",
        "button_placement":"object_scrapper",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"adds_tick_electronics",
        "add_amount":0.019,
        "set_type":"none",
        "set_amount":0,
        "cost":"money",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":500000,
        "current_level":0,
        "max_level":1},
    "plastics_compactor":{
        "name":"Turn on Plastics compactor",
        "button_placement":"object_scrapper",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"adds_tick_plastics",
        "add_amount":0.024,
        "set_type":"cost_per_tick_oil",
        "set_amount":0.001,
        "cost":"oil",
        "cost_amount_base":100,
        "cost_level_increment_power":3,
        "cost_amount":100,
        "current_level":0,
        "max_level":1},
    "metal_detector":{
        "name":"Equip metal detector",
        "button_placement":"object_scrapper",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"adds_tick_metal",
        "add_amount":0.007,
        "set_type":"none",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":2275000,
        "current_level":0,
        "max_level":1},
    "hunt_seagulls":{
        "name":"Learn to hunt seagulls",
        "button_placement":"object_scrapper",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"adds_tick_food",
        "add_amount":0.015,
        "set_type":"none",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":9500000,
        "current_level":0,
        "max_level":1},
    "return_deposit_bottles":{
        "name":"Return deposit bottles",
        "button_placement":"object_scrapper",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"adds_tick_money",
        "add_amount":0.090,
        "set_type":"cost_per_tick_plastics",
        "set_amount":0.003,
        "cost":"intelligence",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":90000,
        "current_level":0,
        "max_level":1},
    "electronics_recycling_program":{
        "name":"Electronics recycling program",
        "button_placement":"object_cityhall",
        "available":true,
        "affected_object":"object_peasant",
        "add_type":"adds_tick_electronics",
        "add_amount":0.001,
        "set_type":"cost_per_tick_money",
        "set_amount":0.001,
        "cost":"money",
        "cost_amount_base":4500000,
        "cost_level_increment_power":3,
        "cost_amount":9000000,
        "current_level":0,
        "max_level":10},
    "enable_clandestineoperations":{
        "name":"Open Clandestine Ops. facility",
        "button_placement":"object_headquarters",
        "available":true,
        "affected_object":"object_clandestineoperations",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"moral",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":57500,
        "current_level":0,
        "max_level":1},
    "enable_hacker":{
        "name":"Learn black hat hacking",
        "button_placement":"object_clandestineoperations",
        "available":true,
        "affected_object":"object_blackhathacker",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"electronics",
        "cost_amount_base":50000,
        "cost_level_increment_power":3,
        "cost_amount":150000,
        "current_level":0,
        "max_level":1},
    "use_quantum_tech":{
        "name":"Use Quantum technology",
        "button_placement":"object_blackhathacker",
        "available":true,
        "affected_object":"object_blackhathacker",
        "add_type":"adds_tick_money",
        "add_amount":59.2,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":600000000,
        "cost_level_increment_power":3,
        "cost_amount":600000000,
        "current_level":0,
        "max_level":1},
    "enforce_better_deal":{
        "name":"Enforce better deal",
        "button_placement":"object_humantrafficking",
        "available":true,
        "affected_object":"object_humantrafficking",
        "add_type":"adds_money",
        "add_amount":19000000,
        "set_type":"none",
        "set_amount":true,
        "cost":"firepower",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":2750000,
        "current_level":0,
        "max_level":1},
    "enable_tankfactories":{
        "name":"Open Tank factory",
        "button_placement":"object_headquarters",
        "available":true,
        "affected_object":"object_tankfactory",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":1500,
        "current_level":0,
        "max_level":1},
    "enable_mainbattletank":{
        "name":"Research Main battle tank",
        "button_placement":"object_tankfactory",
        "available":true,
        "affected_object":"object_mainbattletank",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":20000000,
        "cost_level_increment_power":3,
        "cost_amount":20000000,
        "current_level":0,
        "max_level":1},
    "enable_howitzer":{
        "name":"Research Howitzer",
        "button_placement":"object_tankfactory",
        "available":true,
        "affected_object":"object_howitzer",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"intelligence",
        "cost_amount_base":850000000,
        "cost_level_increment_power":3,
        "cost_amount":850000000,
        "current_level":0,
        "max_level":1},
    "nuclear_shells":{
        "name":"Load nuclear shells",
        "button_placement":"object_howitzer",
        "available":true,
        "affected_object":"object_howitzer",
        "add_type":"adds_tick_firepower",
        "add_amount":45000,
        "set_type":"cost_per_tick_moral",
        "set_amount":100,
        "cost":"intelligence",
        "cost_amount_base":5000000000,
        "cost_level_increment_power":3,
        "cost_amount":5000000000,
        "current_level":0,
        "max_level":1},
    "enable_roboticsfactory":{
        "name":"Open Robotics factory",
        "button_placement":"object_headquarters",
        "available":true,
        "affected_object":"object_roboticsfactory",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"electronics",
        "cost_amount_base":0,
        "cost_level_increment_power":3,
        "cost_amount":2500,
        "current_level":0,
        "max_level":1},
    "enable_supercomputer":{
        "name":"Research Supercomputer",
        "button_placement":"object_roboticsfactory",
        "available":true,
        "affected_object":"object_supercomputer",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":200000,
        "cost_level_increment_power":3,
        "cost_amount":200000,
        "current_level":0,
        "max_level":1},
    "enable_quantumcomputer":{
        "name":"Develop Quantum computer",
        "button_placement":"object_roboticsfactory",
        "available":true,
        "affected_object":"object_quantumcomputer",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":75000000,
        "cost_level_increment_power":3,
        "cost_amount":75000000,
        "current_level":0,
        "max_level":1},
    "install_1024_core_cpu":{
        "name":"Install 1024-core processors",
        "button_placement":"object_supercomputer",
        "available":true,
        "affected_object":"object_supercomputer",
        "add_type":"adds_tick_intelligence",
        "add_amount":9,
        "set_type":"cost_per_tick_money",
        "set_amount":0.5,
        "cost":"electronics",
        "cost_amount_base":700000,
        "cost_level_increment_power":3,
        "cost_amount":700000,
        "current_level":0,
        "max_level":1},
    "install_fusion_laser_cpu":{
        "name":"Install Laser-fusion processors",
        "button_placement":"object_quantumcomputer",
        "available":true,
        "affected_object":"object_quantumcomputer",
        "add_type":"adds_tick_intelligence",
        "add_amount":1150,
        "set_type":"cost_per_tick_money",
        "set_amount":20,
        "cost":"electronics",
        "cost_amount_base":19000000,
        "cost_level_increment_power":3,
        "cost_amount":19000000,
        "current_level":0,
        "max_level":1},
    "enable_3dprinter":{
        "name":"Research Industrial 3D printer",
        "button_placement":"object_roboticsfactory",
        "available":true,
        "affected_object":"object_3dprinter",
        "add_type":"none",
        "add_amount":0,
        "set_type":"visible",
        "set_amount":true,
        "cost":"money",
        "cost_amount_base":100000,
        "cost_level_increment_power":3,
        "cost_amount":100000,
        "current_level":0,
        "max_level":1},
    "install_bigger_nozzles":{
        "name":"Install bigger nozzles",
        "button_placement":"object_3dprinter",
        "available":true,
        "affected_object":"object_3dprinter",
        "add_type":"adds_tick_money",
        "add_amount":19.5,
        "set_type":"cost_per_tick_plastics",
        "set_amount":1.5,
        "cost":"electronics",
        "cost_amount_base":1000000,
        "cost_level_increment_power":3,
        "cost_amount":1000000,
        "current_level":0,
        "max_level":1}
};


var currentHousing = 0;
var lastBoughtObject = "none";
var gameIntervalTimer = 100;
var autobuyer = {"object":"none","rate":1,"counter_set":9,"counter_value":0,"simultanous_buys":10};
var autoSaveCounter = 0;
var housingAdded = 0;



loadWebstorage();
buildupGameScreen();



function abortTimer() {
    clearInterval(tId);
}


function loadWebstorage(){
    var saveFile = btoa(JSON.stringify({"versioning":versioning,"upgrades":upgrades,"objects":objects,"currency":player_currency,"autobuy":autobuyer}));
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("cannonfodder_savegame") === null) {
            localStorage.setItem("cannonfodder_savegame", saveFile);
        }
        else{
            var loadedFile = JSON.parse(atob(localStorage.getItem("cannonfodder_savegame")));
            //console.log(loadedFile);
            if (typeof(loadedFile["versioning"]) !== "undefined") {
                if (loadedFile["versioning"]["version"] === versioning["version"]) {
                    upgrades = loadedFile["upgrades"];
                    objects = loadedFile["objects"];
                    player_currency = loadedFile["currency"];
                    autobuyer = loadedFile["autobuy"];
                    updateHousingInit();
                }
                else {
                    console.log("New version detected - Only saved currency has reloaded");
                    for (var cur in loadedFile["currency"]) {
                        if (loadedFile["currency"].hasOwnProperty(cur)) {
                            player_currency[cur] = loadedFile["currency"][cur];
                        }
                    }
                    objects["object_peasant"]["owned"] = loadedFile["objects"]["object_peasant"]["owned"];
                    objects["object_house"]["owned"] = loadedFile["objects"]["object_house"]["owned"];
                    objects["object_mansion"]["owned"] = loadedFile["objects"]["object_mansion"]["owned"];
                    objects["object_cityhall"]["owned"] = loadedFile["objects"]["object_cityhall"]["owned"];
                    objects["object_senate"]["owned"] = loadedFile["objects"]["object_senate"]["owned"];
                    objects["object_worldforum"]["owned"] = loadedFile["objects"]["object_worldforum"]["owned"];
                    objects["object_worldgovernment"]["owned"] = loadedFile["objects"]["object_worldgovernment"]["owned"];
                    saveFile = btoa(JSON.stringify({"versioning":versioning,"upgrades":upgrades,"objects":objects,"currency":player_currency,"autobuy":autobuyer}));
                    localStorage.setItem("cannonfodder_savegame", saveFile);
                    window.location.reload(true);
                }
            }
            else{
                localStorage.setItem("cannonfodder_savegame", saveFile);
                window.location.reload(true);
            }
        }
    } else {
        // No webstorage
    }
}


function buildupGameScreen(){
    var X = "";
    var Y = "";
    X += '<div class="currencies">';
    for (var cur in player_currency) {
        if (player_currency.hasOwnProperty(cur)) {
            X += '<div class="currency_title">' + player_currency_names[cur] + '<div class="currency" id="currency_' + cur + '">0</div>' +
                '<div class="currency_tick" id="delta_currency_' + cur + '">' +
                '<div id="tick_indicator_' + cur + '" class="tick_indicator tick_neutral"></div>' +
                '<span class="delta_currency_amount" id="delta_currency_amount_' + cur + '" class="">#</span>' +
                '</div>' +
                '</div>';
        }
    }
    X += '</div>';
    for (var obj in objects) {
        if (objects.hasOwnProperty(obj)) {
            X += '<div id="main_' + obj + '" class="object object_div ' + obj + '">' +
                '<div class="object_content" id="' + obj + '">' +
                '<div class="object_title">' + objects[obj]["amount_text"] + ' <span class="amount" id="amount_' + obj + '">0</span></div>' +
                '<div class="buy_info subtractions" id="buildcost_' + obj + '"></div>' +
                '<div class="buy_info subtractions" id="buildcosttick_' + obj + '"></div>' +
                '<div class="buy_info additions" id="adds_' + obj + '"></div>' +
                '<div class="buy_info additions" id="adds_per_tick_' + obj + '"></div>' +
                '<div class="object_info" id="info_house">' + objects_descriptions[obj] + '</div>' +
                '<br />' +
                '<div class="object_btn_group">';
            if(objects[obj]["buyable"] === true) {
                X += '<button onclick="buyClick(\'' + obj + '\',\'1\')" class="button buy" id="buy_' + obj + '">' + objects[obj]["build_text"] + '</button>' +
                    '<button onclick="buyClick(\'' + obj + '\',\'10\')" class="button buy" id="buy_' + obj + '">x10</button>' +
                    '<button onclick="buyClick(\'' + obj + '\',\'100\')" class="button buy" id="buy_' + obj + '">x100</button>' +
                    '<button onclick="buyClick(\'' + obj + '\',\'500\')" class="button buy" id="buy_' + obj + '">x500</button>' +
                    '<button onclick="autoBuyClick(\'' + obj + '\')" class="button autobuy" id="autobuy_' + obj + '">Automatic</button>';
            }
            for (var upg in upgrades) {
                if (upgrades.hasOwnProperty(upg)) {
                    if(upgrades[upg]["button_placement"] === obj){
                        Y = getUpgradeButtonText(upg);
                        X += '<button onclick="upgradeClick(\'' + upg + '\')" class="button upgrade" id="upgrade_' + upg + '">' + Y + '</button>';
                    }
                }
            }
            X += '</div>' +
                '</div>' +
                '</div>';
        }
    }
    X += '<div class="footer">V' + versioning["version"] + ' build ' + versioning["build"] + ' - ' +versioning["contact"]+ ' - <a href="techtree.html" target="_blank">Techtree</a>&nbsp;&nbsp;<a href="changelog.html" target="_blank">Changelog</a>&nbsp;&nbsp;<a href="https://donorbox.org/donate-cannonfodder">Donate</a></div>';
    $( '#game_screen' ).html(X);
    if (autobuyer["object"] !== "none") {
        $("#autobuy_" + autobuyer["object"]).addClass("autobuy_active");
    }
    var tId = setInterval(gameLoop, gameIntervalTimer);
}




//
//  GAME LOOP
//

function gameLoop() {
    updateHousing();           //Housing only
    updateCurrencyTicks();
    getCurrentHousing();
    triggerAutobuy();
    updateBuildingDependencies();
    updateObjectAmounts();
    updateObjectBuildcost();
    setAdaptiveBuildPrices();
    autoSaveWebStorage();       //last item
}


function updateHousing(){
    player_currency["housing"] -= housingAdded;
    housingAdded = 0;
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            if ((objects[objectName]["adds_housing"]) > 0 && (objects[objectName]["owned"] > 0)) {
                housingAdded += objects[objectName]["adds_housing"] * objects[objectName]["owned"];
            }
        }
    }
    player_currency["housing"] += housingAdded;
}


function updateHousingInit(){
    housingAdded = 0;
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            if ((objects[objectName]["adds_housing"]) > 0 && (objects[objectName]["owned"] > 0)) {
                housingAdded += objects[objectName]["adds_housing"] * objects[objectName]["owned"];
            }
        }
    }
    player_currency["housing"] = housingAdded;
}


function updateCurrencyTicks(){
    for (var objectName in objects){
        if (objects.hasOwnProperty(objectName)) {
            if (objects[objectName]["visible"] === true) {
                var amountToAcquire = checkCostsPerTickLiquidity(objectName, objects[objectName]["owned"]);
                for (var key in player_currency) {
                    if (player_currency.hasOwnProperty(key)) {
                        if (objects[objectName]["adds_tick_" + key] > 0) {
                            currency_per_tick[key] += objects[objectName]["adds_tick_" + key] * amountToAcquire;
                        }
                    }
                }
            }
        }
    }
    updateCurrency();
    for (var cur in player_currency) {
        if (player_currency.hasOwnProperty(cur)) {
            delta_per_tick[cur] = currency_per_tick[cur] - cost_per_tick_total[cur];
            cost_per_tick_total[cur] = 0;
            currency_per_tick[cur] = currency_per_tick_base[cur];
        }
    }
}


function checkCostsPerTickLiquidity(objectName, amount){
    finetune = false;
    for (var key in player_currency) {
        if (player_currency.hasOwnProperty(key)) {
            if (objects[objectName]["cost_per_tick_" + key] > 0) {
                if(player_currency[key] < (objects[objectName]["cost_per_tick_" + key] * amount)){
                    finetune = true;
                    break;
                }
            }
        }
        cost_per_tick_total[key] += objects[objectName]["cost_per_tick_" + key] * amount;
    }
    if (finetune === true){
        var lowestAmount = amount;
        var measuredAmount = 0;
        for (var keyF in player_currency) {
            if (player_currency.hasOwnProperty(keyF)) {
                measuredAmount = Math.trunc((player_currency[keyF] / objects[objectName]["cost_per_tick_" + keyF]));
                if (measuredAmount < lowestAmount){
                    lowestAmount = measuredAmount;
                }
            }
        }
        validatedAmount = lowestAmount;
    }
    else{
        validatedAmount = amount;
    }
    for (var keyV in player_currency) {
        if (player_currency.hasOwnProperty(keyV)) {
            player_currency[keyV] -= (objects[objectName]["cost_per_tick_" + keyV] * validatedAmount)
        }
    }
    return validatedAmount;
}


function updateCurrency(){
    for (var key in player_currency){
        if (player_currency.hasOwnProperty(key)) {
            if(update_currency[key] !== 0)
                player_currency[key] += update_currency[key];
            player_currency[key] += currency_per_tick[key];
            update_currency[key] = 0;
            if(key === "housing"){
                $("#currency_" + key).html(formatCurrencyValues(currentHousing)+"/"+formatCurrencyValues(player_currency[key]));
            }
            else {
                $("#currency_" + key).html(formatCurrencyValues(player_currency[key]));
            }
            var tickIndicator = "#tick_indicator_" + key;
            if(delta_per_tick[key] > 0) {
                if( $( tickIndicator ).hasClass("tick_negative") || $( tickIndicator ).hasClass("tick_neutral")) {
                    $(tickIndicator).removeClass("tick_negative");
                    $(tickIndicator).removeClass("tick_neutral");
                }
                $( tickIndicator ).addClass("tick_positive");
            }
            else if(delta_per_tick[key] < 0){
                if( $( tickIndicator ).hasClass("tick_positive") || $( tickIndicator ).hasClass("tick_neutral")) {
                    $(tickIndicator).removeClass("tick_positive");
                    $(tickIndicator).removeClass("tick_neutral");
                }
                $( tickIndicator ).addClass("tick_negative");
            }
            else{
                if( $( tickIndicator ).hasClass("tick_negative") || $( tickIndicator ).hasClass("tick_negative")) {
                    $(tickIndicator).removeClass("tick_negative");
                    $(tickIndicator).removeClass("tick_positive");
                }
                $( tickIndicator ).addClass("tick_neutral");

            }
            $("#delta_currency_amount_" + key).html(formatCurrencyValues(delta_per_tick[key] * 10));
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


function triggerAutobuy(){
    if(autobuyer["object"] !== "none"){
        if(autobuyer["counter_value"] >= autobuyer["counter_set"]) {
            autobuyer["counter_value"] = 0;
            buyClick(autobuyer["object"], autobuyer["simultanous_buys"]);
        }
        else{
            autobuyer["counter_value"] += 1;
        }
    }
}


function updateBuildingDependencies(){
    //"buyable":false,
    //"requires":"object_servant",
    //"requires_amount":1,
    for (var key in objects) {
        var visible = false;
        if (objects.hasOwnProperty(key)) {
            if (objects[key]["visible"] === true) {
                var id = "#main_" + key;
                visible = true;
                if ($(id).hasClass("visible") === false) {
                    $(id).addClass("visible");
                }
            }
            else {
                if (objects[key]["requires"] !== "none") {
                    visible = (objects[objects[key]["requires"]]["owned"] >= objects[key]["requires_amount"]) && (objects[objects[key]["requires"]]["visible"] === true);
                }
                else{
                    visible = true;
                }
                if ((objects[key]["requires_research"] !== "none") && (visible === true)) {
                    if (upgrades[objects[key]["requires_research"]]["current_level"] < objects[key]["requires_research_level"]) {
                        visible = false;
                    }
                }
            }
            objects[key]["visible"] = visible;
        }
    }
}


function updateObjectBuildcost(){
    for (var objectName in objects){
        var hide = {"#buildcost_":true,"#buildcosttick_":true,"#adds_":true,"#adds_per_tick_":true};
        if (objects.hasOwnProperty(objectName)) {
            var buildcostSet = 0;
            var costTickSet = 0;
            var addsSet = 0;
            var addsTickSet = 0;
            for (var key in player_currency) {
                if (player_currency.hasOwnProperty(key)) {
                    if (objects[objectName][key] > 0) {
                        costValueToDisplay = formatCurrencyValues(objects[objectName][key]);
                        hide["#buildcost_"] = false;
                        if(buildcostSet === 0){
                            $( "#buildcost_" + objectName ).html('Building cost:<br />');
                            buildcostSet = 1;
                        }
                        if(key === "housing") {
                            if(objects[objectName]["consumes"] !== "none") {
                                if ((objects[objectName]["housing"] - objects[objects[objectName]["consumes"]]["housing"]) > (player_currency["housing"] - currentHousing)) {
                                    $("#buildcost_" + objectName).append(costValueToDisplay + " " + player_currency_names[key] + "<br />");
                                }
                                else{
                                    $("#buildcost_" + objectName).append("<b>" + objects[objectName][key] + " " + player_currency_names[key] + "</b><br />");
                                }
                            }
                            else {
                                if (objects[objectName]["housing"] > (player_currency["housing"] - currentHousing)) {
                                    $("#buildcost_" + objectName).append(costValueToDisplay + " " + player_currency_names[key] + "<br />");
                                }
                                else{
                                    $("#buildcost_" + objectName).append("<b>" + costValueToDisplay + " " + player_currency_names[key] + "</b><br />");
                                }
                            }
                        }
                        else if(player_currency[key] >= objects[objectName][key]){
                            $("#buildcost_" + objectName).append("<b>" + costValueToDisplay + " " + player_currency_names[key] + "</b><br />");
                        }
                        else {
                            $("#buildcost_" + objectName).append(costValueToDisplay + " " + player_currency_names[key] + "<br />");
                        }
                    }
                    if (objects[objectName]["cost_per_tick_"+key] > 0) {
                        hide["#buildcosttick_"] = false;
                        var costPerTick = "#buildcosttick_" + objectName;
                        if(costTickSet === 0){
                            $( costPerTick ).html('Cost per second:<br />');
                            costTickSet = 1;
                        }
                        $( costPerTick ).append(formatCurrencyValues((objects[objectName]["cost_per_tick_"+key]*10)) + " " + player_currency_names[key] + "<br />");
                    }
                    if (objects[objectName]["adds_"+key] > 0) {
                        hide["#adds_"] = false;
                        var addsCurrency = "#adds_" + objectName;
                        if(addsSet === 0){
                            $( addsCurrency ).html('Adds:<br />');
                            addsSet = 1;
                        }
                        $( addsCurrency ).append(formatCurrencyValues(objects[objectName]["adds_"+key]) + " " + player_currency_names[key] + "<br />");
                    }
                    if (objects[objectName]["adds_tick_"+key] > 0) {
                        hide["#adds_per_tick_"] = false;
                        var addsTickCurrency = "#adds_per_tick_" + objectName;
                        if(addsTickSet === 0){
                            $( addsTickCurrency ).html('Adds per second:<br />');
                            addsTickSet = 1;
                        }
                        $( addsTickCurrency ).append((formatCurrencyValues(objects[objectName]["adds_tick_"+key]*10)) + " " + player_currency_names[key] + "<br />");
                    }
                }
            }
            for (var idName in hide) {
                if (hide.hasOwnProperty(idName)) {
                    if((hide[idName] === true) && ($(idName + objectName).hasClass('hide') === false)) {
                        $(idName + objectName).addClass('hide');
                    }
                    else if((hide[idName] === false) && $(idName + objectName).hasClass('hide') === true){
                        $(idName + objectName).removeClass('hide');
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
            if ((objects[objectName]["owned"] > 0) && (objects[objectName]["housing"] > 0)) {
                currentHousing += objects[objectName]["housing"] * objects[objectName]["owned"];
                if (Math.trunc(currentHousing) > Math.trunc(player_currency["housing"])){
                    player_currency["housing"] = Math.trunc(currentHousing);
                }
            }
        }
    }
}


function buyClick(objectName, times){
    for(var i=0; i < times; i++) {
        getCurrentHousing();
        for (var key in player_currency) {
            if (player_currency.hasOwnProperty(key)) {
                if (objects[objectName][key] > player_currency[key]) {
                    return;
                }
                if (objects[objectName]["consumes"] !== "none") {
                    if (objects[objects[objectName]["consumes"]]["owned"] < 1) {
                        return;
                    }
                    if ((objects[objectName]["housing"] - objects[objects[objectName]["consumes"]]["housing"]) > (player_currency["housing"] - currentHousing)) {
                        return;
                    }
                }
                else {
                    if (objects[objectName]["housing"] > (player_currency["housing"] - currentHousing)) {
                        return;
                    }
                }
            }
        }
        for (var k in player_currency) {
            if (player_currency.hasOwnProperty(k)) {
                if ((objects[objectName][k] > 0) || (objects[objectName]['adds_' + k] > 0)) {
                    if (k !== "housing") {
                        player_currency[k] -= objects[objectName][k];
                        player_currency[k] += objects[objectName]['adds_' + k];
                    }
                }
            }
        }
        objects[objectName]["owned"] += 1;
        lastBoughtObject = objectName;
        if (objects[objectName]["consumes"] !== "none") {
            objects[objects[objectName]["consumes"]]["owned"] -= 1;
        }
        setAdaptiveBuildPrices();
    }
}


function upgradeClick(upgradeName){
    if(player_currency[upgrades[upgradeName]["cost"]] >= upgrades[upgradeName]["cost_amount"]){
        if(upgrades[upgradeName]["current_level"] < upgrades[upgradeName]["max_level"]){
            upgrades[upgradeName]["current_level"] += 1;
            player_currency[upgrades[upgradeName]["cost"]] -= upgrades[upgradeName]["cost_amount"];
            upgrades[upgradeName]["cost_amount"] = upgrades[upgradeName]["cost_amount"] + (upgrades[upgradeName]["cost_amount_base"] * (Math.pow((upgrades[upgradeName]["current_level"]),upgrades[upgradeName]["cost_level_increment_power"])));
            //process effects
            if(upgrades[upgradeName]["add_type"] !== "none") {
                objects[upgrades[upgradeName]["affected_object"]][upgrades[upgradeName]["add_type"]] += upgrades[upgradeName]["add_amount"];
            }
            if(upgrades[upgradeName]["set_type"] !== "none") {
                objects[upgrades[upgradeName]["affected_object"]][upgrades[upgradeName]["set_type"]] = upgrades[upgradeName]["set_amount"];
            }
            //update button
            X = getUpgradeButtonText(upgradeName);
            $( '#upgrade_' + upgradeName ).html(X);

        }

    }
}


function autoBuyClick(objectName){
    $( "#autobuy_" + autobuyer["object"] ).removeClass("autobuy_active");
    if(autobuyer["object"] !== objectName) {
        autobuyer["object"] = objectName;
        $( "#autobuy_" + objectName ).addClass("autobuy_active");
    }
    else{
        autobuyer["object"] = "none";
    }
}


function setAdaptiveBuildPrices(){
    objects["object_house"]["money"] = 100 + (Math.pow((objects["object_house"]["owned"]),2) * 35);
    objects["object_mansion"]["money"] = 5000 + (objects["object_mansion"]["owned"] * 5000);
    objects["object_mansion"]["wood"] = 200 + (objects["object_mansion"]["owned"] * 200);
    objects["object_cityhall"]["money"] = 900000 + (objects["object_cityhall"]["owned"] * 1800000);
    objects["object_cityhall"]["wood"] = 40000 + (objects["object_cityhall"]["owned"] * 80000);
    objects["object_cityhall"]["metal"] = 20000 + (objects["object_cityhall"]["owned"] * 40000);
    objects["object_senate"]["money"] = 38000000 + (objects["object_senate"]["owned"] * 76000000);
    objects["object_senate"]["wood"] = 900000 + (objects["object_senate"]["owned"] * 1800000);
    objects["object_senate"]["metal"] = 500000 + (objects["object_senate"]["owned"] * 1000000);
    objects["object_worldforum"]["money"] = 775000000000 + (objects["object_worldforum"]["owned"] * 2200000000000);
    objects["object_worldforum"]["wood"] = 290000000 + (objects["object_worldforum"]["owned"] * 580000000);
    objects["object_worldforum"]["metal"] = 950000000 + (objects["object_worldforum"]["owned"] * 1900000000);
}


function autoSaveWebStorage() {
    if (autoSaveCounter > 150) {    //every 15 seconds
        autoSaveCounter = 0;
        var saveFile = btoa(JSON.stringify({"versioning":versioning,"upgrades": upgrades, "objects": objects, "currency":player_currency,"autobuy":autobuyer}));
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("cannonfodder_savegame", saveFile);
        }
    }
    else{
        autoSaveCounter += 1;
    }
}


//
// Helper functions
//
function getUpgradeButtonText(upgradeName){
    if((upgrades[upgradeName]["current_level"] !== upgrades[upgradeName]["max_level"]) && (upgrades[upgradeName]["max_level"] === 1)) {
        tX = upgrades[upgradeName]["name"] + '<br>' + formatCurrencyValues(upgrades[upgradeName]["cost_amount"]) + ' ' + player_currency_names[upgrades[upgradeName]["cost"]];
    }
    else if(upgrades[upgradeName]["current_level"] !== upgrades[upgradeName]["max_level"]) {
        tX = upgrades[upgradeName]["name"] + ' [lvl ' + upgrades[upgradeName]["current_level"] + ']<br>' + formatCurrencyValues(upgrades[upgradeName]["cost_amount"]) + ' ' + player_currency_names[upgrades[upgradeName]["cost"]];
    }
    else if(upgrades[upgradeName]["current_level"] > 1){
        tX = '<span class="done">' + upgrades[upgradeName]["name"] + ' [MAX]</span>';
    }
    else{
        tX = '<span class="done">' + upgrades[upgradeName]["name"] + '</span>';
    }
    return tX;
}

function formatCurrencyValues(value){
    var decA = 0;
    var decB = 1;
    var decC = 2;
    if((value < 1000) && (value % 1 === 0)){
        decB = 0;
        decC = 0;
    }
    else if((value < 1000000) && ((value/1000) % 1 === 0)){
        decB = 0;
        decC = 0;
    }
    else if((value < 1000000000) && ((value/1000000) % 1 === 0)){
        decB = 0;
        decC = 0;
    }
    else if(value > 9999999999){
        decB = 0;
        decC = 0;
    }
    if (value > 9999999999){
        returnValue = (value/1000000000).toFixed(decA) + "B";
    }
    else if (value > 9999999999){
        returnValue = (value/1000000000).toFixed(decB) + "B";
    }
    else if (value > 999999999){
        returnValue = (value/1000000000).toFixed(decC) + "B";
    }
    else if (value > 99999999){
        returnValue = (value/1000000).toFixed(decA) + "M";
    }
    else if (value > 9999999){
        returnValue = (value/1000000).toFixed(decB) + "M";
    }
    else if (value > 999999){
        returnValue = (value/1000000).toFixed(decC) + "M";
    }
    else if (value > 99999){
        returnValue = (value/1000).toFixed(decA) + "K";
    }
    else if (value > 9999){
        returnValue = (value/1000).toFixed(decB) + "K";
    }
    else if (value > 999){
        returnValue = (value/1000).toFixed(decC) + "K";
    }
    else if (value > 99){
        return value.toFixed(decB);
    }
    else{
        return value.toFixed(decC);
    }
    return returnValue;

}
