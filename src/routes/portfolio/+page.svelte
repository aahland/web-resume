<script>
</script>

<div id="wrapper">
	<div id="header">
		<h1>Portfolio</h1>
		<p>
			Welcome to my portfolio! Below I have listed a few projects that I have done in the year of
			2022
		</p>
	</div>
	<div id="portfolioContent">
		<div id="vadFanSka">
			<div class="textAboutProject">
				<h2>Vadfanskajagköpa.se</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dolores magni, eligendi
					autem corporis harum omnis quia explicabo laboriosam nemo, fugiat dolore maxime doloremque
					sequi optio architecto eum veniam tempore!
				</p>
				<a href="www.vadfanskajagkopa.se">www.vadfanskajagkopa.se</a>
				<a href="github.com">github-link-if-possible</a>
			</div>
			<div class="imageWrapper">
				<img src="images/vadfanskaMockup.png" alt="mobile and desktop view of application" />
			</div>
		</div>
		<div id="lyricalGenius">
			<div class="textAboutProject">
				<h2>Lyrical Genius</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dolores magni, eligendi
					autem corporis harum omnis quia explicabo laboriosam nemo, fugiat dolore maxime doloremque
					sequi optio architecto eum veniam tempore!
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
					src="images/lyricalgeniusquizMockup.png"
					alt="mobile and desktop view of application"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		src: local('Montserrat'),
			url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
	}

	#wrapper {
		background-color: rgb(87, 162, 162);
	}

	.description {
		font-weight: 200;
	}

	#header {
		background-color: rgb(87, 162, 162);
		color: white;
		font-family: sans-serif;
		height: 100px;
		margin: 0px;
		z-index: 5;
		padding-top: 20px;
		padding-left: 20px;
	}

	#header p {
		margin-top: 0px;
		font-size: x-small;
		width: 85%;
	}

	.textAboutProject {
		display: flex;
		flex-direction: column;
		margin-top: -30px;
		max-width: 80%;
		font-family: sans-serif;
	}

	img {
		height: 250px;
	}

	.imageWrapper {
		align-content: center;
	}

	#portfolioContent {
		background: white;
		z-index: 10;
		border-top-right-radius: 100px;
	}

	#vadFanSka {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		text-align: center;
		padding-top: 30px;
	}

	#lyricalGenius {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		text-align: center;
	}

	h2 {
		margin: 0px;
		font-family: sans-serif;
		font-weight: 200;
	}

	h1 {
		font-size: 40px;
		margin-bottom: 0px;
		font-size: 80px;
		margin-top: 35px;
		letter-spacing: 5px;
	}

	a {
		margin-bottom: 5px;
		font-size: small;
		color: black;
	}

	@media screen and (min-width: 625px) {
		#vadFanSka {
			flex-direction: row;
			width: 95%;
		}

		#lyricalGenius {
			margin-top: 50px;
			flex-direction: row;
			width: 95%;
		}

		.textAboutProject {
			text-align: left;
			margin-left: 20px;
		}

		#portfolioContent {
			padding-top: 50px;
			padding-left: 20px;
		}

		#header {
			padding-left: 30px;
			height: 150px;
		}

		h1 {
			font-size: 120px;
			margin-top: 55px;
			letter-spacing: 5px;
			margin-right: 0px;
		}
	}

	@media screen and (min-width: 900px) {
		h1 {
			font-size: 150px;
			margin-top: 30px;
		}

		#vadFanSka {
			max-width: 800px;
		}

		#lyricalGenius {
			max-width: 800px;
		}

		#portfolioContent {
			display: flex;
			flex-direction: column;
			align-items: center;
			align-content: center;
			justify-content: space-around;
			margin-right: 0px;
		}
	}
</style>
