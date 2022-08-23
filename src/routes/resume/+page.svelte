<script>
	import { dirty_components } from 'svelte/internal';
</script>

<div id="resumeContainer">
	<div id="header">
		<h1>ANTON ÅHLANDER</h1>
		<p>ahlandera@hotmail.com</p>
		<p>0709748277</p>
	</div>
	<main>
		<aside />
		<div id="experienceWrapper">
			<h2>EXPERIENCE</h2>
			<div id="experiences">
				<div class="ex" id="experience1">
					<div class="ex-top">
						<h3>Frontend Developer - Coolstuff</h3>
					</div>
					<p>01.2022 - Present</p>

					<p>
						During this 26 weeks long internship at Coolstuff I've been working on both
						"day-to-day"-tasks related to improving the webpage/web shop and on a larger, standalone
						project. Working with Javascript, Svelte, TypeScript, graphQL, Jest, Cypress, Version
						handling with Git/Github.
					</p>
				</div>
				<div class="ex" id="experience2">
					<div class="ex-top">
						<h3>Researcher - Mercuri Urval</h3>
					</div>
					<p>05.2018 - 07.2020</p>

					<p>
						Headhunting, Executive Search and Professional Recruitment of managers and specialists
						in different sectors. Both national and international projects. Last 9 months I have
						been part of the Global Talent Acquisition Team with focus on Sweden.
					</p>
				</div>
				<div class="ex" id="experience3">
					<div class="ex-top">
						<h3>Team Operation Coordinator - Mercuri Urval</h3>
					</div>
					<p>11.2017 - 05.2018</p>

					<p>
						Administrate and coordinate recruitment projects: handle invoices, communicate and
						arrange meetings, manage receipts and account coding of expense reports, team support.
					</p>
				</div>
				<div class="ex" id="experience4">
					<div class="ex-top">
						<h3>Office Manager (interim) - Mercuri Urval</h3>
					</div>
					<p>08.2017 - 11.2017</p>

					<p>Interim office manager, working with reception, purchase, suppliers etc.</p>
				</div>
				<div class="ex" id="experience5">
					<div class="ex-top">
						<h3>Staffing and Recruitment Assistant - Academic Work</h3>
					</div>
					<p>01.2015 - 08.2016</p>

					<p>
						Team IT/Tech. Part time job during studies. Full time recruiters in their processes.
						Advertisement, selection, phone interviews, face-to-face interviews. Last 2-3 months
						full time.
					</p>
				</div>
				<div class="ex" id="experience6">
					<div class="ex-top">
						<h3>ITC - Mercuri Urval</h3>
					</div>
					<p>09.2013 - 08.2014</p>

					<p>
						Responsible for the IT situation at the Sweden offices. Users, personal computers,
						purchase, networks etc. Worked 3 days a week as an interim.
					</p>
				</div>
				<div class="ex" id="experience7">
					<div class="ex-top">
						<h3>Deli/Sales - Ica Gruppen</h3>
					</div>
					<p>05.2012 - 04.2014</p>

					<p>
						Worked in the fresh food department with fish, meats and cheese. I did also work as a
						cashier.
					</p>
				</div>
			</div>
		</div>
		<div id="educationWrapper">
			<h2>EDUCATION</h2>
			<div id="educations">
				<div class="ed" id="education1">
					<div class="ed-left">
						<h3>Frontend Development</h3>
						<p>Mediainstitutet</p>
						<p>09.2020 - 09.2022</p>
					</div>
					<p>Studying Frontend-Development at Mediainstitutet, graduating September 28th, 2022.</p>
				</div>
				<div class="ed" id="education2">
					<div class="ed-left">
						<h3>Grafisk Design - Mobila Enheter</h3>
						<p>Kristianstad University</p>
						<p>2017</p>
					</div>
				</div>
				<div class="ed" id="education3">
					<div class="ed-left">
						<h3>Typografi och digital publicering</h3>
						<p>Linneaus University</p>
						<p>2017</p>
					</div>
				</div>
				<div class="ed" id="education4">
					<div class="ed-left">
						<h3>Grafisk Design - Tryck/Print</h3>
						<p>Kristianstad University</p>
						<p>2016</p>
					</div>
				</div>
				<div class="ed" id="education5">
					<div class="ed-left">
						<h3>Grafisk Design - Introduction course</h3>
						<p>Kristianstad University</p>
						<p>2016</p>
					</div>
				</div>
				<div class="ed" id="education6">
					<div class="ed-left">
						<h3>Personalvetenskap / Human Resources</h3>
						<p>Gothenburg University</p>
						<p>2014 - 2015</p>
					</div>
				</div>
			</div>
		</div>
	</main>
	<h2>SKILLS</h2>
	<h2>SOMETHING</h2>
	<div id="secondhalf">
		<div id="skills">
			<p />
		</div>
		<div id="something">
			<h2>SOMETHING</h2>
		</div>
	</div>
</div>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 90vw;
		background-color: white;
	}

	#experiences {
		width: 40vw;
		text-align: center;
		height: 41vh;
		overflow: scroll;
	}

	.ex {
		text-align: left;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
		color: rgb(240, 240, 240);
		background-color: rgb(87, 162, 162);
	}

	.ex-top {
		display: flex;
		flex-direction: row;
	}

	.ed {
		text-align: left;
		align-content: center;
		align-items: center;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
		background-color: rgb(87, 162, 162);
		color: rgb(240, 240, 240);
	}

	#educations {
		width: 40vw;
		text-align: center;
		height: 41vh;
		overflow: scroll;
	}

	#header {
		background: white;
		align-items: center;
		text-align: center;
	}

	#secondhalf {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80vw;
		margin-left: 10vw;

		background-color: white;
	}

	#skills {
		background-color: rgb(87, 162, 162);
		height: 30vh;
		width: 40vw;
		align-self: center;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
		color: white;
	}
	#something {
		background-color: rgb(87, 162, 162);
		height: 30vh;
		width: 40vw;
		align-self: center;
		border-radius: 5px;
		padding: 10px;
		margin: 10px 10px 0px 10px;
	}

	h1 {
		color: rgb(87, 162, 162);
		font-size: 40px;
		margin-bottom: 0px;
	}

	h2 {
		text-align: center;
		text-decoration: underline;
		color: rgb(87, 162, 162);
	}

	h3 {
		padding: 0px;
		margin: 0px 0px 0px 5px;
	}

	p {
		margin: 5px;
	}

	aside {
		background: white;
		width: 20vw;
	}
</style>
