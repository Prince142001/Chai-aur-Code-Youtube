# Chai aur Code - Backend System

A robust backend system built with Node.js, Express, and MongoDB. This project, inspired by the 'Chai aur Code' backend series, implements a complete backend structure for a video-sharing platform, including user authentication, file uploads, and data modeling.

---

## 🚀 Features

- **User Authentication**: Secure user registration with password hashing (bcrypt).
- **JWT Authentication**: Full auth flow using JSON Web Tokens (Access and Refresh Tokens).
- **File Uploads**: Handles avatar and cover image uploads using **Multer**.
- **Cloud Storage**: Integrates with **Cloudinary** to store all uploaded files.
- **Database Modeling**: Clear Mongoose schemas for Users and Videos.
- **API Structure**: Organized routes, controllers, and models.
- **Error Handling**: Custom `ApiError` and `ApiResponse` utility classes for consistent responses.
- **Async Handling**: A wrapper utility (`asyncHandler`) for all database requests.

---

## 🛠️ Tech Stack

- **Core**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: bcrypt, jsonwebtoken (JWT)
- **File Handling**: Multer (Middleware), Cloudinary (Cloud Storage)
- **Utilities**: dotenv, cookie-parser, cors
- **Dev Tools**: nodemon, Prettier

---

## ⚙️ Installation & Usage

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    cd YOUR_REPOSITORY_NAME
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Set up Environment Variables**
    Create a file named `.env` in the root of the project and add the following variables.

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=8000
    CORS_ORIGIN=*

    ACCESS_TOKEN_SECRET=your_access_token_secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    REFRESH_TOKEN_EXPIRY=10d

    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:8000` (or your specified `PORT`).

---

## 🧩 Project Structure

public/ <br>
└── temp/ <br>
src/ <br>
├── controller/ <br>
│ └── user.controller.js <br>
│ <br>
├── db/ <br>
│ └── index.js <br>
│ <br>
├── middlewares/ <br>
│ └── multer.middleware.js <br>
│ <br>
├── models/ <br>
│ ├── user.model.js <br>
│ └── video.model.js <br>
│ <br>
├── routes/ <br>
│ └── user.route.js <br>
│ <br>
├── utils/ <br>
│ ├── ApiErrors.js <br>
│ ├── ApiResponse.js <br>
│ ├── asyncHandler.js <br>
│ └── cloudinary.js <br>
│ <br>
├── app.js <br>
├── constant.js <br>
└── index.js <br>
.env <br>
.gitignore <br>
.prettierignore <br>
.prettierrc <br>
package.json <br>

---

## 📂 API Endpoints

- `POST /api/v1/users/register` - Register a new user.
- _(Add more endpoints here as you build them, e.g., login, get user, etc.)_

---

## 👨‍💻 Author

Prince Vishwakarma
