var versioning = {"version":"B08","build":2,"contact":"alexander@gm7.nl"};

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
        "adds_housing": 200,
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
        "adds_tick_moral": 0.1,
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
        "moral": 100,
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
        "cost_per_tick_moral": 0.01,
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
        "housing": 25,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 2500,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0.2,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0.05,
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
        "adds_tick_money": 0.2,
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
        "money": 2500,
        "food": 75,
        "housing": 10,
        "metal": 100,
        "oil" : 0,
        "plastics": 150,
        "wood": 0,
        "electronics": 100,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
        "cost_per_tick_food": 0.075,
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
        "adds_tick_moral": 0,
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
        "adds_tick_moral": 0,
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
        "adds_housing": 22000,
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
        "adds_tick_moral": 0.3,
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
        "money": 850000,
        "food": 0,
        "housing": 0,
        "metal": 10000,
        "oil" : 0,
        "plastics": 0,
        "wood": 5000,
        "electronics": 1000,
        "intelligence": 0,
        "moral": 1000,
        "firepower":0,
        "cost_per_tick_money": 0.2,
        "cost_per_tick_food": 0,
        "cost_per_tick_housing": 0,
        "cost_per_tick_metal": 0.025,
        "cost_per_tick_plastics": 0,
        "cost_per_tick_wood": 0.005,
        "cost_per_tick_oil": 0,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0.025,
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
        "adds_tick_oil" : 0.2,
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
        "money": 50000,
        "food": 0,
        "housing": 0,
        "metal": 2500,
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
        "cost_per_tick_oil": 0.2,
        "cost_per_tick_electronics": 0,
        "cost_per_tick_intelligence": 0,
        "cost_per_tick_moral": 0.01,
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
        "adds_tick_money": 0.65,
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
        "cost_per_tick_money": 0.005,
        "cost_per_tick_food": 0.007,
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
        "adds_tick_metal": 0.010,
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
        "housing": 5,
        "metal": 50,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.01,
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
        "money": 450,
        "food": 50,
        "housing": 0,
        "metal": 0,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 0,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0.025,
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
        "housing": 20,
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
        "housing": 20,
        "metal": 500,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 125,
        "intelligence": 50,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 1,
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
        "adds_tick_moral": 0.002,
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
        "housing": 30,
        "metal": 500,
        "oil" : 0,
        "plastics": 0,
        "wood": 0,
        "electronics": 500,
        "intelligence": 425,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 50,
        "cost_per_tick_food": 0.15,
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
        "adds_tick_moral": 0.01,
        "adds_tick_firepower":0.2,
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
        "money": 18750000,
        "food": 1000,
        "housing": 50,
        "metal": 6500,
        "oil" : 0,
        "plastics": 1000,
        "wood": 0,
        "electronics": 7250,
        "intelligence": 3000,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 750,
        "cost_per_tick_food": 0.45,
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
        "adds_tick_intelligence": 0.02,
        "adds_tick_moral": 0.1,
        "adds_tick_firepower":1,
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
        "money": 12500,
        "food": 500,
        "housing": 80,
        "metal": 1600,
        "oil" : 100,
        "plastics": 400,
        "wood": 0,
        "electronics": 600,
        "intelligence": 0,
        "moral": 0,
        "firepower":0,
        "cost_per_tick_money": 0,
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
        "adds_tick_firepower":0.01,
        "hitpoints": 9000,
        "damage": 3000,
        "speed": 100,
        "buildspeed": 1,
        "consumes": "object_soldier"
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
    "object_scrapper":"They smell like shit, but brings home a lot of resources. But yeah, that's where you will pay for. Good thing is: They sleep at the dump yard.",
    "object_scientist":"Socially awkward, but smarter than one stone. They do ransack your wallet though.",
    "object_soldier":"Your general purpose cannon fodder.",
    "object_sergeant":"Sir, yes sir!",
    "object_lieutenant":"I don't even know myself why I've added this annoying-to-spell rank",
    "object_colonel":"Hey yo Captain Jack, Bring me back to the railroad track... Oh, wait. I'm sorry colonel!",
    "object_lighttank":"Tank you.",
    "object_clandestineoperations":"You should not even know what happens behind the curtains, you, sheep.",
    "object_humantrafficking":"This is sooo bad, but the money is sooo good. <br>Human trafficking still exists and it is <b>really bad shit</b>. Please do enjoy this game, but also consider donating to charities, like: https://www.stopthetraffik.org/donate/",
    "object_drillingcompany":"Did you notice you are paying a lot of Moral/sec, but only receiving a small amount of business tax? Everything comes with a dirty price, especially in the oil business, where you where unable to keep your dirty hands off.",
    "object_oilwell":"This is not a drill! Oh wait... it might be one, actually.",
    "object_oiltanker":"Did you ever wonder how far a oil tanker could travel using it's own tank AND it's cargo?."
};

