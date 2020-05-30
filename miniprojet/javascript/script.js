var ctx = document.getElementById('myChart').getContext('2d');
var list = document.getElementById('side');



function divClecked(e){  
    let httpReq=new XMLHttpRequest()
    let codecountry=e.target.attributes.id.nodeValue;
    
    httpReq.open("GET","https://api.covid19api.com/dayone/country/"+codecountry,true)
    httpReq.onreadystatechange=function(){
        if(httpReq.readyState==4 && httpReq.status==200){
            let data=JSON.parse(httpReq.response);
            
            var n=e.target.innerHTML;

            var Confirmed=new Array;
            for(i in data){
            Confirmed.push(data[i].Confirmed)
            }
        
            var Deaths=new Array;
            for(i in data){
            Deaths.push(data[i].Deaths)
            }
        
            var Recovered=new Array;
            for(i in data){
            Recovered.push(data[i].Recovered)
            }
        
            var Active=new Array;
            for(i in data){
            Active.push(data[i].Active)
            }
        
            const t=data.map(data=>`${new Date(data.Date).getDate()}/${new Date(data.Date).getMonth()+1}`);            

            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: "Confirmés",
                        backgroundColor: 'rgba(183,197,242,0.2)',
                        borderColor: 'Blue',
                        data: Confirmed,
                    },{
                        label: "Géris",
                        backgroundColor: 'rgba(183,242,197,0.2)',
                        borderColor: 'Green',
                        data: Recovered,
                    },{
                        label: "Décés",
                        backgroundColor: 'rgba(242,183,183,0.2)',
                        borderColor: 'Red',
                        data: Deaths,
                    },{
                        label: "Active",
                        backgroundColor: 'rgba(248,248,181,0.2)',
                        borderColor: 'Yellow',
                        data: Active,
                    },],
                    labels: t ,
                },

                options: {
                    title: {
                        display: true,
                        text: n,
                    }
                }
            });

        }
    }
        
            

httpReq.send();
}


let httpReq=new XMLHttpRequest()
httpReq.open("GET","https://api.covid19api.com/countries",true)
httpReq.onreadystatechange=function(){
    if(httpReq.readyState==4 && httpReq.status==200){
        let resp=JSON.parse(httpReq.response)
        resp.forEach(e => {
            let d=document.createElement("div")
            d.setAttribute('id',e.ISO2)
            d.innerHTML=e.Country
            d.addEventListener("click",divClecked)
            list.appendChild(d)
        });
    }
}
httpReq.send()

