(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{iydT:function(e,t,a){"use strict";a.r(t),a.d(t,"HomeModule",function(){return m});var i=a("ofXK"),o=a("tyNb"),n=a("fXoL"),r=a("lGQG");function s(e,t){if(1&e){const e=n.Tb();n.Sb(0,"div",2),n.Sb(1,"div",3),n.Ob(2,"img",4),n.Sb(3,"div",5),n.Sb(4,"h5",6),n.sc(5),n.Rb(),n.Rb(),n.Sb(6,"div",7),n.Sb(7,"p",8),n.sc(8),n.Rb(),n.Sb(9,"button",9),n.Zb("click",function(){n.lc(e);const a=t.$implicit;return n.dc().playGame(a.path)}),n.sc(10),n.Rb(),n.Rb(),n.Rb(),n.Rb()}if(2&e){const e=t.$implicit,a=n.dc();n.Bb(2),n.gc("src",e.image_url,n.nc),n.Bb(3),n.tc(e.title),n.Bb(3),n.tc(e.description),n.Bb(2),n.tc(a.buttonTitle)}}let c=(()=>{class e{constructor(e,t){this.authService=e,this.router=t,this.buttonTitle="Jugar ahora!"}ngOnInit(){}playGame(e){const t=this.authService.isLoggedIn()?e:"auth/login";this.router.navigate([t])}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(r.a),n.Nb(o.e))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-gamecard"]],inputs:{gameList:"gameList"},decls:2,vars:1,consts:[[1,"row"],["class","col-12 col-md-6 col-lg-4",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","col-lg-4"],[1,"card","flip-in-hor-bottom"],["alt","game_image","width","250",1,"card-img-top",3,"src"],[1,"card-header"],[1,"card-title","mb-0"],[1,"card-body"],[1,"card-text"],[1,"play-button","btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(n.Sb(0,"div",0),n.rc(1,s,11,4,"div",1),n.Rb()),2&e&&(n.Bb(1),n.gc("ngForOf",t.gameList))},directives:[i.j],styles:["@keyframes flip-in-hor-bottom{0%{transform:rotateX(80deg);opacity:0}to{transform:rotateX(0);opacity:1}}.flip-in-hor-bottom[_ngcontent-%COMP%]{animation:flip-in-hor-bottom .5s cubic-bezier(.25,.46,.45,.94) both}"]}),e})();const l=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e){this.authService=e,this.myGames=[{image_url:"/assets/images/games/hanged/hanged-thumbnail.jpeg",title:"Ahorcado",description:"Es un juego, en el que el objetivo es adivinar una palabra. El jugador deber\xe1 ir diciendo letras que le parece que puede contener la palabra. Si acierta, se escriben todas las letras coincidentes, y sino, es un paso m\xe1s hacia la tan temida horca.",path:"/games/hanged"},{image_url:"/assets/images/games/higherorlower/higherorlower-tghumbnail.jpeg",title:"Mayor o menor",description:"El juego consiste en adivinar si la pr\xf3xima carta del mazo es mayor o menor. Sum\xe1s un punto por cada tiro correcto.",path:"/games/higherorlower"},{image_url:"/assets/images/games/preguntados/preguntados-thumbnail.jpeg",title:"Preguntados",description:"La sala de jugos pregunta, vos respondes. Sumas puntos por cada respuesta correcta!",path:"/games/preguntados"},{image_url:"/assets/images/games/twentyone/veintiuno.png",title:"Veintiuno",description:"El que llega a 21 o el que est\xe9 m\xe1s cerca, gana.",path:"/games/twentyone"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(r.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-home"]],decls:5,vars:1,consts:[[1,"content"],[1,"container-fluid","p-0"],[1,"h3","mb-3"],[3,"gameList"]],template:function(e,t){1&e&&(n.Sb(0,"main",0),n.Sb(1,"div",1),n.Sb(2,"h1",2),n.sc(3,"Juegos"),n.Rb(),n.Ob(4,"app-gamecard",3),n.Rb(),n.Rb()),2&e&&(n.Bb(4),n.gc("gameList",t.myGames))},directives:[c],styles:[""]}),e})()}]}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[o.g.forChild(l)],o.g]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[i.c,u]]}),e})()}}]);