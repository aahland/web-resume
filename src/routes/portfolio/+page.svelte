<div id="wrapper">
	<div />
	<div id="animationContainer">
		<div id="animationLogo" />
	</div>
	<div class="typewriter">
		<p>Under Production...</p>
	</div>
	<div />
</div>

<style>
	#wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height: 100vh;
	}

	#animationLogo {
		background: url('/src/lib/colorhat.png');
		height: 190px;
		width: 260px;
		animation: animateCoder 5s steps(13) infinite;
	}

	@keyframes animateCoder {
		from {
			background-position: 0px;
		}
		to {
			background-position: 3305px;
		}
	}

	p {
		font-family: monospace;
		font-size: large;
	}

	.typewriter p {
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: 0.15em solid yellow; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.15em; /* Adjust as needed */
		animation: typing 3.5s steps(40), blink-caret 0.75s infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: yellow;
		}
	}
</style>
