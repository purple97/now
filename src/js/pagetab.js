/**
 * Created by zhh on 14-11-18.
 */

function pageTab(obj){
    function goback(){
        var classs;
        var els = document.querySelectorAll("[data-classname]");
        for(var i in els){
            classs = els[i].getAttribute("data-classname");
            els[i].className = classs;
            els[i].removeAttribute("data-classname");
        }
    }
    function goshow(id){
        var el = document.querySelector(id);
        var classs = el.className;
        var rge = /top100|left100|right100|left50|bottom100/g;
//        alert(el.id);
        if(classs.match(rge)){
            el.setAttribute("data-classname",el.className);
            el.className = classs.replace(/ top100| left100| right100| left50| bottom100/g,"");
        }else if(classs.match(rge) === null){
            goback();
        }
    }

    function showside(){
        var page = document.querySelector(".page");
//        alert(page)
        page.classList.add("left50");
    }
    function hideside(){
        var page = document.querySelector(".page");
        page.classList.remove("left50");
    }

    function route(id){
        if(id==="sidemune"){
            showside();
            goback();
        }else{
            hideside();
            goshow("#"+id);
        }
    }

    function init(){
        console.log("ok");
        var id = window.location.href.split("#")[1];
        route(id);
        window.addEventListener("popstate",function(){
            if(window.location.href.indexOf("#")!=-1){
                var id = window.location.href.split("#")[1];
                route(id);
            }
        },false);
    }

    return{
        init:init,
        goback:goback,
        goshow:goshow
    };
}