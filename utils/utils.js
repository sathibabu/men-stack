

function Utils(data) {
	console.log(typeof(data))
	let rows = data.split('\n');
	let keys = rows[0].split(',');

	var rowslen = rows.length;
	var results = [];

	for(let i=1;i<rowslen;i++){
       let values = rows[i].split(',');
       let obj = {};
       values.forEach((item,index)=>{
           obj[keys[index]]=item;
       });
       results.push(obj);
	}
	return results;  	
};

module.exports = Utils;