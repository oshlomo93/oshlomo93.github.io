$(document).ready(function () {
	document.getElementById("num_of_messages").innerHTML = "[0]";
	alert("hello");
})

function welcome() {
	document.getElementById("main").style = "display: inline-block"
	document.getElementById("login").style = "display: inline-block"
	document.getElementById("welcome").style = "display: inline-block"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
}

function checkValidation() {
	// todo replace this code
	// this function need to check the login information
	alert("Welcome Back!");
	
	showActions();
}

function showActions() {
	// todo replace this code
	// this function should call to the right function decided by the roles of the current user
	owner_menu();
	referee_menu();
	agent_menu();
	document.getElementById("container").style.backgroundImage = "url(https://img.wallpapersafari.com/desktop/1920/1080/59/61/wScxR0.jpg)"
	document.getElementById("header").style = "display: inline-block"
	document.getElementById("main").style = "display: inline-block"
	document.getElementById("login").style = "display: none"
	document.getElementById("welcome").style = "display: none"
	document.getElementById("actions_title").style = "display: inline-block"
	document.getElementById("actions").style = "display: inline-block"
	document.getElementById("new_team").style = "display: none"
	document.getElementById("new_team_title").style = "display: none"
	document.getElementById("new_team_background").style = "display: none"
	document.getElementById("league_policy").style = "display: none"
	document.getElementById("league_ranking_policy").style = "display: none"
	document.getElementById("league_game_setting_policy").style = "display: none"
	document.getElementById("league_policy_title").style = "display: none"
	document.getElementById("league_policy_background").style = "display: none"
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("manage_game_background").style = "display: none"
	document.getElementById("write_game_report_title").style = "display: none"
	document.getElementById("write_game_report").style = "display: none"
	document.getElementById("new_game_event_title").style = "display: none"
	document.getElementById("new_game_event").style = "display: none"
	document.getElementById("edit_game_event_title").style = "display: none"
	document.getElementById("edit_game_event").style = "display: none"
	document.getElementById("subscription").style = "display: none"
	document.getElementById("subscription_title").style = "display: none"
	document.getElementById("subscription_background").style = "display: none"
}

function owner_menu() {
	document.getElementById("new_team_col").style = "display: inline-block"
}

function referee_menu() {
	document.getElementById("manage_game_col").style = "display: inline-block"
}

function agent_menu() {
	document.getElementById("league_policy_col").style = "display: inline-block"
}




function backToMenu() {
	showActions();
}

function createNewTeam() {
	document.getElementById("container").style.backgroundImage = "url(https://wallpapertag.com/wallpaper/full/5/a/a/651747-widescreen-chelsea-football-club-wallpapers-1920x1080.jpg)"
	document.getElementById("new_team_background").style = "display: inline-block"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("new_team").style = "display: inline-block"
	document.getElementById("new_team_title").style = "display: inline-block"
	
}

function teamCreated() {
	alert("The Team Created Successfully!");
	showActions();
}

function chooseLeaguePolicy() {
	document.getElementById("container").style.backgroundImage = "url(https://cdn.hipwallpaper.com/i/69/10/n4uc9l.jpg)"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("league_policy").style = "display: inline-block"
	document.getElementById("league_policy_title").style = "display: inline-block"
	document.getElementById("league_policy_background").style = "display: inline-block"
}

function chooseRankingPolicy() {
	document.getElementById("league_ranking_policy").style = "display: inline-block"
	document.getElementById("league_policy").style = "display: none"
}

function chooseGameSettingPolicy() {
	document.getElementById("league_game_setting_policy").style = "display: inline-block"
	document.getElementById("league_policy").style = "display: none"
}

function updateRankingPolicy() {
	alert("The Laegue Policy Updated Successfully!");
	showActions();
}

function updateGameSettingPolicy() {
	alert("The Laegue Policy Updated Successfully!");
	showActions();
}

function manageGame() {
	document.getElementById("container").style.backgroundImage = "url(https://images.daznservices.com/di/library/GOAL/c1/46/damir-skomina-2018-19-getty_l4nkeq9nw7vy1lk0ma4pqtjgr.jpg?t=-639685166&quality=60&w=1600)"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("manage_game").style = "display: inline-block"
	document.getElementById("manage_game_title").style = "display: inline-block"
	document.getElementById("manage_game_background").style = "display: inline-block"
}

function writeGameReport() {
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

function editGameEvent() {
	document.getElementById("manage_game").style = "display: none"
	document.getElementById("manage_game_title").style = "display: none"
	document.getElementById("edit_game_event_title").style = "display: inline-block"
	document.getElementById("edit_game_event").style = "display: inline-block"
}

function eventEdited() {
	alert("The Event Editted Successfully!");
	showActions();
}

function subscription() {
	document.getElementById("container").style.backgroundImage = "url(https://images.daznservices.com/di/library/GOAL/7c/d1/cristiano-ronaldo-real-madrid-juventus-uefa-champions-league_18580w5nkl89y1tztc55jxqh7g.jpg?t=-1930245854&quality=100)"
	document.getElementById("actions_title").style = "display: none"
	document.getElementById("actions").style = "display: none"
	document.getElementById("subscription_background").style = "display: inline-block"
	document.getElementById("subscription_title").style = "display: inline-block"
	document.getElementById("subscription").style = "display: inline-block"
}

function inbox() {
	document.getElementById("num_of_messages").innerHTML = "[0]";
	alert("you dont have any new messages");
}

function logout() {
	let ans = confirm("Are You Sure You Want To Leave?");
	if (ans) {
		welcome();
	}
}

