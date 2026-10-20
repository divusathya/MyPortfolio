(function(){"use strict";
/* Edit this one line: your LinkedIn profile URL */
var LINKEDIN="https://www.linkedin.com/in/YOUR-PROFILE";
var $=function(s){return document.querySelector(s)};
document.querySelectorAll("[data-li]").forEach(function(a){a.href=LINKEDIN;a.target="_blank";a.rel="noopener noreferrer"});
$("#yr").textContent=new Date().getFullYear();

var P=[
["Asateel 1.0 & 2.0","Integrated Transport Centre, Abu Dhabi","Fleet & Logistics","End-to-end product design for Asateel, the national platform for commercial freight regulation. Led UX for permit management, operator onboarding, violation tracking and real-time fleet compliance. Scaled from 1.0 to 2.0 with a unified design system.","img-01.jpg"],
["ETMP: Enterprise Transportation Management","RTA Dubai","Transportation & Mobility","","img-02.png"],
["RASID SUS10","Dubai Municipality","Waste & Environment","Sustainability product to monitor waste collection, street cleaning compliance and sustainability KPIs. Designed inspector mobile flows and analytics with a focus on field usability.","img-03.png"],
["RoRo Application","Abu Dhabi Ports","Fleet & Logistics","Port operations tool for vehicle import and export. Streamlined booking, yard allocation, customs documents and gate-in and gate-out flows for high-volume terminals.","img-04.jpg"],
["STS: Smart Drive Testing System","RTA Dubai","Transportation & Mobility","Driver evaluation system for Dubai RTA road tests. Computer vision and sensor fusion act as a co-pilot for examiners, flagging driving errors while the examiner keeps final authority, with a full audit trail and candidate-facing test review.","img-05.png"],
["Cabman / Fleetman","Dubai Technologies","Fleet & Logistics","Login, mobile app and web tracking experience for cab and fleet operations.","img-06.jpg"],
["HRMS Website","Dubai Technologies","HR & Enterprise","Employee portal to manage employee data.","img-07.jpg"],
["DT.AE Website","Dubai Technologies","Web & Digital","The corporate website of Dubai Technologies (DT).","dt-ae.svg","https://dt.ae"]];
var cats=["All"].concat(P.map(function(p){return p[2]}).filter(function(c,i,a){return a.indexOf(c)===i}));
var tabs=$("#tabs"),grid=$("#grid");
function show(f){
  tabs.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed",b.textContent===f)});
  grid.innerHTML="";
  P.forEach(function(p,i){if(f!=="All"&&p[2]!==f)return;
    var b=document.createElement("button");b.className="pc";
    b.innerHTML='<img src="images/'+p[4]+'" alt="'+p[0]+'" loading="lazy"><div><b>'+p[0]+'</b><small>'+p[1]+'</small></div>';
    b.onclick=function(){open(i)};grid.appendChild(b)});
}
cats.forEach(function(c){var b=document.createElement("button");b.textContent=c;b.onclick=function(){show(c)};tabs.appendChild(b)});
show("All");

var m=$("#modal"),last;
function open(i){var p=P[i];last=document.activeElement;
  $("#m-img").src="images/"+p[4];$("#m-img").alt=p[0];$("#m-meta").textContent=p[2]+", "+p[1];
  $("#m-title").textContent=p[0];$("#m-desc").textContent=p[3];$("#m-desc").hidden=!p[3];
  var l=$("#m-link");l.hidden=!p[5];if(p[5]){l.href=p[5];l.textContent="Visit "+p[5].replace("https://","")}$("#m-conf").style.display=p[5]?"none":"";
  m.hidden=false;document.body.style.overflow="hidden";m.querySelector(".x").focus()}
function close(){m.hidden=true;document.body.style.overflow="";if(last)last.focus()}
m.querySelectorAll("[data-x]").forEach(function(e){e.onclick=close});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!m.hidden)close()});

