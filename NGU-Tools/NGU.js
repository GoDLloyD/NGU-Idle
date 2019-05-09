document.addEventListener("DOMContentLoaded", function() {
	'use strict';
	
	function arr(v) { return Array.prototype.slice.call(v); }
	function appendTo(a) { return function(b) { return a.appendChild(b); }; }
	function el(tag, contents) { var el = document.createElement(tag); if(contents) contents.map(appendTo(el)); return el; }
	function txt() { return document.createTextNode(arr(arguments).join()); }
	function div() { return el("div", arr(arguments)); }
	function img() { return el("img", arr(arguments)); }
	function span() { return el("span", arr(arguments)); }
	function label() { return el("label", arr(arguments)); }
	function tr() { return el("TR", arr(arguments)); }
	function td() { return el("TD", arr(arguments)); }
	function th() { return el("TH", arr(arguments)); }
	
	function createEquipItem(name, type) {
		var equipItem = new EquipItem(type);
		equipItem.name = name;
		return equipItem;
	}
	
	function EquipItem(type) {
		this.name = "";
		this.type = type;
		this.eCap = 0;
		this.mCap = 0;
		this.ePow = 0;
		this.mPow = 0;
		this.ngu = 0;
	}
	
	/*function getCombinations(inputs, steps) {
		var combinations = [];
		for(var index = 0; index < inputs.length; index++) {
			var array = [];
			createCombinations(combinations, array, 0, inputs, index, steps)
		}
		return combinations;
	}
	
	function createCombinations(combinations, array, arrayIndex, inputs, inputsIndex, steps) {
		if(array.includes(inputs[inputsIndex])) {
			return;
		}
		array[arrayIndex] = inputs[inputsIndex];
		if(arrayIndex < (steps-1)) {
			for(var index = 0; index < inputs.length; index++) {
				createCombinations(combinations, array, arrayIndex+1, inputs, index, steps);
			}
		} else {
			combinations.push(array.slice(0));
		}
	}*/
	
	function getCombinations(inputs, steps) {
        return createCombinations([], [], 0, inputs, 0, steps);
    }
    
    function createCombinations(combinations, array, arrayIndex, inputs, inputsIndex, steps) {
        if(arrayIndex < steps) {
            for(var index = inputsIndex; index < inputs.length; index++) {
                array[arrayIndex] = inputs[index];
                createCombinations(combinations, array, arrayIndex+1, inputs, index+1, steps);
            }
        } else {
            combinations.push(array.slice());
        }
        return combinations;
    }
	
	function generateNGUset() {
		var eCapBase = document.getElementById("eCapBase").value/100;
		var mCapBase = document.getElementById("mCapBase").value/100;
		var ePowBase = document.getElementById("ePowBase").value/100;
		var mPowBase = document.getElementById("mPowBase").value/100;
		var nguBase = document.getElementById("nguBase").value/100;
		
		var bestHead = new EquipItem("Head");
		var bestChest = new EquipItem("Chest");
		var bestLegs = new EquipItem("Legs");
		var bestBoots = new EquipItem("Boots");
		var bestWeapon = new EquipItem("Weapon");
		var bestAccessories = [];
		var accSlots = document.getElementById("slotsInput").value;
		
		var generationText = document.getElementById("genNGUinput").value;
		var generationTextParts = generationText.split(";");
		var equipParts = [];
		var equipHeads = [createEquipItem("empty", "Head")];
		var equipChests = [createEquipItem("empty", "Chest")];
		var equipLegs = [createEquipItem("empty", "Legs")];
		var equipBoots = [createEquipItem("empty", "Boots")];
		var equipWeapons = [createEquipItem("empty", "Weapon")];
		var equipAccessories = [];
		
		generationTextParts.map(function(generationTextPart) {
			var generationTextStats = generationTextPart.split(",");
			var equipPart = new EquipItem(generationTextStats[1]);
			equipPart.name = generationTextStats[0];
			equipPart.eCap = (generationTextStats[2]/100);
			equipPart.mCap = (generationTextStats[3]/100);
			equipPart.ePow = (generationTextStats[4]/100);
			equipPart.mPow = (generationTextStats[5]/100);
			equipPart.ngu = (generationTextStats[6]/100);
			if(equipPart.type == "Head") {
				if (equipPart.eCap > 0 || equipPart.mCap > 0 || equipPart.ePow > 0 || equipPart.mPow > 0 || equipPart.ngu > 0) {
					equipHeads.push(equipPart);
				}
			} else if(equipPart.type == "Chest") {
				if (equipPart.eCap > 0 || equipPart.mCap > 0 || equipPart.ePow > 0 || equipPart.mPow > 0 || equipPart.ngu > 0) {
					equipChests.push(equipPart);
				}
			} else if(equipPart.type == "Legs") {
				if (equipPart.eCap > 0 || equipPart.mCap > 0 || equipPart.ePow > 0 || equipPart.mPow > 0 || equipPart.ngu > 0) {
					equipLegs.push(equipPart);
				}
			} else if(equipPart.type == "Boots") {
				if (equipPart.eCap > 0 || equipPart.mCap > 0 || equipPart.ePow > 0 || equipPart.mPow > 0 || equipPart.ngu > 0) {
					equipBoots.push(equipPart);
				}
			} else if(equipPart.type == "Weapon") {
				if (equipPart.eCap > 0 || equipPart.mCap > 0 || equipPart.ePow > 0 || equipPart.mPow > 0 || equipPart.ngu > 0) {
					equipWeapons.push(equipPart);
				}
			} else if(equipPart.type == "Acc") {
				if (equipPart.eCap > 0 || equipPart.mCap > 0 || equipPart.ePow > 0 || equipPart.mPow > 0 || equipPart.ngu > 0) {
					equipAccessories.push(equipPart);
				}
			}
		});
		
		if(accSlots >= equipAccessories.length) {
			var combinations = [];
			combinations.push(equipAccessories);
		} else if(accSlots < 1) {
			var combinations = [];
			var emptyArray = [];
			combinations.push(emptyArray);
		} else {
			var combinations = getCombinations(equipAccessories, accSlots);
		}
		equipHeads.map(function(currentHead) {
			equipChests.map(function(currentChest) {
				equipLegs.map(function(currentLegs) {
					equipBoots.map(function(currentBoots) {
						equipWeapons.map(function(currentWeapon) {
							combinations.map(function(currentCombination) {
								var calcECap = 1 + currentHead.eCap + currentChest.eCap + currentLegs.eCap + currentBoots.eCap + currentWeapon.eCap + eCapBase;
								var calcMCap = 1 + currentHead.mCap + currentChest.mCap + currentLegs.mCap + currentBoots.mCap + currentWeapon.mCap + mCapBase;
								var calcEPow = 1 + currentHead.ePow + currentChest.ePow + currentLegs.ePow + currentBoots.ePow + currentWeapon.ePow + ePowBase;
								var calcMPow = 1 + currentHead.mPow + currentChest.mPow + currentLegs.mPow + currentBoots.mPow + currentWeapon.mPow + mPowBase;
								var calcNgu = 1 + currentHead.ngu + currentChest.ngu + currentLegs.ngu + currentBoots.ngu + currentWeapon.ngu + nguBase;
								for(var index = 0; index < currentCombination.length; index++) {
									calcECap += currentCombination[index].eCap
									calcMCap += currentCombination[index].mCap
									calcEPow += currentCombination[index].ePow
									calcMPow += currentCombination[index].mPow
									calcNgu += currentCombination[index].ngu
								}
								var calcEStats = calcECap * calcEPow * calcNgu;
								var calcMStats = calcMCap * calcMPow * calcNgu;
								var calcStats = calcEStats * calcMStats;
								
								var calcBestECap = 1 + bestHead.eCap + bestChest.eCap + bestLegs.eCap + bestBoots.eCap + bestWeapon.eCap + eCapBase;
								var calcBestMCap = 1 + bestHead.mCap + bestChest.mCap + bestLegs.mCap + bestBoots.mCap + bestWeapon.mCap + mCapBase;
								var calcBestEPow = 1 + bestHead.ePow + bestChest.ePow + bestLegs.ePow + bestBoots.ePow + bestWeapon.ePow + ePowBase;
								var calcBestMPow = 1 + bestHead.mPow + bestChest.mPow + bestLegs.mPow + bestBoots.mPow + bestWeapon.mPow + mPowBase;
								var calcBestNgu = 1 + bestHead.ngu + bestChest.ngu + bestLegs.ngu + bestBoots.ngu + bestWeapon.ngu + nguBase;
								for(var index = 0; index < bestAccessories.length; index++) {
									calcBestECap += bestAccessories[index].eCap
									calcBestMCap += bestAccessories[index].mCap
									calcBestEPow += bestAccessories[index].ePow
									calcBestMPow += bestAccessories[index].mPow
									calcBestNgu += bestAccessories[index].ngu
								}
								var calcBestEStats = calcBestECap * calcBestEPow * calcBestNgu;
								var calcBestMStats = calcBestMCap * calcBestMPow * calcBestNgu;
								var calcBestStats = calcBestEStats * calcBestMStats;
								
								if(calcStats > calcBestStats) {
									bestHead = currentHead;
									bestChest = currentChest;
									bestLegs = currentLegs;
									bestBoots = currentBoots;
									bestWeapon = currentWeapon;
									bestAccessories = currentCombination;
								}
							});
						});
					});
				});
			});
		});
		
		var calcBestECap = 1 + bestHead.eCap + bestChest.eCap + bestLegs.eCap + bestBoots.eCap + bestWeapon.eCap + eCapBase;
		var calcBestMCap = 1 + bestHead.mCap + bestChest.mCap + bestLegs.mCap + bestBoots.mCap + bestWeapon.mCap + mCapBase;
		var calcBestEPow = 1 + bestHead.ePow + bestChest.ePow + bestLegs.ePow + bestBoots.ePow + bestWeapon.ePow + ePowBase;
		var calcBestMPow = 1 + bestHead.mPow + bestChest.mPow + bestLegs.mPow + bestBoots.mPow + bestWeapon.mPow + mPowBase;
		var calcBestNgu = 1 + bestHead.ngu + bestChest.ngu + bestLegs.ngu + bestBoots.ngu + bestWeapon.ngu + nguBase;
		for(var index = 0; index < bestAccessories.length; index++) {
			calcBestECap += bestAccessories[index].eCap
			calcBestMCap += bestAccessories[index].mCap
			calcBestEPow += bestAccessories[index].ePow
			calcBestMPow += bestAccessories[index].mPow
			calcBestNgu += bestAccessories[index].ngu
		}
		var calcBestEStats = calcBestECap * calcBestEPow * calcBestNgu;
		var calcBestMStats = calcBestMCap * calcBestMPow * calcBestNgu;
		var calcBestStats = calcBestEStats * calcBestMStats;
		var nguSetDiv = document.getElementById("NGUset");
		nguSetDiv.innerHTML = bestHead.name + " " + bestHead.type + "<br>"
			+ bestChest.name + " " + bestChest.type + "<br>"
			+ bestLegs.name + " " + bestLegs.type + "<br>"
			+ bestBoots.name + " " + bestBoots.type + "<br>"
			+ bestWeapon.name + " " + bestWeapon.type + "<br>";
		for(var index = 0; index < bestAccessories.length; index++) {
			nguSetDiv.innerHTML += bestAccessories[index].name + " " + bestAccessories[index].type + "<br>";
		}
		nguSetDiv.innerHTML += "Energy NGU Mult: " + calcBestEStats.toExponential(3) + "x" + "<br>"
			+ "Magic NGU Mult: " + calcBestMStats.toExponential(3) + "x" + "<br>"
			+ "Total Mult: " + calcBestStats.toExponential(3) + "x";
	}
	
	function appendNguInput(inputString) {
		document.getElementById("genNGUinput").value += inputString;
	}
	
	function removeNguInput(inputString) {
		var nguInput = document.getElementById("genNGUinput").value;
		var inputSplit = nguInput.split(inputString);
		document.getElementById("genNGUinput").value = "";
		for(var index = 0; index < inputSplit.length; index++) {
			document.getElementById("genNGUinput").value += inputSplit[index];
		}
	}
	
	var itemListDiv = document.getElementById("items");
	itemList.map(function(item) {
		var itemImg = img();
		itemImg.src = item.img;
		itemImg.alt = item.name;
		itemImg.isActive = false;
		itemImg.onclick = function() {
			if(!itemImg.isActive) {
				appendNguInput(itemInputString);
				itemImg.className = "greyOut";
				itemImg.isActive = true;
			} else if(itemImg.isActive) {
				removeNguInput(itemInputString);
				itemImg.className = "";
				itemImg.isActive = false;
			}
		};
		var itemInputString = "\n" + item.name + "," + item.type + "," + item.eCap + "," + item.mCap + "," + item.ePow + "," + item.mPow + "," + item.ngu + ";";
		itemListDiv.appendChild(itemImg);
	});
	
	document.getElementById("genNGUbutton").onclick = function(){
		generateNGUset();
	};
});
