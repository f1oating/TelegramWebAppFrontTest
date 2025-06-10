import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    
    // Ініціалізація
    tg.expand();
    tg.MainButton.setText("Надіслати дані");
    tg.MainButton.show();
    
    // Обробник кнопки
    tg.MainButton.onClick(() => {
      const testData = {
        action: "submit_form",
        user: {
          id: tg.initDataUnsafe.user?.id || "unknown",
          first_name: tg.initDataUnsafe.user?.first_name || "Anonymous"
        },
        timestamp: new Date().toISOString()
      };
      
      // Надсилаємо дані у форматі JSON
      tg.sendData(JSON.stringify(testData));
      tg.close();
    });
    
    return () => {
      tg.MainButton.offClick(); // Важливо для очищення
    };
  }, []);

  return (
    <div className="App">
      <h1>Тестова Mini App</h1>
      <p>Натисніть кнопку внизу для відправки даних</p>
    </div>
  );
}

export default App;