/* Asateel case study: the lifecycle, shown as stops on a transit line */
var S=[
["Discover",["01|Requirements|Captured what examiners, the monitoring centre and candidates need from an evidence-based road test.","02|Business & User Analysis|Mapped each user group and what they must see on screen.","03|UX Research|Studied how examiners score a test and where manual judgement breaks down."]],
["Plan",["04|Information Architecture|Structured the examiner, monitoring and candidate-review areas.","05|User Flow|Mapped a test from start, through error flags, to the post-test summary.","06|Wireframes|Laid out the examiner tablet view and monitoring dashboards."]],
["Validate",["07|Prototype|Built clickable prototypes for the examiner iPad and dashboards.","08|Client/Stakeholder Review|Reviewed with RTA, keeping the examiner as final decision-maker.","09|Feedback & Revisions|Refined layouts and alerts after each review round.","10|Design Approval / Sign-off|Closed the designs with RTA sign-off."]],
["Design",["11|High-Fidelity UI Design|Designed clear screens for live error alerts, video review and test outcomes.","12|Design System & Components|Built reusable components shared across the product.","13|Design Documentation|Documented states, rules and specs for the developers."]],
["Deliver",["14|Developer Handoff|Handed specs and assets to engineering.","15|HTML/CSS/React Development|Built the front-end UI in HTML, CSS and React/Vue.","16|UI/UX QA|Checked every screen against the design before release.","17|Client/UAT Review|Supported RTA user acceptance testing.","18|Final Changes|Applied the last UAT changes.","19|Production Release|Supported the go-live."]],
["Improve",["20|Continuous Product Improvement|Fed examiner feedback and adoption friction back into UI refinements."]]];
var line=$("#line"),st=$("#stage");
function pick(n){
  line.style.setProperty("--p",n);
  line.querySelectorAll(".stop").forEach(function(b,i){b.setAttribute("aria-selected",i===n);b.classList.toggle("done",i<n)});
  var s=S[n];st.innerHTML="<h3>"+s[0]+"<small>"+s[1].length+(s[1].length>1?" steps":" step")+"</small></h3><ol class=\"steps\">"+s[1].map(function(x,i){var p=x.split("|");return'<li style="--d:'+i*60+'ms"><b>'+p[0]+"</b><div><strong>"+p[1]+"</strong><span>"+p[2]+"</span></div></li>"}).join("")+"</ol>";
}
S.forEach(function(s,i){var b=document.createElement("button");b.className="stop";b.setAttribute("role","tab");b.innerHTML="<i>"+(i+1)+"</i>"+s[0];b.onclick=function(){pick(i)};line.appendChild(b)});
pick(0);

