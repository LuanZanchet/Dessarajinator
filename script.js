
function Desarranjo()
{
  
 var n=document.getElementById('input').value;

 var frac3=0
 for(i=2;i<=n;i++)
 {
	if(i%2==0)
	{
	 cont2=i
	 den=1
    	for(cont1=1;cont1<=cont2;cont1++)
		{
			den=den*cont1
		}
	 frac1=1/den 
	 frac3=frac3+frac1
	}
    else
	{ 
	 cont2=i
	 den=1
		for(cont1=1;cont1<=cont2;cont1++)
		{
			den=den*cont1
		}
	  frac2=1/den 
 	  frac3=frac3-frac2
	}
 }
	var fat1=1
		for(fat2=1;fat2<=n;fat2++)
		{
		 fat1=fat1*fat2
		}
    des=frac3*fat1;
    
    document.getElementById('resultado').innerText = "A quantia de desarranjos para "+n+" termos é: "+ des.toFixed(2);
	
}
