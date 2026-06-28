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

# 📋 System Requirements

Sebelum menjalankan aplikasi, pastikan software berikut telah terpasang:

- PHP 8.2 atau lebih baru
- Composer 2.x
- Node.js 20 atau lebih baru
- npm 10 atau lebih baru
- Python 3.12 atau lebih baru
- MySQL 8.x
- Git

---

# 🚀 Installation Guide

## 1. Clone Repository

Clone repository ke komputer lokal.

```bash
git clone https://github.com/naji-technologia/FishCare-AI.git
```

Masuk ke folder project.

```bash
cd FishCare-AI
```

---

# 📦 Backend Installation (Laravel)

Masuk ke folder backend.

```bash
cd backend
```

Install seluruh dependency Laravel.

```bash
composer install
```

Copy file environment.

```bash
cp .env.example .env
```

Generate application key.

```bash
php artisan key:generate
```

Buka file **.env** kemudian sesuaikan konfigurasi database.

```env
APP_NAME=FishCareAI

APP_ENV=local

APP_DEBUG=true

APP_URL=http://localhost

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=fishcare_db

DB_USERNAME=root

DB_PASSWORD=
```

Import database menggunakan file:

```
database/fishcare_db.sql
```

Jalankan server Laravel.

```bash
php artisan serve
```

Laravel akan berjalan pada

```
http://127.0.0.1:8000
```

---

# ⚛️ Frontend Installation (React)

Buka terminal baru.

Masuk ke folder frontend.

```bash
cd frontend
```

Install dependency.

```bash
npm install
```

Jalankan React.

```bash
npm run dev
```

Frontend akan berjalan pada

```
http://localhost:5173
```

---

# 🤖 Machine Learning Service (FastAPI)

Buka terminal baru.

Masuk ke folder FastAPI.

```bash
cd fastapi
```

Buat Virtual Environment.

Windows

```bash
python -m venv venv
```

Aktifkan Virtual Environment.

Command Prompt

```bash
venv\Scripts\activate
```

PowerShell

```bash
.\venv\Scripts\Activate.ps1
```

Install seluruh library Python.

```bash
pip install -r requirements.txt
```

Jalankan FastAPI.

```bash
uvicorn app.main:app --reload --port 8001
```

FastAPI akan berjalan pada

```
http://127.0.0.1:8001
```

---

# 🗄 Database

Database yang digunakan adalah **MySQL**.

Import file

```
database/fishcare_db.sql
```

Menggunakan:

- phpMyAdmin
- HeidiSQL
- MySQL Workbench

Pastikan nama database adalah

```
fishcare_db
```

---

# ▶️ Running the Application

Pastikan ketiga service berikut berjalan secara bersamaan.

| Service | URL |
|----------|-----|
| React Frontend | http://localhost:5173 |
| Laravel Backend | http://127.0.0.1:8000 |
| FastAPI | http://127.0.0.1:8001 |

Urutan menjalankan aplikasi:

1. Jalankan MySQL.
2. Jalankan Laravel.
3. Jalankan FastAPI.
4. Jalankan React.
5. Buka browser pada

```
http://localhost:5173
```

---

# 👤 Default User

Jika menggunakan database yang disediakan, login menggunakan akun berikut.

Email

```
admin@fishcare.ai
```

Password

```
admin12345
```


---

# 📁 Project Structure

```
FishCare-AI
│
├── backend                 # Laravel REST API
│
├── frontend                # React Application
│
├── fastapi                 # Machine Learning Service
│
├── database
│   └── fishcare_db.sql
│
├── README.md
│
└── .gitignore
```

---

# 🔧 Technology Stack

- React.js
- Laravel 12
- PHP 8.2+
- MySQL
- FastAPI
- Python 3.12+
- Random Forest Regression
- K-Means Clustering
- Tailwind CSS
- Axios
- Laravel Sanctum

---

# 📌 Notes

Pastikan ketiga server berikut berjalan secara bersamaan:

- Laravel Backend
- React Frontend
- FastAPI

Jika salah satu service tidak berjalan, aplikasi tidak dapat melakukan proses analisis Machine Learning.

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
