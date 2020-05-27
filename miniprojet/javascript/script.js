var ctx = document.getElementById('myChart').getContext('2d');
var list = document.getElementById('side');


function divClecked(e){
    console.log(e.target.innerHTML)
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








var myChart = new Chart(ctx, {
    type: 'line',
    data: { 
        Confirmed :0,
        Deaths :0,
        Recovered :0,
        Active :0,
    },
            
})
