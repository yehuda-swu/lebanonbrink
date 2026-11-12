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
    sources:'Presentation slides 8 to 11. Library of Congress, Lebanon and the National Pact.'
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
    sources:'Presentation slides 10 and 15. Library of Congress, National Pact of 1943.'
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
    sources:'Presentation slides 13 to 16. US Department of State, Foreign Relations of the United States, 1958.'
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
    sources:'Presentation slides 18 to 25. UK House of Commons Library, Research Paper 07/08.'
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
    sources:'Presentation slides 26 to 29. UK House of Commons Library, Research Paper 07/08.'
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
  intro:{file:'videos/political_system_intro.mp4',poster:'assets/poster_political.jpg',length:'1 min 20 sec',title:'Lebanon’s political system',credit:'Extract from “It’s complicated: Lebanon’s political system” (TRT World video supplied by educator)',tip:'Notice the different religious communities and the way political positions were divided.'},
  '1943':{file:'videos/national_pact.mp4',poster:'assets/poster_pact.jpg',length:'1 min 40 sec',title:'The National Pact and early independence',credit:'Extract from “How Lebanon Descended Into Civil War” (documentary supplied by educator)',tip:'Which compromises helped the new state, and what tensions remained?'},
  '1970':{file:'videos/plo_in_lebanon.mp4',poster:'assets/poster_plo.jpg',length:'1 min 43 sec',title:'The PLO and rising tensions',credit:'Extract from “How Lebanon Descended Into Civil War” (documentary supplied by educator)',tip:'What was happening to state authority as armed organisations gained influence?'},
  '1975':{file:'videos/civil_war.mp4',poster:'assets/poster_war.jpg',length:'2 min 32 sec',title:'Lebanon descends into civil war',credit:'Extract from “How Lebanon Descended Into Civil War” (documentary supplied by educator)',tip:'Identify more than one factor that contributed to the outbreak of war.'}
};

let openDialog = null;

