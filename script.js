function zaloguj() {
    
    let login = document.getElementById("LoginInput").value;

    if (login == "") {
        alert("Proszę podać login!");
    } else {
        alert("Witaj " + login);
    }
}


function zmienMotyw() {
    document.body.classList.toggle("ciemny");
}

let silniki = [ 
    'M50B20 2.0 benzyna',
    'M52B25 2.5 benzyna',
    'M52B28 2.8 benzyna',
    'S50B30 3.0 benzyna'
];

let lista = document.getElementById("mojeSilniki");
let tbody = document.getElementById("body-tabeli");

if (lista) {
    for (let i = 0; i < silniki.length; i++) {
        let kod = silniki[i].split(" ")[0]; 
        lista.innerHTML += `<option value="${kod}">${silniki[i]}</option>`;
    }
}

if (tbody) {
    tbody.innerHTML = "";
    for (let i = 0; i < silniki.length; i++) {
        let czesci = silniki[i].split(" ");
        tbody.innerHTML += `<tr><td>${czesci[0]}</td><td>${czesci[1]}</td><td>${czesci[2]}</td></tr>`;
    }
}

function pokazZdjecie() {
    let obrazek = document.getElementById("obrazek");
    let wybrany = lista.value;
    if (wybrany !== "") {
        obrazek.src = wybrany;
        obrazek.style.display = "block";
    } else {
        obrazek.style.display = "none";
    }
}

function filtrujSilniki() {
    let szukana = document.getElementById("szukaj_input").value.toLowerCase();
    let lista = document.getElementById("mojeSilniki");
    
    lista.innerHTML = '<option value="">Wybierz Silnik</option>';

    for (let i = 0; i < silniki.length; i++) {
        let silnik = silniki[i].toLowerCase();
        let znaleziono = false;

        
        if (szukana == "") {
            znaleziono = true;
        } else {
            
            for (let j = 0; j <= silnik.length - szukana.length; j++) {
                let fragment = "";
             
                for (let k = 0; k < szukana.length; k++) {
                    fragment += silnik[j + k];
                }
                
         
                if (fragment == szukana) {
                    znaleziono = true;
                }
            
            }
        }

        if (znaleziono == true) {
            let kod = silniki[i].split(" ")[0];
            lista.innerHTML += `<option value="${kod}">${silniki[i]}</option>`;
        }
    }
}

let ciekawostki = [
    "BMW zostało założone w 1916 roku.",
    "Logo BMW nawiązuje do kręcącego się śmigła samolotu.",
    "Silnik M50 był znany ze swojej pancernej wytrzymałości.",

];


let losowyNumer = Math.floor(Math.random() * ciekawostki.length);

document.getElementById("cytatDnia").innerHTML = ciekawostki[losowyNumer];


