/*
 * Credits: EarthSalamander #42
 */

function IsDonator(ID) {
	var i = 0
	if (CustomNetTables.GetTableValue("game_options", "donators") == undefined) {
		return false;
	}

	var local_steamid = Game.GetPlayerInfo(ID).player_steamid;
	var donators = CustomNetTables.GetTableValue("game_options", "donators");

	for (var key in donators) {
		var steamid = donators[key];
		if (local_steamid === steamid)
			return true;
	}

	return false;
}

function IsDeveloper(ID) {
	var i = 0
	if (CustomNetTables.GetTableValue("game_options", "developers") == undefined) {
		return false;
	}

	var local_steamid = Game.GetPlayerInfo(ID).player_steamid;
	var developers = CustomNetTables.GetTableValue("game_options", "developers");
		
	for (var key in developers) {
		var steamid = developers[key];
		if (local_steamid === steamid)
			return true;
	}

	return false;
}

var toggle = false;
function ToggleHUD() {
	var HUD = $.GetContextPanel().GetParent().GetParent().GetParent().GetParent();
	$.Msg("HUD visible: " + toggle)

	if (toggle == false) {
		HUD.style.visibility = "collapse";
		toggle = true;
	} else {
		HUD.style.visibility = "visible";
		toggle = false;
	}
}

GameEvents.Subscribe("chip_toggle_hud", ToggleHUD)
