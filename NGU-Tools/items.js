const Slot = {
	WEAPON: 'Weapon',
	HEAD: 'Head',
	CHEST: 'Chest',
	PANTS: 'Legs',
	BOOTS: 'Boots',
	ACCESSORY: 'Acc',
}

const Stat = {
	DAYCARE_SPEED: 'Daycare Speed',
	YGGDRASIL_YIELD: 'Yggdrasil Yield',
	MOVE_COOLDOWN: 'Move Cooldown',
	MAGIC_SPEED: 'Magic Speed',
	ENERGY_SPEED: 'Energy Speed',
	QUEST_DROP: 'Quest Drops',
	AP: 'AP',
	EXPERIENCE: 'Experience',
	RESPAWN: 'Respawn',
	GOLD_DROP: 'Gold Drops',
	POWER: 'Power',
	TOUGHNESS: 'Toughness',
	ENERGY_POWER: 'Energy Power',
	ENERGY_BARS: 'Energy Bars',
	ENERGY_CAP: 'Energy Cap',
	MAGIC_POWER: 'Magic Power',
	MAGIC_BARS: 'Magic Bars',
	MAGIC_CAP: 'Magic Cap',
	NGU_SPEED: 'NGU Speed',
	WANDOOS_SPEED: 'Wandoos Speed',
	ADVANCE_TRAINING: 'Advance Training',
	AUGMENT_SPEED: 'Augment Speed',
	BEARD_SPEED: 'Beard Speed',
	SEED_DROP: 'Seed Gain',
	DROP_CHANCE: 'Drop Chance',
}

const SetName = {
	TWO_D: '2D Set',
	BADLY_DRAWN: 'Badly Drawn Set',
	BEARDVERSE: 'Beardverse Set',
	CAVE: 'Cave Set',
	CHOCO: 'Choco Set',
	CLOCK: 'Clock Set',
	FOREST: 'Forest Set',
	GAUDY: 'Gaudy Set',
	GRB: 'GRB Set',
	HSB: 'HSB Set',
	JAKE: 'Jake Set',
	MEGA: 'Mega Set',
	SEWERS: 'Sewers Set',
	SLIMY: 'Slimy Set',
	SPOOPY: 'Spoopy Set',
	STEALTH: 'Stealth Set',
	TRAINING: 'Training Set',
	WANDERER: 'Wanderer\'s Set',
	WANDERER2: 's\'reredneW Set',
	UUG_RINGS: 'UUG Rings',
	HEART: 'Hearts',
	FOREST_PENDANT: 'Forest Pendants',
	LOOTY: 'Looty',
	OTHER: 'Other',
	EDGY: 'Edgy Set',
	PINK: 'Pretty Pink Princess Set',
	NERD: 'Greasy Nerd Set',
	META: 'Meta Set',
	PARTY: 'Party Set',
	MOBSTER: 'Mobster Set'
}

function CreateItem(name, type) {
	this.name = name;
	this.type = type;
	this.eCap = 0;
	this.mCap = 0;
	this.ePow = 0;
	this.mPow = 0;
	this.ngu = 0;
	this.img = "";
}

var itemList = [];