var K=[["Product Design & UI/UX", ["End-to-End Product Design", "User Research", "User Journeys", "Information Architecture", "Wireframing", "Interactive Prototyping", "Usability Testing", "Responsive Web Design", "Mobile App Design", "Enterprise UX", "SaaS Platforms", "Dashboard Design", "Accessibility", "UX Writing"]], ["Design & Creative Tools", ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Adobe Dreamweaver", "Canva", "Framer", "FigJam", "Zeplin"]], ["AI Design Tools", ["ChatGPT", "Claude", "Google Gemini", "Figma AI/Make", "Google Stitch", "Uizard", "Freepik AI", "OpenArt AI", "Adobe Firefly", "Canva AI", "Vercel v0", "Lovable"]], ["Frontend Technologies", ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript", "Bootstrap", "Tailwind CSS", "Responsive Design", "Component Libraries", "Git"]], ["Design Systems & Collaboration", ["Design Tokens", "Component Libraries", "Design Documentation", "Developer Handoff", "Jira", "Confluence", "Notion", "Agile", "Scrum", "Stakeholder Management"]], ["Leadership & Product Strategy", ["End-to-End Product Delivery", "Design Leadership", "Team Mentoring", "Product Discovery", "Design Reviews", "Cross-Functional Collaboration", "Requirements Analysis", "Enterprise and Government Digital Platforms"]], ["SEO & Website Management", ["Search Engine Optimization (SEO)", "On-Page SEO", "Technical SEO Fundamentals", "Keyword Research", "Meta Titles and Descriptions", "Website Optimization", "Website Content Updates", "Website Maintenance", "Google Analytics", "Google Search Console", "Search Engine Ranking Improvement"]], ["Social Media & Digital Marketing", ["Social Media Account Management", "Social Media Content Planning", "Content Creation", "Graphic Design for Social Media", "Digital Marketing Campaigns", "Brand Awareness", "Social Media Post Design", "Campaign Creatives", "Audience Engagement", "Digital Content Management", "Performance Monitoring"]], ["Web & Content Management", ["WordPress", "Website Design and Maintenance", "Landing Page Design", "Content Management Systems (CMS)", "Website Hosting Fundamentals"]]];
var sk=$("#skills");sk.className="idx";
sk.innerHTML=K.map(function(k,i){return'<div class="ir rv"><span class="n">0'+(i+1)+"</span><h4>"+k[0]+"</h4><p>"+k[1].map(function(c,j){return'<span style="--d:'+(j*40+250)+'ms">'+c+"</span>"}).join("")+"</p></div>"}).join("");
var X=[["Product Designer / Senior UI/UX Designer", "Dubai Technologies (DT), Dubai, UAE", "2024 – Present", ["Own UX and UI design for enterprise, government and commercial products across transportation, fleet, logistics, tracking and waste management, from requirements through to launch.", "Turn business requirements into user journeys, flows and prototypes with Business Analysts, product managers and clients, and present design rationale to senior stakeholders.", "Design native iOS and Android apps alongside responsive web experiences, and real-time dashboards, live maps and monitoring screens.", "Create and maintain design systems, reusable UI components, icon sets and SVG assets so products stay consistent.", "Prepare developer handoff specs, then review built interfaces to protect quality.", "Use AI tools (ChatGPT, Canva AI, Adobe Firefly) for ideation, content and visual exploration, applying design judgment to what is kept."], 1], ["Senior UI Developer", "Dubai Technologies (DT), Dubai, UAE", "2016 – 2024", ["Built responsive, interactive interfaces with HTML5, CSS3, JavaScript, jQuery, React.js and AngularJS for enterprise, transportation, telematics and government solutions.", "Translated Figma, Adobe XD and Zeplin designs into production-ready UI across desktop, tablet and mobile.", "Produced wireframes, storyboards, user flows, site maps and design documentation.", "Created SVG icons, sprite assets, login interfaces and email templates used across products.", "Recognized with Employee of the Month (2016 and 2017) and the She-Tech Award (2023)."], 0], ["Sr. Web Developer & SEO Specialist", "Dimand Design & Advertising, Dubai, UAE", "Nov 2014 – Feb 2016", ["Designed and developed responsive websites and web applications for local clients, with SEO built in from the start.", "Built rightmovemortgages.ae, which reached the top 10 in Google search results.", "Managed domains, hosting and email setup, and tracked performance with Google Analytics and webmaster tools."], 0], ["Web Designer cum Developer", "Datasoft Networks (Pvt) Ltd., India / Saudi Arabia", "May 2005 – 2013", ["Designed and developed 80+ websites for VoIP-industry clients, including customer account portals with billing and profile management.", "Delivered 20+ websites for Saudi customers, including Arabic versions.", "Planned site structures, navigation and standards-compliant layouts; handled SEO strategy, keyword research and reporting."], 0]];
$("#tl").innerHTML=X.map(function(x){return'<div class="tr rv"><div class="th"><span class="dt">'+x[2]+(x[4]?"<em>Now</em>":"")+"</span><h3>"+x[0]+"</h3><p>"+x[1]+"</p></div><ul>"+x[3].map(function(b,i){return'<li style="--d:'+(i*90+300)+'ms">'+b+"</li>"}).join("")+"</ul></div>"}).join("");


var F="Product Design|UI/UX|Enterprise Applications|Mobile & Web|Design Systems|Dashboards & Data Visualization|Responsive Design|UI Development|WordPress|Website Design|Website Management|Website Hosting|Website Maintenance|SEO|Social Media Management|AI-Assisted Design".split("|");
function row(a){var s=a.map(function(t){return'<span class="cf">'+t+"</span>"}).join("");return s+s}
$("#mq1").innerHTML=row(F);

var A=[["Who I am","I\u2019m a Product Designer and UI/UX Designer with 10+ years of experience in product design and UI development, combined with 15+ years of experience in website design, development, hosting, and digital experiences."],
["What I specialize in","I specialize in transforming complex business requirements into simple, intuitive, and scalable digital products across enterprise web platforms, mobile applications, dashboards, monitoring systems, transportation, telematics, logistics, and government solutions. My experience covers the complete product design lifecycle\u2014from requirements gathering, user journeys, information architecture, wireframes, interaction design, high-fidelity UI, prototyping, design systems, and developer handoff to implementation and design QA."],
["Where design meets code","With a strong technical foundation in HTML, CSS, JavaScript, React.js, AngularJS, WordPress, and PHP, I bridge the gap between design and development, creating designs that are both user-focused and technically practical. I also have extensive experience creating responsive websites, corporate websites, client websites, HR websites, logos, icons, SVG assets, and visual design systems."],
["Beyond design","My web background extends beyond design into WordPress management, website management, website hosting, website maintenance, SEO, social media management, and digital optimization, giving me a broader understanding of how digital products perform beyond the design stage."]];
var acc=$("#acc");
A.forEach(function(x,i){var d=document.createElement("div");d.className="ai"+(i?"":" on");
  d.innerHTML='<button aria-expanded="'+(!i)+'">'+x[0]+'</button><div class="b"><div><p>'+x[1]+"</p></div></div>";
  d.firstChild.onclick=function(){var o=d.classList.toggle("on");d.firstChild.setAttribute("aria-expanded",o)};acc.appendChild(d)});

