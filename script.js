$(document).ready(function () {
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
})

function welcome() {
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
}
function checkValidation() {
	//TODO
	alert("Welcome Back!");
	showActions();
}

function showActions() {
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
}

function backToMenu() {
	showActions();
}

function createNewTeam() {
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
}

function teamCreated() {
	//TODO
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
}

function updatePolicy() {
	//TODO
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
	document.getElementById("manage_game").style = "display: inline-block"
	document.getElementById("manage_game_title").style = "display: inline-block"
}

function logout() {
	let ans = confirm("Are You Sure You Want To Leave?");
	if (ans) {
		welcome();
	}
}