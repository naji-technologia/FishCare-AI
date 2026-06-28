# 🐟 FishCare AI

Smart Water Quality Monitoring and Fish Weight Prediction System

FishCare AI adalah aplikasi web berbasis Machine Learning yang digunakan untuk memprediksi berat ikan berdasarkan parameter kualitas air. Aplikasi ini dibangun menggunakan arsitektur tiga lapis (Frontend, Backend, dan Machine Learning Service).

---

## 📌 Project Overview

FishCare AI mengintegrasikan:

- React.js sebagai Frontend
- Laravel sebagai Backend REST API
- FastAPI sebagai Machine Learning Service
- MySQL sebagai Database
- Random Forest Regression untuk prediksi berat ikan
- K-Means Clustering untuk klasifikasi kondisi kualitas air

---

# 🛠 Technology Stack

| Technology | Version |
|------------|---------|
| React | 19.x |
| Vite | 7.x |
| Tailwind CSS | 4.x |
| Laravel | 12.x |
| PHP | 8.2+ |
| MySQL | 8.x |
| FastAPI | Latest |
| Python | 3.12+ |
| Axios | Latest |
| Laravel Sanctum | Latest |
| Scikit-Learn | Latest |
| Pandas | Latest |
| NumPy | Latest |

---

# ✨ Features

- Landing Page
- User Registration
- User Login
- Dashboard
- Water Quality Analysis
- Machine Learning Prediction
- History Management
- Search & Filter
- Analyze Again
- CRUD History
- Logout

---

# 📂 Project Structure

```
FishCare-AI
│
├── frontend/
├── backend/
├── fastapi/
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/USERNAME/FishCare-AI.git
```

---

## Backend

```bash
cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## FastAPI

```bash
cd fastapi

pip install -r requirements.txt

uvicorn app.main:app --reload --port 8001
```

---

# 📷 Application Features

- Landing Page
- Login & Register
- Dashboard
- Analyze Water Quality
- History
- View Detail
- Analyze Again
- Delete History

---

# 👨‍💻 Authors

- Moh Najiyurrahman
- M. Rosyid Habibulloh
- Alexander Amoderi Kelawu
- Ersya Ramadhani
- Aurellia Farrel Aziz Nayottama