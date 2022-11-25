// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.



const {createApp} = Vue;

    createApp({
        data() {
            return {
                title : "Hi Vue!!",
                myClass : "rosso",
                imgUrl : 'https://www.geekandjob.com/uploads/wiki/f236a1aa005ef9a93041f294749e86d1.png'
            }
        }
    }
    ).mount('#myapp');


