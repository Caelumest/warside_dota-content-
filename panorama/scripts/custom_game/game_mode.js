"use strict";

// Initializes the UI for the player with host privileges
function InitializeUI() {
	var is_host = CheckForHostPrivileges();
	if (is_host === undefined) {
		$.Schedule(1, InitializeUI);
		return;
	} else if (is_host) {

		// Make the game options panel visible
		var botsOnOff = $('#botsOnOff')
		botsOnOff.style.visibility = 'visible';
		var game_options_panel = $('#GameOptionsPanel')
		game_options_panel.style.visibility = 'visible';
}

// Checks if the local player has local privileges
function CheckForHostPrivileges() {
	var player_info = Game.GetLocalPlayerInfo();
	if ( !player_info ) {
		return undefined;
	} else {
		return player_info.player_has_host_privileges;
	}
}

function SetMainOption() {

	$.Msg('TO FUNCIONANDO TROXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
	$('#ExpOptionsDropdown').SetSelected('BotsOption5');
}

function SetGameOptions()
{
	GameEvents.SendCustomGameEventToServer( "set_bots_difficulty", {
		"is_host": CheckForHostPrivileges(),
		"modes":{
			"bots_difficulty":$('#ExpOptionsDropdown').GetSelected().id
		}
	});
}

