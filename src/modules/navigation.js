function createFixtures() {
  let content = document.getElementById("content");

  let logo = title("The Brexit Club");
  content.appendChild(logo);

  navbar = navbar();
  content.appendChild(navbar);
}

function title(name) {
  let title = document.createElement('h1');
  title.textContent = name;
  return title;
}

function navbar() {
  let navbar = document.createElement('nav');

  let home = createNavigationLink("home");
  navbar.appendChild(home);
  let menu = createNavigationLink("menu");
  navbar.appendChild(menu);
  let contact = createNavigationLink("contact");
  navbar.appendChild(contact);

  return navbar;
}

function createNavigationLink(name) {
  let link = document.createElement('span');
  link.setAttribute('id', name);
  link.setAttribute('class', 'link');
  let text = name.charAt(0).toUpperCase() + name.slice(1);
  link.textContent = text;
  return link;
}

export {createFixtures};