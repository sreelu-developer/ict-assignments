$(function () {

        let c = [];
        $("#t1").on("change", ":checkbox", function () {
            
            
            let index=c.indexOf(this.id);
			var chek=this.checked;
            let item=this.id;
            console.log(item,index);
            console.log(index);
           
            var promise2 = new Promise(function (resolve, reject) {

                console.log(this.id);
                if(chek === true)
                {
                    if(index==-1){
                        c.push(item);
                    }
                   
                   
                }
                else {
                    if(index!=-1){
                        c.splice(index,1);
                    }
                   
                }
                console.log(c,chek);
                if (c.length==5) {
                    resolve("WOW!! 5 Tasks have been successfully completed!");
                   
                }
            });
            promise2
                .then(function (r) {
                    alert(r);
                    c = [];
                });
        });
        
        let tb = document.getElementById("t1")
		let url="https://jsonplaceholder.typicode.com/todos"
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
			{
                let l = JSON.parse(this.responseText);
                let elem = l;
                let out = "<tr><th>Title</th><th>Completed</th></tr>";
                for (let i = 0; i < elem.length; i++)
				{
                    out += "<tr>";
               
                    out += "<td>" + elem[i].title + "</td>";
                    
                    out += "<td><input type='checkbox' id='chkbox"+ elem[i].id +"'" + ((elem[i].completed == true) ? 'checked disabled' : '') + " ></td>";
                    
                }
                tb.innerHTML = out;
            }
        }
        xhttp.open("GET",url , true);
        xhttp.send();
        
    
});
