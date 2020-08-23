// animasi scroll
/**
 * JQUery
 */
//#region animasi scroll
$(document).on("click", ".page-scroll", function (e) {
  let $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 100,
      },
      1000,
      "easeInOutExpo"
    );
  e.preventDefault();
});

// animation navbar
//#region
window.addEventListener("scroll", function () {
  let navArea = document.querySelector("#navArea");

  if (window.pageYOffset > 100) {
    navArea.classList.remove("navbar-light");
    navArea.classList.remove("bg-transparent");
    navArea.classList.remove("navScrollBack");
    navArea.classList.add("navScroll");
  } else {
    navArea.classList.add("bg-transparent");
    navArea.classList.add("navbar-light");
    navArea.classList.add("navScrollBack");
    navArea.classList.remove("navScroll");
  }
});

let navArea = document.querySelector("#navArea");
navArea.addEventListener("click", function (e) {
  let beranda = document.querySelector("#beranda");
  let tentang = document.querySelector("#tentang");
  let hasil = document.querySelector("#hasil");
  let power = document.querySelector("#power");
  let span = document.querySelector(".navbar-toggler-icon");
  let id = e.target;

  if (id == beranda) {
    id.classList.add("active");
    tentang.className = "nav-item nav-link page-scroll";
    hasil.className = "nav-item nav-link page-scroll";
    power.className = "nav-item nav-link page-scroll";
    span.className = "navbar-toggler-icon";
  } else if (id == tentang) {
    id.classList.add("active");
    beranda.className = "nav-item nav-link page-scroll";
    hasil.className = "nav-item nav-link page-scroll";
    power.className = "nav-item nav-link page-scroll";
    span.className = "navbar-toggler-icon";
  } else if (id == hasil) {
    id.classList.add("active");
    tentang.className = "nav-item nav-link page-scroll";
    beranda.className = "nav-item nav-link page-scroll";
    power.className = "nav-item nav-link page-scroll";
    span.className = "navbar-toggler-icon";
  } else if (id == power) {
    id.classList.add("active");
    tentang.className = "nav-item nav-link page-scroll";
    hasil.className = "nav-item nav-link page-scroll";
    beranda.className = "nav-item nav-link page-scroll";
    span.className = "navbar-toggler-icon";
  } else {
    return false;
  }
});
//#endregion

/**
 * Javascript
 */
// vue
//#region mydetail
function setMyDetail(d) {
  return `  
  <ul
     class="list-group list-group-horizontal-xl">
    <li class="list-group-item">Name      :${d.name}</li>
    <li class="list-group-item">Address   :${d.alamat}</li>
    <li class="list-group-item">Email     :${d.email}</li>
    <li class="list-group-item">Whatsapp  :${d.Whatsapp}</li>
    <li class="list-group-item">Facebook  :${d.facebook}</li>
    <li class="list-group-item text-muted">
      ${d.bio}
    </li>
  </ul>
  `;
}

fetch("data/skill.json")
  .then((Response) => Response.json())
  .then((Response) => {
    const detail = Response;
    let detailMe = "";
    detail.forEach((d) => {
      detailMe += setMyDetail(d);
    });
    let rowDetail = document.querySelector("#detailMe");
    rowDetail.innerHTML = detailMe;
  });
//#endregion
//#region education
function setMyEducation(e) {
  return `
  <ul
    class="list-group list-group-horizontal-xl">
    <li class="list-group-item">${e.SD}</li>
    <li class="list-group-item">${e.SMP}</li>
    <li class="list-group-item">${e.SMK}</li>
    <li class="list-group-item">${e.PONPES}</li>
  </ul>
  `;
}

fetch("data/design.json")
  .then((Response) => Response.json())
  .then((Response) => {
    const edu = Response;
    let education = "";
    edu.forEach((e) => {
      education += setMyEducation(e);
    });
    let rowEducation = document.querySelector("#education-me");

    rowEducation.innerHTML = education;
  });
//#endregion
//#region exp
function setMyExperience(e) {
  return ` <ul class="list-group list-group-horizontal-xl">
    <li class="list-group-item">${e.mac}</li>
    <li class="list-group-item">${e.masterpiece}</li>
    <li class="list-group-item">${e.Preacher}</li>
    <li class="list-group-item">${e.Goatbutcher}</li>
  </ul>
  `;
}

fetch("data/experience.json")
  .then((Response) => Response.json())
  .then((Response) => {
    const exp = Response;
    let experience = "";
    exp.forEach((e) => {
      experience += setMyExperience(e);
    });
    let rowExperience = document.querySelector("#experience-me");
    rowExperience.innerHTML = experience;
  });

//#endregion

//#region my Portfolio
function setMySertifikat(s) {
  return `
<div class="col-md-4" >
    <div class="card">
     <img src="${s.src}" class="card-img-top" alt="sertifikat" />
     <div class="card-body">
       <p class="card-text">${s.nama}</p>
     </div>
   </div>
</div>
  `;
}

fetch("data/sertifikat.json")
  .then((Response) => Response.json())
  .then((Response) => {
    const sert = Response;
    let sertifikat = "";
    sert.forEach((s) => {
      sertifikat += setMySertifikat(s);
    });
    let rowSertifikat = document.querySelector("#sertifikatku");
    rowSertifikat.innerHTML = sertifikat;
  });

function setMyGrafik(g) {
  return `
  <div class="col-md-4">
    <div class="card">
      <img src="${g.url}" class="card-img-top" alt="Design" />
    </div>
  </div>
  `;
}

fetch("data/grafik.json")
  .then((Response) => Response.json())
  .then((Response) => {
    const graf = Response;
    let grafik = "";
    graf.forEach((g) => {
      grafik += setMyGrafik(g);
    });
    let rowGrafik = document.querySelector("#grafikD");
    rowGrafik.innerHTML = grafik;
  });

function setMyProject(p) {
  return `
  <div class="col-md-4">
    <div class="card">
      <img src="${p.src}" class="card-img-top" alt="Web apps" />
      <div class="card-body">
        <p class="card-text">${p.dt}</p>
      </div>
    </div>
  </div>
  `;
}

fetch("data/project.json")
  .then((Response) => Response.json())
  .then((Response) => {
    const pro = Response;
    let project = "";
    pro.forEach((p) => {
      project += setMyProject(p);
    });
    let rowProject = document.querySelector("#projectD");
    rowProject.innerHTML = project;
  });
//#endregion
