const img_folder = "img/";
let weblink = "#";
let github_link = "#";
let img_path = img_folder + "404.png";
let title = "UNAMED";
let date = "XX/XX/XX";
let desc = "NO DESCRIPTION";
// Default values

const Projects = {
  tictactoe : {
    name : "Tic-Tac-Toe",
    language : "ES",
    date : "07/22/22",
    web : true,
    weblink : "https://htmlpreview.github.io/?https://github.com/DaviD4Chirino/Tic-Tac-Toe/blob/main/index.html",
    git: true,
    github : "https://github.com/DaviD4Chirino/Tic-Tac-Toe",
    desc : "A simple game i coded for fun",
    // Include the extension file, pls
    image : "tictacttoe_main_screen.png"
  },
  web_scraper: {
    name : "Web Scraper",
    language : "EN",
    date : "08/06/22",
    web : true,
    weblink : "https://github.com/DaviD4Chirino/web-scraper",
    git: true,
    github : "https://github.com/DaviD4Chirino/web-scraper",
    desc : "A simple web scraper",
    // Include the extension file, pls
    image : "web_scaper.png"
  },
  the_think_principle: {
    name : "The T.H.I.N.K principle",
    language : "EN/ES",
    date : "08/03/22",
    web : true,
    weblink : "https://david4c.itch.io/the-think-principle",
    git: false,
    github : "https://github.com/DaviD4Chirino/web-scraper",
    desc : "The THINK pinciple is a text adventure game based on the world of Mandela Catalogue",
    // Include the extension file, pls
    image : "artworks-orebRnTeqiwsFP0t-Ai73NA-t500x500.jpg"
  },
};

function project_showcase(){
  for (var key in Projects) {
    var p = Projects[key];
    if (p.web) {
      weblink = p.weblink;
    };
    var github_button = ``
    if (p.git){
      github_button = `<a href="${p.github}" target="_blank" class="icon-button">
          <i class="bi bi-github"></i>
          <p class="icon-button-text">
            Visit the GitHub page!
          </p>
      </a>`
    };
    img_path = img_folder + p.image;
    date = p.date;
    desc = p.desc;
    title = p.name;

    var template = `<section class="project_showcase" id="${title}">

            <div class="body">
              <a href="${weblink}" target="_blank">

                <div class="col-1">
                  <img src="${img_path}" alt="${title}">
                </div>
                <div class="col-2">
                  <div class="project_title">
                    <h1>
                      ${title}
                    </h1>
                    <div class="date">
                      <b>${date}</b>
                    </div>
                  </div>
                  <div class="project_description">
                    <p>
                      ${desc}
                    </p>
                  </div>

                </div>
              </a>
            </div>
            ${github_button}
          </section>
          <hr>
`;
  weblink = "#";
  github_link = "#";
  img_path = img_folder + "404.png";
  title = "UNAMED";
  date = "XX/XX/XX";
  desc = "NO DESCRIPTION";
$("#tabs-2").prepend(`${template}`);
};


};

jQuery(document).ready(function($) {
  project_showcase();

});
