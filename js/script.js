const headerContentMarkup = `
    <div class="logo">
      <a href="index.html?linkindex=0">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
      </a>
    </div>
      <div id="burger">
        <div class="bar topBar"></div>
        <div class="bar btmBar"></div>
      </div>
    <ul class="menu nav-menu">
      <li class="menu-item"><a href="contact.html?linkindex=0" class="link">Contact Me</a></li>
      <li class="menu-item"><a href="portfolio.html?linkindex=1" class="link">Portfolio</a></li>
      <li class="menu-item"><a href="index.html?linkindex=2" class="link">Home</a></li>
    </ul>
`
const footerContentMarkup = `
  <div class="left-footer">
    <div class="logo-2">
      <a href="index.html?linkindex=0">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#FAFAFA" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
      </a>
    </div>
    <ul class="footer-menu">
      <li class="menu-item-2"><a href="index.html?linkindex=2" class="link-2">Home</a></li>
      <li class="menu-item-2"><a href="portfolio.html?linkindex=1" class="link-2">Portfolio</a></li>
      <li class="menu-item-2"><a href="contact.html?linkindex=0" class="link-2">Contact Me</a></li>
    </ul>
  </div>
  <div class="right-footer">
    <div class="social-icons">
      <ul>
        <li><i class="fab fa-github" aria-hidden="true"></i></li>
        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
      </ul>
    </div>
  </div>
`
const headerContainer = document.querySelector('.header');
headerContainer.insertAdjacentHTML('afterbegin', headerContentMarkup);

const footerContainer = document.querySelector('.real-footer');
footerContainer.insertAdjacentHTML('afterbegin', footerContentMarkup);

function getParamByKey(key) {
  const params = new URLSearchParams(document.location.search.substring(1));
  let value = params.get(key);

  return value ? value : 0
}


function highlightActiveLink() {
  // call getParamByKey('linkindex')
  const activeLinkIndex = Number.parseInt(getParamByKey('linkindex'));

  document.querySelectorAll('.link').forEach((linkNode, index) => {
    if (activeLinkIndex === index) {
      // add active-page to proper link node
      linkNode.classList.add('active-page')
    }
  });
}

highlightActiveLink();

const header = document.querySelector('.header');
const burger = document.querySelector('#burger');
const menuItems = document.querySelector('.nav-menu');

const logoBlack = document.querySelector('.logo');
const logoWhite = document.querySelector('.logo-2');
    
burger.addEventListener('click', () => {
  header.classList.toggle('menu-opened');
  burger.classList.toggle('menu-opened');
  menuItems.classList.toggle('menu-opened');
});



