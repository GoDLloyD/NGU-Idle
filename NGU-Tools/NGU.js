document.addEventListener("DOMContentLoaded", function() {
	'use strict';
	
	function arr(v) { return Array.prototype.slice.call(v); }
	function appendTo(a) { return function(b) { return a.appendChild(b); }; }
	function el(tag, contents) { var el = document.createElement(tag); if(contents) contents.map(appendTo(el)); return el; }
	function txt() { return document.createTextNode(arr(arguments).join()); }
	function div() { return el("div", arr(arguments)); }
	function span() { return el("span", arr(arguments)); }
	function label() { return el("label", arr(arguments)); }
	function tr() { return el("TR", arr(arguments)); }
	function td() { return el("TD", arr(arguments)); }
	function th() { return el("TH", arr(arguments)); }
	
	function EquipItem(type) {
		this.name = "";
		this.type = type;
		this.eCap = 0;
		this.mCap = 0;
		this.ePow = 0;
		this.mPow = 0;
	}
	
	function generateNGUset() {
		var bestHead = new EquipItem("Head");
		var bestChest = new EquipItem("Chest");
		var bestLegs = new EquipItem("Legs");
		var bestBoots = new EquipItem("Boots");
		var bestWeapon = new EquipItem("Weapon");
		
		var generationText = document.getElementById("genNGUinput").value;
		var generationTextParts = generationText.split(";");
		var equipParts = [];
		var equipHeads = [];
		var equipChests = [];
		var equipLegs = [];
		var equipBoots = [];
		var equipWeapons = [];
		generationTextParts.map(function(generationTextPart) {
			var generationTextStats = generationTextPart.split(",");
			var equipPart = new EquipItem(generationTextStats[1]);
			equipPart.name = generationTextStats[0];
			equipPart.eCap = (generationTextStats[2]/100);
			equipPart.mCap = (generationTextStats[3]/100);
			equipPart.ePow = (generationTextStats[4]/100);
			equipPart.mPow = (generationTextStats[5]/100);
			if(equipPart.type == "Head") {
					equipHeads.push(equipPart);
			} else if(equipPart.type == "Chest") {
					equipChests.push(equipPart);
			} else if(equipPart.type == "Legs") {
					equipLegs.push(equipPart);
			} else if(equipPart.type == "Boots") {
					equipBoots.push(equipPart);
			} else if(equipPart.type == "Weapon") {
					equipWeapons.push(equipPart);
			}
		});
		equipParts.push(equipHeads);
		equipParts.push(equipChests);
		equipParts.push(equipLegs);
		equipParts.push(equipBoots);
		equipParts.push(equipWeapons);
		equipParts.map(function(equipPart) {
			equipPart.map(function(equip) {
				var calcECap = 1 + bestHead.eCap + bestChest.eCap + bestLegs.eCap + bestBoots.eCap + bestWeapon.eCap;
				var calcMCap = 1 + bestHead.mCap + bestChest.mCap + bestLegs.mCap + bestBoots.mCap + bestWeapon.mCap;
				var calcEPow = 1 + bestHead.ePow + bestChest.ePow + bestLegs.ePow + bestBoots.ePow + bestWeapon.ePow;
				var calcMPow = 1 + bestHead.mPow + bestChest.mPow + bestLegs.mPow + bestBoots.mPow + bestWeapon.mPow;
				var calcBestECap = 1 + bestHead.eCap + bestChest.eCap + bestLegs.eCap + bestBoots.eCap + bestWeapon.eCap;
				var calcBestMCap = 1 + bestHead.mCap + bestChest.mCap + bestLegs.mCap + bestBoots.mCap + bestWeapon.mCap;
				var calcBestEPow = 1 + bestHead.ePow + bestChest.ePow + bestLegs.ePow + bestBoots.ePow + bestWeapon.ePow;
				var calcBestMPow = 1 + bestHead.mPow + bestChest.mPow + bestLegs.mPow + bestBoots.mPow + bestWeapon.mPow;
				var calcBestStats = calcBestECap * calcBestMCap * calcBestEPow * calcBestMPow;
				
				if(equip.type == "Head") {
					calcECap = calcECap - bestHead.eCap + equip.eCap;
					calcMCap = calcMCap - bestHead.mCap + equip.mCap;
					calcEPow = calcEPow - bestHead.ePow + equip.ePow;
					calcMPow = calcMPow - bestHead.mPow + equip.mPow;
					var calcStats = calcECap * calcMCap * calcEPow * calcMPow;
					if(calcStats > calcBestStats)
					{
						bestHead.name = equip.name;
						bestHead.eCap = equip.eCap;
						bestHead.mCap = equip.mCap;
						bestHead.ePow = equip.ePow;
						bestHead.mPow = equip.mPow;
					}
				} else if(equip.type == "Chest") {
					calcECap = calcECap - bestChest.eCap + equip.eCap;
					calcMCap = calcMCap - bestChest.mCap + equip.mCap;
					calcEPow = calcEPow - bestChest.ePow + equip.ePow;
					calcMPow = calcMPow - bestChest.mPow + equip.mPow;
					var calcStats = calcECap * calcMCap * calcEPow * calcMPow;
					if(calcStats > calcBestStats)
					{
						bestChest.name = equip.name;
						bestChest.eCap = equip.eCap;
						bestChest.mCap = equip.mCap;
						bestChest.ePow = equip.ePow;
						bestChest.mPow = equip.mPow;
					}
				} else if(equip.type == "Legs") {
					calcECap = calcECap - bestLegs.eCap + equip.eCap;
					calcMCap = calcMCap - bestLegs.mCap + equip.mCap;
					calcEPow = calcEPow - bestLegs.ePow + equip.ePow;
					calcMPow = calcMPow - bestLegs.mPow + equip.mPow;
					var calcStats = calcECap * calcMCap * calcEPow * calcMPow;
					if(calcStats > calcBestStats)
					{
						bestLegs.name = equip.name;
						bestLegs.eCap = equip.eCap;
						bestLegs.mCap = equip.mCap;
						bestLegs.ePow = equip.ePow;
						bestLegs.mPow = equip.mPow;
					}
				} else if(equip.type == "Boots") {
					calcECap = calcECap - bestBoots.eCap + equip.eCap;
					calcMCap = calcMCap - bestBoots.mCap + equip.mCap;
					calcEPow = calcEPow - bestBoots.ePow + equip.ePow;
					calcMPow = calcMPow - bestBoots.mPow + equip.mPow;
					var calcStats = calcECap * calcMCap * calcEPow * calcMPow;
					if(calcStats > calcBestStats)
					{
						bestBoots.name = equip.name;
						bestBoots.eCap = equip.eCap;
						bestBoots.mCap = equip.mCap;
						bestBoots.ePow = equip.ePow;
						bestBoots.mPow = equip.mPow;
					}
				} else if(equip.type == "Weapon") {
					calcECap = calcECap - bestWeapon.eCap + equip.eCap;
					calcMCap = calcMCap - bestWeapon.mCap + equip.mCap;
					calcEPow = calcEPow - bestWeapon.ePow + equip.ePow;
					calcMPow = calcMPow - bestWeapon.mPow + equip.mPow;
					var calcStats = calcECap * calcMCap * calcEPow * calcMPow;
					if(calcStats > calcBestStats)
					{
						bestWeapon.name = equip.name;
						bestWeapon.eCap = equip.eCap;
						bestWeapon.mCap = equip.mCap;
						bestWeapon.ePow = equip.ePow;
						bestWeapon.mPow = equip.mPow;
					}
				}
			});
		});
		var calcBestECap = 1 + bestHead.eCap + bestChest.eCap + bestLegs.eCap + bestBoots.eCap + bestWeapon.eCap;
		var calcBestMCap = 1 + bestHead.mCap + bestChest.mCap + bestLegs.mCap + bestBoots.mCap + bestWeapon.mCap;
		var calcBestEPow = 1 + bestHead.ePow + bestChest.ePow + bestLegs.ePow + bestBoots.ePow + bestWeapon.ePow;
		var calcBestMPow = 1 + bestHead.mPow + bestChest.mPow + bestLegs.mPow + bestBoots.mPow + bestWeapon.mPow;
		var calcBestEStats = calcBestECap * calcBestEPow;
		var calcBestMStats = calcBestMCap * calcBestMPow;
		var calcBestStats = calcBestECap * calcBestMCap * calcBestEPow * calcBestMPow;
		document.getElementById("NGUset").innerHTML = bestHead.name + "<br>"
			+ bestChest.name + "<br>"
			+ bestLegs.name + "<br>"
			+ bestBoots.name + "<br>"
			+ bestWeapon.name + "<br>"
			+ "Energy NGU Mult: " + calcBestEStats + "x" + "<br>"
			+ "Magic NGU Mult: " + calcBestMStats + "x" + "<br>"
			+ "Total Mult: " + calcBestStats + "x";
	}
	
	document.getElementById("genNGUbutton").onclick = function(){
		generateNGUset();
	};
});