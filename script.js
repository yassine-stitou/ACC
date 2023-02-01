let first_res_price = document.querySelector("#first-res-price")
let second_res_price = document.querySelector("#second-res-price")
let artefact_price = document.querySelector("#artefact-price")
let sell_price = document.querySelector("#sell-price")
let return_rate = document.querySelector("#return-rate")
let options = document.querySelector("#options")
let choices = document.querySelector("#choices")
let inputs = document.querySelectorAll(".disable")
let disable_lbl = document.querySelectorAll(".disable_lbl")

let btn_calc = document.querySelector("#button-3")
let btn_reset = document.querySelector("#button-24")

let craft_price_no_return = document.querySelector("#craft-price")
let craft_price_return = document.querySelector("#craft-price-return")
let returned_res = document.querySelector("#ammount-returned")
let profit = document.querySelector("#profit-ui")

let div_sell_info = document.querySelector("#sell-info")

/////////////////////////////////////////////////////////////////////

let lookup = {
  //Warrior Weapons
  "Swords": ["Broadsword", "Claymore", "Dual Swords", "Clarent Blade", "Carving Sword", "Galatine Pair", "kingmaker"],
  "Axes": ["Battleaxe", "Greataxe", "Halberd", "Carrioncaller", "Infernal Scythe", "Bear Paws", "realmbreaker"],
  "Maces": ["Mace", "Heavy Mace", "Morning Star", "Bedrock Mace", "Incubus Mace", "Camlann Mace", "oathkeepers"],
  "Hammers": ["Hammer", "Polehammer", "Great Hammer", "Tombhammer", "Forge Hammers", "Grovekeeper", "hand of justice"],
  "Gloves": ["Brawler Gloves", "Battle Bracers", "Spiked Gauntlets", "Ursine Maulers", "Hellfire Hands", "Ravenstrike Cestus", "Fists of Avalon"],
  "Crossbows": ["Crossbow", "Heavy Crossbow", "Light Crossbow", "Weeping Repeater", "Boltcasters", "Siegebow", "energy shaper"],
  "Shields": ["Shield", "Sarcophagus", "Caitiff Shield", "Facebreaker", "astral aegis"],
  //Hunter Weapons
  "Bows": ["Bow", "Warbow", "Longbow", "Whispering Bow", "Wailing Bow", "Bow of Badon", "mistpiercer"],
  "Spears": ["Spear", "Pike", "Glaive", "Heron Spear", "Spirithunter", "Trinity Spear", "daybreaker"],
  "Nature Staves": ["Nature Staff", "Great Nature Staff", "Wild Staff", "Druidic Staff", "Blight Staff", "Rampant Staff", "ironroot staff"],
  "Daggers": ["Dagger", "Dagger Pair", "Claws", "Bloodletter", "Demonfang", "Deathgivers", "bridled fury"],
  "Quarterstaves": ["Quarterstaff", "Iron-Clad Staff", "Double Bladed Staff", "Black Monk Stave", "Soulscythe", "Staff of Balance", "grailseeker"],
  "Torches": ["Torch", "Mistcaller", "Leering Cane", "Cryptcandle", "sacred scepter"],
  //Mage Weapons
  "Fire Staves": ["Fire Staff", "Great Fire Staff", "Infernal Staff", "Wildfire Staff", "Brimstone Staff", "Blazing Staff", "Dawnsong"],
  "Holy Staves": ["Holy Staff", "Great Holy Staff", "Divine Staff", "Lifetouch Staff", "Fallen Staff", "Redemption Staff", "Hallowfall"],
  "Arcane Staves": ["Arcane Staff", "Great Arcane Staff", "Enigmatic Staff", "Witchwork Staff", "Occult Staff", "Malevolent Locus", "Evensong"],
  "Frost Staves": ["Frost Staff", "Great Frost Staff", "Glacial Staff", "Hoarfrost Staff", "Icicle Staff", "Permafrost Prism", "Chillhowl"],
  "Cursed Staves": ["Cursed Staff", "Great Cursed Staff", "Demonic Staff", "Lifecurse Staff", "Cursed Skull", "Damnation Staff", "Shadowcaller"],
  "Tomes": ["Tome of Spells", "Eye of Secrets", "Muisak", "Taproot", "Celestial Censer"],

  //plate armor
  "Plate Helmet": ["Soldier Helmet", "Knight Helmet", "Guardian Helmet", "Graveguard Helmet", "Demon Helmet", "Judicator Helmet", "Duskweaver Helmet", "Helmet of Valor"],
  "Plate Armor": ["Soldier Armor", "Knight Armor", "Guardian Armor", "Graveguard Armor", "Demon Armor", "Judicator Armor", "Duskweaver Armor", "Armor of Valor"],
  "Plate Boots": ["Soldier Boots", "Knight Boots", "Guardian Boots", "Graveguard Boots", "Demon Boots", "Judicator Boots", "Duskweaver Boots", "Boots of Valor"],
  //leather armor
  "Leather Hood": ["Mercenary Hood", "Hunter Hood", "Assasin Hood", "Stalker Hood", "Hellion Hood", "Specter Hood", "Mistwalker Hood", "Hood of Tenacity"],
  "Leather Jacket": ["Mercenary Jacket", "Hunter Jacket", "Assasin Jacket", "Stalker Jacket", "Hellion Jacket", "Specter Jacket", "Mistwalker Jacket", "Jacket of Tenacity"],
  "Leather Shoes": ["Mercenary Shoes", "Hunter Shoes", "Assasin Shoes", "Stalker Shoes", "Hellion Shoes", "Specter Shoes", "Mistwalker Shoes", "Shoes of Tenacity"],
  //cloth armor
  "Cloth Cowl": ["Scholar Cowl", "Cleric Cowl", "Mage Cowl", "Druid Cowl", "Fiend Cowl", "Cultist Cowl", "Feyscale Cowl", "Cowl of Purity"],
  "Cloth Robe": ["Scholar Robe", "Cleric Robe", "Mage Robe", "Druid Robe", "Fiend Robe", "Cultist Robe", "Feyscale Robe", "Robe of Purity"],
  "Cloth Sandals": ["Scholar Sandals", "Cleric Sandals", "Mage Sandals", "Druid Sandals", "Fiend Sandals", "Cultist Sandals", "Feyscale Sandals", "Sandals of Purity"]
}

