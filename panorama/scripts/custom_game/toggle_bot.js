"use strict";

var botsOn = false;

function OnButtonPressed() {
	var iPlayerID = Players.GetLocalPlayer();
	if (options == true){
		if (botsOn){
			$.Msg('Bots OFF');
			GameEvents.SendCustomGameEventToServer( "player_toggle_bots", { botsOn: 0 })
			$("#Label").text = "Bots:";
			$("#LabelGreen").text = "";
			$("#LabelRed").text = "                     OFF";
			botsOn = false
			var goldHud = $('#GoldOptionsPanel')
			AnimatePanel(goldHud, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
			var botsHud = $('#BotOptionsPanel')
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			var button = $('#ConfirmOptionsBtn')
			AnimatePanel(button, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
			var bgbutton = $('#HideOn')
			AnimatePanel(bgbutton, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
		}
		else{
			$.Msg('Bots ON');
			GameEvents.SendCustomGameEventToServer( "player_toggle_bots", { botsOn: 1 })
			$("#Label").text = "Bots:";
			$("#LabelGreen").text = "                    ON";
			$("#LabelRed").text = "";
			botsOn = true
			var goldHud = $('#GoldOptionsPanel')
			AnimatePanel(goldHud, { "transform": "translateY(140px);", "opacity": "1;" }, 0.4, "ease-in");
			var botsHud = $('#BotOptionsPanel')
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in"); 
			var button = $('#ConfirmOptionsBtn')
			AnimatePanel(button, { "transform": "translateY(140px);", "opacity": "1;" }, 0.4, "ease-in");
			var bgbutton = $('#HideOn')
			AnimatePanel(bgbutton, { "transform": "translateY(140px);", "opacity": "1;" }, 0.4, "ease-in");
		}
	}
}

function InitializeUI() {
	var is_host = CheckForHostPrivileges();
	if (is_host === undefined) {
		$.Schedule(1, InitializeUI);
		return;
	} else if (is_host) {

		// Make the game options panel visible
		var botsOnOff = $('#botsOnOff')
		botsOnOff.style.visibility = 'visible';
		var game_options_panel = $('#BotOptionsPanel')
		game_options_panel.style.visibility = 'visible';
	}
}

// Checks if the local player has local privileges
function CheckForHostPrivileges() {
	var playerInfo = Game.GetLocalPlayerInfo();
	if ( !playerInfo )
		return;
		
	$.GetContextPanel().SetHasClass( "player_has_host_privileges", playerInfo.player_has_host_privileges );
}

function SetMainOption() {

	$('#DifficultyOptionsDropdown').SetSelected('BotsOption5');
	$('#StartingOptionsDropdown').SetSelected('GoldOption1');
	$('#MultiplierOptionsDropdown').SetSelected('MultiplierOption1');
	$('#ExpOptionsDropdown').SetSelected('ExpOption1');
}

function SetGameOptions()
{
	if (options == true){
		
		$('#DifficultyOptionsDropdown').GetSelected().checked
		var selected = $('#DifficultyOptionsDropdown').GetSelected().id
		GameEvents.SendCustomGameEventToServer( "set_bots_difficulty", { "is_host": CheckForHostPrivileges(), "bots_difficulty": selected });
		$('#StartingOptionsDropdown').GetSelected().checked
		var startingGold = $('#StartingOptionsDropdown').GetSelected().id
		GameEvents.SendCustomGameEventToServer( "set_starting_gold", { "is_host": CheckForHostPrivileges(), "startingGold": startingGold });
		$('#MultiplierOptionsDropdown').GetSelected().checked
		var multiplierGold = $('#MultiplierOptionsDropdown').GetSelected().id
		GameEvents.SendCustomGameEventToServer( "set_multiplier_gold", { "is_host": CheckForHostPrivileges(), "multiplierGold": multiplierGold });
		$('#ExpOptionsDropdown').GetSelected().checked
		var multiplierExp = $('#ExpOptionsDropdown').GetSelected().id
		GameEvents.SendCustomGameEventToServer( "set_multiplier_xp", { "is_host": CheckForHostPrivileges(), "multiplierExp": multiplierExp });

		var toggleButtonHud = $('#BotsOnOff')
		AnimatePanel(toggleButtonHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
		var goldHud = $('#GoldOptionsPanel')
		var optionsHud = $('#ToggleOptions')
		var botsHud = $('#BotOptionsPanel')
		var button = $('#ConfirmOptionsBtn')
		var bgbutton = $('#HideOn')
		if (botsOn == true)
		{
			AnimatePanel(button, { "transform": "translateY(140px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(goldHud, { "transform": "translateY(140px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(bgbutton, { "transform": "translateY(140px);", "opacity": "0;" }, 0.4, "ease-in");
			//AnimatePanel(optionsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
		}
		else
		{
			AnimatePanel(button, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(goldHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(bgbutton, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			//AnimatePanel(optionsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
		}
		Game.SetRemainingSetupTime( 1 ); 
	}
}

function OnLockAndStartPressed()
{
	// Set the remaining time before the game starts to four seconds
	Game.SetRemainingSetupTime( 4 ); 
}