import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.MainButton.setText("Надіслати");
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.sendData(JSON.stringify({ text: "Дані від користувача" }));
      tg.close();
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Привіт із Mini App!</h1>
      <p>Це інтерфейс усередині Telegram.</p>
    </div>
  );
}

export default App;