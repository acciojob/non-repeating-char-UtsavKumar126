//your JS code here. If required.
function Main() {
	let str = prompt("Enter a string"); 
	//alert(findNon(str));
}
function findNon(str) {
	let obj={};
	for(let i=0;i<str.length;i++){
		if(obj[str[i]]>1){
			obj[str[i]]++;
		}
		else{
			obj[str[i]]=1;
		}
	}

	for(let i=0;i<str.length;i++){
		if(obj[str[i]]===1){
			return str[i];
		}
	}
	
}
Main();

