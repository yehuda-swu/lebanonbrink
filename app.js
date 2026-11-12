'use strict';

/*
  Lebanon: A Nation on the Brink
  StandWithUs UK Explore
  Static educational simulation for GitHub Pages.
  Simulation indicators are hypothetical teaching devices, NOT historical data.
*/

const CHAPTERS = [
  {
    year:'1920', chapter:'THE NEW STATE', title:'A country is created',
    sceneTitle:'A COUNTRY IS CREATED', image:'assets/archive_1920.jpg',
    scene:'After the First World War, France proclaims Greater Lebanon. The new state contains communities with different identities, interests and political ambitions.',
    briefing:'You are advising the authorities of the newly proclaimed state. Some leaders favour a strong central government. Others fear losing their influence.',
    question:'How should political power be organised?',
    options:[
      {title:'Concentrate power at the centre', sub:'Give one administration the final say.', stability:-13, authority:13, advice:'A stronger centre could act quickly, but communities excluded from power may resist.'},
      {title:'Negotiate shared political power', sub:'Bring the main communities into government.', stability:13, authority:5, advice:'A wider agreement may build trust, although reaching decisions could take longer.'},
      {title:'Give regions greater autonomy', sub:'Let communities manage more of their own affairs.', stability:7, authority:-9, advice:'Local autonomy may reduce some tensions, but it could weaken national institutions.'}
    ],
    history:'In 1920, French authorities proclaimed the State of Greater Lebanon. Its borders brought together communities whose visions for the new country differed. France continued to govern under the mandate system.',
    significance:'The question of how to share power would shape the country for decades.',
    sources:'Presentation slides 8 to 11. Library of Congress, Lebanon and the National Pact.',
    icon:'🗺️'
  },
  {
    year:'1943', chapter:'THE NATIONAL PACT', title:'Independence and compromise',
    sceneTitle:'A FRAGILE AGREEMENT', image:'assets/archive_1943.jpg',
    scene:'Lebanese leaders seek independence from France. They must agree how Christians and Muslims will share the country’s leading political offices.',
    briefing:'An informal power sharing agreement is on the table. It could secure a political bargain, but it may also lock religious identities into government.',
    question:'What settlement should leaders support?',
    options:[
      {title:'Agree fixed communal leadership roles',sub:'Reserve senior offices for major communities.',stability:12,authority:6,advice:'A clear bargain may make independence achievable, but fixed roles can be difficult to reform later.'},
      {title:'Demand a completely new electoral system',sub:'Remove reserved religious positions immediately.',stability:-10,authority:8,advice:'Equal access to office may be the long term aim, but a sudden overhaul could break the fragile agreement.'},
      {title:'Share power and promise future reviews',sub:'Secure agreement while opening a path to reform.',stability:9,authority:4,advice:'A compromise may attract support, but future reform depends on leaders honouring their promises.'}
    ],
    history:'The 1943 National Pact established an informal understanding: the president would be Maronite Christian, the prime minister Sunni Muslim and the speaker of parliament Shia Muslim. Lebanon gained independence in 1943; the last French troops departed in 1946.',
    significance:'The agreement helped hold a diverse country together, but reinforced a political system organised by religious community.',
    sources:'Presentation slides 10 and 15. Library of Congress, National Pact of 1943.', icon:'🏛️'
  },
  {
    year:'1958', chapter:'THE POLITICAL CRISIS', title:'A country divided',
    sceneTitle:'CRISIS IN BEIRUT', image:'assets/archive_1958.jpg', imageCredit:'US intervention image, supplied presentation slide 14',
    scene:'Lebanon is divided over President Camille Chamoun, Arab nationalism and regional alliances. Armed unrest has broken out. US troops land in Lebanon.',
    briefing:'The army is under pressure and political trust is weak. Opposing factions disagree about Lebanon’s direction.',
    question:'How can the country step back from conflict?',
    options:[
      {title:'Find a broadly accepted new president',sub:'Bring rival leaders into a political compromise.',stability:16,authority:5,advice:'A mutually acceptable successor might lower tensions, but some groups may still feel excluded.'},
      {title:'Rely mainly on foreign military support',sub:'Use outside forces to protect the government.',stability:-9,authority:11,advice:'Foreign support may protect the government in the short term, but it risks further political resentment.'},
      {title:'Strengthen internal security first',sub:'Put the army in charge of restoring order.',stability:-8,authority:9,advice:'The state may regain control, but force without political agreement could deepen divisions.'}
    ],
    history:'US forces intervened in July 1958. General Fuad Chehab was elected president, and political compromise helped end the immediate crisis. US troops departed later that year.',
    significance:'Lebanon entered a period of relative calm. Beirut became an important regional financial and cultural centre, but deeper political divisions remained.',
    sources:'Presentation slides 13 to 16. US Department of State, Foreign Relations of the United States, 1958.', icon:'⚖️'
  },
  {
    year:'1970', chapter:'THE PLO FACTOR', title:'Armed groups gain influence',
    sceneTitle:'A NEW ARMED PRESENCE', image:'assets/archive_1970.jpg',
    scene:'After conflict in Jordan, the Palestine Liberation Organisation strengthens its presence in Lebanon. Palestinian militants carry out attacks across the border into Israel.',
    briefing:'The Lebanese state struggles to control armed groups. Lebanese factions disagree sharply over whether the PLO should be allowed to operate independently.',
    question:'How should the state respond?',
    options:[
      {title:'Insist on state control of all weapons',sub:'Require armed organisations to obey the army.',stability:-8,authority:16,advice:'Clear state authority could reduce competing centres of power, but enforcing it may provoke clashes.'},
      {title:'Accept a negotiated PLO presence',sub:'Allow operations under agreed limitations.',stability:5,authority:-14,advice:'An agreement may avoid immediate confrontation, but the state could lose control of security.'},
      {title:'Seek mediation and rebuild institutions',sub:'Press regional partners to support an agreement.',stability:10,authority:4,advice:'Diplomacy might buy time and strengthen institutions, but other actors may refuse to cooperate.'}
    ],
    history:'The 1969 Cairo Agreement had already recognised a degree of Palestinian armed activity in Lebanon. Following the PLO’s expulsion from Jordan in 1970 and 1971, its presence in Lebanon grew. Attacks on Israel and Israeli retaliation intensified cross border pressures.',
    significance:'The PLO became one important factor in a wider struggle involving Lebanese factions, regional powers and the weakness of state institutions.',
    sources:'Presentation slides 18 to 25. UK House of Commons Library, Research Paper 07/08.', icon:'🛡️'
  },
  {
    year:'1975', chapter:'THE BREAKING POINT', title:'The civil war begins',
    sceneTitle:'THE BREAKING POINT', image:'assets/archive_1975.jpg',
    scene:'Violence between Lebanese militias and Palestinian armed groups escalates. Years of political inequality, sectarian mistrust and outside interference have left the country deeply divided.',
    briefing:'Armed factions mobilise, civilians are at risk and national institutions are struggling to hold.',
    question:'What should leaders try first?',
    options:[
      {title:'Call an immediate ceasefire and dialogue',sub:'Bring rival factions to the negotiating table.',stability:13,authority:3,advice:'Talks could prevent further violence, but ceasefires are fragile when armed groups lack trust.'},
      {title:'Let each militia secure its own area',sub:'Reduce direct contact between opposing groups.',stability:-15,authority:-16,advice:'Separating rival groups might reduce some clashes, but risks breaking the country into competing territories.'},
      {title:'Order the army to enforce a ceasefire',sub:'Use national forces to separate armed groups.',stability:-8,authority:10,advice:'State action might restore order, but a divided army may struggle to act as a neutral force.'}
    ],
    history:'Violence escalated in April 1975 into the Lebanese Civil War, which lasted until 1990. The conflict involved many Lebanese factions, Palestinian groups and foreign powers. Its human and political costs were devastating.',
    significance:'Lebanon’s civil war cannot be explained by a single community or organisation. Several crises and rivalries overlapped, leaving the state unable to contain the violence.',
    sources:'Presentation slides 26 to 29. UK House of Commons Library, Research Paper 07/08.', icon:'⚡'
  }
];

