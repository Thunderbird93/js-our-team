//Milestone 0
const team = [
    {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    image: '../img/wayne-barnett-founder-ceo.jpg',
    },

    {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    image: '../img/angela-caroll-chief-editor.jpg',
    },

    {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    image: '../img/walter-gordon-office-manager.jpg',
    },

    {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    image: '../img/angela-lopez-social-media-manager.jpg',
    },

    {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    image: '../img/scott-estrada-developer.jpg',
    },

    {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    image: '../img/barbara-ramos-graphic-designer.jpg',
    }, 
]


/*
Milestone 1
for (let employee of team){
    console.log(employee)
}
*/

//Milestone 3
const row = document.querySelector(".row");
for (let employee of team){
    let card = `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${employee.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${employee.nome}</h5>
                <p class="card-text">${employee.ruolo}</p>
            </div>
        </div>
    </div>`

 row.innerHTML += card;
}