function esc(t){return String(t).replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function clamp(n){return Math.min(100,Math.max(0,n));}
function delta(n){return (n>0?'+':'')+n;}
function footer(){return `<footer class="footer shell"><span><b>STANDWITHUS UK</b> &nbsp; / &nbsp; EXPLORE EDUCATION</span><span>1920 TO 1975 &nbsp; • &nbsp; HISTORICAL DECISION SIMULATION</span><span>Source photographs adapted from the supplied presentation</span></footer>`;}
function nav(){return `<header class="topbar shell"><a href="#" class="brand" data-action="home" aria-label="Lebanon: A Nation on the Brink home"><span class="swu"><strong>StandWithUs</strong><small>UNITED KINGDOM</small></span><span class="brand-sep"></span><span class="explore">EXPLORE</span></a><nav class="top-actions" aria-label="Activity tools"><button class="navbtn" data-action="guide">Educator Guide</button><button class="navbtn" data-action="sources">Sources</button>${state.screen!=='home'?'<button class="navbtn ghost" data-action="reset">Reset</button>':''}</nav></header>`;}
function frame(content){app.innerHTML=`${nav()}<main class="shell" id="mainContent">${content}</main>${footer()}`;}
function meters(){return `<div class="meters" aria-label="Hypothetical simulation indicators"><div class="meter"><div class="meter-top">NATIONAL STABILITY <b>${state.stability}</b></div><div class="meter-track"><div class="meter-fill" style="width:${state.stability}%"></div></div><div class="meter-note">Simulation only</div></div><div class="meter"><div class="meter-top">STATE AUTHORITY <b>${state.authority}</b></div><div class="meter-track"><div class="meter-fill authority" style="width:${state.authority}%"></div></div><div class="meter-note">Simulation only</div></div></div>`;}
function clipCard(key,expanded=false){
 const v=VIDEO_CLIPS[key]; if(!v)return '';
 return `<details class="clip-card" ${expanded?'open':''}><summary class="clip-toggle"><span class="clip-play" aria-hidden="true">▶</span><span class="clip-label"><strong>WATCH THE ARCHIVE CLIP</strong><span>${esc(v.title)} · ${esc(v.length)} · optional</span></span><span class="clip-chevron" aria-hidden="true">⌄</span></summary><div class="clip-body"><video controls playsinline preload="none" poster="${esc(v.poster)}" aria-label="${esc(v.title)}"><source src="${esc(v.file)}" type="video/mp4">Your browser does not support embedded video.</video><div class="clip-copy"><p><b>WATCH FOR:</b> ${esc(v.tip)}</p><small>${esc(v.credit)}</small><p class="video-caution">Historical extracts supplied for the session. Educators should check the original source and publication permissions.</p></div></div></details>`;
}
function demographicBar(label,values){
 const groups=[{name:'Christian communities',n:values[0],cls:'christian'},{name:'Sunni Muslims',n:values[1],cls:'sunni'},{name:'Shia Muslims',n:values[2],cls:'shia'},{name:'Druze',n:values[3],cls:'druze'}];
 return `<div class="demo-group"><div class="demo-group-head"><b>${esc(label)}</b><span>Illustrative estimates</span></div><div class="demo-strip" role="img" aria-label="${esc(label)}: ${groups.map(g=>g.name+' '+g.n+' per cent').join(', ')}">${groups.map(g=>`<span class="demo-segment ${g.cls}" style="width:${g.n}%" title="${esc(g.name)}: ${g.n}%"></span>`).join('')}</div><div class="demo-lines">${groups.map(g=>`<div><span class="demo-key ${g.cls}"></span><span>${esc(g.name)}</span><b>${g.n}%</b></div>`).join('')}</div></div>`;
}
function intro(){
 frame(`<div class="intro-heading"><div class="eyebrow">FILE 00 / YOUR COUNTRY BRIEFING</div><h1>ONE COUNTRY.<br><em>MANY COMMUNITIES.</em></h1><p>Before you make your first decision, understand the divisions that shaped modern Lebanon.</p></div><section class="intro-layout"><div class="intro-card demographics"><div class="panel-top"><span class="panel-status">BACKGROUND INFORMATION</span><span class="panel-step">1920 TO TODAY</span></div><h2>Who lives in Lebanon?</h2><p>Lebanon is home to several religious communities, including Maronite and other Christians, Sunni Muslims, Shia Muslims and Druze. Religious identity became closely tied to political representation.</p>${demographicBar('Early period, around 1920',[53,23,19,5])}${demographicBar('More recent estimates in the presentation',[32,32,31,5])}<div class="census-note"><strong>Important:</strong> These rounded figures reproduce the presentation’s broad comparison. They are not precise or directly comparable census results. Lebanon’s last official census was in 1932, and current estimates vary by source and population counted. The categories describe religious communities, not separate ethnicities.</div></div><div class="intro-card offices"><div class="panel-top"><span class="panel-status">POLITICAL BACKGROUND</span><span class="panel-step">THE 1943 PACT</span></div><h2>How is power shared?</h2><p>In 1943, leading figures agreed to reserve the highest offices for members of different religious communities.</p><div class="office-list"><div><span class="office-icon">01</span><span><strong>PRESIDENT</strong><small>Maronite Christian</small></span></div><div><span class="office-icon">02</span><span><strong>PRIME MINISTER</strong><small>Sunni Muslim</small></span></div><div><span class="office-icon">03</span><span><strong>PARLIAMENT SPEAKER</strong><small>Shia Muslim</small></span></div></div><p class="office-footnote">The original parliamentary seat formula favoured Christians by six seats to five. Reforms after the civil war changed this to equal Christian and Muslim representation. Other religious communities also take part in Lebanon’s political life.</p><div class="thought-prompt"><strong>THINK ABOUT THIS</strong><p>If communities change in size over time, should their political representation change too?</p></div></div></section><section class="intro-video-row"><div><div class="eyebrow">VIDEO PRIMER</div><h2>See how it works</h2><p>A short explainer about Lebanon’s religious and political system. Watch together or move straight into the simulation.</p></div><div>${clipCard('intro',true)}</div></section><div class="intro-actions"><span>READY? You will advise an imaginary council through five real historical turning points.</span><button class="btn primary large" data-action="begin">ENTER THE COUNCIL <span class="arrow">→</span></button></div>`);
}
function progress(){return `<div class="stage-progress" aria-label="Five historical chapters">${CHAPTERS.map((c,i)=>`<div class="pitem ${i<state.index?'done':i===state.index?'current':''}" ${i===state.index?'aria-current="step"':''}><span>${c.year}</span><small>${i<state.index?'Complete':i===state.index?'Current chapter':'Upcoming'}</small></div>`).join('')}</div>`;}

function home(){
 frame(`<section class="hero"><div class="hero-copy"><div class="eyebrow"><span class="pulse"></span>EXPLORE / HISTORICAL SIMULATION</div><h1><span>A NATION</span><span class="gold">ON THE</span><span>BRINK.</span></h1><p class="hero-sub">Five moments. One fragile country. You advise Lebanon’s leaders as political choices become more difficult.</p><div class="hero-micro">LEBANON &nbsp; / &nbsp; 1920 TO 1975</div><label class="name-field"><span>COUNCIL NAME (OPTIONAL)</span><input id="councilName" name="councilName" type="text" maxlength="32" placeholder="Enter your team or first name" autocomplete="off" value="${esc(state.name)}"></label><div class="hero-buttons"><button class="btn primary large" data-action="start">START THE BRIEFING <span class="arrow">→</span></button><button class="btn outline large" data-action="how">HOW TO PLAY</button></div><div class="hero-timeline"><span>1920</span><span>1943</span><span>1958</span><span>1970</span><span>1975</span></div></div><div class="hero-visual" role="img" aria-label="Map of Israel and Lebanon from the Northern Arrows presentation, with historical photographs"><div class="hero-territory">THE LEVANT / HISTORICAL FILE</div><div class="map-stamp">HISTORY<br>IS NOT<br>SIMPLE</div><img class="hero-photo" alt="Historical image from the supplied Lebanon presentation" src="assets/archive_1920.jpg"><img class="hero-photo-small" alt="Photograph of Lebanese civil war from the supplied presentation" src="assets/archive_1975.jpg"><div class="hero-info">A STANDWITHUS UK EXPLORE ACTIVITY</div></div></section><div class="home-bottom"><strong>5 DECISIONS &nbsp; • &nbsp; 10 TO 12 MINUTES</strong><span>Works on a classroom screen or individual devices. No account required.</span></div>`);
}

function chapter(){
 const c=CHAPTERS[state.index]; const reveal=state.phase==='reveal';
 const chosen=reveal?c.options[state.answers.at(-1).choice]:null;
 const content=`<div class="game-head"><div><div class="eyebrow">LEBANON CRISIS COUNCIL / ${esc(state.name||'YOUR BRIEFING')}</div><div class="game-name">A NATION ON THE BRINK</div><small>Choose a response. Then discover what actually happened.</small></div>${meters()}</div>${progress()}
  <div class="game-layout"><section class="scene"><img class="scene-image" src="${esc(c.image)}" alt="Historical image from Northern Arrows presentation for the ${esc(c.year)} chapter"><div class="scene-shade"></div><div class="scene-over"><div class="scene-top"><div class="date-stamp">${esc(c.year)}</div><div class="scene-count">CHAPTER ${String(state.index+1).padStart(2,'0')} / 05</div></div><div class="scene-bottom"><div class="label">${esc(c.chapter)}</div><h2>${esc(c.sceneTitle)}</h2><p>${esc(c.scene)}</p><div class="photo-credit">${esc(c.imageCredit||'Visual source: supplied Northern Arrows presentation')}</div></div></div></section>
  ${reveal?renderReveal(c,chosen):renderDecision(c)}</div>`;
 frame(content);
}
function renderDecision(c){return `<section class="decision-panel" aria-label="Decision panel"><div class="panel-top"><span class="panel-status">COUNCIL BRIEFING</span><span class="panel-step">${state.index+1} OF 5</span></div><h2 class="panel-title">${esc(c.title)}</h2><p class="panel-desc">${esc(c.briefing)}</p><div class="question">${esc(c.question)}</div><div class="choices" role="group" aria-label="Choose your council recommendation">${c.options.map((o,i)=>`<button class="choice ${state.selected===i?'selected':''}" data-action="choose" data-index="${i}" aria-pressed="${state.selected===i?'true':'false'}"><span class="choice-id">${String.fromCharCode(65+i)}</span><span class="choice-text"><span class="choice-title">${esc(o.title)}</span><span class="choice-sub">${esc(o.sub)}</span></span></button>`).join('')}</div><div class="panel-bottom"><button class="btn primary fill large" data-action="confirm" ${state.selected===null?'disabled':''}>CONFIRM DECISION &nbsp; <span class="arrow">→</span></button><p class="decision-note">No single choice can rewrite history. Your indicators are hypothetical.</p></div></section>`;}
function renderReveal(c,chosen){
 const chips=(n,label)=>`<span class="effect-chip ${n<0?'down':''}">${esc(label)} ${delta(n)}</span>`;
 const last=state.index===CHAPTERS.length-1;
 return `<section class="decision-panel" aria-label="Historical reveal"><div class="reveal-banner"><span class="circle"></span>DECISION LOGGED / HISTORICAL FILE OPENED</div><h2 class="panel-title">What happened in ${esc(c.year)}?</h2><div class="result-choice">YOUR COUNCIL RECOMMENDED<strong>${esc(chosen.title)}</strong></div><div class="result-simulation"><div class="label">SIMULATED CONSEQUENCES</div><p>${esc(chosen.advice)}</p><div class="effect-chips">${chips(chosen.stability,'Stability')}${chips(chosen.authority,'Authority')}</div></div><div class="reality"><h3>THE HISTORICAL REALITY</h3><p>${esc(c.history)}</p><p class="significance"><b>WHY IT MATTERS:</b> ${esc(c.significance)}</p><p class="source-mini">${esc(c.sources)}</p></div>${clipCard(c.year)}<div class="panel-bottom"><button class="btn primary fill large" data-action="next">${last?'SEE YOUR FINAL BRIEFING':'CONTINUE TO NEXT CHAPTER'} <span class="arrow">→</span></button><p class="decision-note">Historical events are real. The council advice and scores are a teaching simulation.</p></div></section>`;
}
function interlude(){
 frame(`<div class="game-head"><div><div class="eyebrow">MIDPOINT BRIEFING</div><div class="game-name">AFTER THE 1958 CRISIS</div><small>Your council has completed three decisions.</small></div>${meters()}</div>${progress()}<section class="interlude"><div class="interlude-art" role="img" aria-label="Archival image from the Northern Arrows presentation"></div><div class="interlude-copy"><div class="eyebrow">THE CALM BEFORE THE STORM</div><h2>BEIRUT’S<br>GOLDEN<br>YEARS</h2><p>The 1960s brought a period of relative stability. Beirut became a major financial, cultural and tourist centre. Yet Lebanon’s political divides remained unresolved.</p><p style="font-size:14px;color:#e3d2a3;font-weight:800">A new crisis is approaching.</p><button class="btn primary large" data-action="after-interlude">CONTINUE TO 1970 <span class="arrow">→</span></button></div></section>`);
}
function finish(){
 const stable=state.stability>=57, controlled=state.authority>=54;
 let result=stable&&controlled?'A FRAGILE BALANCE':stable?'TRUST WITHOUT CONTROL':controlled?'CONTROL WITHOUT CONSENSUS':'A COUNTRY UNDER PRESSURE';
 const name=state.name?`${esc(state.name)}’s`:'Your';
 frame(`<section class="end"><div class="end-left"><div class="eyebrow">FINAL COUNCIL REPORT</div><h2>COULD YOU<br>HOLD IT<br>TOGETHER?</h2><p class="summary">You advised leaders through five difficult moments in Lebanon’s early history. These scores reflect the possible trade offs of your choices, not a historical prediction.</p><div class="final-title">${result}</div><p class="summary">National Stability: <b>${state.stability}/100</b><br>State Authority: <b>${state.authority}/100</b></p><div class="end-note"><strong>WHAT ACTUALLY HAPPENED?</strong><br>Lebanon descended into civil war in 1975. The war lasted until 1990. No one decision explains the outcome. Religious politics, armed movements, regional rivalries and weak institutions all mattered.</div><p class="summary">Next in your Northern Arrows session: the 1982 Lebanon War, the rise of Hezbollah and Israel’s northern border.</p><div class="end-actions"><button class="btn primary" data-action="restart">PLAY AGAIN</button><button class="btn outline" data-action="print">PRINT REPORT</button></div></div><div class="end-right"><div class="label">${name.toUpperCase()} FIVE DECISIONS</div><div class="results-list">${state.answers.map((a,i)=>`<div class="result-row"><span class="result-year">${CHAPTERS[i].year}</span><div class="result-text"><b>${esc(CHAPTERS[i].chapter)}</b>${esc(CHAPTERS[i].options[a.choice].title)}</div></div>`).join('')}</div><div class="thinrule"></div><h3 style="font:800 27px var(--display);color:var(--gold);margin:24px 0 8px">DISCUSS WITH YOUR GROUP</h3><p class="summary">Which decision was most difficult? Could any government satisfy all communities? Why is it difficult for a state to survive when armed groups operate outside its control?</p><div class="end-actions" style="margin-top:22px"><button class="btn flat" data-action="guide">EDUCATOR GUIDE</button><button class="btn flat" data-action="sources">VIEW SOURCES</button></div></div></section>`);
}
function draw(){if(state.screen==='home'){home();return;} if(state.screen==='intro'){intro();return;} if(state.screen==='end'){finish();return;} if(state.phase==='interlude'){interlude();return;} chapter();}
function start(){
 const input=document.getElementById('councilName');
 state.name=input?input.value.trim().slice(0,32):state.name;
 state.screen='intro';state.index=0;state.phase='decision';state.selected=null;state.stability=58;state.authority=54;state.answers=[];draw();window.scrollTo({top:0});
}
function begin(){state.screen='game';state.phase='decision';state.index=0;draw();window.scrollTo({top:0});}
function confirm(){if(state.selected===null||state.screen!=='game'||state.phase!=='decision')return;const c=CHAPTERS[state.index]; const ch=c.options[state.selected];state.stability=clamp(state.stability+ch.stability);state.authority=clamp(state.authority+ch.authority);state.answers.push({year:c.year,choice:state.selected});state.selected=null;state.phase='reveal';draw();}
function next(){if(state.screen!=='game'||state.phase!=='reveal')return;if(state.index===CHAPTERS.length-1){state.screen='end';draw();window.scrollTo({top:0});return;}if(state.index===2){state.phase='interlude';draw();window.scrollTo({top:0});return;}state.index++;state.phase='decision';draw();window.scrollTo({top:0});}
function toNextAfterInterlude(){state.index++;state.phase='decision';draw();window.scrollTo({top:0});}
function reset(){const previousName=state.name;state={screen:'home',name:previousName,index:0,phase:'decision',selected:null,stability:58,authority:54,answers:[]};closeModal();draw();window.scrollTo({top:0});}

function showModal(kind){openDialog=kind;let body='';let heading='';
 if(kind==='how'){
  heading='HOW TO PLAY';body=`<div class="eyebrow">FIVE SHORT HISTORICAL DECISIONS</div><ol><li><strong>Begin with the background briefing.</strong> Explore Lebanon’s religious communities and the system of political power sharing. Watch or skip the short video.</li><li><strong>Read each scenario.</strong> You represent an imaginary council advising Lebanon’s leaders at different moments in history.</li><li><strong>Choose one recommendation.</strong> Three options show different political trade offs.</li><li><strong>Open the historical file.</strong> Your stability and authority scores change, then you discover what really happened. Some reveals include an optional documentary extract.</li></ol><h3>THE TWO INDICATORS</h3><p><strong>National Stability</strong> represents public trust and the risk of division. <strong>State Authority</strong> represents the ability of the government to make and enforce decisions.</p><p class="disclaimer">The scores are hypothetical teaching tools. There is no perfect path, and your choices do not change historical events. Discuss each decision with your group before confirming.</p>`;
 }else if(kind==='guide'){
  heading='EDUCATOR GUIDE';body=`<div class="eyebrow">STANDWITHUS UK / EXPLORE</div><p><strong>Target group:</strong> Ages 16 to 17<br><strong>Duration:</strong> Approximately 12 to 15 minutes without clips, or 20 to 25 minutes with all clips and discussion<br><strong>Format:</strong> Individual, pairs or whole class on a projector</p><h3>LEARNING OBJECTIVES</h3><ul><li>Explain why power sharing was central to the creation of modern Lebanon.</li><li>Identify the role of the 1943 National Pact and 1958 crisis.</li><li>Explain why the PLO’s growing armed presence added pressure to an already fragile state.</li><li>Recognise the multiple causes of the civil war that began in 1975.</li><li>Connect Lebanon’s early instability with the later topics in the Northern Arrows session.</li></ul><h3>HOW TO RUN IT</h3><ol><li><strong>Opening:</strong> Use the introduction to compare religious communities and explain that the diagrams are rounded estimates, not recent census data. Pupils then join an imaginary advisory council, not real historical figures.</li><li><strong>Each chapter:</strong> Read the scenario, allow 45 to 60 seconds for discussion, then confirm a choice. Video clips are optional and can be skipped.</li><li><strong>Reveal:</strong> Ask one pupil to explain the difference between their proposal and what happened in history.</li><li><strong>After 1958:</strong> Use the golden years screen to emphasise that stability and underlying tensions can coexist.</li><li><strong>Finish:</strong> Compare different groups’ final scores and discuss whether either indicator alone can secure peace.</li></ol><h3>DISCUSSION QUESTIONS</h3><p><strong>1920:</strong> What makes a new country legitimate in the eyes of different communities?</p><p><strong>1943:</strong> Can a political compromise provide stability today but create problems tomorrow?</p><p><strong>1958:</strong> When can outside intervention help, and when can it make divisions worse?</p><p><strong>1970:</strong> What happens when a government does not control all armed groups in its territory?</p><p><strong>1975:</strong> Why would it be misleading to blame the civil war on only one group?</p><h3>IMPORTANT DISTINCTION</h3><p>The game is not a model capable of predicting history. Scores and the consequences of student choices are simplified classroom interpretations. The historical reveal describes actual events, regardless of the option chosen.</p><p class="disclaimer">Historical scope: 1920 to 1975. The introduction also uses approximate recent demographic estimates for comparison, not contemporary events in the game. This activity is a foundation for the later sections of the Northern Arrows presentation, not a complete history of Lebanon.</p>`;
 }else if(kind==='sources'){
  heading='HISTORICAL SOURCES';body=`<div class="eyebrow">PRESENTATION AND FURTHER READING</div><p>The historical reveals are based on the supplied Northern Arrows presentation and the sources below. The choices and score changes are imagined for educational discussion.</p>${SOURCE_LINKS.map(s=>s.url?`<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(s.title)} ↗</strong><span>${esc(s.desc)}</span></a>`:`<div class="source-link"><strong>${esc(s.title)}</strong><span>${esc(s.desc)}</span></div>`).join('')}<p class="disclaimer">Photographs are from the supplied presentation. Four shortened clips are derived from two videos supplied by the educator. TRT World branding is visible on the political system explainer. The other documentary retains its original on screen credits. Check permissions for photographs and video before public publication.</p>`;
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
