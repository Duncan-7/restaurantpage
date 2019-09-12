function createContactTab(){
  let content = document.getElementById('content');
  let contactTab = document.createElement('div');
  contactTab.setAttribute('class', 'tab-body');

  contactTab.innerHTML = 'Address: <br> 1 Old Boy\'s Avenue<br> London<br>N13 37H<br>United(ish) Kingdom<br><br>Phone Number:<br>1234567890<br><br>Email:<br>Rather gauche, don\'t you think?<br>';

  content.appendChild(contactTab);

  

}

export {createContactTab};