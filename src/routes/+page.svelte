<script>

</script>

<div id="container">
    <div id="animationLogo"></div>
        <div id="textLogo">
            <p>aahland - anton åhlander</p>
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

#animationLogo {
    background: url("/src/lib/yellowhatsprite.png");
    height: 205px;
    width: 150px;
    animation: animateCoder 2s steps(13) infinite;


}

@keyframes animateCoder {
    from 
    {
        background-position: 1px;
    }
    to {
        background-position: 2000px;
    }
}
#textLogo {
    border: 2px solid black;
    width: fit-content;
   
    background: white;
    font-family: monospace;
    font-size: larger;
}

#textLogo:hover {
    background: rgb(252, 177, 190);

}
	
</style>
