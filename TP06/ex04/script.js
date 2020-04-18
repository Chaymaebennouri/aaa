$f=["0068006F0072006C006F00670065","007300700061006E","007300740079006C0065","0063006F006C006F0072003A0023006100610061006100610061003B","003A","007300700061006E","007300740079006C0065","0063006F006C006F0072003A0023006100610061006100610061003B","003A"];
function $for($o){
    $r='';
    for(var $ro=0;$ro<$f[$o].length;$ro+=4){
        $r+=String.fromCharCode(parseInt($f[$o].substr($ro,4),16))};
    return $r}; 
    function afficheHeure() { 
        var span = document.getElementById($for(0)); 
        if (span==null) 
    return; 
        var d = new Date(); 
        span.appendChild(document.createTextNode(d.getHours())); 
        var s = span.appendChild(document.createElement($for(1))); 
        s.setAttribute($for(2), $for(3)); 
        s.appendChild(document.createTextNode($for(4))); 
        span.appendChild(document.createTextNode(d.getMinutes())); 
        var s = span.appendChild(document.createElement($for(5))); 
        s.setAttribute($for(6), $for(7)); 
        s.appendChild(document.createTextNode($for(8))); 
        span.appendChild(document.createTextNode(d.getSeconds())); 
    } 