const SOURCE_LINKS = [
  {title:'StandWithUs UK: Northern Arrows presentation',desc:'Original 78 slide presentation supplied for this activity. Relevant material is on slides 8 to 29.',url:''},
  {title:'Library of Congress: Lebanon’s constitutional system and National Pact',desc:'Primary background on the creation of Greater Lebanon and the 1943 political agreement.',url:'https://wwws.loc.gov/law/help/lebanon/contitutional-law.php'},
  {title:'US Department of State: Records of the 1958 Lebanon crisis',desc:'Contemporary diplomatic reporting on the US intervention and General Fuad Chehab.',url:'https://history.state.gov/historicaldocuments/frus1958-60v11/d141'},
  {title:'UK House of Commons Library: Lebanon research briefing',desc:'Background to sectarian politics, the Palestinian armed presence and the civil war.',url:'https://researchbriefings.files.parliament.uk/documents/RP07-08/RP07-08.pdf'},
  {title:'European Union Agency for Asylum: Lebanon country overview',desc:'The most recent national census was held in 1932; current religious population shares are estimates.',url:'https://www.euaa.europa.eu/lebanon-country-focus/1-country-overview'},
  {title:'US Department of State: Lebanon 2023 International Religious Freedom Report',desc:'Religious diversity and estimated population proportions, with important uncertainties.',url:'https://2021-2025.state.gov/wp-content/uploads/2024/05/5474992_LEBANON-2023-INTERNATIONAL-RELIGIOUS-FREEDOM-REPORT.pdf'},
  {title:'Lebanese Armed Forces: US policy and the 1958 crisis',desc:'An account of Chehab’s appointment and the end of the 1958 intervention.',url:'https://www.army.gov.lb/en/content/us-policy-towards-lebanon-hurdles-and-prospect'}
];

