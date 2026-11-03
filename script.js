const data=window.SITE_DATA;
const grid=document.querySelector('#team-grid');
grid.innerHTML=data.characters.map(c=>`<article class="person"><img src="./assets/${c.image}" alt="Foto van ${c.name}" loading="lazy"><div class="person-info"><div class="person-tag">${c.tag}</div><h3>${c.name}</h3><p>${c.bio}</p></div></article>`).join('');
const list=document.querySelector('#chapter-list'),reader=document.querySelector('#reader');
let current=0;
function showChapter(i){current=Math.max(0,Math.min(data.chapters.length-1,i));const c=data.chapters[current];list.querySelectorAll('button').forEach((b,n)=>b.classList.toggle('active',n===current));reader.innerHTML=`<div class="reader-label">BOEK 01 · HOOFDSTUK ${String(current+1).padStart(2,'0')} / 10</div><h3>${c.title}</h3><div class="reader-body">${c.body}</div><div class="reader-controls"><button id="prev" ${current===0?'disabled':''}>← Vorige</button><button id="next" ${current===9?'disabled':''}>Volgende →</button></div>`;reader.querySelector('#prev').addEventListener('click',()=>showChapter(current-1));reader.querySelector('#next').addEventListener('click',()=>showChapter(current+1));}
list.innerHTML=data.chapters.map((c,i)=>`<button class="chapter-button" type="button"><span class="num">${String(i+1).padStart(2,'0')}</span><strong>${c.title}</strong></button>`).join('');
list.querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>showChapter(i)));
showChapter(0);
const menu=document.querySelector('.menu'),nav=document.querySelector('.topbar nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
