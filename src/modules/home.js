function createHomeTab() {
  let content = document.getElementById('content');
  let homeTab = document.createElement('div')
  homeTab.setAttribute('class', 'tab-body')
  
  let para1 = createParagraph("Welcome to the Brexit Club, home of the ruling prototypes.");
  homeTab.appendChild(para1);
  homeTab.appendChild(document.createElement('br'));

  let para2 = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est neque. Quisque mattis ultricies egestas. Sed condimentum venenatis finibus. Aliquam efficitur nibh at mauris porttitor, ullamcorper vulputate orci ullamcorper. Quisque sodales lacus non odio gravida, a venenatis tortor laoreet. Nunc eu velit venenatis, ornare mauris nec, faucibus ligula. Nam ac tempus orci, at mattis dolor. Praesent non molestie urna, elementum placerat dolor.");
  homeTab.appendChild(para2);
  homeTab.appendChild(document.createElement('br'));

  let para3 = createParagraph("Etiam vel enim scelerisque, posuere purus sed, iaculis massa. Sed ac quam iaculis, rhoncus arcu ac, porta dolor. Quisque et dui orci. Integer pharetra neque non odio iaculis, in bibendum urna mattis. Sed mattis vel tellus ac lacinia. Aliquam pulvinar augue sit amet nisi blandit aliquam. Sed rhoncus lacinia lorem, placerat feugiat arcu ultricies a.");
  homeTab.appendChild(para3);
  homeTab.appendChild(document.createElement('br'));

  let para4 = createParagraph("Proin feugiat lacinia ipsum in lacinia. Quisque lacinia libero sed eros dictum, eget faucibus ante bibendum. Integer nec orci dapibus, elementum turpis eu, porta nunc. Ut id est sed risus maximus vulputate quis vel magna. Cras pharetra mauris a vulputate porta. Aliquam scelerisque, orci at volutpat tempor, orci orci consectetur neque, vel finibus leo sapien ut ligula.");
  homeTab.appendChild(para4);

  content.appendChild(homeTab);
}

function createParagraph(text) {
  let paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

export {createHomeTab};