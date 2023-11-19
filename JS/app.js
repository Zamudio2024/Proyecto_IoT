// Firebase scripts
const firebaseScript = document.createElement('script');
firebaseScript.src = 'https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js';
document.head.appendChild(firebaseScript);

const databaseScript = document.createElement('script');
databaseScript.src = 'https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js';
document.head.appendChild(databaseScript);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_FUGnhu5nGn3pMul3RWMg9cQOPk6v7lc",
  authDomain: "prueba-invernadero.firebaseapp.com",
  databaseURL: "https://prueba-invernadero-default-rtdb.firebaseio.com",
  projectId: "prueba-invernadero",
  storageBucket: "prueba-invernadero.appspot.com",
  messagingSenderId: "28136162632",
  appId: "1:28136162632:web:a2693143d9e0075b731f7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const database = firebase.database();

// References to the database nodes
const ledRef = database.ref('Invernadero/Actuador/Led');
const potenciometroRef = database.ref('Invernadero/Sensores/Potenciometro');
const variableSPRef = database.ref('Invernadero/Variable/sP');

// Listen for changes in the LED state
ledRef.on('value', (snapshot) => {
    const estadoLed = snapshot.val();
    document.getElementById('estadoLed').innerText = `Estado del LED: ${estadoLed}`;
});

// Listen for changes in the potentiometer value
potenciometroRef.on('value', (snapshot) => {
    const valorPotenciometro = snapshot.val();
    document.getElementById('valorPotenciometro').innerText = `Valor del Potenciómetro: ${valorPotenciometro}`;
});

// Update the sP variable in the database
function actualizarVariableSP() {
    const nuevoValorSP = document.getElementById('nuevoValorSP').value;
    variableSPRef.set(parseInt(nuevoValorSP, 10));
}
