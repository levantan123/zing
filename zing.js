document.addEventListener("DOMContentLoaded" ,function(){
    var trencung1 = document.getElementsByClassName("trencung1");
    var trencung1 =trencung1[0];
    ///console.log(trencung1[0]);
    var a2 =document.getElementsByClassName("a2");
    var a2 = a2[0];
    //console.log(a2[0]);
    trencung1.onclick = function(){
        //console.log("Ban vua click");
        //this.classList.add("ra");
        a2.classList.toggle("ra");
    }
},false)