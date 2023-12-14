function show_result(){
    let a=document.querySelector("#a").value;
    let b=document.querySelector("#b").value;
    let c=document.querySelector("#c").value;
    let d=document.querySelector("#d").value;
    let e=document.querySelector("#e").value;

    let to=parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
    let per=(to*100)/500;

    if(per >= 90){
        document.querySelector(".gra").innerHTML ="A+";
    }
    else if(per >= 80){
        document.querySelector(".gra").innerHTML ="A";
    }
    else if(per >= 70){
        document.querySelector(".gra").innerHTML ="B+";
    }
    else if(per >= 60){
        document.querySelector(".gra").innerHTML ="B";
    }
    else if(per >= 50){
        document.querySelector(".gra").innerHTML ="C+";
    }
    else if(per >= 40){
        document.querySelector(".gra").innerHTML ="C";
    }
    else if(per >= 35){
        document.querySelector(".gra").innerHTML ="D+";
    }
    else if(per >= 30){
        document.querySelector(".gra").innerHTML ="D";
    }
    else{
        document.querySelector(".gra").innerHTML ="E";
    }


    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;

    if(per >= 30){
        document.querySelector(".result h2").innerHTML ="You are Pass";
    }
    else{
        document.querySelector(".result h2").innerHTML ="You are Fail";
    }
}