# 🌦️ Weather App (React + Tailwind CSS + OpenWeather API)

A simple **Weather Report App** built using **React.js**, **Tailwind CSS v3**, **Axios**, and the **OpenWeather API**.
Users can enter a city name and instantly get the current weather details.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Shows temperature in Celsius
* ☁️ Displays weather condition & description
* ⚡ Fast API fetching using Axios
* 🎨 Styled with Tailwind CSS gradients
* 📱 Responsive UI

---

## 🛠️ Technologies Used

* React.js
* Tailwind CSS v3
* Axios
* OpenWeather API

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Install Required Packages

```bash
npm install axios
npm install -D tailwindcss@3 postcss autoprefixer
```

---

### 4️⃣ Start the App

```bash
npm start
```

---

## 🔑 Get Your API Key

1. Go to: https://openweathermap.org/api
2. Create a free account
3. Generate an API key
4. Replace the key inside the code:

```js
appid=YOUR_API_KEY
```

---

## 📄 Complete Single-Page Code (Copy & Use)

```jsx
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleReport = async () => {
    if (!city) return alert("Please enter a city");

    try {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-900">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl text-white w-[400px] shadow-xl">

        <h1 className="text-3xl font-bold text-amber-300 mb-4">
          🌦️ Weather App
        </h1>

        <p className="mb-4 text-orange-200">
          Enter a city to get the latest weather report
        </p>

        <input
          className="w-full p-2 rounded text-black mb-3"
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="w-full bg-slate-800 p-2 rounded hover:bg-slate-700"
          onClick={handleReport}
        >
          Get Report
        </button>

        {weather && (
          <div className="mt-6 space-y-2 text-lg">
            <p>🌍 City: {weather.name}</p>
            <p>☁️ Weather: {weather.weather[0].main}</p>
            <p>🌡️ Temperature: {weather.main.temp} °C</p>
            <p>📝 Description: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 📸 How It Works

1. User enters city name
2. Clicks **Get Report**
3. Axios sends request to weather API
4. API returns weather data
5. React displays it instantly

---

## 🎯 Future Improvements

* Add loading spinner
* Auto detect current location
* Show weather icons
* Save search history
* Dark/light mode toggle

---

## 👨‍💻 Author: Shabarish 

Built for learning React API integration and Tailwind styling.

---

⭐ If you like this project, give it a star!
