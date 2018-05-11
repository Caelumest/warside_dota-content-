"use strict";

var startgold = 600;
var tickmultiplier = 1;

function OnGoldButtonPressed() {
	var iPlayerID = Players.GetLocalPlayer();
	if (botsOn){
		$.Msg(iPlayerID,'Player ID');
		$.Msg('Bots OFF');
		GameEvents.SendCustomGameEventToServer( "player_toggle_gold", { botsOn: 0 })

		botsOn = false
	}
	else{
		$.Msg('Bots ON');
		GameEvents.SendCustomGameEventToServer( "player_toggle_bots", { botsOn: 1 })
		$("#Label").text = "Bots:";
		$("#LabelGreen").text = "                    ON";
		$("#LabelRed").text = "";
		botsOn = true
	}
}