var g="08 09 10 11 13 14 15 16 17 18 19 20 24 25 26 27 28 12 21 22 23".split(" ").map(function(n){return'<img src="images/img-'+n+'.jpg" alt="" loading="lazy">'}).join("");
$("#gal").innerHTML=g+g;

/* Logo: built from parts that assemble on load (click to replay) */
var MK='<path class="ink pa" d="M465 323Q530 330 530 380V652H465Z"/><path class="ink pb" d="M555 323H620C720 323 793 400 793 490C793 590 720 652 640 652H585V595H640C690 595 730 555 730 490C730 430 690 380 630 380H555Z"/><path class="pq" fill="url(#gb)" d="M465 575C465 520 500 485 560 485H600C635 485 652 510 652 550C652 610 620 652 560 652H465Z"/><circle class="pd" cx="763" cy="318" r="25" fill="url(#gd)"/>';
var lg=$("#lg");lg.innerHTML=MK+'<text class="ink pt" x="627" y="845" text-anchor="middle">Divya</text><text class="pu" x="627" y="955" text-anchor="middle">Product Designer</text>';
$("#lgm").innerHTML=MK;
function asm(){lg.classList.remove("go");void lg.getBoundingClientRect();lg.classList.add("go")}
lg.addEventListener("click",asm);setTimeout(asm,250);
/* STS case study popup */
var PR=[["Discovery & Requirement Analysis", "Workshops with RTA stakeholders to unpack the existing manual evaluation, regulatory constraints, and the need for a 100% auditable evidence trail. Mapped legal touchpoints and examiner pain points on-field."], ["User Personas & Journey Mapping", "Defined three primary actors: Examiners (iPad-first, under pressure), Monitoring Officers (wall of live tests), and Candidates (anxiety, need for transparency). Charted emotional highs/lows from booking to result."], ["Information Architecture & User Flows", "Structured test lifecycles: Pre-check, Live evaluation, Auto-scored events, Review & sign-off. Ensured every tap on iPad creates a timestamped event for the dashboard."], ["Low-Fidelity Wireframes in XD", "Rapid grey-box explorations focused on thumb reach on iPad 10.9\", error logging under 2 taps, and split-view monitoring. Tested with 5 examiners using paper + XD mirror."], ["High-Fidelity UI Design in XD with Design System", "Built a full design system: 12px radius, 8pt spacing, semantic color for faults (amber/red), zero-clutter cards, and large hit targets for gloves. Dark + light variants for dashboard vs field."], ["Bootstrap Component Library Mapping", "Translated XD components to Bootstrap 5 atoms: .error-card, .live-grid-cell, .toast-fault. Documented spacing, states, and responsive breakpoints for .NET devs."], ["Client Collaboration via XD Cloud Share", "Live review sessions via XD Cloud. Stakeholders commented directly on flows, we resolved 47 comments in one sprint using versioned links and resolved status."], ["Client Approval & Sign-off", "Final prototype walkthrough with RTA leadership: end-to-end video-synced evaluation. Signed off on iPad interactions, compliance overlays, and watermarking logic."], ["Frontend Development - HTML5 + Bootstrap 5", "Converted XD to responsive HTML integrated into .NET MVC .cshtml views. Pair-programmed with .NET team for ViewModel binding and real-time SignalR feed for live grid."], ["QA & Iteration on iPad in Field", "On-track testing at Al Qusais testing yard. Tuned toast durations, glare contrast, and one-handed error logging while examiner walks around vehicle. Shipped v1.0."]],OV=[["My Role", "UI/UX Designer, End to End", "Research, Design System, Frontend handoff, Field QA"], ["Tools", "Adobe XD, Illustrator, HTML5, Bootstrap 5, .NET MVC", "XD Cloud"], ["Platforms", "Monitoring Dashboard, iPad Examiner App, Candidate Portal", "3 interconnected surfaces, 1 evidence ledger"], ["Deliverables", "Design System, XD Prototypes, Responsive HTML", "120+ components, 18 flows, .cshtml ready"]];
$("#csb").innerHTML='<div class="tags"><span class="chip">GovTech / RTA Dubai</span><span class="chip">UI/UX, .NET MVC, iPad</span></div><h3>Smart Drive Testing System</h3>'
+'<div class="fx"><div><small>Client</small><b>RTA Dubai</b></div><div><small>Role</small><b>UI/UX Designer, End to End</b></div><div><small>Timeline</small><b>4 Months, 2023</b></div><div><small>Platform</small><b>iPad + Web Dashboard</b></div></div>'
+'<h4><em>01</em>Project overview</h4><p>RTA Dubai\'s driving license test was entirely manual. Examiners carried paper checklists, relied on memory for minor/major faults, and results were prone to inconsistency and disputes. There was no real-time monitoring, no centralized data, and candidates had zero visibility into why they failed.</p>'
+'<p>The goal was to design and build an evidence-based, tablet-first testing system. A platform where examiners assess on iPad with tap-to-log faults, monitoring officers watch live tests from a control room, and candidates get a transparent, timestamped report. The challenge was to keep it simple enough for field use in 50\u00b0C heat, on the move, with gloves, while being robust enough for government compliance.</p>'
+'<div class="shots"><figure><img src="images/img-16.jpg" alt="STS live data view with examiner test cards" loading="lazy"><figcaption>Live data: examiners and their tests</figcaption></figure><figure><img src="images/img-17.jpg" alt="STS history data view with trip summary" loading="lazy"><figcaption>History data: trip summary</figcaption></figure></div>'
+'<h4><em>02</em>Overview</h4><div class="ov">'+OV.map(function(o){return"<div><small>"+o[0]+"</small><b>"+o[1]+"</b><span>"+o[2]+"</span></div>"}).join("")+"</div>"
+'<div class="prh"><div><span class="eb">03 / Process</span><h2>My Design Process</h2></div><p>10 deliberate steps from stakeholder discovery to iPad field QA. Built for RTA\'s compliance-first culture and desert conditions.</p></div><div class="pl">'+PR.map(function(p,i){var n=(i<9?"0":"")+(i+1);return'<div class="pr'+(n==="05"?" on":"")+'" style="--d:'+i*50+'ms"><div class="pn">'+n+"</div><div><h5>"+p[0]+"</h5><p>"+p[1]+"</p></div></div>"}).join("")+"</div>";
$("#csb").querySelectorAll(".pr").forEach(function(r){function on(){$("#csb").querySelectorAll(".pr").forEach(function(x){x.classList.toggle("on",x===r)})}r.addEventListener("mouseenter",on);r.addEventListener("click",on)});
var cs=$("#cs"),cl;
function csOpen(){cl=document.activeElement;cs.hidden=false;document.body.style.overflow="hidden";cs.querySelector(".card").scrollTop=0;cs.querySelector(".x").focus()}
function csClose(){cs.hidden=true;document.body.style.overflow="";if(cl)cl.focus()}
$("#cs-open").onclick=csOpen;cs.querySelectorAll("[data-cx]").forEach(function(e){e.onclick=csClose});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!cs.hidden)csClose()});
$("#lgf").innerHTML=MK;
/* Orbit: design tools (inner ring) and AI tools (outer ring) */
var DT=[["Fg","Figma"],["Xd","Adobe XD"],["Ps","Photoshop"],["Ai","Illustrator"],["Cv","Canva"],["Zp","Zeplin"]],AT=[["Fm","Figma Make"],["Cl","Claude"],["Lv","Lovable"],["Gp","ChatGPT"],["Gm","Gemini"],["Ff","Adobe Firefly"],["v0","Vercel v0"],["St","Google Stitch"]];
function ring(el,a,cls,r){el.innerHTML=a.map(function(t,i){return'<span class="bd" style="--a:'+360/a.length*i+"deg;--r:"+r+'px"><span class="ob '+cls+'" title="'+t[1]+'" aria-label="'+t[1]+'">'+t[0]+"</span></span>"}).join("")}
ring($(".r1"),DT,"",118);ring($(".r2"),AT,"ax",170);
/* AI tools: a collapsible row; tools slide in from the right, a highlight scans across them */
var EXT="svg",L=[["figma-make","Figma Make"],["claude","Claude"],["lovable","Lovable"],["chatgpt","ChatGPT"],["gemini","Google Gemini"],["stitch","Google Stitch"],["uizard","Uizard"],["freepik","Freepik AI"],["openart","OpenArt AI"],["firefly","Adobe Firefly"],["canva","Canva AI"],["v0","Vercel v0"]];
var ax=$("#aix"),ab=ax.querySelector("button"),ae=$("#aic");
ae.innerHTML=L.map(function(l){return'<span class="lgo" data-n="'+l[1]+'"><img src="images/logos/'+l[0]+"."+EXT+'" alt="'+l[1]+'"></span>'}).join("")+'<span class="more">and other GenAI platforms</span>';
var ac=[].slice.call(ae.querySelectorAll(".lgo")),ai=0,tm;
ac.forEach(function(c,i){c.style.setProperty("--d",i*55+150+"ms")});
function scan(){ac.forEach(function(c,i){c.classList.toggle("on",i===ai)});ai=(ai+1)%ac.length}
function go(){clearInterval(tm);if(ax.classList.contains("on")&&!matchMedia("(prefers-reduced-motion:reduce)").matches)tm=setInterval(scan,1300)}
ab.onclick=function(){var o=ax.classList.toggle("on");ab.setAttribute("aria-expanded",o);go()};
ae.addEventListener("pointerenter",function(){clearInterval(tm)});ae.addEventListener("pointerleave",go);
ac.forEach(function(c){c.addEventListener("pointerenter",function(){ac.forEach(function(x){x.classList.toggle("on",x===c)})})});
scan();go();
var sw=$("#sw");
sw.querySelectorAll("button").forEach(function(b){b.onclick=function(){document.documentElement.dataset.theme=b.dataset.t;sel();colors()}});
function sel(){sw.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.t===document.documentElement.dataset.theme)})}sel();

