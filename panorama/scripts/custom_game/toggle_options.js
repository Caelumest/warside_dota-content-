"use strict";
var options = false;
function OnOptionsPressed() {
	var iPlayerID = Players.GetLocalPlayer();
	if (options){
		options = false;
		var toggleButtonHud = $('#BotsOnOff')
		AnimatePanel(toggleButtonHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
		var goldHud = $('#GoldOptionsPanel')
		var botsHud = $('#BotOptionsPanel')
		var button = $('#ConfirmOptionsBtn')
		var bgbutton = $('#HideOn')
		if (botsOn == true)
		{
			AnimatePanel(button, { "transform": "translateY(140px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(goldHud, { "transform": "translateY(140px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(bgbutton, { "transform": "translateY(140px);", "opacity": "0;" }, 0.4, "ease-in");
		}
		else
		{
			AnimatePanel(button, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(goldHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(bgbutton, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
		}
		
	}
	else{
		options = true;
		var toggleButtonHud = $('#BotsOnOff')
		AnimatePanel(toggleButtonHud, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
		var goldHud = $('#GoldOptionsPanel')
		var botsHud = $('#BotOptionsPanel')
		var button = $('#ConfirmOptionsBtn')
		var bgbutton = $('#HideOn')
		if (botsOn == true)
		{
			AnimatePanel(button, { "transform": "translateY(140px);", "opacity": "1;" }, 0.4, "ease-in");
			AnimatePanel(goldHud, { "transform": "translateY(140px);", "opacity": "1;" }, 0.4, "ease-in");
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
			AnimatePanel(bgbutton, { "transform": "translateY(140px);", "opacity": "1;" }, 0.4, "ease-in");
		}
		else
		{
			AnimatePanel(button, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
			AnimatePanel(goldHud, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
			AnimatePanel(botsHud, { "transform": "translateY(0px);", "opacity": "0;" }, 0.4, "ease-in");
			AnimatePanel(bgbutton, { "transform": "translateY(0px);", "opacity": "1;" }, 0.4, "ease-in");
		}
	}
}