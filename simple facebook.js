var database = [
			{
				username: "will",
				password: "123"
			},
			{
				username: "safwan",
				password: "111"
			},
			{
				username: "sadman",
				password: "321"
			},
];

var newsfeed =[
			{
				username:"iraz",
				timeline:"i love coding"

			},
			{
				username:"smith",
				timeline:"life is boring"

			},
			{
				username:"Ansary",
				timeline:"i am hungry"
			}
];


function isuserValid(username, password){
	for(var i = 0; i<database.length; i++) {
		if(database[i].username=== username && 
			database[i].password=== password){
			return true;
		}
	}
	return false;
}
function signIn (username, password){
	if(isuserValid(username, password)){
		console.log(newsfeed);
	} else{
		alert("sorry! wrong password");
	}
}
var usernamePrompt = prompt("what is Your username?");
var passwordPrompt = prompt("What is your password?");

signIn(usernamePrompt, passwordPrompt);