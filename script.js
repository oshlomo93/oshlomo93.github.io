$(document).ready(function () {

})

function welcome() {
	document.getElementById("main").style = "display: inline-block"
	document.getElementById("login").style = "display: inline-block"
	document.getElementById("welcome").style = "display: inline-block"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("new_team").style = "display: none"
	document.getElementById("new_team_title").style = "display: none"
	document.getElementById("league_policy").style = "display: none"
	document.getElementById("league_policy_title").style = "display: none"
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("new_team_background").style = "display: none"
	document.getElementById("manage_game_background").style = "display: none"
}
function checkValidation() {
	alert("Welcome Back!");
	showActions();
}

function showActions() {
	document.getElementById("main").style = "display: inline-block"
	document.getElementById("login").style = "display: none"
	document.getElementById("welcome").style = "display: none"
	document.getElementById("actions_title").style = "display: inline-block"
	document.getElementById("actions").style = "display: inline-block"
	document.getElementById("new_team").style = "display: none"
	document.getElementById("new_team_title").style = "display: none"
	document.getElementById("league_policy").style = "display: none"
	document.getElementById("league_policy_title").style = "display: none"
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("new_team_background").style = "display: none"
	document.getElementById("manage_game_background").style = "display: none"
	document.getElementById("league_policy_background").style = "display: none"
	document.getElementById("write_game_report_title").style = "display: none"
	document.getElementById("write_game_report").style = "display: none"
	document.getElementById("new_game_event_title").style = "display: none"
	document.getElementById("new_game_event").style = "display: none"
}

function backToMenu() {
	showActions();
}

function createNewTeam() {
	document.getElementById("new_team_background").style = "display: inline-block"
	document.getElementById("main").style = "display: none"
	document.getElementById("login").style = "display: none"
	document.getElementById("welcome").style = "display: none"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("new_team").style = "display: inline-block"
	document.getElementById("new_team_title").style = "display: inline-block"
	document.getElementById("league_policy").style = "display: none"
	document.getElementById("league_policy_title").style = "display: none"
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("manage_game_background").style = "display: none"
	
}

function teamCreated() {
	alert("The Team Created Successfully!");
	showActions();
}

function chooseLeaguePolicy() {
	document.getElementById("login").style = "display: none"
	document.getElementById("welcome").style = "display: none"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("new_team").style = "display: none"
	document.getElementById("new_team_title").style = "display: none"
	document.getElementById("league_policy").style = "display: inline-block"
	document.getElementById("league_policy_title").style = "display: inline-block"
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("new_team_background").style = "display: none"
	document.getElementById("manage_game_background").style = "display: none"
	document.getElementById("manage_game_background").style = "display: none"
	document.getElementById("league_policy_background").style = "display: inline-block"
}

function updatePolicy() {
	alert("The Laegue Policy Updated Successfully!");
	showActions();
}

function manageGame() {
	document.getElementById("login").style = "display: none"
	document.getElementById("welcome").style = "display: none"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("new_team").style = "display: none"
	document.getElementById("new_team_title").style = "display: none"
	document.getElementById("league_policy").style = "display: none"
	document.getElementById("league_policy_title").style = "display: none"
	document.getElementById("new_team_background").style = "display: none"
	document.getElementById("manage_game").style = "display: inline-block"
	document.getElementById("manage_game_title").style = "display: inline-block"
	document.getElementById("manage_game_background").style = "display: inline-block"
}

function writeGameReport() {
	document.getElementById("login").style = "display: none"
	document.getElementById("welcome").style = "display: none"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("new_team").style = "display: none"
	document.getElementById("new_team_title").style = "display: none"
	document.getElementById("league_policy").style = "display: none"
	document.getElementById("league_policy_title").style = "display: none"
	document.getElementById("new_team_background").style = "display: none"
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("manage_game_background").style = "display: inline-block"
	document.getElementById("write_game_report_title").style = "display: inline-block"
	document.getElementById("write_game_report").style = "display: inline-block"

}

function gameReported() {
	alert("The Game Reported Successfully!");
	showActions();
}

function createGameEvent() {
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("new_game_event_title").style = "display: inline-block"
	document.getElementById("new_game_event").style = "display: inline-block"
}

function eventCreated() {
	alert("The Event Created Successfully!");
	showActions();
}

function logout() {
	let ans = confirm("Are You Sure You Want To Leave?");
	if (ans) {
		welcome();
	}
}

