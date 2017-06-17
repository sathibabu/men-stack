

function Utils(rows) {
	console.log(typeof(rows))
	//let rows = data.split('\n');
	let keys = rows[0];

	var rowslen = rows.length;
	var results = [];

	for(let i=1;i<rowslen;i++){
       let values = rows[i];
       if(values.length>0){
          let obj = {};
	       values.forEach((item,index)=>{
	           obj[keys[index]]=item;
	       });
	       results.push(obj);
       }else{

       }
       
	}
	return results;  	
};

module.exports = Utils;