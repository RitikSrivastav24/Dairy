folder structure ---

Diary/
│
├── client/                 # React Frontend
│
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/         # images, icons, fonts
│   │   │
│   │   ├── components/     # reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── EntryCard.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/          # pages/screens
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateEntry.jsx
│   │   │   └── EditEntry.jsx
│   │   │
│   │   ├── layouts/        # page layouts
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── routes/         # react-router setup
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── services/       # API calls
│   │   │   ├── authService.js
│   │   │   └── diaryService.js
│   │   │
│   │   ├── context/        # auth/global state
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/          # custom hooks
│   │   │   └── useAuth.js
│   │   │
│   │   ├── utils/          # helper functions
│   │   │   └── formatDate.js
│   │   │
│   │   ├── styles/
│   │   │   └── global.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
│
├── server/                 # Node Backend
│
│   ├── config/
│   │   └── db.js           # MySQL connection
│   │
│   ├── controllers/        # business logic
│   │   ├── authController.js
│   │   └── diaryController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/             # database queries
│   │   ├── userModel.js
│   │   └── diaryModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── diaryRoutes.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── hashPassword.js
│   │
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── nodemon.json
│
│
└── README.md