class Gear {
  constructor(name, artefact, ressources) {
    this.name = name;
    this.artefact = artefact;
    this.ressources = ressources
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////
let items = [
  //weapon objects
  //swords
  new Gear("Broadsword", false, [["steel", "leather"], [16, 8]])
  , new Gear("Claymore", false, [["steel", "leather"], [20, 12]])
  , new Gear("Dual Swords", false, [["steel", "leather"], [20, 12]])
  , new Gear("Clarent Blade", true, [["steel", "leather"], [16, 8]])
  , new Gear("Carving Sword", true, [["steel", "leather"], [20, 12]])
  , new Gear("Galatine Pair", true, [["steel", "leather"], [20, 12]])
  , new Gear("kingmaker", true, [["steel", "leather"], [20, 12]])
  //axes 
  , new Gear("Battleaxe", false, [["plank", "steel"], [8, 16]])
  , new Gear("Greataxe", false, [["plank", "steel"], [12, 20]])
  , new Gear("Halberd", false, [["plank", "steel"], [20, 12]])
  , new Gear("Carrioncaller", true, [["plank", "steel"], [20, 12]])
  , new Gear("Infernal Scythe", true, [["plank", "steel"], [12, 20]])
  , new Gear("Bear Paws", true, [["plank", "steel"], [12, 20]])
  , new Gear("realmbreaker", true, [["plank", "steel"], [12, 20]])
  //maces
  , new Gear("Mace", false, [["steel", "cloth"], [16, 8]])
  , new Gear("Heavy Mace", false, [["steel", "cloth"], [20, 12]])
  , new Gear("Morning Star", false, [["steel", "cloth"], [20, 12]])
  , new Gear("Bedrock Mace", true, [["steel", "cloth"], [16, 8]])
  , new Gear("Incubus Mace", true, [["steel", "cloth"], [16, 8]])
  , new Gear("Camlann Mace", true, [["steel", "cloth"], [20, 12]])
  , new Gear("oathkeepers", true, [["steel", "cloth"], [20, 12]])
  //hammers 
  , new Gear("Hammer", false, ["steel", 24])
  , new Gear("Polehammer", false, [["steel", "cloth"], [20, 12]])
  , new Gear("Great Hammer", false, [["steel", "cloth"], [20, 12]])
  , new Gear("Tombhammer", true, [["steel", "cloth"], [20, 12]])
  , new Gear("Forge Hammers", true, [["steel", "cloth"], [20, 12]])
  , new Gear("Grovekeeper", true, [["steel", "cloth"], [20, 12]])
  , new Gear("hand of justice", true, [["steel", "cloth"], [20, 12]])
  //gloves 
  , new Gear("Brawler Gloves", false, [["steel", "leather"], [12, 20]])
  , new Gear("Battle Bracers", false, [["steel", "leather"], [12, 20]])
  , new Gear("Spiked Gauntlets", false, [["steel", "leather"], [12, 20]])
  , new Gear("Ursine Maulers", true, [["steel", "leather"], [12, 20]])
  , new Gear("Hellfire Hands", true, [["steel", "leather"], [12, 20]])
  , new Gear("Ravenstrike Cestus", true, [["steel", "leather"], [12, 20]])
  , new Gear("Fists of Avalon", true, [["steel", "leather"], [12, 20]])
  //crossbows 
  , new Gear("Crossbow", false, [["plank", "steel"], [20, 12]])
  , new Gear("Heavy Crossbow", false, [["plank", "steel"], [20, 12]])
  , new Gear("Light Crossbow", false, [["plank", "steel"], [16, 8]])
  , new Gear("Weeping Repeater", true, [["plank", "steel"], [20, 12]])
  , new Gear("Boltcasters", true, [["plank", "steel"], [20, 12]])
  , new Gear("Siegebow", true, [["plank", "steel"], [20, 12]])
  , new Gear("energy shaper", true, [["plank", "steel"], [20, 12]])
  //shields 
  , new Gear("Shield", false, [["plank", "steel"], [4, 4]])
  , new Gear("Sarcophagus", true, [["plank", "steel"], [4, 4]])
  , new Gear("Caitiff Shield", true, [["plank", "steel"], [4, 4]])
  , new Gear("Facebreaker", true, [["plank", "steel"], [4, 4]])
  , new Gear("astral aegis", true, [["plank", "steel"], [4, 4]])
  //bows
  , new Gear("Bow", false, ["plank", 32])
  , new Gear("Warbow", false, ["plank", 32])
  , new Gear("Longbow", false, ["plank", 32])
  , new Gear("Whispering Bow", true, ["plank", 32])
  , new Gear("Wailing Bow", true, ["plank", 32])
  , new Gear("Bow of Badon", true, ["plank", 32])
  , new Gear("mistpiercer", true, ["plank", 32])
  //spears
  , new Gear("Spear", false, [["plank", "steel"], [16, 8]])
  , new Gear("Pike", false, [["plank", "steel"], [20, 12]])
  , new Gear("Glaive", false, [["plank", "steel"], [12, 20]])
  , new Gear("Heron Spear", true, [["plank", "steel"], [16, 8]])
  , new Gear("Spirithunter", true, [["plank", "steel"], [20, 12]])
  , new Gear("Trinity Spear", true, [["plank", "steel"], [20, 12]])
  , new Gear("daybreaker", true, [["plank", "steel"], [16, 8]])
  //nature
  , new Gear("Nature Staff", false, [["plank", "cloth"], [16, 8]])
  , new Gear("Great Nature Staff", false, [["plank", "cloth"], [20, 12]])
  , new Gear("Wild Staff", false, [["plank", "cloth"], [20, 12]])
  , new Gear("Druidic Staff", true, [["plank", "cloth"], [16, 8]])
  , new Gear("Blight Staff", true, [["plank", "cloth"], [20, 12]])
  , new Gear("Rampant Staff", true, [["plank", "cloth"], [20, 12]])
  , new Gear("ironroot staff", true, [["plank", "cloth"], [16, 8]])
  //daggers 
  , new Gear("Dagger", false, [["steel", "leather"], [12, 12]])
  , new Gear("Dagger Pair", false, [["steel", "leather"], [16, 16]])
  , new Gear("Claws", false, [["steel", "leather"], [12, 20]])
  , new Gear("Bloodletter", true, [["steel", "leather"], [16, 8]])
  , new Gear("Demonfang", true, [["steel", "leather"], [12, 12]])
  , new Gear("Deathgivers", true, [["steel", "leather"], [16, 16]])
  , new Gear("bridled fury", true, [["steel", "leather"], [12, 20]])
  //quarterstaves
  , new Gear("Quarterstaff", false, [["steel", "leather"], [12, 20]])
  , new Gear("Iron-Clad Staff", false, [["steel", "leather"], [12, 20]])
  , new Gear("Double Bladed Staff", false, [["steel", "leather"], [12, 20]])
  , new Gear("Black Monk Stave", true, [["steel", "leather"], [12, 20]])
  , new Gear("Soulscythe", true, [["steel", "leather"], [12, 20]])
  , new Gear("Staff of Balance", true, [["steel", "leather"], [12, 20]])
  , new Gear("grailseeker", true, [["steel", "leather"], [12, 20]])
  //torches 
  , new Gear("Torch", false, [["plank", "cloth"], [4, 4]])
  , new Gear("Mistcaller", true, [["plank", "cloth"], [4, 4]])
  , new Gear("Leering Cane", true, [["plank", "cloth"], [4, 4]])
  , new Gear("Cryptcandle", true, [["plank", "cloth"], [4, 4]])
  , new Gear("sacred scepter", true, [["plank", "cloth"], [4, 4]])
  // Fire Staves
  , new Gear("Fire Staff", false, [["plank", "steel"], [16, 8]])
  , new Gear("Great Fire Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Infernal Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Wildfire Staff", true, [["plank", "steel"], [16, 8]])
  , new Gear("Brimstone Staff", true, [["plank", "steel"], [20, 12]])
  , new Gear("Blazing Staff", true, [["plank", "steel"], [20, 12]])
  , new Gear("Dawnsong", true, [["plank", "steel"], [20, 12]])
  // Holy Staves
  , new Gear("Holy Staff", false, [["plank", "cloth"], [16, 8]])
  , new Gear("Great Holy Staff", false, [["plank", "cloth"], [20, 12]])
  , new Gear("Divine Staff", false, [["plank", "cloth"], [20, 12]])
  , new Gear("Lifetouch Staff", true, [["plank", "cloth"], [16, 8]])
  , new Gear("Fallen Staff", true, [["plank", "cloth"], [20, 12]])
  , new Gear("Redemption Staff", true, [["plank", "cloth"], [20, 12]])
  , new Gear("Hallowfall", true, [["plank", "cloth"], [16, 8]])
  // Arcane Staves
  , new Gear("Arcane Staff", false, [["plank", "steel"], [16, 8]])
  , new Gear("Great Arcane Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Enigmatic Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Witchwork Staff", true, [["plank", "steel"], [16, 8]])
  , new Gear("Occult Staff", true, [["plank", "steel"], [20, 12]])
  , new Gear("Malevolent Locus", true, [["plank", "steel"], [20, 12]])
  , new Gear("Evensong", true, [["plank", "steel"], [20, 12]])
  // Frost Staves
  , new Gear("Frost Staff", false, [["plank", "steel"], [16, 8]])
  , new Gear("Great Frost Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Glacial Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Hoarfrost Staff", true, [["plank", "steel"], [16, 8]])
  , new Gear("Icicle Staff", true, [["plank", "steel"], [20, 12]])
  , new Gear("Permafrost Prism", true, [["plank", "steel"], [20, 12]])
  , new Gear("Chillhowl", true, [["plank", "steel"], [16, 8]])
  // Cursed Staves
  , new Gear("Cursed Staff", false, [["plank", "steel"], [16, 8]])
  , new Gear("Great Cursed Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Demonic Staff", false, [["plank", "steel"], [20, 12]])
  , new Gear("Lifecurse Staff", true, [["plank", "steel"], [16, 8]])
  , new Gear("Cursed Skull", true, [["plank", "steel"], [20, 12]])
  , new Gear("Damnation Staff", true, [["plank", "steel"], [20, 12]])
  , new Gear("Shadowcaller", true, [["plank", "steel"], [16, 8]])
  // Tomes
  , new Gear("Tome of Spells", false, [["cloth", "leather"], [4, 4]])
  , new Gear("Eye of Secrets", true, [["cloth", "leather"], [4, 4]])
  , new Gear("Muisak", true, [["cloth", "leather"], [4, 4]])
  , new Gear("Taproot", true, [["cloth", "leather"], [4, 4]])
  , new Gear("Celestial Censer", true, [["cloth", "leather"], [4, 4]])

  //armor objects
  //plate
  ///helmet 
  , new Gear("Soldier Helmet", false, ["steel", 8])
  , new Gear("Knight Helmet", false, ["steel", 8])
  , new Gear("Guardian Helmet", false, ["steel", 8])
  , new Gear("Graveguard Helmet", true, ["steel", 8])
  , new Gear("Demon Helmet", true, ["steel", 8])
  , new Gear("Judicator Helmet", true, ["steel", 8])
  , new Gear("Duskweaver Helmet", true, ["steel", 8])
  , new Gear("Helmet of Valor", true, ["steel", 8])
  ///armor
  , new Gear("Soldier Armor", false, ["steel", 16])
  , new Gear("Knight Armor", false, ["steel", 16])
  , new Gear("Guardian Armor", false, ["steel", 16])
  , new Gear("Graveguard Armor", true, ["steel", 16])
  , new Gear("Demon Armor", true, ["steel", 16])
  , new Gear("Judicator Armor", true, ["steel", 16])
  , new Gear("Duskweaver Armor", true, ["steel", 16])
  , new Gear("Armor of Valor", true, ["steel", 16])
  ///boots
  , new Gear("Soldier Boots", false, ["steel", 8])
  , new Gear("Knight Boots", false, ["steel", 8])
  , new Gear("Guardian Boots", false, ["steel", 8])
  , new Gear("Graveguard Boots", true, ["steel", 8])
  , new Gear("Demon Boots", true, ["steel", 8])
  , new Gear("Judicator Boots", true, ["steel", 8])
  , new Gear("Duskweaver Boots", true, ["steel", 8])
  , new Gear("Boots of Valor", true, ["steel", 8])
  //leather
  ///hood 
  , new Gear("Mercenary Hood", false, ["leather", 8])
  , new Gear("Hunter Hood", false, ["leather", 8])
  , new Gear("Assasin Hood", false, ["leather", 8])
  , new Gear("Stalker Hood", true, ["leather", 8])
  , new Gear("Hellion Hood", true, ["leather", 8])
  , new Gear("Specter Hood", true, ["leather", 8])
  , new Gear("Mistwalker Hood", true, ["leather", 8])
  , new Gear("Hood of Tenacity", true, ["leather", 8])
  ///jacket
  , new Gear("Mercenary Jacket", false, ["leather", 16])
  , new Gear("Hunter Jacket", false, ["leather", 16])
  , new Gear("Assasin Jacket", false, ["leather", 16])
  , new Gear("Stalker Jacket", true, ["leather", 16])
  , new Gear("Hellion Jacket", true, ["leather", 16])
  , new Gear("Specter Jacket", true, ["leather", 16])
  , new Gear("Mistwalker Jacket", true, ["leather", 16])
  , new Gear("Jacket of Tenacity", true, ["leather", 16])
  ///shoes
  , new Gear("Mercenary Shoes", false, ["leather", 8])
  , new Gear("Hunter Shoes", false, ["leather", 8])
  , new Gear("Assasin Shoes", false, ["leather", 8])
  , new Gear("Stalker Shoes", true, ["leather", 8])
  , new Gear("Hellion Shoes", true, ["leather", 8])
  , new Gear("Specter Shoes", true, ["leather", 8])
  , new Gear("Mistwalker Shoes", true, ["leather", 8])
  , new Gear("Shoes of Tenacity", true, ["leather", 8])
  //cloth
  ///cowl 
  , new Gear("Scholar Cowl", false, ["cloth", 8])
  , new Gear("Cleric Cowl", false, ["cloth", 8])
  , new Gear("Mage Cowl", false, ["cloth", 8])
  , new Gear("Druid Cowl", true, ["cloth", 8])
  , new Gear("Fiend Cowl", true, ["cloth", 8])
  , new Gear("Cultist Cowl", true, ["cloth", 8])
  , new Gear("Feyscale Cowl", true, ["cloth", 8])
  , new Gear("Cowl of Purity", true, ["cloth", 8])
  ///robe
  , new Gear("Scholar Robe", false, ["cloth", 16])
  , new Gear("Cleric Robe", false, ["cloth", 16])
  , new Gear("Mage Robe", false, ["cloth", 16])
  , new Gear("Druid Robe", true, ["cloth", 16])
  , new Gear("Fiend Robe", true, ["cloth", 16])
  , new Gear("Cultist Robe", true, ["cloth", 16])
  , new Gear("Feyscale Robe", true, ["cloth", 16])
  , new Gear("Robe of Purity", true, ["cloth", 16])
  ///sandals
  , new Gear("Scholar Sandals", false, ["cloth", 8])
  , new Gear("Cleric Sandals", false, ["cloth", 8])
  , new Gear("Mage Sandals", false, ["cloth", 8])
  , new Gear("Druid Sandals", true, ["cloth", 8])
  , new Gear("Fiend Sandals", true, ["cloth", 8])
  , new Gear("Cultist Sandals", true, ["cloth", 8])
  , new Gear("Feyscale Sandals", true, ["cloth", 8])
  , new Gear("Sandals of Purity", true, ["cloth", 8])

]

////////////////////////////////////////////////////////////////////////////////////////////////
/*
//////////////////////////////////////////////////////////////////////////////////////////////////
//weapon objects
//Swords
let broadsword = new Gear("Broadsword", false, [["steel", "leather"], [16, 8]])
let claymore = new Gear("Claymore", false, [["steel", "leather"], [20, 12]])
let dualSwords = new Gear("Dual Swords", false, [["steel", "leather"], [20, 12]])
let clarentBlade = new Gear("Clarent Blade", true, [["steel", "leather"], [16, 8]])
let carvingSword = new Gear("Carving Sword", true, [["steel", "leather"], [20, 12]])
let galatinePair = new Gear("Galatine Pair", true, [["steel", "leather"], [20, 12]])
let kingmaker = new Gear("kingmaker", true, [["steel", "leather"], [20, 12]])
//axes 
let battleaxe = new Gear("Battleaxe", false, [["plank", "steel"], [8, 16]])
let greataxe = new Gear("Greataxe", false, [["plank", "steel"], [12, 20]])
let halberd = new Gear("Halberd", false, [["plank", "steel"], [20, 12]])
let carrioncaller = new Gear("Carrioncaller", true, [["plank", "steel"], [20, 12]])
let infernalScythe = new Gear("Infernal Scythe", true, [["plank", "steel"], [12, 20]])
let bearPaws = new Gear("Bear Paws", true, [["plank", "steel"], [12, 20]])
let realmbreaker = new Gear("realmbreaker", true, [["plank", "steel"], [12, 20]])
//maces
let mace = new Gear("Mace", false, [["steel", "cloth"], [16, 8]])
let heavyMace = new Gear("Heavy Mace", false, [["steel", "cloth"], [20, 12]])
let morningStar = new Gear("Morning Star", false, [["steel", "cloth"], [20, 12]])
let bedrockMace = new Gear("Bedrock Mace", true, [["steel", "cloth"], [16, 8]])
let incubusMace = new Gear("Incubus Mace", true, [["steel", "cloth"], [16, 8]])
let camlannMace = new Gear("Camlann Mace", true, [["steel", "cloth"], [20, 12]])
let oathkeepers = new Gear("oathkeepers", true, [["steel", "cloth"], [20, 12]])
//hammers 
let hammer = new Gear("Hammer", false, ["steel", 24])
let polehammer = new Gear("Polehammer", false, [["steel", "cloth"], [20, 12]])
let greatHammer = new Gear("Great Hammer", false, [["steel", "cloth"], [20, 12]])
let tombhammer = new Gear("Tombhammer", true, [["steel", "cloth"], [20, 12]])
let macForgeHammerse = new Gear("Forge Hammers", true, [["steel", "cloth"], [20, 12]])
let grovekeepermace = new Gear("Grovekeeper", true, [["steel", "cloth"], [20, 12]])
let handofjustice = new Gear("hand of justice", true, [["steel", "cloth"], [20, 12]])
//gloves 
let brawlerGloves = new Gear("Brawler Gloves", false, [["steel", "leather"], [12, 20]])
let battleBracers = new Gear("Battle Bracers", false, [["steel", "leather"], [12, 20]])
let spikedGauntlets = new Gear("Spiked Gauntlets", false, [["steel", "leather"], [12, 20]])
let ursineMaulers = new Gear("Ursine Maulers", true, [["steel", "leather"], [12, 20]])
let hellfireHands = new Gear("Hellfire Hands", true, [["steel", "leather"], [12, 20]])
let ravenstrikeCestus = new Gear("Ravenstrike Cestus", true, [["steel", "leather"], [12, 20]])
let fistsofAvalon = new Gear("Fists of Avalon", true, [["steel", "leather"], [12, 20]])
//crossbows 
let crossbow = new Gear("Crossbow", false, [["plank", "steel"], [20, 12]])
let heavyCrossbow = new Gear("Heavy Crossbow", false, [["plank", "steel"], [20, 12]])
let lightCrossbow = new Gear("Light Crossbow", false, [["plank", "steel"], [16, 8]])
let weepingRepeater = new Gear("Weeping Repeater", true, [["plank", "steel"], [20, 12]])
let boltcasters = new Gear("Boltcasters", true, [["plank", "steel"], [20, 12]])
let siegebow = new Gear("Siegebow", true, [["plank", "steel"], [20, 12]])
let energyshaper = new Gear("energy shaper", true, [["plank", "steel"], [20, 12]])
//shields 
let shield = new Gear("Shield", false, [["plank", "steel"], [4, 4]])
let sarcophagus = new Gear("Sarcophagus", true, [["plank", "steel"], [4, 4]])
let caitiffShield = new Gear("Caitiff Shield", true, [["plank", "steel"], [4, 4]])
let facebreaker = new Gear("Facebreaker", true, [["plank", "steel"], [4, 4]])
let astralaegis = new Gear("astral aegis", true, [["plank", "steel"], [4, 4]])
//bows
let bow = new Gear("Bow", false, ["plank", 32])
let warbow = new Gear("Warbow", false, ["plank", 32])
let longbow = new Gear("Longbow", false, ["plank", 32])
let whisperingBow = new Gear("Whispering Bow", true, ["plank", 32])
let wailingBow = new Gear("Wailing Bow", true, ["plank", 32])
let bowofBadon = new Gear("Bow of Badon", true, ["plank", 32])
let mistpiercer = new Gear("mistpiercer", true, ["plank", 32])
//spears
let spear = new Gear("Spear", false, [["plank", "steel"], [16, 8]])
let pike = new Gear("Pike", false, [["plank", "steel"], [20, 12]])
let glaive = new Gear("Glaive", false, [["plank", "steel"], [12, 20]])
let heronSpear = new Gear("Heron Spear", true, [["plank", "steel"], [16, 8]])
let spirithunter = new Gear("Spirithunter", true, [["plank", "steel"], [20, 12]])
let trinitySpear = new Gear("Trinity Spear", true, [["plank", "steel"], [20, 12]])
let daybreaker = new Gear("daybreaker", true, [["plank", "steel"], [16, 8]])
//nature
let natureStaff = new Gear("Nature Staff", false, [["plank", "cloth"], [16, 8]])
let greatNatureStaff = new Gear("Great Nature Staff", false, [["plank", "cloth"], [20, 12]])
let wildStaff = new Gear("Wild Staff", false, [["plank", "cloth"], [20, 12]])
let druidicStaff = new Gear("Druidic Staff", true, [["plank", "cloth"], [16, 8]])
let blightStaff = new Gear("Blight Staff", true, [["plank", "cloth"], [20, 12]])
let rampantStaff = new Gear("Rampant Staff", true, [["plank", "cloth"], [20, 12]])
let ironrootstaff = new Gear("ironroot staff", true, [["plank", "cloth"], [16, 8]])
//daggers 
let dagger = new Gear("Dagger", false, [["steel", "leather"], [12, 12]])
let daggerPair = new Gear("Dagger Pair", false, [["steel", "leather"], [16, 16]])
let claws = new Gear("Claws", false, [["steel", "leather"], [12, 20]])
let bloodletter = new Gear("Bloodletter", true, [["steel", "leather"], [16, 8]])
let demonfang = new Gear("Demonfang", true, [["steel", "leather"], [12, 12]])
let deathgivers = new Gear("Deathgivers", true, [["steel", "leather"], [16, 16]])
let bridledfury = new Gear("bridled fury", true, [["steel", "leather"], [12, 20]])
//quarterstaves
let quarterstaff = new Gear("Quarterstaff", false, [["steel", "leather"], [12, 20]])
let iron_CladStaff = new Gear("Iron-Clad Staff", false, [["steel", "leather"], [12, 20]])
let doubleBladedStaff = new Gear("Double Bladed Staff", false, [["steel", "leather"], [12, 20]])
let blackMonkStave = new Gear("Black Monk Stave", true, [["steel", "leather"], [12, 20]])
let soulscythe = new Gear("Soulscythe", true, [["steel", "leather"], [12, 20]])
let staffofBalance = new Gear("Staff of Balance", true, [["steel", "leather"], [12, 20]])
let grailseeker = new Gear("grailseeker", true, [["steel", "leather"], [12, 20]])
//torches 
let torch = new Gear("Torch", false, [["plank", "cloth"], [4, 4]])
let mistcaller = new Gear("Mistcaller", true, [["plank", "cloth"], [4, 4]])
let leeringCane = new Gear("Leering Cane", true, [["plank", "cloth"], [4, 4]])
let cryptcandle = new Gear("Cryptcandle", true, [["plank", "cloth"], [4, 4]])
let sacredscepter = new Gear("sacred scepter", true, [["plank", "cloth"], [4, 4]])

//armor objects
//plate
///helmet 
let soldierHelmet = new Gear("Soldier Helmet", false, ["steel", 8])
let knightHelmet = new Gear("Knight Helmet", false, ["steel", 8])
let guardianHelmet = new Gear("Guardian Helmet", false, ["steel", 8])
let graveguardHelmet = new Gear("Graveguard Helmet", true, ["steel", 8])
let demonHelmet = new Gear("Demon Helmet", true, ["steel", 8])
let judicatorHelmet = new Gear("Judicator Helmet", true, ["steel", 8])
let duskweaverHelmet = new Gear("Duskweaver Helmet", true, ["steel", 8])
let helmetofValor = new Gear("Helmet of Valor", true, ["steel", 8])
///armor
let soldierArmor = new Gear("Soldier Armor", false, ["steel", 16])
let knightArmor = new Gear("Knight Armor", false, ["steel", 16])
let guardianArmor = new Gear("Guardian Armor", false, ["steel", 16])
let graveguardArmor = new Gear("Graveguard Armor", true, ["steel", 16])
let demonArmor = new Gear("Demon Armor", true, ["steel", 16])
let judicatorArmor = new Gear("Judicator Armor", true, ["steel", 16])
let duskweaverArmor = new Gear("Duskweaver Armor", true, ["steel", 16])
let armorofValor = new Gear("Armor of Valor", true, ["steel", 16])
///boots
let soldierBoots = new Gear("Soldier Boots", false, ["steel", 8])
let knightBoots = new Gear("Knight Boots", false, ["steel", 8])
let guardianBoots = new Gear("Guardian Boots", false, ["steel", 8])
let graveguardBoots = new Gear("Graveguard Boots", true, ["steel", 8])
let demonBoots = new Gear("Demon Boots", true, ["steel", 8])
let judicatorBoots = new Gear("Judicator Boots", true, ["steel", 8])
let duskweaverBoots = new Gear("Duskweaver Boots", true, ["steel", 8])
let bootsofValor = new Gear("Boots of Valor", true, ["steel", 8])
//leather
///hood 
let mercenaryHood = new Gear("Mercenary Hood", false, ["leather", 8])
let hunterHood = new Gear("Hunter Hood", false, ["leather", 8])
let assasinHood = new Gear("Assasin Hood", false, ["leather", 8])
let stalkerHood = new Gear("Stalker Hood", true, ["leather", 8])
let hellionHood = new Gear("Hellion Hood", true, ["leather", 8])
let specterHood = new Gear("Specter Hood", true, ["leather", 8])
let mistwalkerHood = new Gear("Mistwalker Hood", true, ["leather", 8])
let hoodofTenacity = new Gear("Hood of Tenacity", true, ["leather", 8])
///jacket
let mercenaryJacket = new Gear("Mercenary Jacket", false, ["leather", 16])
let hunterJacket = new Gear("Hunter Jacket", false, ["leather", 16])
let assasinJacket = new Gear("Assasin Jacket", false, ["leather", 16])
let stalkerJacket = new Gear("Stalker Jacket", true, ["leather", 16])
let hellionJacket = new Gear("Hellion Jacket", true, ["leather", 16])
let specterJacket = new Gear("Specter Jacket", true, ["leather", 16])
let mistwalkerJacket = new Gear("Mistwalker Jacket", true, ["leather", 16])
let jacketofTenacity = new Gear("Jacket of Tenacity", true, ["leather", 16])
///shoes
let mercenaryShoes = new Gear("Mercenary Shoes", false, ["leather", 8])
let hunterShoes = new Gear("Hunter Shoes", false, ["leather", 8])
let assasinShoes = new Gear("Assasin Shoes", false, ["leather", 8])
let stalkerShoes = new Gear("Stalker Shoes", true, ["leather", 8])
let hellionShoes = new Gear("Hellion Shoes", true, ["leather", 8])
let specterShoes = new Gear("Specter Shoes", true, ["leather", 8])
let mistwalkerShoes = new Gear("Mistwalker Shoes", true, ["leather", 8])
let shoesofTenacity = new Gear("Shoes of Tenacity", true, ["leather", 8])
//cloth
///cowl "Cloth Cowl": ["Scholar Cowl", "Cleric Cowl", "Mage Cowl", "Druid Cowl", "Fiend Cowl", "Cultist Cowl", "Feyscale Cowl", "Cowl of Purity"],
let scholarCowl = new Gear("Scholar Cowl", false, ["cloth", 8])
let clericCowl = new Gear("Cleric Cowl", false, ["cloth", 8])
let mageCowl = new Gear("Mage Cowl", false, ["cloth", 8])
let druidCowl = new Gear("Druid Cowl", true, ["cloth", 8])
let fiendCowl = new Gear("Fiend Cowl", true, ["cloth", 8])
let cultistCowl = new Gear("Cultist Cowl", true, ["cloth", 8])
let feyscaleCowl = new Gear("Feyscale Cowl", true, ["cloth", 8])
let cowlofPurity = new Gear("of Purity", true, ["cloth", 8])
///robe
let scholarRobe = new Gear("Scholar Robe", false, ["cloth", 16])
let clericRobe = new Gear("Cleric Robe", false, ["cloth", 16])
let mageRobe = new Gear("Mage Robe", false, ["cloth", 16])
let druidRobe = new Gear("Druid Robe", true, ["cloth", 16])
let fiendRobe = new Gear("Fiend Robe", true, ["cloth", 16])
let cultistRobe = new Gear("Cultist Robe", true, ["cloth", 16])
let feyscaleRobe = new Gear("Feyscale Robe", true, ["cloth", 16])
let robeofPurity = new Gear("Robe of Purity", true, ["cloth", 16])
///sandals
let scholarSandals = new Gear("Scholar Sandals", false, ["cloth", 8])
let clericSandals = new Gear("Cleric Sandals", false, ["cloth", 8])
let mageSandals = new Gear("Mage Sandals", false, ["cloth", 8])
let druidSandals = new Gear("Druid Sandals", true, ["cloth", 8])
let fiendSandals = new Gear("Fiend Sandals", true, ["cloth", 8])
let cultistSandals = new Gear("Cultist Sandals", true, ["cloth", 8])
let feyscaleSandals = new Gear("Feyscale Sandals", true, ["cloth", 8])
let sandalsofPurity = new Gear("Sandals of Purity", true, ["cloth", 8]) 
// Fire Staves
let fireStaff = new Gear("Fire Staff", false, [["plank", "steel"], [16, 8]])
let greatFireStaff = new Gear("Great Fire Staff", false, [["plank", "steel"], [20, 12]])
let infernalStaff = new Gear("Infernal Staff", false, [["plank", "steel"], [20, 12]])
let wildfireStaff = new Gear("Wildfire Staff", true, [["plank", "steel"], [16, 8]])
let brimstoneStaff = new Gear("Brimstone Staff", true, [["plank", "steel"], [20, 12]])
let blazingStaff = new Gear("Blazing Staff", true, [["plank", "steel"], [20, 12]])
let dawnsong = new Gear("Dawnsong", true, [["plank", "steel"], [20, 12]])
// Holy Staves
let holyStaff = new Gear("Holy Staff", false, [["plank", "cloth"], [16, 8]])
let greatHolyStaff = new Gear("Great Holy Staff", false, [["plank", "cloth"], [20, 12]])
let divineStaff = new Gear("Divine Staff", false, [["plank", "cloth"], [20, 12]])
let lifetouchStaff = new Gear("Lifetouch Staff", true, [["plank", "cloth"], [16, 8]])
let fallenStaff = new Gear("Fallen Staff", true, [["plank", "cloth"], [20, 12]])
let redemptionStaff = new Gear("Redemption Staff", true, [["plank", "cloth"], [20, 12]])
let hallowfall = new Gear("Hallowfall", true, [["plank", "cloth"], [16, 8]])
// Arcane Staves
let arcaneStaff = new Gear("Arcane Staff", false, [["plank", "steel"], [16, 8]])
let greatArcaneStaff = new Gear("Great Arcane Staff", false, [["plank", "steel"], [20, 12]])
let enigmaticStaff = new Gear("Enigmatic Staff", false, [["plank", "steel"], [20, 12]])
let witchworkStaff = new Gear("Witchwork Staff", true, [["plank", "steel"], [16, 8]])
let occultStaff = new Gear("Occult Staff", true, [["plank", "steel"], [20, 12]])
let malevolentLocus = new Gear("Malevolent Locus", true, [["plank", "steel"], [20, 12]])
let evensongStaff = new Gear("Evensong Staff", true, [["plank", "steel"], [20, 12]])
// Frost Staves
let frostStaff = new Gear("Frost Staff", false, [["plank", "steel"], [16, 8]])
let greatFrostStaff = new Gear("Great Frost Staff", false, [["plank", "steel"], [20, 12]])
let glacialStaff = new Gear("Glacial Staff", false, [["plank", "steel"], [20, 12]])
let hoarfrostStaff = new Gear("Hoarfrost Staff", true, [["plank", "steel"], [16, 8]])
let icicleStaff = new Gear("Icicle Staff", true, [["plank", "steel"], [20, 12]])
let permafrostPrism = new Gear("Permafrost Prism", true, [["plank", "steel"], [20, 12]])
let chillhowl = new Gear("Chillhowl", true, [["plank", "steel"], [16, 8]])
// Cursed Staves
let cursedStaff = new Gear("Cursed Staff", false, [["plank", "steel"], [16, 8]])
let greatCursed Staff = new Gear("Great Cursed Staff", false, [["plank", "steel"], [20, 12]])
let demonicStaff = new Gear("Demonic Staff", false, [["plank", "steel"], [20, 12]])
let lifecurseStaff = new Gear("Lifecurse Staff", true, [["plank", "steel"], [16, 8]])
let cursedSkull = new Gear("Cursed Skull", true, [["plank", "steel"], [20, 12]])
let damnationStaff = new Gear("Damnation Staff", true, [["plank", "steel"], [20, 12]])
let shadowcaller = new Gear("Shadowcaller", true, [["plank", "steel"], [16, 8]])
// Tomes
let tomeofSpells = new Gear("Tome of Spells Staff", false, [["cloth", "leather"], [4, 4]])
let eyeofSecrets = new Gear("Eye of Secrets", true, [["cloth", "leather"], [4, 4]])
let muisak = new Gear("Muisak", true, [["cloth", "leather"], [4, 4]])
let taproot = new Gear("Taproot", true, [["cloth", "leather"], [4, 4]])
let celestialCenser = new Gear("Celestial Censer", true, [["cloth", "leather"], [4, 4]])
///////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////

options.addEventListener("change", () => {
  let selectedValue = options.value
  choices.innerHTML = "<option disabled selected>please select a weapon</option>"
  for (let i = 0; i < lookup[selectedValue].length; i++) {
    choices.innerHTML += "<option value='" + lookup[selectedValue][i] + "'>" + lookup[selectedValue][i] + "</option>"
  }
  inputs.forEach(input => {
    input.disabled = true
  });
  disable_lbl.forEach(disable_lbl => {
    disable_lbl.textContent = "."
  })
})

choices.addEventListener("change", () => {
  inputs[0].disabled = false
  inputs[3].disabled = false
  inputs[4].disabled = false

  if (!(Array.isArray(items.find(item => item.name == choices.value).ressources[0]))) {
    disable_lbl[0].textContent = items.find(item => item.name == choices.value).ressources[0] + " price"
  } else {
    disable_lbl[0].textContent = items.find(item => item.name == choices.value).ressources[0][0] + " price"
  }

  if (Array.isArray(items.find(item => item.name == choices.value).ressources[0])) {
    inputs[1].disabled = false
    disable_lbl[1].textContent = items.find(item => item.name == choices.value).ressources[0][1] + " price"
  } else {
    inputs[1].disabled = true
    disable_lbl[1].textContent = "."
  }

  if (items.find(item => item.name == choices.value).artefact) {
    inputs[2].disabled = false
    disable_lbl[2].textContent = "artefact price"
  } else {
    inputs[2].disabled = true
    disable_lbl[2].textContent = "."
  }
})

btn_reset.addEventListener("click", () => {
  first_res_price.value = ""
  second_res_price.value = ""
  artefact_price.value = ""
  sell_price.value = ""
  return_rate.value = ""
  craft_price_no_return.textContent = ""
  craft_price_return.textContent = ""
  returned_res.textContent = ""
  profit.textContent = ""
  div_sell_info.style.backgroundColor = ""
  choices.innerHTML = "<option disabled selected>please select a weapon</option>"
  options.options.selectedIndex = 0
  inputs.forEach(input => {
    input.disabled = true
  });
  disable_lbl.forEach(disable_lbl => {
    disable_lbl.textContent = "."
  })
})

btn_calc.addEventListener("click", () => {
  let craft_price_no_return_1
  if (Array.isArray(items.find(item => item.name == choices.value).ressources[0])) {
    craft_price_no_return_1 = Number(first_res_price.value * items.find(item => item.name == choices.value).ressources[1][0]) + Number(second_res_price.value * items.find(item => item.name == choices.value).ressources[1][1]) + Number(artefact_price.value)
  } else {
    craft_price_no_return_1 = Number(first_res_price.value * items.find(item => item.name == choices.value).ressources[1]) + Number(second_res_price.value * items.find(item => item.name == choices.value).ressources[1]) + Number(artefact_price.value)
  }
  craft_price_no_return.textContent = (craft_price_no_return_1).toLocaleString("en-US")

  let returned_res_1 = craft_price_no_return_1 * Number(return_rate.value) / 100
  returned_res.textContent = (returned_res_1).toLocaleString("en-US")

  let craft_price_return_1 = craft_price_no_return_1 - returned_res_1
  craft_price_return.textContent = (craft_price_return_1).toLocaleString("en-US")

  let profit_1 = Math.round(Number(sell_price.value) - craft_price_return_1)
  profit.textContent = profit_1.toLocaleString("en-US")

  if (profit_1 > 0) {
    div_sell_info.style.backgroundColor = "#134A18"
  } else if (profit_1 < 0) {
    div_sell_info.style.backgroundColor = "#661111"
  } else {
    div_sell_info.style.backgroundColor = "#661111"
  }
})

