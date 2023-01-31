(()=>{var e={642:e=>{e.exports=()=>{const e=e=>{let t;for(let r=0;r<10;r++)for(let o=0;o<10;o++)t=document.createElement("div"),t.classList.add("square"),t.classList.add("empty"),t.setAttribute("data-row",r),t.setAttribute("data-column",o),e.appendChild(t)},t=(e,t)=>document.querySelector(`.${t}[data-row="${e[0]}"][data-column="${e[1]}"]`);return{renderPlaceShipsView:()=>{const t=document.querySelector("#content");t.innerHTML="";const r=document.createElement("h2");r.textContent="Place your ships",t.appendChild(r);const o=document.createElement("div");o.id="ship-type-container",t.appendChild(o);const a=document.createElement("h3");a.id="ship-type",o.appendChild(a);const n=document.createElement("div");n.classList.add("place-ships-container"),t.appendChild(n);const d=document.createElement("div");d.classList.add("board"),e(d),n.appendChild(d);const l=document.createElement("button");l.id="rotate-ship-button",n.appendChild(l);const c=document.createElement("span");c.classList.add("material-symbols-outlined"),c.textContent="rotate_right",l.appendChild(c)},renderPlaceShipsBoard:e,displayShipType:e=>{document.querySelector("#ship-type").textContent=e},renderShipToBePlaced:(e,t,r)=>{let o;for(let a=0;a<e.length;a++)o=r?document.querySelector(`[data-row="${t[0]}"][data-column="${t[1]+a}"]`):document.querySelector(`[data-row="${t[0]+a}"][data-column="${t[1]}"]`),o.style.backgroundColor="#e5dace59"},clearShipToBePlaced:(e,t,r)=>{let o;for(let a=0;a<e.length;a++)o=r?document.querySelector(`[data-row="${t[0]}"][data-column="${t[1]+a}"]`):document.querySelector(`[data-row="${t[0]+a}"][data-column="${t[1]}"]`),o.style.backgroundColor="empty"==o.classList[1]?"#1e1c32":"#e5dace"},renderShip:(e,t,r)=>{let o;for(let a=0;a<e.length;a++)o=r?document.querySelector(`[data-row="${t[0]}"][data-column="${t[1]+a}"]`):document.querySelector(`[data-row="${t[0]+a}"][data-column="${t[1]}"]`),o.classList.add("hasShip"),o.style.backgroundColor="#e5dace",o.style.border="0.5px solid #1e1c32"},renderPlayButton:()=>{const e=document.querySelector("#ship-type-container"),t=document.createElement("button");t.id="play-button",t.textContent="Play!",e.appendChild(t)},renderGameView:()=>{const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.id="boards-container",e.appendChild(t);const r=document.createElement("div");r.id="player-container",t.append(r);const o=document.createElement("h3");o.textContent="You",o.classList.add("current-player-turn"),r.appendChild(o);const a=document.createElement("div");a.classList.add("board"),a.classList.add("player"),r.appendChild(a);const n=document.createElement("div");n.id="enemy-container",t.append(n);const d=document.createElement("h3");d.textContent="Computer",n.appendChild(d);const l=document.createElement("div");l.classList.add("board"),l.classList.add("enemy"),n.appendChild(l);const c=document.createElement("div");c.id="current-player-turn",c.textContent="Make your move",e.appendChild(c)},displayCurrentPlayerTurn:e=>{document.querySelector("#current-player-turn").textContent="player"==e?"Make your move":"Computer is making its move..."},renderGameboard:(e,t,r)=>{let o;for(let a=0;a<10;a++)for(let n=0;n<10;n++)o=document.createElement("div"),o.classList.add("square"),o.setAttribute("data-row",a),o.setAttribute("data-column",n),r?(o.classList.add("player"),"object"==typeof e.getSquare(a,n)[0]&&(o.style.backgroundColor="#e5dace",o.style.border="0.5px solid #1e1c32")):r||o.classList.add("enemy"),t.appendChild(o)},renderMoveToMake:(e,r)=>{t(e,r).style.backgroundColor="#e5dace59"},clearMoveToMake:(e,r)=>{t(e,r).style.backgroundColor="#1e1c32"},renderMove:(e,r,o)=>{console.log(r);let a=t(e,o);switch(r){case"hit":a.classList.add("hit"),a.style.color="#1e1c32",a.style.backgroundColor="#e5dace",a.style.border="0.5px solid #1e1c32",a.textContent="X";break;case"sunk":a.style.color="#e5dace",a.style.backgroundColor="#e5dace59",a.style.border="0.5px solid #e5dace",a.textContent="X";break;case"miss":a.style.color="#e5dace",a.style.backgroundColor="#1e1c32",a.style.border="0.5px solid #e5dace",a.textContent="*"}}}}},417:(e,t,r)=>{const o=r(507),a=r(643),n=r(642);e.exports=()=>{const e=n(),t=[a("Carrier",5),a("Battleship",4),a("Destroyer",3),a("Submarine",3),a("Patrol Boat",2)],r=o(),d=o();let l=!0,c=0,s=!1;const u=()=>{l=1!=l},i=e=>[parseInt(e.getAttribute("data-row")),parseInt(e.getAttribute("data-column"))],m=()=>{document.querySelector("#rotate-ship-button").addEventListener("click",u)},p=()=>{let o=document.querySelectorAll(".square");for(let a=0;a<o.length;a++)o[a].addEventListener("mouseover",(o=>{let a=i(o.currentTarget);!s&&b(a,t[c],l,r.gameboard)&&e.renderShipToBePlaced(t[c],a,l)})),o[a].addEventListener("mouseout",(o=>{let a=i(o.currentTarget);!s&&b(a,t[c],l,r.gameboard)&&e.clearShipToBePlaced(t[c],a,l)})),o[a].addEventListener("click",(o=>{let a=i(o.currentTarget);if(!s&&b(a,t[c],l,r.gameboard)){if(S(t[c],l,a,r.gameboard),e.renderShip(t[c],a,l),c==t.length-1)return document.querySelector("#ship-type-container").innerHTML="",s=!0,e.renderPlayButton(),void y();c++,e.displayShipType(t[c].type)}}))},y=()=>{document.querySelector("#play-button").addEventListener("click",(t=>(g(d.gameboard),e.renderGameView(),e.displayCurrentPlayerTurn("player"),e.renderGameboard(r.gameboard,document.querySelector(".board.player"),!0),e.renderGameboard(d.gameboard,document.querySelector(".board.enemy"),!1),void h())))},h=()=>{let t=document.querySelectorAll(".square.enemy");for(let r=0;r<t.length;r++)t[r].addEventListener("mouseover",(t=>{let r=i(t.currentTarget);k(r,d.gameboard)&&e.renderMoveToMake(r,"enemy")})),t[r].addEventListener("mouseout",(t=>{let r=i(t.currentTarget);k(r,d.gameboard)&&e.clearMoveToMake(r,"enemy")})),t[r].addEventListener("click",(t=>{let r=i(t.currentTarget);k(r,d.gameboard)&&(f(r),e.renderMove(r,v(r),"enemy"),C(d.gameboard,"enemy"))}))},g=e=>{let r=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],o=1==Math.floor(2*Math.random());for(let a=0;a<t.length;a++){for(;!b(r,t[a],o,e);)r=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],o=1==Math.floor(2*Math.random());S(t[a],o,r,e)}},b=(e,t,r,o)=>{if(r&&e[1]+t.length-1>9)return!1;if(!r&&e[0]+t.length-1>9)return!1;for(let a=0;a<t.length;a++)if(r){if("empty"!=o.getSquare(e[0],e[1]+a)[0])return!1}else if("empty"!=o.getSquare(e[0]+a,e[1])[0])return!1;return!0},S=(e,t,r,o)=>{let a=[];for(let o=0;o<e.length;o++)t?a.push([r[0],r[1]+o]):a.push([r[0]+o,r[1]]);o.placeShip(e,a)},f=(t=null)=>{r.attack(d.gameboard,t),e.displayCurrentPlayerTurn()},k=(e,t)=>{let r=t.getSquare(e[0],e[1]);return!("miss"==r[1]|"sunk"==r[1]|"hit"==r[1])},v=e=>{let t=d.gameboard.getSquare(e[0],e[1]);if("object"==typeof t[0])return"hit";switch(t[1]){case"":case"miss":return"miss";case"hit":return"hit";case"sunk":return"sunk"}},C=(t,r)=>{console.log("renderSunkShips");for(let o=0;o<10;o++)for(let a=0;a<10;a++)console.log("Square"+t.getSquare(o,a)[1]),"sunk"==t.getSquare(o,a)[1]&&e.renderMove([o,a],"sunk",r)};return{start:()=>{e.renderPlaceShipsView(),e.displayShipType(t[c].type),u(),m(),p()}}}},498:e=>{e.exports=()=>{let e=[],t=0,r=0;for(let t=0;t<10;t++){e[t]=[];for(let r=0;r<10;r++)e[t][r]=["empty",""]}return{get missedAttacks(){return missedAttacks},get board(){return e},getSquare:(t,r)=>e[t][r],placeShip:(r,o)=>{for(let a=0;a<o.length;a++)coordinates=o[a],e[coordinates[0]][coordinates[1]][0]=r,t++},receiveAttack:t=>{if("object"==typeof e[t[0]][t[1]][0]){if(e[t[0]][t[1]][0].hit(),e[t[0]][t[1]][1]="hit",e[t[0]][t[1]][0].isSunk()){r++;let o=0;for(let r=0;r<10;r++)for(let a=0;a<10&&(e[r][a][0].type!=e[t[0]][t[1]][0].type||(e[r][a][1]="sunk",o++,o!=e[t[0]][t[1]][0].length));a++);e[t[0]][t[1]][1]="sunk"}}else e[t[0]][t[1]][1]="miss"},allShipsSunk:()=>r==t}}},507:(e,t,r)=>{const o=r(498);e.exports=()=>{const e=o();return{get gameboard(){return e},attack:(e,t)=>{e.receiveAttack(t)},automatedAttack:async function(e){let t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=e.getSquare(t[0],t[1]);for(;"miss"==r[1]|"sunk"==r[1]|"hit"==r[1];)t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=e.getSquare(t[0],t[1]);setTimeout((function(){e.receiveAttack(t)}),2e3)}}}},643:e=>{e.exports=(e,t)=>{let r=0;return{get type(){return e},get length(){return t},hit:()=>{r++},isSunk:()=>t==r}}}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(642),r(643);const e=r(417);document.querySelector("#start-button").addEventListener("click",(t=>{e().start()}))})()})();