var item = new CreateItem('Red Heart', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/119_-_My_Red_Heart.png/';

itemList.push(item);

var item = new CreateItem('Yellow Heart', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/81/129_-_My_Yellow_Heart.png/';

itemList.push(item);

var item = new CreateItem('Brown Heart', Slot.ACCESSORY);
item.ePow = 100;
item.mPow = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b4/162_-_My_Brown_Heart.png/revision/latest?cb=20180706092359';

itemList.push(item);

var item = new CreateItem('Green Heart', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/171_-_My_Green_Heart.png/';

itemList.push(item);

var item = new CreateItem('Blue Heart', Slot.ACCESSORY);
item.ngu = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5c/196_-_My_Blue_Heart.png/';

itemList.push(item);

var item = new CreateItem('Purple Heart', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/212_-_My_Purple_Heart.png/revision/latest?cb=20181031190629';

itemList.push(item);

var item = new CreateItem('Orange Heart', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/293_-_My_Orange_Heart.png';

itemList.push(item);

var item = new CreateItem('Grey Heart', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/24/297_-_My_Grey_Heart.png/revision/latest?cb=20190411171956';

itemList.push(item);

var item = new CreateItem('Crappy Helmet', Slot.HEAD);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/28/40_-_Crappy_Helmet.png/revision/latest?cb=20180330165208';

itemList.push(item);

var item = new CreateItem('Cloth Hat', Slot.HEAD);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/86/62_-_Cloth_Hat.png/revision/latest?cb=20180330170954';

itemList.push(item);

var item = new CreateItem('Cloth Shirt', Slot.CHEST);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/53/63_-_Cloth_Shirt.png/revision/latest?cb=20180330171023';

itemList.push(item);

var item = new CreateItem('Cloth Leggings', Slot.PANTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/64_-_Cloth_Leggings.png/revision/latest?cb=20180330171051';

itemList.push(item);

var item = new CreateItem('Cloth Boots', Slot.BOOTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cd/65_-_Cloth_Boots.png/revision/latest?cb=20180330171113';

itemList.push(item);

var item = new CreateItem('A Stick', Slot.WEAPON);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f6/75_-_A_Stick.png/revision/latest?cb=20180330172932';

itemList.push(item);

var item = new CreateItem('Crappy Chestplate', Slot.CHEST);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/41_-_Crappy_Chestplate.png/revision/latest?cb=20180330165241';

itemList.push(item);

var item = new CreateItem('Crappy Leggings', Slot.PANTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/23/42_-_Crappy_Leggings.png/revision/latest?cb=20180330165315';

itemList.push(item);

var item = new CreateItem('Crappy Boots', Slot.BOOTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/05/43_-_Crappy_Boots.png/revision/latest?cb=20180330165354';

itemList.push(item);

var item = new CreateItem('Rusty Sword', Slot.WEAPON);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/55/44_-_Rusty_Sword.png/revision/latest?cb=20180330165424';

itemList.push(item);

var item = new CreateItem('Gross Ring', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5f/45_-_Gross_Ring.png/revision/latest?cb=20180330165521';

itemList.push(item);

var item = new CreateItem('Cracked Amulet', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4a/46_-_Cracked_Amulet.png/revision/latest?cb=20180330165554';

itemList.push(item);

var item = new CreateItem('Forest Helmet', Slot.HEAD); 
item.ePow = 20;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f3/47_-_Forest_Helmet.png/revision/latest?cb=20180330170139';

itemList.push(item);

var item = new CreateItem('Forest Chestplate', Slot.CHEST); 
item.ePow = 24;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1b/48_-_Forest_Chestplate.png/revision/latest?cb=20180330170217';

itemList.push(item);

var item = new CreateItem('Forest Leggings', Slot.PANTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/79/49_-_Forest_Leggings.png/revision/latest?cb=20180330170250';

itemList.push(item);

var item = new CreateItem('Forest Boots', Slot.BOOTS);
item.ePow = 10;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7e/50_-_Forest_Boots.png/revision/latest?cb=20180330170315';

itemList.push(item);

var item = new CreateItem('Kokiri Blade', Slot.WEAPON);
item.ePow = 20;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/72/51_-_Kokiri_Blade.png/revision/latest?cb=20180330170353';

itemList.push(item);

var item = new CreateItem('Mossy Ring', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/62/52_-_Mossy_Ring.png/revision/latest?cb=20180330170421';

itemList.push(item);

var item = new CreateItem('Blue Cheese Helmet', Slot.HEAD);
item.mPow = 14;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3d/54_-_Blue_Cheese_Helmet.png/revision/latest?cb=20180330170526';

itemList.push(item);

var item = new CreateItem('Gouda Chestplate', Slot.CHEST);
item.mPow = 26;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/ba/55_-_Gouda_Chestplate.png/revision/latest?cb=20180330170605';

itemList.push(item);

var item = new CreateItem('Swiss Leggings', Slot.PANTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/47/56_-_Swiss_Leggings.png/revision/latest?cb=20180330170641';

itemList.push(item);

var item = new CreateItem('Limburger Boots', Slot.BOOTS);
item.mPow = 20;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a3/57_-_Limburger_Boots.png/revision/latest?cb=20180330170712';

itemList.push(item);

var item = new CreateItem('Mole Hammer', Slot.WEAPON);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/eb/58_-_Mole_Hammer.png/revision/latest?cb=20180330170742';

itemList.push(item);

var item = new CreateItem('Havarti Ring', Slot.ACCESSORY);
item.mPow = 50;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a1/59_-_Havarti_Ring.png/revision/latest?cb=20180330170813';

itemList.push(item);

var item = new CreateItem('Cheddar Amulet', Slot.ACCESSORY);
item.ePow = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a2/60_-_Cheddar_Amulet.png/revision/latest?cb=20180330170844';

itemList.push(item);

var item = new CreateItem('Combat Cheese', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/61_-_Combat_Cheese.png/revision/latest?cb=20180330170916';

itemList.push(item);

var item = new CreateItem('Magitech Helmet', Slot.HEAD);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/68_-_Magitech_Helmet.png/revision/latest?cb=20180330171306';

itemList.push(item);

var item = new CreateItem('Magitech Chestplate', Slot.CHEST);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7e/69_-_Magitech_Chestplate.png/revision/latest?cb=20180330172412';

itemList.push(item);

var item = new CreateItem('Magitech Leggings', Slot.PANTS);
item.mPow = 20;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d2/70_-_Magitech_Leggings.png/revision/latest?cb=20180330172456';

itemList.push(item);

var item = new CreateItem('Magitech Boots', Slot.BOOTS);
item.ePow = 50;
item.mPow = 30;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6f/71_-_Magitech_Boots.png/revision/latest?cb=20180330172551';

itemList.push(item);

var item = new CreateItem('Magitech Blade', Slot.WEAPON);
item.eCap = 12;
item.mCap = 8;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d1/72_-_Magitech_Blade.png/revision/latest?cb=20180330172657';

itemList.push(item);

var item = new CreateItem('Magitech Ring', Slot.ACCESSORY);
item.mPow = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b8/73_-_Magitech_Ring.png/revision/latest?cb=20180330172727';

itemList.push(item);

var item = new CreateItem('Magitech Amulet', Slot.ACCESSORY); 
item.eCap = 1.8;
item.ePow = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a0/74_-_Magitech_Amulet.png/revision/latest?cb=20180330172750';

itemList.push(item);

var item = new CreateItem('Chef\'s Hat', Slot.HEAD);
item.ePow = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/db/78_-_Chef%27s_Hat.png/revision/latest?cb=20180330173229';

itemList.push(item);

var item = new CreateItem('Chef\'s Apron', Slot.CHEST);
item.ePow = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/0f/79_-_Chef%27s_Apron.png/revision/latest?cb=20180330173300';

itemList.push(item);

var item = new CreateItem('Regular Pants', Slot.PANTS);
item.ePow = 130;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/86/80_-_Regular_Pants.png/revision/latest?cb=20180330173331';

itemList.push(item);

var item = new CreateItem('Non Slip Shoes', Slot.BOOTS);
item.ePow = 130;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5d/81_-_Non_Slip_Shoes.png/revision/latest?cb=20180330173412';

itemList.push(item);

var item = new CreateItem('Bloody Cleaver', Slot.WEAPON);
item.ePow = 90;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/82_-_Bloody_Cleaver.png/revision/latest?cb=20180330174836';

itemList.push(item);

var item = new CreateItem('Suspicious Sausage Necklace', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a8/83_-_Suspicious_Sausage_Necklace.png/revision/latest?cb=20180330174914';

itemList.push(item);

var item = new CreateItem('Raw Slab of Meat', Slot.ACCESSORY); 
item.eCap = 10;
item.ePow = 140;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2e/84_-_Raw_Slab_of_Meat.png/revision/latest?cb=20180330175016';

itemList.push(item);

var item = new CreateItem('Clockwork Hat', Slot.HEAD); 
item.mCap = 4;
item.mPow = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/85_-_Clockwork_Hat.png/revision/latest?cb=20180330175115';

itemList.push(item);

var item = new CreateItem('Clockwork Chest', Slot.CHEST); 
item.mCap = 6;
item.mPow = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b5/86_-_Clockwork_Chest.png/revision/latest?cb=20180330175413';

itemList.push(item);

var item = new CreateItem('Clockwork Pants', Slot.PANTS);
item.mCap = 6;
item.mPow = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d4/87_-_Clockwork_Pants.png/revision/latest?cb=20180330175444';

itemList.push(item);

var item = new CreateItem('Clockwork Boots', Slot.BOOTS);
item.mCap = 6;
item.mPow = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/41/88_-_Clockwork_Boots.png/revision/latest?cb=20180330175513';

itemList.push(item);

var item = new CreateItem('A Comically Oversized Minute-Hand', Slot.WEAPON);
item.mPow = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/53/89_-_A_Comically_Oversized_Minute-Hand.png/revision/latest?cb=20180330175633';

itemList.push(item);

var item = new CreateItem('Alarm Clock', Slot.ACCESSORY); 
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/90_-_Alarm_Clock.png/revision/latest?cb=20180330175706';

itemList.push(item);

var item = new CreateItem('The Sands of Time', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1f/91_-_The_Sands_of_Time.png/revision/latest?cb=20180330175744';

itemList.push(item);

var item = new CreateItem('A triangle', Slot.WEAPON);
item.ePow = 90;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/99_-_A_Triangle.png';

itemList.push(item);

var item = new CreateItem('Circle Helmet', Slot.HEAD);
item.ePow = 190;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/95_-_Circle_Helmet.png';

itemList.push(item);

var item = new CreateItem('Square Chestpiece', Slot.CHEST);
item.ePow = 100;
item.mPow = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/21/96_-_Square_Chestpiece.png';

itemList.push(item);

var item = new CreateItem('Rectangle Pants', Slot.PANTS);
item.eCap = 14;
item.ePow = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/97/97_-_Rectangle_Pants.png';

itemList.push(item);

var item = new CreateItem('Polygon Boots', Slot.BOOTS);
item.eCap = 10;
item.ePow = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/62/98_-_Polygon_Boots.png';

itemList.push(item);

var item = new CreateItem('THE CUBE', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/91/100_-_THE_CUBE.png';

itemList.push(item);

var item = new CreateItem('King Circle\'s Amulet of Helping Random Stuff', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ed/101_-_King_Circle%27s_Amulet_of_Helping_Random_Stuff.png';

itemList.push(item);

var item = new CreateItem('Spooky Sword', Slot.WEAPON);
item.ePow = 170;
item.mPow = 220;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/107_-_Spooky_Sword.png/revision/latest?cb=20180421191854';

itemList.push(item);

var item = new CreateItem('Spoopy Helmet', Slot.HEAD);
item.eCap = 20.6;
item.mCap = 21;
item.mPow = 150;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/af/103_-_Spoopy_Helmet.png/revision/latest?cb=20180421191559';

itemList.push(item);

var item = new CreateItem('Ghostly Chest', Slot.CHEST);
item.eCap = 22;
item.mCap = 23;
item.mPow = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/13/104_-_Ghostly_Chest.png/revision/latest?cb=20180421191727';

itemList.push(item);

var item = new CreateItem('Pants of Horror', Slot.PANTS);
item.eCap = 28;
item.mCap = 24;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/58/105_-_Pants_of_Horror.png/revision/latest?cb=20180421191753';

itemList.push(item);

var item = new CreateItem('Spectral Boots', Slot.BOOTS);
item.eCap = 10;
item.ePow = 100;
item.mCap = 18;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fc/106_-_Spectral_Boots.png/revision/latest?cb=20180421191823';

itemList.push(item);

var item = new CreateItem('Cursed Ring', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9d/108_-_Cursed_Ring.png/revision/latest?cb=20180421191922';

itemList.push(item);

var item = new CreateItem('Amulet of Sunshine, Sparkles and Gore', Slot.ACCESSORY);
item.ePow = 200;
item.mPow = 200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3e/109_-_Amulet_of_Sunshine%2C_Sparkles_and_Gore.png/revision/latest?cb=20180420182230';

itemList.push(item);

var item = new CreateItem('Dragon Wings', Slot.ACCESSORY);
item.mCap = 45.64;
item.mPow = 216.2;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/110_-_Dragon_Wings.png/revision/latest?cb=20180420182304';

itemList.push(item);

var item = new CreateItem('Office Hat', Slot.HEAD);
item.eCap = 31.64;
item.ePow = 216.4;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/111_-_Office_Hat.png/revision/latest?cb=20180420182341';

itemList.push(item);

var item = new CreateItem('Office Shirt', Slot.CHEST);
item.eCap = 61.62;
item.ePow = 156.4;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/61/112_-_Office_Shirt.png/revision/latest?cb=20180420182433';

itemList.push(item);

var item = new CreateItem('Office Pants', Slot.PANTS);
item.eCap = 57.64;
item.ePow = 116.4;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e4/113_-_Office_Pants.png/revision/latest?cb=20180514101206';

itemList.push(item);

var item = new CreateItem('Office Shoes', Slot.BOOTS);
item.ePow = 336.4;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1e/114_-_Office_Shoes.png/revision/latest?cb=20180420182540';

itemList.push(item);

var item = new CreateItem('The Pen-Is', Slot.WEAPON);
item.mCap = 47.12;
item.mPow = 176.4;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/dd/115_-_The_Pen-Is.png/revision/latest?cb=20180420182614';

itemList.push(item);

var item = new CreateItem('Stapler', Slot.ACCESSORY);
item.eCap = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a9/118_-_Stapler.png/revision/latest?cb=20180420182738';

itemList.push(item);

var item = new CreateItem('A Regular Tie', Slot.ACCESSORY);
item.mPow = 216.24;
item.ngu = 120;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f5/116_-_A_Regular_Tie.png/revision/latest?cb=20180420182645';

itemList.push(item);

var item = new CreateItem('Generic Paperweight', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1d/117_-_Generic_Paperweight.png/revision/latest?cb=20180420182714';

itemList.push(item);

var item = new CreateItem('Gaudy Hat', Slot.HEAD);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a3/122_-_Gaudy_Hat.png/revision/latest?cb=20180420182814';

itemList.push(item);

var item = new CreateItem('Gaudy Shirt', Slot.CHEST);
item.eCap = 76;
item.ePow = 192;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6b/123_-_Gaudy_Shirt.png/revision/latest?cb=20180420182843';

itemList.push(item);

var item = new CreateItem('Gaudy Pants', Slot.PANTS);
item.eCap = 72;
item.ePow = 180;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/73/124_-_Gaudy_Pants.png/revision/latest?cb=20180420182911';

itemList.push(item);

var item = new CreateItem('Gaudy Boots', Slot.BOOTS);
item.mPow = 240;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/36/125_-_Gaudy_Boots.png/revision/latest?cb=20180420182946';

itemList.push(item);

var item = new CreateItem('Paper Fan', Slot.WEAPON);
item.mPow = 260;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/95/126_-_Paper_Fan.png/revision/latest?cb=20180420183017';

itemList.push(item);

var item = new CreateItem('A Beanie', Slot.HEAD);
item.mCap = 106;
item.mPow = 359.8;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b7/127_-_A_Beanie.png/revision/latest?cb=20180420183047';

itemList.push(item);

var item = new CreateItem('Mega Helmet', Slot.HEAD);
item.ePow = 440;
item.mPow = 440;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e1/130_-_Mega_Helmet.png/revision/latest?cb=20180420183116';

itemList.push(item);

var item = new CreateItem('Mega Chest', Slot.CHEST);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/90/131_-_Mega_Chest.png/revision/latest?cb=20180420183142';

itemList.push(item);

var item = new CreateItem('Mega Blue Jeans', Slot.PANTS);
item.eCap = 90;
item.mCap = 90;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/da/132_-_Mega_Blue_Jeans.png/revision/latest?cb=20180420183213';

itemList.push(item);

var item = new CreateItem('Mega Boots', Slot.BOOTS);
item.mPow = 280;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/07/133_-_Mega_Boots.png/revision/latest?cb=20180420183238';

itemList.push(item);

var item = new CreateItem('Beam Laser Sword', Slot.WEAPON);
item.ePow = 280;
item.eCap = 40;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fb/134_-_Beam_Laser_Sword.png/revision/latest?cb=20180420183306';

itemList.push(item);

var item = new CreateItem('Ring of Greed', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cf/136_-_Ring_of_Greed.png/revision/latest?cb=20180420183403';

itemList.push(item);

var item = new CreateItem('UUG\'s \'Special\' Ring', Slot.ACCESSORY);
item.ngu = 200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/dc/149_-_UUG%27s_%27Special%27_Ring.png/revision/latest?cb=20180601090251';

itemList.push(item);

var item = new CreateItem('Ring of Might', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/137_-_Ring_of_Might.png/revision/latest?cb=20180420183425';

itemList.push(item);

var item = new CreateItem('Ring of Utility', Slot.ACCESSORY);
item.ngu = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c0/138_-_Ring_of_Utility.png/revision/latest?cb=20180420183453';

itemList.push(item);

var item = new CreateItem('Ring of Way Too Much Energy', Slot.ACCESSORY);
item.ePow = 500;
item.eCap = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/139_-_Ring_of_Way_Too_Much_Energy.png/revision/latest?cb=20180420183518';

itemList.push(item);

var item = new CreateItem('Ring of Way Too Much Magic', Slot.ACCESSORY);
item.mPow = 500;
item.mCap = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/68/140_-_Ring_of_Way_Too_Much_Magic.png/revision/latest?cb=20180420183555';

itemList.push(item);

var item = new CreateItem('Groucho Marx Disguise', Slot.HEAD);
item.mCap = 96;
item.ePow = 360;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c6/143_-_Groucho_Marx_Disguise.png/';

itemList.push(item);

var item = new CreateItem('Gossamer Chest', Slot.CHEST);
item.eCap = 120;
item.mCap = 100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/77/144_-_Gossamer_Chest.png/';

itemList.push(item);

var item = new CreateItem('Braided Beard Legs', Slot.PANTS);
item.mCap = 86;
item.mPow = 560;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/145_-_Braided_Beard_Legs.png/';

itemList.push(item);

var item = new CreateItem('Fuzzy Orange Cheeto Slippers!', Slot.BOOTS);
item.eCap = 40;
item.ePow = 440;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cc/146_-_Fuzzy_Orange_Cheeto_Slippers%21.png/';

itemList.push(item);

var item = new CreateItem('Bearded Axe', Slot.WEAPON);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/92/147_-_Bearded_Axe.png/';

itemList.push(item);

var item = new CreateItem('An Infinitely Long Strand of Beard Hair', Slot.ACCESSORY);
item.ePow = 900;
item.mPow = 700;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e5/148_-_An_Infinitely_Long_Strand_of_Beard_Hair.png/revision/latest?cb=20180730130833';

itemList.push(item);

var item = new CreateItem('Wanderer\'s Hat', Slot.HEAD);
item.eCap = 170;
item.ePow = 1500;
item.mPow = 400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/10/150_-_Wanderer%27s_Hat.png/revision/latest?cb=20180619095346';

itemList.push(item);

var item = new CreateItem('Wanderer\'s Chest', Slot.CHEST);
item.ePow = 1600;
item.mCap = 60;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/90/151_-_Wanderer%27s_Chest.png/revision/latest?cb=20180619094826';

itemList.push(item);

var item = new CreateItem('Wanderer\'s Pants', Slot.PANTS);
item.eCap = 170;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2d/152_-_Wanderer%27s_Pants.png/revision/latest?cb=20180619103043';

itemList.push(item);

var item = new CreateItem('Wanderer\'s Boots', Slot.BOOTS);
item.ngu = 120;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/35/153_-_Wanderer%27s_Boots.png/revision/latest?cb=20180619091715';

itemList.push(item);

var item = new CreateItem('Wanderer\'s Cane', Slot.WEAPON);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6e/154_-_Wanderer%27s_Cane.png/revision/latest?cb=20180619092612';

itemList.push(item);

var item = new CreateItem('taH s\'rerednaW', Slot.HEAD);
item.ePow = 400;
item.mCap = 170;
item.mPow = 1500;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c7/155_-_taH_s%27rerednaW.png/revision/latest?cb=20180619083814';

itemList.push(item);

var item = new CreateItem('tsehC s\'rerednaW', Slot.CHEST);
item.eCap = 60;
item.mPow = 1600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/0d/156_-_tsehC_s%27rerednaW.png/revision/latest?cb=20180619083038';

itemList.push(item);

var item = new CreateItem('stnaP s\'rerednaW', Slot.PANTS);
item.mCap = 170;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f5/157_-_stnaP_s%27rerednaW.png/revision/latest?cb=20180619075904';

itemList.push(item);

var item = new CreateItem('stooB s\'rerednaW', Slot.BOOTS);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/158_-_stooB_s%27rerednaW.png/revision/latest?cb=20180619081719';

itemList.push(item);

var item = new CreateItem('The Candy Cane of Destiny', Slot.WEAPON);
item.ePow = 2000;
item.eCap = 200;
item.mPow = 2000;
item.mCap = 200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fd/159_-_The_Candy_Cane_of_Destiny.png/revision/latest?cb=20180619111530';

itemList.push(item);

var item = new CreateItem('Fanny Pack', Slot.ACCESSORY);
item.eCap = 60;
item.mCap = 60;
item.ePow = 1000;
item.mPow = 1000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8d/160_-_Fanny_Pack.png/revision/latest?cb=20180619111636';

itemList.push(item);

var item = new CreateItem('Dorky Glasses', Slot.ACCESSORY);
item.ngu = 300;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ec/161_-_Dorky_Glasses.png/revision/latest?cb=20180619111717';

itemList.push(item);

var item = new CreateItem('Badly Drawn Smiley Face', Slot.HEAD);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3f/164_-_Badly_Drawn_Smiley_Face.png/';

itemList.push(item);

var item = new CreateItem('Badly Drawn Chest', Slot.CHEST);
item.mCap = 270;
item.ePow = 2800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/76/165_-_Badly_Drawn_Chest.png/';

itemList.push(item);

var item = new CreateItem('Badly Drawn Pants', Slot.PANTS);
item.eCap = 260;
item.ePow = 800;
item.mPow = 800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/09/166_-_Badly_Drawn_Pants.png/';

itemList.push(item);

var item = new CreateItem('Badly Drawn Foot', Slot.BOOTS);
item.eCap = 80;
item.mCap = 80;
item.mPow = 2400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/17/167_-_Badly_Drawn_Foot.png/';

itemList.push(item);

var item = new CreateItem('Badly Drawn Gun', Slot.WEAPON);
item.eCap = 120;
item.mCap = 120;
item.ePow = 1200;
item.mPow = 1200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/168_-_Badly_Drawn_Gun.png/';

itemList.push(item);

var item = new CreateItem('Stealthy Hat', Slot.HEAD);
item.ePow = 2400;
item.eCap = 350;
item.mCap = 170;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/173_-_Stealthy_Hat.png/revision/latest?cb=20180805092445';

itemList.push(item);

var item = new CreateItem('Stealthy Chest', Slot.CHEST); 
item.ePow = 1800;
item.mPow = 1800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7a/174_-_Stealthy_Chest.png/revision/latest?cb=20180805092615';

itemList.push(item);

var item = new CreateItem('The Stealthiest Armour', Slot.CHEST);
item.eCap = 420;
item.mCap = 420;
item.ngu = 400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/178_-_The_Stealthiest_Armour.png/revision/latest?cb=20180805093107';

itemList.push(item);

var item = new CreateItem('No Pants', Slot.PANTS);
item.ePow = 3500;
item.mPow = 900;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/28/175_-_No_Pants.png/revision/latest?cb=20180805092716';

itemList.push(item);

var item = new CreateItem('High Heeled Boots', Slot.BOOTS);
item.eCap = 400;
item.mPow = 2800;
item.mCap = 120;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cb/176_-_High_Heeled_Boots.png/revision/latest?cb=20180805092811';

itemList.push(item);

var item = new CreateItem('A Giant Bazooka', Slot.WEAPON);
item.ePow = 2400;
item.eCap = 240;
item.mPow = 2400;
item.mCap = 240;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/be/177_-_A_Giant_Bazooka.png/revision/latest?cb=20180805092859';

itemList.push(item);

var item = new CreateItem('Slimy Helmet', Slot.HEAD);
item.ePow = 2800;
item.mCap = 300;
item.mPow = 2800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/46/184_-_Slimy_Helmet.png/revision/latest?cb=20180902075728';

itemList.push(item);

var item = new CreateItem('Slimy Chest', Slot.CHEST);
item.eCap = 300;
item.mCap = 300;
item.mPow = 2800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/41/185_-_Slimy_Chest.png/revision/latest?cb=20180902075729';

itemList.push(item);

var item = new CreateItem('Slimy Pants', Slot.PANTS);
item.ePow = 2600;
item.eCap = 320;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/186_-_Slimy_Pants.png/revision/latest?cb=20180902075730';

itemList.push(item);

var item = new CreateItem('Slimy Boots', Slot.BOOTS);
item.ePow = 2800;
item.eCap = 280;
item.mPow = 2800;
item.mCap = 280;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cc/187_-_Slimy_Boots.png/revision/latest?cb=20180902075730';

itemList.push(item);

var item = new CreateItem('The Fists of Flubber', Slot.WEAPON);
item.mPow = 4000;
item.mCap = 400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5c/188_-_The_Fists_of_Flubber.png/revision/latest?cb=20180902075731';

itemList.push(item);

var item = new CreateItem('A Bald Egg', Slot.ACCESSORY);
item.eCap = 300;
item.mCap = 300;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/04/189_-_A_Bald_Egg.png/revision/latest?cb=20180902075731';

itemList.push(item);

var item = new CreateItem('A Giant Apple', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4b/193_-_A_Giant_Apple.png/revision/latest?cb=20180903174820';

itemList.push(item);

var item = new CreateItem('A Power Pill', Slot.ACCESSORY);
item.ePow = 6000;
item.eCap = 600;
item.mPow = 6000;
item.mCap = 600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3d/194_-_A_Power_Pill.png/revision/latest?cb=20180902075732';

itemList.push(item);

var item = new CreateItem('A Priceless Van-Gogh Painting', Slot.ACCESSORY);
item.eCap = 400;
item.mCap = 400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/95/192_-_A_Priceless_Van-Gogh_Painting.png/revision/latest?cb=20180907141342';

itemList.push(item);

var item = new CreateItem('A Shrunken Voodoo Doll', Slot.ACCESSORY);
item.ngu = 400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/20/190_-_A_Shrunken_Voodoo_Doll.png/revision/latest?cb=20180907140324';

itemList.push(item);

var item = new CreateItem('A Small Gerbil', Slot.ACCESSORY);
item.ePow = 12000;
item.mCap = 1200;
item.mPow = 12000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/12/195_-_A_Small_Gerbil.png/revision/latest?cb=20180902075732';

itemList.push(item);

var item = new CreateItem('Chocolate Crowbar', Slot.WEAPON);
item.mCap = 580;
item.ePow = 6000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/81/225_-_Chocolate_Crowbar.png/revision/latest?cb=20181205182402';

itemList.push(item);

var item = new CreateItem('Chocolate Helmet', Slot.HEAD);
item.mCap = 380;
item.ePow = 5200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e3/221_-_Chocolate_Helmet.png/revision/latest?cb=20181111154851';

itemList.push(item);

var item = new CreateItem('Chocolate Chest', Slot.CHEST);
item.eCap = 600;
item.mCap = 600;
item.ePow = 5800;
item.mPow = 5800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/89/222_-_Chocolate_Chest.png/revision/latest?cb=20181111153348';

itemList.push(item);

var item = new CreateItem('Chocolate Pants', Slot.PANTS);
item.eCap = 460;
item.ePow = 5600;
item.mPow = 5600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b9/223_-_Chocolate_Pants.png/revision/latest?cb=20181111152501';

itemList.push(item);

var item = new CreateItem('Chocolate Boots', Slot.BOOTS);
item.eCap = 680;
item.ePow = 6800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/224_-_Chocolate_Boots.png/revision/latest?cb=20181111153509';

itemList.push(item);

var item = new CreateItem('Energy Bar Bar', Slot.ACCESSORY);
item.eCap = 500;
item.ePow = 6000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/226_-_Energy_Bar_Bar.png/revision/latest?cb=20181201195523';

itemList.push(item);

var item = new CreateItem('Magic Bar Bar', Slot.ACCESSORY);
item.mCap = 500;
item.mPow = 6000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/88/227_-_Magic_Bar_Bar.png/revision/latest?cb=20181119175311';

itemList.push(item);

var item = new CreateItem('Forest Pendant', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5f/53_-_Forest_Pendant.png/revision/latest?cb=20180330170456';

itemList.push(item);

var item = new CreateItem('Ascended Forest Pendant', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/76_-_Ascended_Forest_Pendant.png/revision/latest?cb=20180330173013';

itemList.push(item);

var item = new CreateItem('Ascended Ascended Forest Pendant', Slot.ACCESSORY);
item.mPow = 200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3a/94_-_Ascended_Ascended_Forest_Pendant.png/revision/latest?cb=20180513161430';

itemList.push(item);

var item = new CreateItem('Ascended Ascended Ascended Pendant', Slot.ACCESSORY);
item.ePow = 540;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/49/142_-_Ascended_Ascended_Ascended_Pendant.png/revision/latest?cb=20180516205139';

itemList.push(item);

var item = new CreateItem('Ascended x4 Pendant', Slot.ACCESSORY);
item.eCap = 240;
item.mCap = 240;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/170_-_Ascended_x4_Pendant.png/revision/latest?cb=20180729135209';

itemList.push(item);

var item = new CreateItem('Ascended x5 Pendant', Slot.ACCESSORY);
item.ngu = 500;
item.ePow = 10000;
item.mPow = 10000;
item.mCap = 1000;
item.eCap = 1000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/34/229_-_Ascended_x5_Pendant.png/revision/latest?cb=20181121154953';

itemList.push(item);

var item = new CreateItem('Ascended x6 Pendant', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/34/295_-_Ascended_x6_Pendant.png/revision/latest?cb=20190409190045';

itemList.push(item);

var item = new CreateItem('Looty McLootFace', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/22/67_-_Looty_McLootFace.png/revision/latest?cb=20180330171226';

itemList.push(item);

var item = new CreateItem('Sir Looty McLootington III, Esquire', Slot.ACCESSORY);
item.ePow = 200;
item.mPow = 200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fd/128_-_Sir_Looty_McLootington_III%2C_Esquire.png/revision/latest?cb=20180409134100';

itemList.push(item);

var item = new CreateItem('King Looty', Slot.ACCESSORY);
item.ePow = 800;
item.mPow = 800;
item.eCap = 80;
item.mCap = 80;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/169_-_King_Looty.png/revision/latest?cb=20180706092451';

itemList.push(item);

var item = new CreateItem('Emperor Looty', Slot.ACCESSORY);
item.ePow = 3000;
item.mPow = 3000;
item.eCap = 300;
item.mCap = 300;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/230_-_Emperor_Looty.png/revision/latest?cb=20181121155138';

itemList.push(item);

var item = new CreateItem('GALACTIC HERALD LOOTY', Slot.ACCESSORY);
item.ePow = 50000;
item.mPow = 50000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/296_-_GALACTIC_HERALD_LOOTY.png/revision/latest?cb=20190411171936';

itemList.push(item);

var item = new CreateItem('The Triple Flubber', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/121_-_The_Triple_Flubber.png/revision/latest?cb=20180402160149';

itemList.push(item);

var item = new CreateItem('Edgy Helmet', Slot.HEAD);
item.ePow = 6000;
item.mPow = 6000;
item.mCap = 560;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/93/213_-_Edgy_Helmet.png/revision/latest?cb=20181203091607';

itemList.push(item);

var item = new CreateItem('Edgy Chest', Slot.CHEST);
item.eCap = 920;
item.ePow = 8200;
item.mCap = 920;
item.mPow = 8200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/214_-_Edgy_Chest.png/revision/latest?cb=20181111161316';

itemList.push(item);

var item = new CreateItem('BOTH Edgy Boots', Slot.BOOTS);
item.ePow = 7000;
item.mPow = 7000;
item.eCap = 700;
item.mCap = 700;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/eb/220_-_BOTH_Edgy_Boots.png/revision/latest?cb=20181119175948';

itemList.push(item);

var item = new CreateItem('Left Edgy Boot', Slot.BOOTS);
item.eCap = 960;
item.ePow = 9600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/216_-_Left_Edgy_Boot.png/revision/latest?cb=20181111161316';

itemList.push(item);

var item = new CreateItem('Right Edgy Boot', Slot.BOOTS);
item.mCap = 960;
item.mPow = 9600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b2/219_-_Right_Edgy_Boot.png/revision/latest?cb=20181203073628';

itemList.push(item);

var item = new CreateItem('Edgy Pants', Slot.PANTS);
item.eCap = 900;
item.ePow = 11000;
item.mPow = 11000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/89/215_-_Edgy_Pants.png/revision/latest?cb=20181111161316';

itemList.push(item);

var item = new CreateItem('Edgy Jaw Axe', Slot.WEAPON);
item.ePow = 8800;
item.mCap = 840;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a5/217_-_Edgy_Jaw_Axe.png/revision/latest?cb=20181203091049';

itemList.push(item);

var item = new CreateItem('A Cheap Plastik Amulet', Slot.ACCESSORY);
item.ePow = 9000;
item.eCap = 720;
item.mPow = 9000;
item.mCap = 720;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/83/218_-_A_Cheap_Plastik_Amulet.png/revision/latest?cb=20181203104051';

itemList.push(item);

var item = new CreateItem('Clown Hat', Slot.HEAD);
item.mPow = 11000;
item.eCap = 1100;
item.mCap = 1100;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/32/231_-_Clown_Hat.png/revision/latest?cb=20181205183618';

itemList.push(item);

var item = new CreateItem('Fabulous Super Chest', Slot.CHEST);
item.eCap = 1100;
item.mCap = 1100;
item.ePow = 10800;
item.mPow = 10800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/be/232_-_Fabulous_Super_Chest.png/revision/latest?cb=20181205183706';

itemList.push(item);

var item = new CreateItem('A Crappy Tutu', Slot.PANTS);
item.ePow = 14000;
item.eCap = 1200;
item.mCap = 1200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/233_-_A_Crappy_Tutu.png/revision/latest?cb=20181205183714';

itemList.push(item);

var item = new CreateItem('Pretty Pink Slippers', Slot.BOOTS);
item.mCap = 1260;

item.ePow = 13000;
item.mPow = 13000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b6/234_-_Pretty_Pink_Slippers.png/revision/latest?cb=20181205183721';

itemList.push(item);

var item = new CreateItem('Giant Sticky Foot', Slot.WEAPON);
item.ePow = 12000;
item.eCap = 1140;
item.mPow = 12000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/64/235_-_Giant_Sticky_Foot.png/revision/latest?cb=20181205183727';

itemList.push(item);

var item = new CreateItem('A Pretty Pink Bow', Slot.ACCESSORY);
item.ngu = 340;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8c/236_-_A_Pretty_Pink_Bow.png/revision/latest?cb=20181205183734';

itemList.push(item);

var item = new CreateItem('A Worn Out Fedora', Slot.HEAD);
item.ePow = 11600;
item.mPow = 11600;
item.mCap = 1800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/72/237_-_A_Worn_Out_Fedora.png/revision/latest?cb=20181208020842';

itemList.push(item);

var item = new CreateItem('Sweat-Stained NGU Shirt', Slot.CHEST);
item.eCap = 1400;
item.mCap = 1400;
item.ePow = 20000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/5/50/238_-_Sweat-Stained_NGU_Shirt.png/revision/latest?cb=20181208020853';

itemList.push(item);

var item = new CreateItem('Not Sweat-Stained Underpants', Slot.PANTS);
item.ePow = 12200;
item.mPow = 12200;
item.eCap = 1800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/20/239_-_Not_Sweat-Stained_Underpants.png/revision/latest?cb=20181208020859';

itemList.push(item);

var item = new CreateItem('Nerdy Shoes', Slot.BOOTS);
item.eCap = 1600;
item.mCap = 1600;
item.mPow = 16000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/240_-_Nerdy_Shoes.png/revision/latest?cb=20181208020906';

itemList.push(item);

var item = new CreateItem('Superior Japanese Katana', Slot.WEAPON);
item.eCap = 1340;
item.mCap = 1340;
item.ePow = 13000;
item.mPow = 13000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c5/241_-_Superior_Japanese_Katana.png/revision/latest?cb=20181208020913';

itemList.push(item);

var item = new CreateItem('An Ordinary Calculator', Slot.ACCESSORY);
item.ngu = 600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6f/242_-_An_Ordinary_Calculator.png/revision/latest?cb=20181208020919';

itemList.push(item);

var item = new CreateItem('Anime Figurine', Slot.ACCESSORY);
item.ePow = 13000;
item.mPow = 13000;
item.mCap = 1000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f4/243_-_Anime_Figurine.png/revision/latest?cb=20181208020927';

itemList.push(item);

var item = new CreateItem('The D20', Slot.ACCESSORY);
item.eCap = 1600;
item.ePow = 16000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6a/244_-_The_D20.png/revision/latest?cb=20190404220153';

itemList.push(item);

var item = new CreateItem('The D8', Slot.ACCESSORY);
item.mCap = 1600;
item.mPow = 16000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/47/245_-_The_D8.png/revision/latest/scale-to-width-down/50?cb=20190404220657';

itemList.push(item);

var item = new CreateItem('Anime Bodypillow', Slot.ACCESSORY);
item.ngu = 300;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4f/246_-_Anime_Bodypillow.png/revision/latest?cb=20190404221520';

itemList.push(item);

var item = new CreateItem('Red Meeple Thingy', Slot.ACCESSORY);
item.mPow = 24000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/c/ca/247_-_Red_Meeple_Thingy.png/revision/latest?cb=20190127224512';

itemList.push(item);

var item = new CreateItem('A Bag of Trash', Slot.ACCESSORY);
item.eCap = 2000;
item.mCap = 2000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/16/248_-_A_Bag_of_Trash.png/revision/latest?cb=20190404222622';

itemList.push(item);

var item = new CreateItem('Heart Shaped Panties', Slot.ACCESSORY);
item.ngu = 666;
item.mCap = 1333;
item.eCap = 1333;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/23/249_-_Heart_Shaped_Panties.png/revision/latest?cb=20190404223529';

itemList.push(item);

var item = new CreateItem('Numerical Head', Slot.HEAD);
item.eCap = 3000;
item.ePow = 16600;
item.mPow = 16600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/3/39/251_-_Numerical_Head.png/revision/latest?cb=20190404230436';

itemList.push(item);

var item = new CreateItem('Numerical Chest', Slot.CHEST);
item.mCap = 2200;
item.mPow = 24000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/68/252_-_Numerical_Chest.png/revision/latest?cb=20190404232427';

itemList.push(item);

var item = new CreateItem('Numerical Legs', Slot.PANTS);
item.eCap = 1800;
item.mCap = 1800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/253_-_Numerical_Legs.png/revision/latest?cb=20190404232945';

itemList.push(item);

var item = new CreateItem('Numerical Boots', Slot.BOOTS);
item.eCap = 2200;
item.ePow = 16000;
item.mPow = 16000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/21/254_-_Numerical_Boots.png/revision/latest?cb=20190203144444';

itemList.push(item);

var item = new CreateItem('The Number 7', Slot.WEAPON);
item.mPow = 18000;
item.mCap = 2000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/d/de/255_-_The_Number_7.png/revision/latest?cb=20190404234226';

itemList.push(item);

var item = new CreateItem('Infinity Charm', Slot.ACCESSORY);
item.eCap = 1777.78;
item.mCap = 1777.78;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4b/256_-_Infinity_Charm.png/revision/latest?cb=20190405131142';

itemList.push(item);

var item = new CreateItem('69 Charm', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/46/257_-_69_Charm.png/revision/latest?cb=20190405135754';

itemList.push(item);

var item = new CreateItem('Party Hat', Slot.HEAD);
item.mCap = 3000;
item.mPow = 32000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/92/258_-_Party_Hat.png/revision/latest?cb=20190210184658';

itemList.push(item);

var item = new CreateItem('Pogmail Chest', Slot.CHEST);
item.eCap = 3200;
item.mPow = 22000;
item.ePow = 22000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9b/259_-_Pogmail_Chest.png/revision/latest?cb=20190210184714';

itemList.push(item);

var item = new CreateItem('Tear Away Pants', Slot.PANTS);
item.ePow = 20000;
item.mPow = 20000;
item.mCap = 2400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/42/260_-_Tear_Away_Pants.png/revision/latest?cb=20190210184733';

itemList.push(item);

var item = new CreateItem('Pizza Boots', Slot.BOOTS);
item.eCap = 2400;
item.mCap = 2400;
item.ePow = 20000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/11/261_-_Pizza_Boots.png/revision/latest?cb=20190210184753';

itemList.push(item);

var item = new CreateItem('The God of Thunder\'s Hammer', Slot.WEAPON);
item.mPow = 20000;
item.ePow = 20000;
item.eCap = 2600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/262_-_The_God_of_Thunder%27s_Hammer.png/revision/latest?cb=20190210184820';

itemList.push(item);

var item = new CreateItem('Plastic Red Cup', Slot.ACCESSORY);
item.eCap = 2400;
item.mCap = 2400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2b/263_-_Plastic_Red_Cup.png/revision/latest?cb=20190210184842';

itemList.push(item);

var item = new CreateItem('Party Whistle', Slot.ACCESSORY);
item.ngu = 400;
item.ePow = 20000;
item.mPow = 20000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a1/264_-_Party_Whistle.png/revision/latest?cb=20190210184912';

itemList.push(item);

var item = new CreateItem('Mobster Hat', Slot.HEAD);
item.ePow = 32000;
item.eCap = 3200;
item.mCap = 3200;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/265_-_Mobster_Hat.png/revision/latest?cb=20190304210613';

itemList.push(item);

var item = new CreateItem('Mobster Vest', Slot.CHEST);
item.eCap = 3200;
item.mCap = 3200;
item.mPow = 36000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ec/266_-_Mobster_Vest.png/revision/latest?cb=20190304210627';

itemList.push(item);

var item = new CreateItem('Mobster Pants', Slot.PANTS);
item.ePow = 26000;
item.mPow = 26000;
item.eCap = 2800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2c/267_-_Mobster_Pants.png/revision/latest?cb=20190304210640';

itemList.push(item);

var item = new CreateItem('Cement Boots', Slot.BOOTS);
item.ePow = 28000;
item.mPow = 28000;
item.eCap = 2600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/8/82/268_-_Cement_Boots.png/revision/latest?cb=20190304210649';

itemList.push(item);

var item = new CreateItem('Tommy Gun', Slot.WEAPON);
item.mPow = 20000;
item.ePow = 20000;
item.mCap = 3600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/269_-_Tommy_Gun.png/revision/latest?cb=20190304210655';

itemList.push(item);

var item = new CreateItem('A Garrote', Slot.ACCESSORY);
item.ePow = 22000;
item.mPow = 22000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4d/270_-_A_Garrote.png/revision/latest?cb=20190304210702';

itemList.push(item);

var item = new CreateItem('Brass Knuckles', Slot.ACCESSORY);
item.eCap = 1800;
item.mCap = 1800;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/7/71/271_-_Brass_Knuckles.png/revision/latest?cb=20190304210708';

itemList.push(item);

var item = new CreateItem('Violin Case', Slot.ACCESSORY);
item.eCap = 2600;
item.mCap = 2600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e8/272_-_Violin_Case.png/revision/latest?cb=20190405170845';

itemList.push(item);

var item = new CreateItem('Molotov Cocktail', Slot.ACCESSORY);
item.ngu = 400;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f7/273_-_Molotov_Cocktail.png/revision/latest?cb=20190405170905';

itemList.push(item);

var item = new CreateItem('The Godmother\'s Ring', Slot.ACCESSORY);
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e3/274_-_The_Godmother%27s_Ring.png/revision/latest?cb=20190405170919';

itemList.push(item);

var item = new CreateItem('The Godmother\'s Wand', Slot.ACCESSORY);
item.eCap = 4000;
item.mCap = 4000;
item.ePow = 40000;
item.mPow = 40000;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6c/275_-_The_Godmother%27s_Wand.png/revision/latest?cb=20190405170934';

itemList.push(item);

var item = new CreateItem('Left Fairy Wing', Slot.ACCESSORY);
item.eCap = 6600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e4/276_-_Left_Fairy_Wing.png/revision/latest?cb=20190405170949';

itemList.push(item);

var item = new CreateItem('Right Fairy Wing', Slot.ACCESSORY);
item.mPow = 66000;
item.mCap = 6600;
item.img = 'https://vignette.wikia.nocookie.net/nguadventure/images/6/66/277_-_Right_Fairy_Wing.png/revision/latest?cb=20190405171006';

itemList.push(item);