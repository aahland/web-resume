<script>
	function openNav() {
		console.log('clicked');
		let navContainer = document.getElementById('navContainer');
		if (navContainer) {
			navContainer.style.visibility = 'visible';
			console.log('this is it');
		}
		let textLogo = document.getElementById('textLogo');
		if (textLogo) {
			textLogo.remove();
		}
	}

	function openResume() {
		window.location.href = 'http://127.0.0.1:5174/resume';
	}

	function openAbout() {
		window.location.href = 'http://127.0.0.1:5174/about';
	}
</script>

<div id="container">
	<div id="animationContainer">
		<div id="animationLogo" />
		<div id="textLogo">
			<button id="enterBtn" on:click={openNav}>aahland - anton åhlander</button>
		</div>
	</div>

	<div id="navContainer">
		<nav>
			<ul>
				<button on:click={openResume} class="navBtn" id="resumeBtn">Resume</button>
				<button on:click={openAbout} class="navBtn" id="aboutBtn">About</button>
			</ul>
		</nav>
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
		/* height: 100vh;
		justify-content: center; */
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
	#enterBtn {
		border: 2px solid black;
		width: fit-content;
		height: 40px;
		background: white;
		font-family: monospace;
		font-size: larger;
	}

	#enterBtn:hover {
		background: rgb(252, 177, 190);
	}

	#navContainer {
		visibility: hidden;
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

	.navBtn:hover {
		background: rgb(252, 177, 190);
	}

	#aboutBtn {
		margin-left: 20px;
		width: 72px;
	}
	#resumeBtn {
		margin-right: 10px;
		width: 72px;
		color: black;
		text-decoration: none;
	}
</style>