var upgrades= {
    "enable_drillingcompany":{
        "name":"Open oil drilling company",
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
        "name":"Acquire shipyard",
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
    "log_national_woods":{
        "name":"log all national woods",
        "button_placement":"object_woodchopper",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"adds_tick_wood",
        "add_amount":0.024,
        "set_type":"none",
        "set_amount":true,
        "cost":"moral",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":2500000,
        "current_level":0,
        "max_level":1},
    "log_rainforest":{
        "name":"log all global rainforests",
        "button_placement":"object_woodchopper",
        "available":true,
        "affected_object":"object_woodchopper",
        "add_type":"adds_tick_wood",
        "add_amount":0.10,
        "set_type":"none",
        "set_amount":true,
        "cost":"firepower",
        "cost_amount_base":1,
        "cost_level_increment_power":1,
        "cost_amount":50000000,
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
        "cost_amount":9000,
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
        "cost_amount":5000,
        "current_level":0,
        "max_level":500},
    "self_expanding_walls":{
        "name":"Self expanding walls",
        "button_placement":"object_house",
        "available":true,
        "affected_object":"object_house",
        "add_type":"adds_tick_housing",
        "add_amount":0.002,
        "set_type":"none",
        "set_amount":false,
        "cost":"wood",
        "cost_amount_base":10000,
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
        "add_amount":0.01,
        "set_type":"none",
        "set_amount":false,
        "cost":"wood",
        "cost_amount_base":20000,
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
        "cost_amount":35000,
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
    "return deposit bottles":{
        "name":"Return deposit bottles",
        "button_placement":"object_scrapper",
        "available":true,
        "affected_object":"object_scrapper",
        "add_type":"adds_tick_money",
        "add_amount":0.035,
        "set_type":"none",
        "set_amount":true,
        "cost":"plastics",
        "cost_amount_base":5000,
        "cost_level_increment_power":3,
        "cost_amount":75000,
        "current_level":0,
        "max_level":1},
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
        "max_level":1}
};


var currentHousing = 0;
var lastBoughtObject = "none";
var gameIntervalTimer = 100;
var autobuyer = {"object":"none","rate":1,"counter_set":9,"counter_value":0,"simultanous_buys":1};
var autoSaveCounter = 0;
var housingAdded = 0;



loadWebstorage();
buildupGameScreen();



function abortTimer() { // to be called when you want to stop the timer
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
                    localStorage.setItem("cannonfodder_savegame", saveFile);
                }
            }
            else{
                localStorage.setItem("cannonfodder_savegame", saveFile);
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
            X += '<div class="currency_title">' + player_currency_names[cur] + '<div class="currency" id="currency_' + cur + '">0</div></div>';
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
    X += '<div class="footer">Version:' + versioning["version"] + ' - build: ' + versioning["build"] + ' - Contact: ' +versioning["contact"]+ ' - <a href="changelog.html">Open changelog</a>&nbsp;&nbsp;<a href="https://donorbox.org/donate-cannonfodder">Donate</a></div>';
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
    updateCurrency();
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
                    $("#currency_" + key).html(currentHousing+"/"+Math.trunc(player_currency[key]));
                }
                else {
                    $("#currency_" + key).html(Math.trunc(player_currency[key]));
                }
        }
    }
    for (var baseCurrency in currency_per_tick){
        if (currency_per_tick.hasOwnProperty(baseCurrency)) {
            currency_per_tick[baseCurrency] = currency_per_tick_base[baseCurrency];
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
            var addsSet = 0;
            var addsTickSet = 0;
            for (var key in player_currency) {
                if (player_currency.hasOwnProperty(key)) {
                    if (objects[objectName][key] > 0) {
                        hide["#buildcost_"] = false;
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
                    if (objects[objectName]["cost_per_tick_"+key] > 0) {
                        hide["#buildcosttick_"] = false;
                        var costPerTick = "#buildcosttick_" + objectName;
                        if(addsSet === 0){
                            $( costPerTick ).html('Cost per second:<br />');
                            addsSet = 1;
                        }
                        $( costPerTick ).append((objects[objectName]["cost_per_tick_"+key]*10).toFixed(2) + " " + player_currency_names[key] + "<br />");
                    }
                    if (objects[objectName]["adds_"+key] > 0) {
                        hide["#adds_"] = false;
                        var addsCurrency = "#adds_" + objectName;
                        if(addsSet === 0){
                            $( addsCurrency ).html('Adds:<br />');
                            addsSet = 1;
                        }
                        $( addsCurrency ).append(objects[objectName]["adds_"+key] + " " + player_currency_names[key] + "<br />");
                    }
                    if (objects[objectName]["adds_tick_"+key] > 0) {
                        hide["#adds_per_tick_"] = false;
                        var addsTickCurrency = "#adds_per_tick_" + objectName;
                        if(addsTickSet === 0){
                            $( addsTickCurrency ).html('Adds per second:<br />');
                            addsTickSet = 1;
                        }
                        $( addsTickCurrency ).append((objects[objectName]["adds_tick_"+key]*10).toFixed(2) + " " + player_currency_names[key] + "<br />");
                    }
                }
            }
            for (var idName in hide) {
                if (hide.hasOwnProperty(idName)) {
                    if(hide[idName] === true) {
                        $(idName + objectName).addClass('hide');
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
    objects["object_cityhall"]["plastics"] = 20000 + (objects["object_cityhall"]["owned"] * 40000);
    objects["object_cityhall"]["electronics"] = 15000 + (objects["object_cityhall"]["owned"] * 30000);
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
        tX = upgrades[upgradeName]["name"] + '<br>' + upgrades[upgradeName]["cost_amount"] + ' ' + player_currency_names[upgrades[upgradeName]["cost"]];
    }
    else if(upgrades[upgradeName]["current_level"] !== upgrades[upgradeName]["max_level"]) {
        tX = upgrades[upgradeName]["name"] + ' [lvl ' + upgrades[upgradeName]["current_level"] + ']<br>' + upgrades[upgradeName]["cost_amount"] + ' ' + player_currency_names[upgrades[upgradeName]["cost"]];
    }
    else if(upgrades[upgradeName]["current_level"] > 1){
        tX = '<span class="done">' + upgrades[upgradeName]["name"] + ' [MAX]</span>';
    }
    else{
        tX = '<span class="done">' + upgrades[upgradeName]["name"] + '</span>';
    }
    return tX;
}
