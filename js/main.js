function Main () {
	this.execute = function (){ 
		//this is one comment
		//your code

		//excercise 1
		let album1 = {
			title: "queen",
			artist: "nicki minaj",
			thelabelcompanyname: "cash money records",
			thereleaseyear : "2018",
			songs: ["ganga burns","majesty", "hard white", "chun li, maimi, llc, come see about me, good form"],
		};

		//excercise 2
		let album2 = {
			title: "pink friday",
			artist: "nicki minaj",
			thelabelcompanyname: "cash money records",
			thereleaseyear : "2010",
			songs: ["super base","here i am", "dear old nicki", "save me", "moment for life", , "check it out"],
		};

		// excercise 3
		function showinfo (album2){
			return (album2.title + album2.songs);
		}

		showinfo(album2);


	}
}
new Main().execute();