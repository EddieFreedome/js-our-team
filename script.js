// - Creiamo il nostro array di oggetti che rappresentano ciascun 
//membro del team. Ogni membro dovrà avere le informazioni necessarie
// per stampare la relativa card: Nome, Ruolo e Foto.


// - Utilizziamo poi gli input presenti nella pagina per
// permettere all’utente di aggiungere nuovi membri del team.

//creo array oggetti per ogni membro del team
//Nome, ruolo , foto

//Generare card in html del team

//aggiungere input per aggiungere card personalizzate

//creo array
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Managaer",
        foto: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg",
    },
    
]

const cardContainer = document.querySelector(".team-container")
cardContainer.innerHTML = ""
generaCard()
function generaCard(){
    //creo card per ogni...
    for (i = 0; i < team.length; i++){

        const content = ` 
            <div class="team-card">
                <div class="card-image">
                    <img
                        src="${team[i].foto}"
                        alt=""
                    />
                </div>
                <div class="card-text">
                    <h3>${team[i].nome}</h3>
                    <p>${team[i].ruolo}</p>
                </div>
            </div>
        `;

        cardContainer.innerHTML += content;
    }
}

//al click del pulsante, dagli input prendere i dati nome, ruolo e immagine
// e creare un oggetto

//rendo i valori delle variabili
const inputNome = document.getElementById("name");
const inputRuolo = document.getElementById("role");
const inputImmagine = document.getElementById("image");
//implementazione: array immagini da usare in modo automatico con input vuoto
arrImmagini = [
    
]

//dichiaro vqariabile button su cui inserire l'evento
const buttonAddMember = document.getElementById("addMemberButton");
let newObject;
buttonAddMember.addEventListener("click", function(){
    //ali click creo un nuovo oggetto
    newObject = {
        nome: `${inputNome.value}`,
        ruolo: `${inputRuolo.value}`,
        foto: `${inputImmagine.value} `,
    }
    if (inputImmagine.value = ""){

    }
    console.log(inputImmagine)
    team.push(newObject)
    console.log(newObject)
    console.log(team)
    generaCard()
})

