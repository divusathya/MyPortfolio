/* Divya P. portfolio — interactions (plain JavaScript, no framework) */
(function () {
  "use strict";

  /* ---- Project data used by the detail modal ---- */
  var PROJECTS = {
  "asateel": {
    "title": "Asateel 1.0 & 2.0",
    "client": "Integrated Transport Centre (ITC) — Dept of Transport Abu Dhabi",
    "category": "Fleet & Logistics",
    "description": "End-to-end product design for Asateel – the national platform for commercial freight regulation. Led UX for permit management, operator onboarding, violation tracking, and real-time fleet compliance. Scaled from 1.0 to 2.0 with a unified design system used across 50k+ operators.",
    "image": "images/img-01.jpg"
  },
  "etmp": {
    "title": "ETMP — Enterprise Transportation Management",
    "client": "RTA Dubai",
    "category": "Transportation & Mobility",
    "description": "",
    "image": "images/img-02.png"
  },
  "rasid": {
    "title": "RASID SUS10",
    "client": "Dubai Municipality",
    "category": "Waste & Environment",
    "description": "Sustainability product for Dubai Municipality to monitor waste collection, street cleaning compliance, and sustainability KPIs. Designed inspector mobile flows and analytics for SUS10 initiative with emphasis on field usability.",
    "image": "images/img-03.png"
  },
  "roro": {
    "title": "RoRo Application",
    "client": "Abu Dhabi Ports",
    "category": "Fleet & Logistics",
    "description": "Port operations tool for vehicle import/export logistics. Streamlined booking, yard allocation, customs documentation and gate-in/out flows for high-volume terminal operations.",
    "image": "images/img-04.jpg"
  },
  "sts": {
    "title": "STS — Smart Track System",
    "client": "RTA Dubai",
    "category": "Transportation & Mobility",
    "description": "Safety-critical tracking for school buses with driver behavior monitoring, parent app integration, route compliance and emergency response. Designed for trust and clarity under regulatory scrutiny.",
    "image": "images/img-05.png"
  },
  "cabman": {
    "title": "Cabman/Fleetman",
    "client": "Dubai Technologies",
    "category": "Fleet & Logistics",
    "description": "Login, mobile app and web tracking experience for cab and fleet operations.",
    "image": "images/img-06.jpg"
  },
  "hrms": {
    "title": "HRMS Website",
    "client": "Dubai Technologies",
    "category": "HR & Enterprise",
    "description": "Employee portal to manage employee data.",
    "image": "images/img-07.jpg"
  }
};

  /* ---- Typewriter in the hero ---- */
  var typed = document.getElementById("typed");
  if (typed) {
    var text = "Senior Product Designer | UI/UX Designer | UI Developer";
    var n = 0;
    var timer = setInterval(function () {
      typed.textContent = text.slice(0, ++n);
      if (n >= text.length) clearInterval(timer);
    }, 28);
  }

  /* ---- Reveal on scroll ---- */
  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      }, { threshold: 0.12 })
    : null;
  document.querySelectorAll(".reveal").forEach(function (el) {
    if (io) io.observe(el); else el.classList.add("in-view");
  });

  /* ---- Project filter tabs ---- */
  var ACTIVE = ["bg-[#12243e]", "text-white", "border-[#12243e]"];
  var IDLE = ["bg-white", "text-slate-600", "border-slate-200", "hover:border-slate-300"];
  var tabs = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("[data-project]");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var f = tab.getAttribute("data-filter");
      tabs.forEach(function (t) {
        var on = t === tab;
        ACTIVE.forEach(function (c) { t.classList.toggle(c, on); });
        IDLE.forEach(function (c) { t.classList.toggle(c, !on); });
      });
      cards.forEach(function (card) {
        var show = f === "All" || card.getAttribute("data-category") === f;
        card.style.display = show ? "" : "none";
        if (show) card.classList.add("in-view");
      });
    });
  });

  /* ---- Project detail modal ---- */
  var modal = document.getElementById("modal");
  function openProject(id) {
    var p = PROJECTS[id];
    if (!p) return;
    document.getElementById("m-img").src = p.image;
    document.getElementById("m-img").alt = p.title;
    document.getElementById("m-meta").textContent = p.category + " \u2022 " + p.client;
    document.getElementById("m-title").textContent = p.title;
    document.getElementById("m-desc").textContent = p.description;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeProject() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
  cards.forEach(function (card) {
    card.addEventListener("click", function () { openProject(card.getAttribute("data-project")); });
  });
  modal.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeProject);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display !== "none") closeProject();
  });

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- External links open in a new tab ---- */
  document.querySelectorAll("a[href]").forEach(function (a) {
    try {
      var u = new URL(a.getAttribute("href"), document.baseURI);
      if ((u.protocol === "http:" || u.protocol === "https:") && u.host !== location.host) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    } catch (e) {}
  });
})();
