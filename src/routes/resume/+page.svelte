<script>
	import '../../../src/app.css';
	import experiences from '../../lib/experienceData.json';
	import education from '../../lib/educationData.json';
	import skills from '../../lib/skills.json';
</script>

<div id="resumeContainer">
	<div id="header">
		<h1>ANTON ÅHLANDER</h1>
		<p id="email">ahlandera@hotmail.com</p>
		<p id="phonenumber">0709748277</p>
	</div>
	<div class="maincontent">
		<div id="experienceWrapper">
			<h2>Experience</h2>
			<div id="experiences">
				{#each experiences.experiences as experience, i}
					<div class="ex" id="experience{i}">
						<div class="ex-top">
							<h3>{experience.title}</h3>
							<h3>{experience.org}</h3>
						</div>
						<p class="years">{experience.dates}</p>
						<p class="desc">{experience.desc}</p>
					</div>
				{/each}
			</div>
		</div>
		<div id="educationWrapper">
			<h2>Education</h2>
			<div id="educations">
				{#each education.education as education}
					<div class="ed" id="education1">
						<div class="ed-left">
							<h3>{education.title}</h3>
							<h3 class="school">{education.school}</h3>
						</div>
						<p class="years">{education.dates}</p>
						<p class="desc">{education.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div id="skillsAndLinks">
		<h2>Skills</h2>
		<div id="skills">
			<div class="skillsGrid">
				{#each skills as { skill }}
					<p class="skill">{skill}</p>
				{/each}
			</div>
		</div>
		<h2>Links</h2>
		<div id="linkswrapper">
			<div id="links">
				<div id="linkedinContainer">
					<a href="https://www.linkedin.com/in/anton-%C3%A5hlander-038a3a42/">
						<img rel="noopener noreferrer" target="_blank" id="linkedin" src="/images/linkedinLogo.png" alt="linkedIn logo" />
					</a>
				</div>
				<a href="https://github.com/aahland">
					<img rel="noopener noreferrer" target="_blank" id="github" src="/images/githublogotype.png" alt="github logo" />
				</a>
			</div>
		</div>
	</div>
</div>
<footer>
	<div id="linksContainer">
		<button><a href="https://aah-lander.com/">Home</a></button>
		<button><a href="https://aah-lander.com/portfolio">Portfolio</a></button>
		<button><a href="https://aah-lander.com/about">About</a></button>
		<button><a rel="noopener noreferrer" target="_blank" href="https://github.com/aahland">Github</a></button>
	</div>
</footer>

<style>
	img {
		height: 80px;
		-webkit-filter: invert(100%);
		filter: invert(100%);
	}

	#github {
		height: 85px;
	}

	#linkedinContainer {
		width: 90px;
	}

	.maincontent {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		background-color: white;
		align-items: center;
	}

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: white;
	}

	::-webkit-scrollbar-thumb {
		background: rgb(87, 162, 162);
		border-radius: 10px;
		height: 1px;
		width: 1px;
	}

	.ex {
		text-align: left;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
		color: rgb(255, 255, 255);
		background-color: rgb(87, 162, 162);
		font-size: large;
		font-weight: 200;
		line-height: 24px;
	}

	.ex-top {
		display: flex;
		flex-direction: column;
		font-size: larger;
		margin-top: 0px;
	}

	.ed-left {
		font-size: larger;
	}

	.ed {
		text-align: left;
		align-content: center;
		align-items: center;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
		background-color: rgb(87, 162, 162);
		color: rgb(255, 255, 255);
		font-size: larger;
		line-height: 24px;
	}

	#experiences {
		max-width: 450px;
		text-align: center;
		height: 300px;
		overflow: scroll;
	}

	#educations {
		max-width: 450px;
		text-align: center;
		height: 300px;
		overflow: scroll;
		font-weight: 200;
	}

	#header {
		background: white;
		align-items: center;
		text-align: center;
	}

	#skillsAndLinks {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		gap: 10px;
		width: 100%;
		max-width: 850px;
	}

	#skills {
		text-align: center;
		align-content: center;
		align-items: center;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
		background-color: rgb(87, 162, 162);
		color: rgb(240, 240, 240);
		font-size: larger;
	}

	#linkswrapper {
		text-align: center;
		height: 180px;
	}

	#links {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		gap: 1rem;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		background-color: rgb(87, 162, 162);
		border-radius: 5px;
		text-align: center;
		margin: 10px 10px 0px 10px;
		padding: 25px 100px 25px 100px;
	}

	#phonenumber {
		margin: 0px;
		margin-bottom: 10px;
	}

	#email {
		margin-bottom: 2px;
		margin-top: 1px;
	}

	h1 {
		color: rgb(87, 162, 162);
		font-size: 50px;
		margin-bottom: 0px;
	}

	h2 {
		text-align: center;
		/* text-decoration: underline; */
		color: rgb(87, 162, 162);
		margin-top: 2vh;
		margin-bottom: 0px;
		font-size: xx-large;
		font-weight: 600;
	}

	h3 {
		padding: 0px;
		margin: 0px 0px 0px 0px;
		font-weight: 400;
		line-height: 30px;
	}

	.skillsGrid {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
	}

	.skillsGrid p {
		background: white;
		color: rgb(87, 162, 162);
		border-radius: 10px;
		padding: 3px 10px 3px 10px;
	}

	.skill {
		font-weight: bolder;
		font-size: large;
	}

	#resumeContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		font-family: Montserrat, sans-serif;
	}

	#skills {
		padding: 8px;
	}

	footer {
		background: rgb(87, 162, 162);
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 20px;
	}

	#linksContainer {
		display: flex;
		flex-direction: row;
		gap: 30px;
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

	@media screen and (max-width: 420px) {
		footer {
			margin-top: 100px;
		}

		#linksContainer {
			gap: 10px;
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
			width: 800px;
		}

		.ed {
			font-size: small;
		}
		.ex {
			font-size: small;
		}

		.maincontent {
			flex-direction: column;
		}

		h2 {
			margin-bottom: 10px;
		}

		.skill {
			font-weight: bolder;
			font-size: medium;
		}

		#skills {
			max-height: none;
		}

		#skillRooms {
			height: fit-content;
		}
	}

	@media screen and (max-width: 600px) {
		h1 {
			width: 300px;
		}

		.ed {
			font-size: medium;
		}

		.maincontent {
			flex-direction: column;
		}

		#skillsAndLinks {
			max-width: 450px;
		}

		.ex {
			font-size: medium;
		}

		.ex-top {
			font-size: large;
		}

		h2 {
			font-size: x-large;
			margin-bottom: 10px;
		}
	}

	@media screen and (min-width: 900px) {
		h1 {
			width: 800px;
		}

		.ed {
			font-size: large;
		}

		.ex {
			font-size: large;
		}

		#skillsAndLinks {
			max-width: 800px;
		}

		.ex-top {
			font-size: larger;
		}

		.years {
			font-size: small;
		}

		.school {
			margin: 0px 0px 0px 0px;
		}

		h2 {
			font-size: xx-large;
			margin-bottom: 10px;
		}
	}

	@media screen and (min-width: 900px) {
		h2 {
			margin-bottom: 15px;
		}

		#skillsAndLinks h2 {
			margin-bottom: 0px;
		}

		#skillsAndLinks {
			max-width: 850px;
			min-width: 900px;
		}
	}

	@media screen and (max-width: 2040px) {
		h2 {
			margin-bottom: 15px;
		}

		#skillsAndLinks h2 {
			margin-bottom: 0px;
		}
	}
</style>
