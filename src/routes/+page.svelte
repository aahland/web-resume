<script>
	// function openNav() {
	// 	let navContainer = document.getElementById('navContainer');
	// 	if (navContainer) {
	// 		navContainer.style.visibility = 'visible';
	// 	}
	// 	let textLogo = document.getElementById('textLogo');
	// 	if (textLogo) {
	// 		textLogo.remove();
	// 	}
	// }

	function openResume() {
		window.location.href = 'https://web-resume-775.pages.dev/resume';
	}

	function openAbout() {
		window.location.href = 'https://web-resume-775.pages.dev/about';
	}

	function openPortfolio() {
		window.location.href = 'https://web-resume-775.pages.dev/portfolio';
	}
</script>

<div id="container">
	<div id="textLogo">
		<p>Anton Åhlander</p>
		<p>aahland</p>
	</div>
	<div id="animationContainer">
		<div id="animationLogo" />
	</div>
	<div id="navContainer">
		<nav>
			<ul>
				<button on:click={openResume} class="navBtn" id="resumeBtn">Resume</button>
				<button on:click={openAbout} class="navBtn" id="aboutBtn">About</button>
			</ul>
		</nav>
		<button on:click={openPortfolio} class="navBtn" id="portfolioBtn">Portfolio</button>
	</div>
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		justify-content: center;
	}

	#animationContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#animationLogo {
		background: url('/src/lib/yellowhatsprite.png');
		height: 205px;
		width: 150px;
		animation: animateCoder 2s steps(13) infinite;
	}

	@keyframes animateCoder {
		from {
			background-position: 1px;
		}
		to {
			background-position: 2000px;
		}
	}

	#textLogo {
		border: none;
		width: fit-content;
		height: 40px;
		background: white;
		font-family: monospace;
		font-size: larger;
		text-align: center;
		margin-bottom: 40px;
	}

	p {
		margin-top: 0px;
	}

	/* #enterBtn:hover {
		background: rgb(252, 177, 190);
	} */

	#navContainer {
		visibility: visible;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0px;
		margin-top: 0px;
	}

	.navBtn {
		border: 2px solid black;
		width: fit-content;
		height: 40px;
		background: white;
		font-family: monospace;
		font-size: larger;
	}

	#portfolioBtn {
		border: 2px solid black;
		width: fit-content;
		height: 40px;
		width: fit-content;
		background: white;
		font-family: monospace;
		font-size: larger;
	}

	#portfolioBtn:hover {
		background: rgb(252, 177, 190);
	}

	.navBtn:hover {
		background: rgb(252, 177, 190);
	}

	#aboutBtn {
		margin-left: 10px;
		width: 72px;
	}
	#resumeBtn {
		margin-right: 10px;
		width: 72px;
		color: black;
		text-decoration: none;
	}
</style>