const app = document.getElementById('app');
const modalMount = document.getElementById('modalMount');
let state = {screen:'home',name:'',index:0,phase:'decision',selected:null,stability:58,authority:54,answers:[]};
const VIDEO_CLIPS = {
 intro: {file:'videos/political_system_intro.mp4',poster:'assets/poster_political.jpg',length:'1:36',range:'0:00 to 1:36',title:'How Lebanon’s political system works',credit:'TRT World',tip:'Which positions are allocated to which religious communities?'},
 '1920':{file:'videos/history_1920.mp4',poster:'assets/archive_1920.jpg',length:'2:28',range:'1:11 to 3:39',title:'The creation of Greater Lebanon',credit:'Hikma History',tip:'How did French rule and the new borders affect Lebanese communities?'},
 '1943':{file:'videos/history_1943.mp4',poster:'assets/archive_1943.jpg',length:'0:31',range:'3:39 to 4:10',title:'Independence and the National Pact',credit:'Hikma History',tip:'Why did leaders choose a system of power sharing?'},
 '1958':{file:'videos/history_1958.mp4',poster:'assets/archive_1958.jpg',length:'2:33',range:'4:10 to 6:43',title:'The 1958 crisis',credit:'Hikma History',tip:'Which internal and external pressures pushed the country towards unrest?'},
 golden:{file:'videos/history_golden.mp4',poster:'assets/hero_border.jpg',length:'0:34',range:'6:43 to 7:17',title:'Beirut’s golden years',credit:'Hikma History',tip:'What made Beirut prosperous, and why was this prosperity vulnerable?'},
 '1970':{file:'videos/history_1970.mp4',poster:'assets/archive_1970.jpg',length:'0:54',range:'7:13 to 8:07',title:'The PLO moves to Lebanon',credit:'Hikma History',tip:'What changed as non state armed organisations grew in influence?'},
 '1975':{file:'videos/history_1975.mp4',poster:'assets/archive_1975.jpg',length:'5:13',range:'8:07 to 13:20',title:'Lebanon descends into civil war',credit:'Hikma History',tip:'Identify three factors that caused the country to descend into conflict.'},
 final:{file:'videos/history_final.mp4',poster:'assets/archive_1975.jpg',length:'0:32',range:'13:20 to 13:52',title:'Final historical briefing',credit:'Hikma History',tip:'How did the civil war reshape Lebanon’s future?'}
};

// Fictional delegates illustrate distinct political pressures, not a unified view held by any entire community.
// All quotations are written for this educational simulation, not actual historical quotations.
const DELEGATES = {
 '1920': {
  people:[['✝','Maronite Christian delegate','Wants political guarantees for Christians'],['☪','Sunni Muslim delegate','Questions the new borders and mandate'],['◈','Druze delegate','Wants local communities heard']],
  replies:[
   ['“Central control could protect us, but whose interests will it serve?”','“A strong centre needs the consent of those who doubt this new state.”','“Local concerns cannot simply be overruled.”'],
   ['“We need safeguards in any agreement.”','“This is a better start if all communities can shape it.”','“Negotiation gives smaller communities a voice.”'],
   ['“Autonomy may protect our traditions, but can we govern together?”','“Regional power could deepen existing divisions.”','“Our local concerns might finally be heard.”']]
 },
 '1943':{
  people:[['✝','Maronite Christian delegate','Wants guarantees for a secure presidency'],['☪','Sunni Muslim delegate','Wants a meaningful share of power'],['◈','Shia Muslim delegate','Wants recognition and political influence']],
  replies:[
   ['“Reserved roles offer reassurance, but reform may become harder.”','“Representation matters, although the bargain is not perfect.”','“A formal role is a start, but influence must be real.”'],
   ['“Sudden change could unsettle the independence deal.”','“Open access is welcome, but how will we secure agreement?”','“Fairness matters, yet stability cannot be ignored.”'],
   ['“A future review is worth supporting if it is guaranteed.”','“An agreement with reform is more promising.”','“We will judge this by whether promised changes happen.”']]
 },
 '1958':{
  people:[['✝','Christian parliamentary delegate','Concerned about political continuity'],['☪','Sunni political delegate','Concerned about regional and Arab identity'],['⚖','Army representative','Wants to avoid a divided military']],
  replies:[
   ['“A widely accepted successor could restore confidence.”','“Compromise may avert a deeper conflict.”','“Political agreement gives the army a better chance to remain united.”'],
   ['“Outside forces may protect the government for now.”','“Foreign troops might harden opposition.”','“Security is easier to protect when Lebanese factions cooperate.”'],
   ['“Order is necessary, but a political settlement must follow.”','“Coercion alone will not address public grievances.”','“The army may not hold together if drawn into factional politics.”']]
 },
 '1970':{
  people:[['⚖','Lebanese army delegate','Wants a monopoly on armed force'],['✝','Christian political delegate','Fears a state within the state'],['☪','Palestinian representative','Wants space for Palestinian political aims']],
  replies:[
   ['“State authority must be clear, but enforcement carries risks.”','“Who guarantees that rival militias will disarm too?”','“A unilateral order may provoke armed confrontation.”'],
   ['“An agreement may avoid immediate fighting.”','“Limits are meaningless unless the state can enforce them.”','“This creates breathing room, if the terms are respected.”'],
   ['“Mediation only helps if weapons are brought under control.”','“We need a lasting solution, not another temporary promise.”','“Regional talks might provide an opening.”']]
 },
 '1975':{
  people:[['✝','Christian civilian delegate','Fears displacement and sectarian attacks'],['☪','Muslim civilian delegate','Demands safety and fair representation'],['⚖','Lebanese army delegate','Fears military fragmentation']],
  replies:[
   ['“A ceasefire could save lives if the militias respect it.”','“Talks must include real political reform.”','“Dialogue may keep the army from splintering.”'],
   ['“Local militias might protect people briefly, but divide the country.”','“Dividing neighbourhoods is not genuine peace.”','“Armed enclaves weaken national institutions.”'],
   ['“The army needs political support to act credibly.”','“Force without consent could worsen the crisis.”','“Our ranks are already under severe strain.”']]
 }
};

let openDialog = null;

