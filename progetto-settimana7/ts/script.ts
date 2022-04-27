//Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
//Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza e' definita come carica: number, e rappresenta il quantitativo di euro
//disponibile per le chiamate. La seconda variabile d'istanza e' definita come numeroChiamate: number, e rappresenta il numero di chiamate effettuate con
//il cellulare.

interface Smartphone {
    CREDITO: number;
    numeroChiamate: number;
}

class Cellulare {
    marca: string;
    colore: string
    annodiUscita: number
    constructor(colore: string, annodiUscita: number) {
        this.marca = 'Samsung';
        this.colore = colore;
        this.annodiUscita = annodiUscita;
    }
}

class Samsung extends Cellulare implements Smartphone {
    CREDITO: number;
    numeroChiamate: number;
    constructor(colore: string, annodiUscita: number, CREDITO: number, numeroChiamate: number) {
        super(colore, annodiUscita,)
        this.CREDITO = CREDITO;
        this.numeroChiamate = numeroChiamate;

    }


}

class Users extends Samsung implements Smartphone {
    nome: string;
    cognome: string;
    eta: number;
    CREDITO: number;
    numeroChiamate: number;
    constructor(marca: string, nome: string, cognome: string, eta: number, colore: string, annodiUscita: number, CREDITO: number, numeroChiamate: number) {
        super(colore, annodiUscita, CREDITO, numeroChiamate)
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.marca = marca;
        this.colore = colore;
        this.annodiUscita = annodiUscita;
        this.CREDITO = CREDITO;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: number) {
        return this.CREDITO + unaRicarica
    }

    public chiamata(minutiDurata: number) {
        return minutiDurata * 0.20
    }

    public numero404(minutiDurata: number) {
        return this.CREDITO - (minutiDurata * 0.20);
    }

    public getNumeroChiamate(): any {
        return this.numeroChiamate
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate - this.numeroChiamate;
    }
}





const antonio = new Users('Samsung', 'Antonio', 'Santovito', 27, 'Rosso', 2021, 20, 2);
console.log(antonio.ricarica(10));   /// metodo ricarica (paramatro = soldi di ricarica)
console.log(antonio.chiamata(4));     // metodo costo chiamata (paramatro = a minuti chimata)
console.log(antonio.numero404(4));      // metodo mostra credito (parametro = a minuti chimata)
console.log(antonio.getNumeroChiamate());  //metodo mostra chiamte effetuate 
console.log(antonio.azzeraChiamate());  // metodo azzera chiamate








//Classe User che deve implementare l'interfaccia Smartphone e definire i seguenti metodi:
//Un metodo definito come public ricarica(unaRicarica: number): void, che ricarica il telefonino. 
/*Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza e' definita come carica: number, e rappresenta il quantitativo di euro
disponibile per le chiamate. La seconda variabile d'istanza e' definita come numeroChiamate: number, e rappresenta il numero di chiamate effettuate con
il cellulare.
Classe User che deve implementare l'interfaccia Smartphone e definire i seguenti metodi:
Un metodo definito come public ricarica(unaRicarica: number): void, che ricarica il telefonino.
Un metodo definito come public chiamata(minutiDurata: number): void, cheeffettua una chiamata di durata in minuti specificata dal parametro esplicito.
Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino.
Si assuma un costo di 0.20 euro per ogni minuto di chiamata,
un metodo public numero404(): number, che restituisce il valore della carica disponibile.
Un metodo public getNumeroChiamate(): number, che restituisce il valore della variabile d'istanza numeroChiamate.
Infine, un metodo public azzeraChiamate(): void , che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.
Le istanze FirstUser-SecondUser-ThirdUser della classe User.
Provare i metodi e verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.*/

