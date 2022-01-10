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
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');
  teamContainerHTML.append(teamCard);
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('card-image');
  imageContainer.append('teamCard');
  imageContainer.innerHTML=`<img src="${team[i][2]}" alt="${team[i][0]}"/>`
  const textContainer = document.createElement('div');
  textContainer.classList.add('card-text');
  imageContainer.innerHTML=`<h3>${team[i][0]}</h3> <p>${team[i][1]}</p>`
}