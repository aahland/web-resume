<script>
	import '../../../src/app.css';
</script>

<div id="wrapper">
	<div id="header">
		<h1>Portfolio</h1>
	</div>
	<div id="portfolioContent">
		<div id="vadFanSka">
			<div class="textAboutProject">
				<h2>Vadfanskajagköpa.se</h2>
				<p class="description">
					Vadfanskajagköpa.se is a project built by me and another intern at Coolstuff. The site is
					aiming to present random Coolstuff products with a short and fun description to drive
					traffic to Coolstuff's webshop. We have written the project with the latest Sveltekit
					together with typescript. The project is hosted on the edge via cloudflare and is
					serverless using cloudflare workers for responding to requests. The project is hooked up
					to a headless CMS and is using webhooks with BasicAuth to get the latest data.
				</p>
				<a href="https://vadfanskajagkopa.se/">www.vadfanskajagkopa.se</a>
			</div>
			<div class="imageWrapper">
				<img
					id="vadfanMockup"
					src="images/vadfanskaMockup.png"
					alt="mobile and desktop view of application"
				/>
			</div>
		</div>
		<div id="lyricalGenius">
			<div class="textAboutProject">
				<h2>Lyrical Genius</h2>
				<p class="description">
					Lyrical Genius is a realtime multiplayer game played in the browser. The goal of the game
					is to match a snippet of a song lyric to the correct song. In other words, a music quiz
					where song lyrics are the essential part of the question. The project was written with
					SvelteKit and uses socket.io for the multiplayer functionality. This project was my final
					project in school but has been updated since. Quite recently the API that I used for
					getting the song lyrics was taken down and therefor I am now using my own API for song
					lyrics. Project is hosted on Heroku.
				</p>
				<a href="https://quiz-lyrical-genius.herokuapp.com"
					>https://quiz-lyrical-genius.herokuapp.com/</a
				>
				<a href="https://github.com/aahland/lyrical-genius"
					>https://github.com/aahland/lyrical-genius</a
				>
			</div>
			<div class="imageWrapper">
				<img
					id="lyricalMockup"
					src="images/lyricalgeniusquizMockup.png"
					alt="mobile and desktop view of application"
				/>
			</div>
		</div>
	</div>
</div>
<footer>
	<div id="linksContainer">
		<button><a href="https://aah-lander.com/">Home</a></button>
		<button><a href="https://aah-lander.com/resume">Resume</a></button>
		<button><a href="https://aah-lander.com/about">About</a></button>
		<button><a href="https://github.com/aahland">Github</a></button>
	</div>
</footer>

<style>
	#wrapper {
		background-color: rgb(87, 162, 162);
	}

	#header {
		background-color: rgb(87, 162, 162);
		color: white;
		font-family: sans-serif;
		height: 100px;
		margin: 0px;
		z-index: 5;
		padding-top: 20px;
		padding-left: 5px;
	}

	.description {
		text-align: left;
		font-size: small;
		font-weight: 200;
	}

	.textAboutProject {
		display: flex;
		flex-direction: column;
		margin-top: -30px;
		max-width: 80%;
		font-family: Montserrat, sans-serif;
	}

	img {
		height: 200px;
		margin-bottom: 15px;
	}

	#vadfanMockup {
		margin-top: 35px;
	}

	#lyricalMockup {
		margin-top: 30px;
	}

	.imageWrapper {
		align-content: center;
	}

	#portfolioContent {
		background: white;
		z-index: 10;
		border-top-right-radius: 100px;
		display: flex;
		flex-direction: column;
	}

	#vadFanSka {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		text-align: center;
	}

	#lyricalGenius {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		text-align: center;
	}

	h2 {
		margin: 0px;
		font-weight: 400;
		font-size: large;
		color: rgb(87, 162, 162);
	}

	h1 {
		font-size: 50px;
		margin-bottom: 0px;
		margin-top: 60px;
		letter-spacing: 5px;
		font-weight: bold;
	}

	a {
		margin-bottom: 5px;
		font-size: x-small;
		text-align: left;
		color: rgb(80, 80, 80);
	}

	footer {
		background: rgb(87, 162, 162);
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 30px;
	}

	#linksContainer {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	button {
		height: fit-content;
		background-color: white;
		border: none;
		border-radius: 5px;
	}

	button:hover {
		height: 30px;
	}

	button a {
		text-decoration: none;
		color: rgb(87, 162, 162);
		font-weight: bold;
		font-family: Montserrat, sans-serif;
		font-size: medium;
	}

	@media screen and (min-width: 350px) {
		h1 {
			font-size: 60px;
			margin-top: 55px;
		}
	}

	@media screen and (min-width: 450px) {
		h1 {
			font-size: 80px;
			margin-top: 40px;
		}
	}

	@media screen and (min-width: 625px) {
		#vadFanSka {
			flex-direction: row;
			justify-content: space-around;
			width: 100%;
		}

		a {
			font-size: 12px;
		}

		#lyricalGenius {
			margin-top: 50px;
			flex-direction: row;
			justify-content: space-around;
			width: 100%;
		}

		img {
			height: 250px;
		}

		.textAboutProject {
			text-align: left;
			margin-left: 20px;
		}

		#portfolioContent {
			padding-top: 50px;
			padding-left: 10px;
			align-items: center;
		}

		#header {
			padding-left: 20px;
			height: 150px;
		}

		h1 {
			font-size: 120px;
			margin-top: 55px;
			letter-spacing: 5px;
			margin-right: 0px;
		}

		button a {
			font-size: medium;
		}
	}

	@media screen and (min-width: 900px) {
		h1 {
			font-size: 150px;
			margin-top: 30px;
		}

		#vadFanSka {
			align-items: center;
			max-width: 90%;
		}

		#lyricalGenius {
			align-items: center;
			max-width: 90%;
		}

		img {
			height: 300px;
		}

		.textAboutProject {
			max-width: 600px;
		}

		.description {
			font-size: medium;
		}

		h2 {
			font-size: x-large;
			font-weight: 400;
		}

		#portfolioContent {
			display: flex;
			flex-direction: column;
			align-content: center;
			justify-content: space-around;
			margin-right: 0px;
		}

		a {
			font-size: 15px;
		}

		button a {
			font-size: large;
		}
	}

	@media screen and (min-width: 1440px) {
		#vadFanSka {
			max-width: 1200px;
			justify-content: space-between;
		}

		#lyricalGenius {
			max-width: 1200px;
			justify-content: space-between;
		}

		.textAboutProject {
			max-width: 700px;
		}

		.description {
			font-size: larger;
		}

		img {
			height: 380px;
		}

		h2 {
			font-weight: 600;
		}

		h1 {
			font-size: 200px;
			margin-top: -10px;
		}

		button {
			height: fit-content;
		}

		button a {
			font-size: larger;
		}
	}
</style>
