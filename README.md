# 🤖 AI Face Swap Website

A modern face swap web app powered by **Segmind FaceSwap API**.

> Developed by **Uditha Manohara** at **Termodev Technologies** 🚀

![demo](https://github.com/uditha-manohara/face-swap-app/assets/banner.png)

---

## ✨ Features

- 🔄 Upload 2 images to swap faces
- 💡 Real-time result preview
- 🧠 Powered by free API (Segmind)
- 💻 Fully client-server architecture
- 🎨 Clean Tailwind UI + responsive layout

---

## 🖼️ Live Demo
👉 [https://uditha-manohara.github.io/face-swap-app](https://uditha-manohara.github.io/face-swap-app)

---

## 🧩 Tech Stack

| Layer      | Tech              |
|------------|-------------------|
| Frontend   | HTML + TailwindCSS|
| Backend    | Flask + Render    |
| API        | Segmind FaceSwap  |

---

## 🚀 Getting Started

### 🔹 Frontend (Static Website)
1. Clone this repo:
   ```bash
   git clone https://github.com/uditha-manohara/face-swap-app
   ```
2. Open `index.html` and customize if needed.
3. Deploy to GitHub Pages (via Settings > Pages).

### 🔸 Backend (Render)
1. Create a free account on [https://render.com](https://render.com)
2. Create a new **Web Service** with:
   - Runtime: Python
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app`
3. Add these files to `/backend/` folder:
   - `app.py` (Flask app)
   - `requirements.txt`

```bash
# requirements.txt
flask
requests
gunicorn
```

---

## 🔐 API Key

To use this project, you’ll need a free API key from [Segmind FaceSwap](https://www.segmind.com/models/faceswap-v2). Add your key inside `app.py`:

```python
SEGMENT_API_KEY = 'Your key here'
```

---

## 📬 Contact

Created with ❤️ by **Uditha Manohara** — [Termodev Technologies](https://github.com/uditha-manohara)

Feel free to open issues or contribute!

---

## 📜 License
MIT © 2025 Uditha Manohara
