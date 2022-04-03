String.prototype.shuffle=function(){
		var arParaula=this.split("");
		arParaula.shuffle();
		var parDesord="";
		for(var i=0; i<arParaula.length; i++){
			parDesord+=arParaula[i];
		}
		return parDesord;
}		
Array.prototype.shuffle=function(){
		let mida=this.length;
		while(mida>0){
			mida--;
			let posCanviar=Math.floor(Math.random()*(mida+1));
			let valorCanviar=this[posCanviar];
			this[posCanviar]=this[mida];
			this[mida]=valorCanviar;
		}
}
		
