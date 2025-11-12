# 🛡️ sensorjowo

**Sensor kata-kata kasar khas Jawa — biar tetep sopan meski medok!** 😆  
Library ringan untuk menyaring teks dari kata-kata “pedes” berbahasa Jawa seperti *asu*, *edan*, *jancuk*, dan lain-lain.

---

## 🚀 Install

```bash
npm install sensorjowo

atau pakai Yarn:
yarn add sensorjowo

const { sensor } = require("sensorjowo");

console.log(sensor("Asu tenan iki!"));
// Output: *** tenan iki!

console.log(sensor("Kowe pancen edan!"));
// Output: Kowe pancen ****!

⚙️ Fitur
✅ Menyensor kata-kata kasar / gaul Jawa otomatis
✅ Case-insensitive (ASU, Asu, aSu tetap kena sensor)
✅ Ringan dan cepat (tanpa dependency besar)
✅ Cocok buat chat app, game, bot, dan komentar sosial media

const { sensor } = require("sensorjowo");

// Mode lenient (cuma ganti sebagian huruf)
console.log(sensor("Asu tenan!", "lenient"));
// Output: A** tenan!

// Mode emoji (lebih lucu 🤐)
console.log(sensor("Edan tenan!", "emoji"));
// Output: 🤐 tenan!

🧠 Daftar Kata Kasar yang Didukung

Berikut beberapa contoh kata yang akan otomatis disensor:
asu, jancuk, jancok, ndasmu, picek, edan, bodho, geblek, kontol, memek,dll

🛠️ Kontribusi
💡 Ide kata baru? Fitur tambahan?
Buka issue atau kirim PR di sini:
https://github.com/NawwafNaufal/SensorJowo


📜 Lisensi

MIT
 © 2025 Nawwaf Naufal
