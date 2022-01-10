const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  
const teamContainerHTML = document.querySelector('.team-container');

for (let i=0; i<=team.length-1; i++){
    // Creation card general container
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamContainerHTML.append(teamCard);

    // Creation img container + img
    const imageContainer = document.createElement('div');
    imageContainer.className = 'card-image';
    teamCard.append(imageContainer);
    imageContainer.innerHTML=`<img src="img/${team[i].image}" alt="${team[i].role}"/>`

    // Creation description
    const textContainer = document.createElement('div');
    textContainer.className = 'card-text';
    teamCard.append(textContainer);
    textContainer.innerHTML=`<h3>${team[i].name}</h3> <p>${team[i].role}</p>`
}

const addMemberButton = document.getElementById('addMemberButton');

addMemberButton.addEventListener('click', function(){
    team.push({
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        image: document.getElementById('image').value,
    });
    
    for (let i=team.length-1; i<=team.length-1; i++){
        // Creation card general container
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamContainerHTML.append(teamCard);
    
        // Creation img container + img
        const imageContainer = document.createElement('div');
        imageContainer.className = 'card-image';
        teamCard.append(imageContainer);
        imageContainer.innerHTML=`<img src="${document.getElementById('image').value}"/>`
    
        // Creation description
        const textContainer = document.createElement('div');
        textContainer.className = 'card-text';
        teamCard.append(textContainer);
        textContainer.innerHTML=`<h3>${team[i].name}</h3> <p>${team[i].role}</p>`
    }
    
});
