var ctx = document.getElementById('myChart').getContext('2d');
var list = document.getElementById('side');

let confermed=[];
    recovered=[];
    deaths =[];
    active=[];
    
function divClecked(e){  
    let httpReq=new XMLHttpRequest()
    httpReq.open("GET","https://api.covid19api.com/dayone/country/"+e.target.setAttribute,true)

httpReq.send()
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