/* Hero: vehicles moving along routes. The cursor lights up the network. */
var cv=$("#fleet"),cx=cv.getContext("2d"),W,H,R=[],V=[],mx=-999,my=-999,C={};
function colors(){var s=getComputedStyle(document.documentElement);C.ac=s.getPropertyValue("--ac").trim();C.ln=s.getPropertyValue("--line").trim()}
function build(){
  var d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
  var G=64,D=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];R=[];V=[];
  for(var r=0;r<(W<700?7:12);r++){
    var x=Math.round(Math.random()*W/G)*G,y=Math.round(Math.random()*H/G)*G,pts=[[x,y]],di=Math.floor(Math.random()*8),L=0;
    for(var k=0;k<9;k++){var n=Math.floor(Math.random()*3)+1;if(Math.random()<.6)di=(di+(Math.random()<.5?1:7))%8;
      x+=D[di][0]*G*n;y+=D[di][1]*G*n;pts.push([x,y])}
    var seg=[];for(var i=1;i<pts.length;i++){var l=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);seg.push(l);L+=l}
    R.push({p:pts,s:seg,L:L});V.push({r:r,t:Math.random(),v:.5+Math.random()*.7})}
}
function at(r,t){var d=t*r.L,i=0;while(i<r.s.length-1&&d>r.s[i]){d-=r.s[i];i++}var a=r.p[i],b=r.p[i+1],f=Math.min(d/r.s[i],1);return[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f]}
function routes(w,a){cx.lineWidth=w;cx.globalAlpha=a;R.forEach(function(r){cx.beginPath();r.p.forEach(function(p,i){i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1])});cx.stroke()})}
function frame(){
  cx.clearRect(0,0,W,H);cx.lineJoin="round";
  cx.strokeStyle=C.ln;routes(2,.55);
  cx.save();cx.beginPath();cx.arc(mx,my,190,0,7);cx.clip();cx.strokeStyle=C.ac;routes(2.5,.9);cx.restore();
  cx.globalAlpha=1;cx.fillStyle=C.ac;cx.shadowColor=C.ac;cx.shadowBlur=16;
  V.forEach(function(v){v.t+=v.v*.0006*(600/R[v.r].L)*60/60;if(v.t>1)v.t=0;
    for(var k=0;k<6;k++){var q=at(R[v.r],Math.max(v.t-k*.004,0));cx.globalAlpha=1-k/6;cx.beginPath();cx.arc(q[0],q[1],4-k*.5,0,7);cx.fill()}});
  cx.shadowBlur=0;cx.globalAlpha=1;
  if(!matchMedia("(prefers-reduced-motion:reduce)").matches)requestAnimationFrame(frame);
}
colors();build();frame();
addEventListener("resize",function(){build()});
$("#top").addEventListener("pointermove",function(e){var b=cv.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var tl=$("#tl");function fill(){var r=tl.getBoundingClientRect();tl.style.setProperty("--f",Math.max(0,Math.min(1,(innerHeight*.65-r.top)/r.height)))}
addEventListener("scroll",fill,{passive:true});fill();
})();
