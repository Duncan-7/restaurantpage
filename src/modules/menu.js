function createMenuTab() {
  let content = document.getElementById('content');
  let menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'tab-body');
  let menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'menu-container');
  
  let item1 = createMenuItem("burger", "Bourgeois Burger, made of 100% ground Unicorn, with a side of battered diamond rings and potato wedge-issues");
  menuContainer.appendChild(item1);

  let item2 = createMenuItem("pie", "Steak and Ale Pie, get used to all the flavours you'll have to pretend to like when campaigning outside of London. Wonderful upper crust");
  menuContainer.appendChild(item2);

  let item3 = createMenuItem("oysters", "Offshore Oysters, with great treasures hidden behind an impenetrable shell (company) ");
  menuContainer.appendChild(item3);

  let item4 = createMenuItem("burger", "I've run out of time to come up with any more witty banter so I'm just going to write some stock descriptions");
  menuContainer.appendChild(item4);

  menuTab.appendChild(menuContainer);
  content.appendChild(menuTab);
}

function createMenuItem(food, description) {
  let item = document.createElement('div');
  item.setAttribute('class', 'menu-item');
  
  let image = document.createElement('img');
  image.setAttribute('class', 'menu-image');
  image.setAttribute('src', `images/${food}.jpg`);
  item.appendChild(image);

  let caption = document.createElement('div');
  caption.setAttribute('class', 'menu-caption');
  caption.textContent = description;
  item.appendChild(caption);

  return item;
}

export {createMenuTab};