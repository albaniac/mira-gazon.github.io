jQuery(document).ready(function (){
 
setInterval(function(){  
var t = new Date();

    if(t.getHours()<24 && t.getHours()>1){
var backH=24-t.getHours();
var backM=60-t.getMinutes();
 if(backM<10){backM='0'+backM;}
var backS=60-t.getSeconds();
if(backS<10){backS='0'+backS;}
$('.countdown').html('<span class="countdown-section"<span class="countdown-amount">'+backH+'<span class="countdown-period">часов </span></span></span><span class="countdown-section"<span class="countdown-amount">'+backM+'<span class="countdown-period">минут</span></span></span><span class="countdown-section"<span class="countdown-amount">'+backS+'<span class="countdown-period">секунд </span></span></span>');           

if(t.getHours()<1){
var backM=60-t.getMinutes();
if(backM<10){backM='0'+backM;}
var backS=60-t.getSeconds();
if(backS<10){backS='0'+backS;}      
$('.countdown').html(00+':'+backM+':'+backS);          
    }
} 
},1000); 
 
       
    });