<script>
	import '../../../src/app.css';
</script>

<div id="wrapper">
	<div id="letter-container">
		<h1>Hello!</h1>
		<p>
			My name is Anton and I am a fresh, out of the box, frontend developer!<br /><br />
			For the previous two years I have been studying frontend development at Medieinstitutet. During
			the last 6 months of my education, I have been on an internship at Coolstuff, an e-commerce company
			based in Malmö. Coolstuff operates in five markets, and the tech team builds frontends and everything needed to connect these to the myriad of services underneath. I have learned
			a lot from working as a frontend developer in an in-house development team. Gained plenty of experience in writing new code, updating existing functions and features, and maintaining their systems. I am very grateful for such a good internship. In September this year I will graduate, and I’m hyped to get out there to continue my journey as a developer!
			<br /><br />
			Who am I then, except from what was mentioned above? I am about a year away from turning 30 and
			for about 26 years of my life I was a complete to writing code. That changed in the first
			act of the corona pandemic, when I got the boot from the recruitment firm I was working at as they downsized. I have been interested in software development and code for quite some time,
			but I have only participated from the sideline. During my career work and educational life I have
			been, in different ways, connected to software development. As a recruiter/researcher I have 
			worked with tech companies to recruit new people. I have also done a few university courses in
			graphic design which is deeply connected to frontend development.

			<br /><br />
			So instead of looking for another position within the recruitment business, I decided to give this
			a chance. I did a few online tutorials, read up a bit on the educational paths available and turned out to be applying for the frontend development program at Medieinstitutet. Medieinstitutet ended up being
			a great choice and now, after two years of education, including seven months of real work experience,
			I am ready for my next step!
			<br /><br />
			Besides the coding part, I am also interested in music. I'm trying to become decent at playing
			guitar and love to dig in vinyl crates or explore new music. Skateboarding is another interest
			of mine and, when possible, the snow equivalent. I also enjoy drawing and illustrating, hanging
			out with friends, cooking food and playing games.<br /><br />
			So either you are here, just snooping around (which is completely fine), or you might have a work
			opportunity for me. If that is the case you should get in touch! You´ll find my contact information
			in my <a href="https://aah-lander.com/resume">resume</a>.
		</p>
	</div>
</div>
<footer>
	<div id="linksContainer">
		<button><a href="https://aah-lander.com/">Home</a></button>
		<button><a href="https://aah-lander.com/portfolio">Portfolio</a></button>
		<button><a href="https://aah-lander.com/resume">Resume</a></button>
		<button><a href="https://github.com/aahland">Github</a></button>
	</div>
</footer>

<style>
	#wrapper {
		display: flex;
		justify-content: center;
	}
	#letter-container {
		background: rgb(87, 162, 162);
		color: white;
		width: 800px;
		padding: 20px;
		border-radius: 10px;
		font-family: Montserrat, sans-serif;
		line-height: 25px;
		font-size: large;
		margin-top: 20px;
	}

	p {
		max-width: 700px;
		margin-left: 40px;
	}

	h1 {
		font-size: 70px;
		margin-bottom: 40px;
		margin-top: 30px;
		margin-left: 40px;
	}

	a {
		color: white;
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

	@media screen and (max-width: 600px) {
		p {
			margin-left: 10px;
		}

		h1 {
			margin-left: 10px;
		}

		#letter-container {
			margin-top: 0px;
		}
	}
</style>
