# 🧠 OCR-POS Tagger Web App

A full-stack web application that extracts text from images using OCR and performs **Part-of-Speech (POS) tagging** with interactive visualization.

---

## 🚀 Live Demo
🔗 https://ocr-pos.onrender.com

---

## 📌 Features

- 📸 Upload image and extract text using OCR
- 🧠 Perform POS tagging (Noun, Verb, Adjective, etc.)
- 🎨 Highlight words with unique colors based on POS
- 🎛️ Interactive buttons to filter POS tags
- 📊 Clean and responsive UI
- 🌐 Fully deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- CSS

### Backend
- Node.js
- Express.js

### Libraries Used
- Tesseract.js (OCR)
- compromise (NLP POS tagging)
- multer (file upload)
- cors

---

## 🏗️ Project Structure
OCR-POS/
│
├── backend/
│ ├── controllers/
│ │ └── processController.js
│ ├── routes/
│ │ └── processRoutes.js
│ ├── middleware/
│ │ └── upload.js
│ └── app.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Upload.jsx
│ │ │ ├── TextDisplay.jsx
│ │ │ ├── Filters.jsx
│ │ │ └── Legend.jsx
│ │ └── App.jsx
│ └── package.json
│
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/pardhu1502/OCR-POS.git
cd OCR-POS
```

## 🧠 How It Works
- Image → OCR → Text Processing → POS Tagging → Visualization
- Upload an image
- OCR extracts text using Tesseract.js
- Text is cleaned and tokenized
- POS tagging is applied
- Words are displayed with color highlights

## 🚀 Future Improvements
- Use advanced NLP models (spaCy / Transformers)
- Add POS statistics dashboard
- Download highlighted output
- Multi-language OCR support

## 🤝 Contributing
Pull requests are welcome!
For major changes, open an issue first.


## 👨‍💻 Author
Palli Pardha Saradhi Charan
GitHub: https://github.com/pardhu1502

⭐ If you like this project, don’t forget to give it a star!
