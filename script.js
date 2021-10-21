// - Creiamo il nostro array di oggetti che rappresentano ciascun 
//membro del team. Ogni membro dovrà avere le informazioni necessarie
// per stampare la relativa card: Nome, Ruolo e Foto.

//creo array
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    }
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg"
    }
    {
        nome: "Walter Gordon",
        ruolo: "Office Managaer",
        foto: "img/walter-gordon-office-manager.jpg"
    }
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-caroll-chief-editor.jpg",
    }
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg",
    }
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg",
    }
]


const cardContainer = document.getElementById("team-container")

function generaCard(team, content){
    //creo card
    const card = document.createElement('div');
    card.classList = 'team-card';

    const content = ` 
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${team.foto}"
                    alt=""
                />
            </div>
            <div class="card-text">
                <h3>${team.nome}</h3>
                <p>${team.ruolo}</p>
            </div>
        </div>
    `;

    cardContainer.innerHTML += content;
}
// - Prendendo come riferimento il layout di esempio presente 
//nell’html, stampiamo tutte le card del nostro team.

// - Utilizziamo poi gli input presenti nella pagina per
// permettere all’utente di aggiungere nuovi membri del team.

//creo array oggetti per ogni membro del team
//Nome, ruolo , foto

//Generare card in html del team

//aggiungere input per aggiungere card personalizzate