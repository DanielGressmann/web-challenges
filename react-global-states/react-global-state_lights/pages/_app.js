import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    // SCHRITT 1: Global State in app.js erstellen
    // Dafür ues.State Array erstellt um Lichter zu speichern
    // IDs von 1-8 vergeben, name = Raum und isOn = ist das Licht an
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  // SCHRITT 2: Funktion zum Umschalten eines einzelnen Lichts
  // Das lights-Array mit map() durchlaufen
  // Wenn ID übereinstimmt, wird isOn-Attribut umgeschaltet
  // Alle anderen Lichter bleiben unverändert
  function toggleLight(id) {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  // Schritt 3: Funktionen zum Ein- und Ausschalten aller Lichter
  //  Mit map() durch Array gehen und jedes isOn Attribut auf true oder false setzen
  // Durch setLights wird Änderung von React erkannt
  // Alle betrofffenen Komponenten werden neu gerendert
  function turnAllLightsOn() {
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: true }))
    );
  }

  function turnAllLightsOff() {
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: false }))
    );
  }
  // Schritt 4: Anzahl der eingeschalteten Lichter berechnen
  // filter() gibt neues Array zurück, das nur die eingeschalteten Lichter enthält
  // length gibt Anzahl der Elemente in diesem Array zurück
  const lightsOnCount = lights.filter((light) => light.isOn).length;

  // Schritt 5: Hintergrund dimmen, wenn alle Lichter aus sind
  // lightsOnCount === 0 --> Alle Lichter sind aus

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