function esc(t){return String(t).replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function clamp(n){return Math.min(100,Math.max(0,n));}
function delta(n){return (n>0?'+':'')+n;}
function footer(){return `<footer class="footer shell"><span><b>STANDWITHUS UK</b> &nbsp; / &nbsp; EXPLORE EDUCATION</span><span>1920 TO 1975 &nbsp; • &nbsp; HISTORICAL DECISION SIMULATION</span><span>Source photographs adapted from the supplied presentation</span></footer>`;}
function nav(){return `<header class="topbar shell"><a href="#" class="brand" data-action="home" aria-label="Lebanon: A Nation on the Brink home"><span class="swu"><strong>StandWithUs</strong><small>UNITED KINGDOM</small></span><span class="brand-sep"></span><span class="explore">EXPLORE</span></a><nav class="top-actions" aria-label="Activity tools"><button class="navbtn" data-action="guide">Educator Guide</button><button class="navbtn" data-action="sources">Sources</button>${state.screen!=='home'?'<button class="navbtn ghost" data-action="reset">Reset</button>':''}</nav></header>`;}
function frame(content){app.innerHTML=`${nav()}<main class="shell" id="mainContent">${content}</main>${footer()}`;}
function meters(){return `<div class="meters" aria-label="Hypothetical simulation indicators"><div class="meter"><div class="meter-top">NATIONAL STABILITY <b>${state.stability}</b></div><div class="meter-track"><div class="meter-fill" style="width:${state.stability}%"></div></div><div class="meter-note">Simulation only</div></div><div class="meter"><div class="meter-top">STATE AUTHORITY <b>${state.authority}</b></div><div class="meter-track"><div class="meter-fill authority" style="width:${state.authority}%"></div></div><div class="meter-note">Simulation only</div></div></div>`;}
function player(key,id='historyVideo',auto=true){
 const v=VIDEO_CLIPS[key]; if(!v)return '';
 return `<div class="film-card"><div class="film-head"><span class="film-live"><span class="pulse-dot"></span> ${auto?'HISTORICAL REVEAL':'BACKGROUND FILM'}</span><b>${esc(v.length)} • ${esc(v.credit)}</b></div><div class="film-stage"><video id="${esc(id)}" controls playsinline ${auto?'autoplay':''} preload="auto" poster="${esc(v.poster)}" aria-label="${esc(v.title)}"><source src="${esc(v.file)}" type="video/mp4">Your browser does not support video playback.</video></div><div class="film-bottom"><div><strong>${esc(v.title)}</strong><small>Credit: ${esc(v.credit)} • Source excerpt ${esc(v.range)}</small></div><button class="btn film-replay" data-action="play-clip" data-target="${esc(id)}">▶ PLAY FROM START</button></div><p class="film-prompt"><b>WATCH FOR:</b> ${esc(v.tip)}</p></div>`;
}
function startVideo(id){
 const v=document.getElementById(id); if(!v)return;
 try {v.currentTime=0; const promise=v.play(); if(promise&&typeof promise.catch==='function')promise.catch(()=>{const help=v.closest('.film-card')?.querySelector('.film-replay');if(help)help.classList.add('needs-click');});}catch(err){}
}
function clipCard(key,expanded=false){return player(key,'legacyVideo',false);}

function demographicPie(label,values,stamp){
 const names=['Christian communities','Sunni Muslims','Shia Muslims','Druze'];
 const colors=['#ecd09a','#76c1d8','#72bd98','#c29cdd'];
 let x=0;const segments=values.map((n,i)=>{const from=x;x+=n;return `${colors[i]} ${from}% ${x}%`;}).join(',');
 const legend=values.map((n,i)=>`<div class="pie-stat"><span class="pie-dot" style="background:${colors[i]}"></span><span>${names[i]}</span><b>${n}%</b></div>`).join('');
 return `<article class="pie-card"><div class="pie-heading"><strong>${esc(label)}</strong><span>Illustrative percentages</span></div><div class="pie-main"><div class="pie-ring" style="background:conic-gradient(${segments})" role="img" aria-label="${esc(label)}: ${names.map((n,i)=>n+' '+values[i]+' per cent').join(', ')}"><div class="pie-hole"><span>${esc(stamp)}</span><b>LEBANON</b></div></div><div class="pie-legend">${legend}</div></div></article>`;
}

function intro(){
 frame(`<div class="intro-heading"><div class="eyebrow">FILE 00 • BEFORE YOUR FIRST DECISION</div><h1>ONE COUNTRY.<br><em>MANY COMMUNITIES.</em></h1><p>To understand Lebanon’s crises, first understand its people and political system.</p></div>
 <section class="intro-video-hero"><div class="intro-video-copy"><span class="round-icon">▶</span><div class="eyebrow">START HERE / 01</div><h2>HOW DOES LEBANON’S GOVERNMENT WORK?</h2><p>Watch this short introduction to Lebanon’s unusual system of sharing political power.</p><p class="big-time">0:00 <span>TO</span> 1:36</p><span class="mutedline">Video provided by the educator • Credit: TRT World</span></div><div class="intro-featured-player">${player('intro','introVideo',false)}</div></section>
 <div class="background-heading"><div><div class="eyebrow">UNDERSTAND THE COUNTRY / 02</div><h2>WHO LIVES IN LEBANON?</h2></div><p>Religious communities shaped Lebanese politics. Compare the presentation’s estimates below.</p></div>
 <section class="pie-grid">${demographicPie('EARLY PERIOD • AROUND 1920',[53,23,19,5],'1920')}${demographicPie('MORE RECENT PRESENTATION ESTIMATES',[32,32,31,5],'RECENT')}</section>
 <div class="census-note big-census"><strong>IMPORTANT:</strong> These rounded estimates reproduce the supplied presentation. They are illustrative, not directly comparable census results. Lebanon’s last official population census was held in 1932. The categories are religious, not ethnic, and estimates vary.</div>
 <section class="pact-strip"><div><span class="round-icon">🏛</span><div class="eyebrow">THE 1943 NATIONAL PACT</div><h2>WHO GETS WHICH ROLE?</h2><p>The political system reserves senior positions for members of different communities.</p></div><div class="office-pills"><div><b>01 • PRESIDENT</b><strong>Maronite Christian</strong></div><div><b>02 • PRIME MINISTER</b><strong>Sunni Muslim</strong></div><div><b>03 • PARLIAMENT SPEAKER</b><strong>Shia Muslim</strong></div></div></section>
 <div class="question-strip"><span class="round-icon">?</span><div><b>DISCUSS BEFORE YOU BEGIN</b><p>Can dividing political power by religious community create stability and new tensions at the same time?</p></div><button class="btn primary large" data-action="begin">ENTER THE COUNCIL →</button></div>`);
}

function progress(){return `<div class="stage-progress" aria-label="Five historical chapters">${CHAPTERS.map((c,i)=>`<div class="pitem ${i<state.index?'done':i===state.index?'current':''}" ${i===state.index?'aria-current="step"':''}><span>${c.year}</span><small>${i<state.index?'Complete':i===state.index?'Current chapter':'Upcoming'}</small></div>`).join('')}</div>`;}

function home(){
 frame(`<section class="hero"><div class="hero-copy"><div class="eyebrow"><span class="pulse"></span>EXPLORE / HISTORICAL SIMULATION</div><h1><span>A NATION</span><span class="gold">ON THE</span><span>BRINK.</span></h1><p class="hero-sub">Five moments. One fragile country. You advise Lebanon’s leaders as political choices become more difficult.</p><div class="hero-micro">LEBANON &nbsp; / &nbsp; 1920 TO 1975</div><label class="name-field"><span>COUNCIL NAME (OPTIONAL)</span><input id="councilName" name="councilName" type="text" maxlength="32" placeholder="Enter your team or first name" autocomplete="off" value="${esc(state.name)}"></label><div class="hero-buttons"><button class="btn primary large" data-action="start">START THE BRIEFING <span class="arrow">→</span></button><button class="btn outline large" data-action="how">HOW TO PLAY</button></div><div class="hero-timeline"><span>1920</span><span>1943</span><span>1958</span><span>1970</span><span>1975</span></div></div><div class="hero-visual hero-visual-cracked" role="img" aria-label="Cracked map of Lebanon against a historical collage of Beirut, politics and conflict"><div class="hero-territory">LEBANON UNDER PRESSURE / HISTORICAL FILE</div><div class="hero-caption"><strong>FAULT LINES</strong><span>A country shaped by communities, compromise and crisis.</span></div><div class="hero-info">A STANDWITHUS UK EXPLORE ACTIVITY</div></div></section><div class="home-bottom"><strong>5 DECISIONS &nbsp; • &nbsp; 10 TO 12 MINUTES</strong><span>Works on a classroom screen or individual devices. No account required.</span></div>`);
}

function chapter(){
 const c=CHAPTERS[state.index];const reveal=state.phase==='reveal';
 if(reveal){revealPage(c,c.options[state.answers.at(-1).choice]);return;}
 const content=`<div class="game-head"><div><div class="eyebrow">LEBANON CRISIS COUNCIL / ${esc(state.name||'YOUR BRIEFING')}</div><div class="game-name">A NATION ON THE BRINK</div><small>Read the advisers’ views. Choose a response.</small></div>${meters()}</div>${progress()}
 <div class="game-layout"><section class="scene"><img class="scene-image" src="${esc(c.image)}" alt="Historical image from the Northern Arrows presentation for the ${esc(c.year)} chapter"><div class="scene-shade"></div><div class="scene-over"><div class="scene-top"><div class="date-stamp">${esc(c.year)}</div><div class="scene-count">CHAPTER ${String(state.index+1).padStart(2,'0')} / 05</div></div><div class="scene-bottom"><div class="scene-glyph" aria-hidden="true">${esc(c.icon)}</div><div class="label">${esc(c.chapter)}</div><h2>${esc(c.sceneTitle)}</h2><p>${esc(c.scene)}</p><div class="photo-credit">${esc(c.imageCredit||'Visual source: supplied Northern Arrows presentation')}</div></div></div></section>${renderDecision(c)}</div>`;
 frame(content);
}
function delegates(c){
 const d=DELEGATES[c.year]; if(!d)return '';
 return `<div class="delegates"><div class="delegate-heading"><span>◉ COUNCIL VOICES</span><small>${state.selected===null?'Three perspectives to consider':'YOUR CHOICE • HOW THEY RESPOND'}</small></div><div class="delegate-grid">${d.people.map((person,i)=>`<article class="delegate ${state.selected!==null?'reacting':''}"><div class="delegate-badge" aria-hidden="true">${person[0]}</div><div class="delegate-details"><b>${esc(person[1])}</b><p>${esc(state.selected===null?person[2]:d.replies[state.selected][i])}</p></div></article>`).join('')}</div><p class="delegate-note">These are fictional, illustrative delegates. No individual speaks for an entire community.</p></div>`;
}

function renderDecision(c){return `<section class="decision-panel" aria-label="Decision panel"><div class="panel-top"><span class="panel-status">LIVE COUNCIL MEETING</span><span class="panel-step">${state.index+1} OF 5</span></div><h2 class="panel-title">${esc(c.title)}</h2><p class="panel-desc">${esc(c.briefing)}</p><div class="question">${esc(c.question)}</div><div class="choices" role="group" aria-label="Choose your council recommendation">${c.options.map((o,i)=>`<button class="choice ${state.selected===i?'selected':''}" data-action="choose" data-index="${i}" aria-pressed="${state.selected===i?'true':'false'}"><span class="choice-id">${String.fromCharCode(65+i)}</span><span class="choice-text"><span class="choice-title">${esc(o.title)}</span><span class="choice-sub">${esc(o.sub)}</span></span></button>`).join('')}</div>${delegates(c)}<div class="panel-bottom"><button class="btn primary fill large" data-action="confirm" ${state.selected===null?'disabled':''}>CONFIRM DECISION & DISCOVER HISTORY →</button><p class="decision-note">The delegates are fictional. The decision scores are simulated, not historical facts.</p></div></section>`;}

function revealPage(c,chosen){
 const chips=(n,label)=>`<span class="effect-chip ${n<0?'down':''}">${esc(label)} ${delta(n)}</span>`;
 const last=state.index===CHAPTERS.length-1;
 frame(`<div class="reveal-superheading"><div class="eyebrow"><span class="pulse-dot"></span> ${esc(c.year)} • THE HISTORICAL FILE</div><h1>WHAT REALLY <em>HAPPENED?</em></h1><p>Your council has made its choice. Now discover what took place in Lebanon.</p></div>
 <section class="reveal-layout"><div class="reveal-main">${player(c.year,'historyVideo',true)}<div class="result-choice big-choice">YOUR COUNCIL CHOSE <strong>${esc(chosen.title)}</strong></div><div class="result-simulation"><div class="label">YOUR SIMULATED OUTCOME • NOT REAL HISTORY</div><p>${esc(chosen.advice)}</p><div class="effect-chips">${chips(chosen.stability,'Stability')}${chips(chosen.authority,'Authority')}</div></div></div>
 <aside class="reveal-side"><div class="history-stamp">${esc(c.icon)} ${esc(c.year)}</div><h2>THE REAL STORY</h2><p>${esc(c.history)}</p><div class="importance"><b>WHY IT MATTERS</b><p>${esc(c.significance)}</p></div><p class="source-mini">${esc(c.sources)}</p><button class="btn primary fill large" data-action="next">${last?'FINAL VIDEO BRIEFING':'CONTINUE TO NEXT CHAPTER'} →</button><p class="small-hint">You can replay the film or continue when ready.</p></aside></section>`);
 startVideo('historyVideo');
}

function interlude(){
 frame(`<div class="reveal-superheading"><div class="eyebrow">A SHORT HISTORICAL INTERLUDE • THE 1960s</div><h1>BEIRUT’S <em>GOLDEN YEARS.</em></h1><p>Following the 1958 crisis, a period of relative stability made Beirut a leading regional centre for banking, culture and tourism.</p></div><section class="reveal-layout"><div class="reveal-main">${player('golden','historyVideo',true)}</div><aside class="reveal-side"><div class="history-stamp">✨ 1960s</div><h2>THE PARIS OF THE MIDDLE EAST</h2><p>The city prospered during the 1960s. Yet political rivalries and inequalities remained. Stability did not mean that the country’s underlying problems had disappeared.</p><div class="importance"><b>DISCUSS</b><p>Why can a country appear prosperous while its institutions remain fragile?</p></div><button class="btn primary fill large" data-action="after-interlude">CONTINUE TO 1970 →</button></aside></section>`);
 startVideo('historyVideo');
}
function finalVideo(){
 frame(`<div class="reveal-superheading"><div class="eyebrow">FINAL HISTORICAL BRIEFING • 1975 TO 1990</div><h1>WHAT CAME <em>NEXT?</em></h1><p>One last archival extract before your final council report.</p></div><section class="reveal-layout"><div class="reveal-main">${player('final','historyVideo',true)}</div><aside class="reveal-side"><div class="history-stamp">📜 FINAL FILE</div><h2>LEBANON AT THE BRINK</h2><p>The civil war lasted until 1990. It was shaped by overlapping sectarian, political and regional struggles. The consequences changed the country's future.</p><div class="importance"><b>QUESTION FOR YOUR GROUP</b><p>What might help a divided society prevent armed organisations from replacing state institutions?</p></div><button class="btn primary fill large" data-action="see-report">SEE YOUR COUNCIL REPORT →</button></aside></section>`);
 startVideo('historyVideo');
}

function finish(){
 const stable=state.stability>=57, controlled=state.authority>=54;
 let result=stable&&controlled?'A FRAGILE BALANCE':stable?'TRUST WITHOUT CONTROL':controlled?'CONTROL WITHOUT CONSENSUS':'A COUNTRY UNDER PRESSURE';
 const name=state.name?`${esc(state.name)}’s`:'Your';
 frame(`<section class="end"><div class="end-left"><div class="eyebrow">FINAL COUNCIL REPORT</div><h2>COULD YOU<br>HOLD IT<br>TOGETHER?</h2><p class="summary">You advised leaders through five difficult moments in Lebanon’s early history. These scores reflect the possible trade offs of your choices, not a historical prediction.</p><div class="final-title">${result}</div><p class="summary">National Stability: <b>${state.stability}/100</b><br>State Authority: <b>${state.authority}/100</b></p><div class="end-note"><strong>WHAT ACTUALLY HAPPENED?</strong><br>Lebanon descended into civil war in 1975. The war lasted until 1990. No one decision explains the outcome. Religious politics, armed movements, regional rivalries and weak institutions all mattered.</div><p class="summary">Next in your Northern Arrows session: the 1982 Lebanon War, the rise of Hezbollah and Israel’s northern border.</p><div class="end-actions"><button class="btn primary" data-action="restart">PLAY AGAIN</button><button class="btn outline" data-action="print">PRINT REPORT</button></div></div><div class="end-right"><div class="label">${name.toUpperCase()} FIVE DECISIONS</div><div class="results-list">${state.answers.map((a,i)=>`<div class="result-row"><span class="result-year">${CHAPTERS[i].year}</span><div class="result-text"><b>${esc(CHAPTERS[i].chapter)}</b>${esc(CHAPTERS[i].options[a.choice].title)}</div></div>`).join('')}</div><div class="thinrule"></div><h3 style="font:800 27px var(--display);color:var(--gold);margin:24px 0 8px">DISCUSS WITH YOUR GROUP</h3><p class="summary">Which decision was most difficult? Could any government satisfy all communities? Why is it difficult for a state to survive when armed groups operate outside its control?</p><div class="end-actions" style="margin-top:22px"><button class="btn flat" data-action="guide">EDUCATOR GUIDE</button><button class="btn flat" data-action="sources">VIEW SOURCES</button></div></div></section>`);
}
function draw(){if(state.screen==='home'){home();return;} if(state.screen==='intro'){intro();return;} if(state.screen==='end'){finish();return;} if(state.screen==='finalvideo'){finalVideo();return;} if(state.phase==='interlude'){interlude();return;} chapter();}
function start(){
 const input=document.getElementById('councilName');
 state.name=input?input.value.trim().slice(0,32):state.name;
 state.screen='intro';state.index=0;state.phase='decision';state.selected=null;state.stability=58;state.authority=54;state.answers=[];draw();window.scrollTo({top:0});
}
function begin(){state.screen='game';state.phase='decision';state.index=0;draw();window.scrollTo({top:0});}
function confirm(){if(state.selected===null||state.screen!=='game'||state.phase!=='decision')return;const c=CHAPTERS[state.index]; const ch=c.options[state.selected];state.stability=clamp(state.stability+ch.stability);state.authority=clamp(state.authority+ch.authority);state.answers.push({year:c.year,choice:state.selected});state.selected=null;state.phase='reveal';draw();window.scrollTo({top:0});}
function next(){if(state.screen!=='game'||state.phase!=='reveal')return;if(state.index===CHAPTERS.length-1){state.screen='finalvideo';draw();window.scrollTo({top:0});return;}if(state.index===2){state.phase='interlude';draw();window.scrollTo({top:0});return;}state.index++;state.phase='decision';draw();window.scrollTo({top:0});}
function toNextAfterInterlude(){state.index++;state.phase='decision';draw();window.scrollTo({top:0});}
function reset(){const previousName=state.name;state={screen:'home',name:previousName,index:0,phase:'decision',selected:null,stability:58,authority:54,answers:[]};closeModal();draw();window.scrollTo({top:0});}

function showModal(kind){openDialog=kind;let body='';let heading='';
 if(kind==='how'){
  heading='HOW TO PLAY';body=`<div class="eyebrow">FIVE SHORT HISTORICAL DECISIONS</div><ol><li><strong>Begin with the background briefing.</strong> Explore Lebanon’s religious communities and the system of political power sharing. Watch or skip the short video.</li><li><strong>Read each scenario.</strong> You represent an imaginary council advising Lebanon’s leaders at different moments in history.</li><li><strong>Choose one recommendation.</strong> Three options show different political trade offs.</li><li><strong>Open the historical file.</strong> Your stability and authority scores change, then you discover what really happened. Each reveal opens a full historical video. Your browser may require you to press Play.</li></ol><h3>THE TWO INDICATORS</h3><p><strong>National Stability</strong> represents public trust and the risk of division. <strong>State Authority</strong> represents the ability of the government to make and enforce decisions.</p><p class="disclaimer">The scores are hypothetical teaching tools. There is no perfect path, and your choices do not change historical events. Discuss each decision with your group before confirming.</p>`;
 }else if(kind==='guide'){
  heading='EDUCATOR GUIDE';body=`<div class="eyebrow">STANDWITHUS UK / EXPLORE</div><p><strong>Target group:</strong> Ages 16 to 17<br><strong>Duration:</strong> Approximately 15 minutes without clips, or 30 minutes with all clips and discussion<br><strong>Format:</strong> Individual, pairs or whole class on a projector</p><h3>LEARNING OBJECTIVES</h3><ul><li>Explain why power sharing was central to the creation of modern Lebanon.</li><li>Identify the role of the 1943 National Pact and 1958 crisis.</li><li>Explain why the PLO’s growing armed presence added pressure to an already fragile state.</li><li>Recognise the multiple causes of the civil war that began in 1975.</li><li>Connect Lebanon’s early instability with the later topics in the Northern Arrows session.</li></ul><h3>HOW TO RUN IT</h3><ol><li><strong>Opening:</strong> Use the introduction to compare religious communities and explain that the diagrams are rounded estimates, not recent census data. Pupils then join an imaginary advisory council, not real historical figures.</li><li><strong>Each chapter:</strong> Read the scenario, allow 45 to 60 seconds for discussion, then confirm a choice. Historical clips are placed on the next screen after each choice and can be skipped.</li><li><strong>Reveal:</strong> Ask one pupil to explain the difference between their proposal and what happened in history.</li><li><strong>After 1958:</strong> Use the golden years screen to emphasise that stability and underlying tensions can coexist.</li><li><strong>Finish:</strong> Compare different groups’ final scores and discuss whether either indicator alone can secure peace.</li></ol><h3>DISCUSSION QUESTIONS</h3><p><strong>1920:</strong> What makes a new country legitimate in the eyes of different communities?</p><p><strong>1943:</strong> Can a political compromise provide stability today but create problems tomorrow?</p><p><strong>1958:</strong> When can outside intervention help, and when can it make divisions worse?</p><p><strong>1970:</strong> What happens when a government does not control all armed groups in its territory?</p><p><strong>1975:</strong> Why would it be misleading to blame the civil war on only one group?</p><h3>IMPORTANT DISTINCTION</h3><p>The game is not a model capable of predicting history. Scores and the consequences of student choices are simplified classroom interpretations. The historical reveal describes actual events, regardless of the option chosen.</p><p class="disclaimer">Historical scope: 1920 to 1975. The introduction also uses approximate recent demographic estimates for comparison, not contemporary events in the game. This activity is a foundation for the later sections of the Northern Arrows presentation, not a complete history of Lebanon.</p>`;
 }else if(kind==='sources'){
  heading='HISTORICAL SOURCES';body=`<div class="eyebrow">PRESENTATION AND FURTHER READING</div><p>The historical reveals are based on the supplied Northern Arrows presentation and the sources below. The choices and score changes are imagined for educational discussion.</p>${SOURCE_LINKS.map(s=>s.url?`<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(s.title)} ↗</strong><span>${esc(s.desc)}</span></a>`:`<div class="source-link"><strong>${esc(s.title)}</strong><span>${esc(s.desc)}</span></div>`).join('')}<p class="disclaimer">Photographs are from the supplied presentation. The political system introduction is credited to TRT World. Historical documentary extracts are credited to Hikma History. Videos are cut from the files supplied by the educator. Check permissions for photographs and video before public publication.</p>`;
 }else if(kind==='reset'){
  heading='RESET THE ACTIVITY?';body=`<p>This will clear your decisions and simulated scores and return to the welcome screen.</p><div class="modal-actions" style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" data-action="confirm-reset">YES, RESET</button><button class="btn outline" data-action="close-modal">KEEP PLAYING</button></div>`;
 }
 modalMount.innerHTML=`<div class="modal-overlay" data-action="overlay-close"><section class="modal" role="dialog" aria-modal="true" aria-label="${esc(heading)}"><button class="close" data-action="close-modal" aria-label="Close dialog">×</button><h2>${esc(heading)}</h2>${body}</section></div>`;
 const btn=modalMount.querySelector('.close');if(btn)btn.focus();
}
function closeModal(){modalMount.innerHTML='';openDialog=null;}

