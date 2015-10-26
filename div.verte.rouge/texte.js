$wrapper = document.getElementById("wrapper");
$wrapper1 = document.getElementById("wrapper1");
$shadow = document.getElementById("shadow");
$shadow1 = document.getElementById("shadow1");

var t;
left = 0;
function petit_meurtreGauche()
{
    left += 2;
	$wrapper.style.left = left+"px";
	t = setTimeout(petit_meurtreGauche,20);
	if (left == 530){ 
		clearTimeout(t)
	}

}

var t;
right = 1200;
function petit_meurtreDroite()
{
    right -= 2;
	$wrapper1.style.left = right+"px";
	t = setTimeout(petit_meurtreDroite,20); 
		if (right == 570){ 
		clearTimeout(t)
			if(left == 530)
	{
		document.getElementById("round1").style.width = "3px"; 
		document.getElementById("shadow1").style.background = "red"; 
		document.getElementById("shadow1").style.height = "50px";
		document.getElementById("shadow1").style.width = "50px"; 
	}
	}

}



petit_meurtreGauche();
petit_meurtreDroite();

