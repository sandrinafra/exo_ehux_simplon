var score = 0;
var mam = 0;
var usine = 0;
var mine = 0;

function cooclick()
{
	if (mam === 0)
	{
		score += 10;
	}
	else if (score - 300)
	{
		score += 50 * mam;
	}
	else if (score - 800)
	{
		score += 100 * mam;
	}
	else if (score - 1200)
	{
		score += 200 * mam;
	}

 	document.getElementById("number").innerHTML = score;
}
function mamclick()
{
	if (score > 300)
	{	
		score -= 300;
		mam++;
		document.getElementById("number").innerHTML = score;
		document.getElementById("mamie").innerHTML = "Mamie = " + mam;

	}
}
function usineclick()
{
	if(score > 800)
	{
		score -= 800;
		mam++;
	document.getElementById("number").innerHTML = score;
	document.getElementById("usine").innerHTML = Usine;

	}
}

function mineclick()
{
	if(score > 1200)
	{
		score -= 1200;
		mam++;
	document.getElementById("number").innerHTML = score;
	document.getElementById("mine").innerHTML = Mine;

	}
}