function handleAction(action,node){
 switch(action){
  case 'home': if(state.screen==='home')return;showModal('reset');break;
  case 'start': start();break;
  case 'begin':begin();break;
  case 'how': case 'guide': case 'sources': case 'reset':showModal(action);break;
  case 'choose': if(state.phase!=='decision')return;state.selected=Number(node.getAttribute('data-index'));draw();break;
  case 'confirm':confirm();break;
  case 'next':next();break;
  case 'play-clip':{const v=document.getElementById(node.getAttribute('data-target'));if(v){v.currentTime=0;v.play().catch(()=>{});}break;}
  case 'see-report':state.screen='end';draw();window.scrollTo({top:0});break;
  case 'after-interlude':toNextAfterInterlude();break;
  case 'restart':reset();break;
  case 'confirm-reset':reset();break;
  case 'close-modal':closeModal();break;
  case 'print':window.print();break;
  case 'overlay-close':closeModal();break;
  default: break;
 }
}
// Pause hidden video when its optional clip drawer is closed.
document.addEventListener('toggle',e=>{if(e.target?.matches?.('.clip-card')&&!e.target.open){const v=e.target.querySelector('video');if(v)v.pause();}},true);
// Single delegated handler supports refreshed screens without duplicate listeners.
document.addEventListener('click',e=>{
 const node=e.target.closest('[data-action]'); if(!node)return;
 if(node.tagName==='A')e.preventDefault();
 if(node.getAttribute('data-action')==='overlay-close'&&e.target!==node)return;
 handleAction(node.getAttribute('data-action'),node);
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&openDialog){closeModal();return;}
 if(openDialog)return;
 if(state.screen==='game'&&state.phase==='decision'&&['1','2','3'].includes(e.key)){
  state.selected=Number(e.key)-1;draw();
 }
});
draw();
