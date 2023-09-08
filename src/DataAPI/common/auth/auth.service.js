import { useEffect, useState } from "react";
import AuthService from "./path/to/AuthService"; // Assicurati di fornire il percorso corretto al file AuthService

function MyComponent() {
  // Definisci uno stato per immagazzinare i dati dell'utente corrente
  const [currentUser, setCurrentUser] = useState(null);

  // Esegui l'effetto una sola volta al momento del montaggio del componente
  useEffect(() => {
    // Richiama la funzione di AuthService per ottenere l'utente corrente
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
  }, []);

  // Funzione per gestire l'azione di logout
  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  // Restituisce il contenuto del componente
  return (
    <div>
      {currentUser ? (
        // Se l'utente è loggato, visualizza i dettagli dell'utente e un pulsante di logout
        <div>
          <h1>Benvenuto, {currentUser.username}</h1>
          <p>Email: {currentUser.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Se l'utente non è loggato, visualizza un messaggio di login
        <div>
          <h1>Effettua il login</h1>
          {/* Aggiungi qui i campi e la logica del form per il login */}
        </div>
      )}
    </div>
  );
}

export default MyComponent;
