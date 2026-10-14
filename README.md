# InterviewIQ – AI-Powered Mock Interview and Preparation Platform

InterviewIQ is a web-based platform designed to help students and job seekers prepare for technical and professional interviews. It provides an interactive environment where users can practice mock interviews, generate role-specific interview questions, and improve their interview confidence and preparation.

## Features

- **Google Authentication:** Secure user sign-in using Google.
- **AI-Powered Interviews:** Practice interviews with questions tailored to job roles and experience.
- **Interview Reports:** Review interview performance and access reports.
- **Interview History:** Keep track of previous interview sessions.
- **Credit and Pricing System:** Includes pricing plans and payment integration.
- **Responsive Interface:** Access the platform through a modern web interface.

## Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication and Integrations**
- Firebase Authentication
- Razorpay Payment Gateway

## Project Structure

```text
3.interviewIQ/
├── client/          # React frontend
│   ├── src/
│   └── package.json
├── server/          # Express backend
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js and npm
- MongoDB or a MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sahajyadav-18/3.interviewIQ.git
cd 3.interviewIQ
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory and configure the required environment variables, such as your port, MongoDB connection string, authentication secrets, and payment gateway credentials.

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Environment Variables

Configure the environment variables required by your application before running it.

**Backend:** MongoDB connection string, port, token secret, and Razorpay credentials.

**Frontend:** Firebase configuration and any required API URL.

Use your actual variable names from the project configuration. Never commit real credentials, API secrets, or `.env` files to GitHub.

## Future Enhancements

- More detailed interview analytics and performance tracking.
- Additional interview categories and question types.
- Personalized recommendations based on previous performance.
- Improved feedback to help users prepare more effectively.

## Author

**Sahaj Yadav**

GitHub: [@sahajyadav-18](https://github.com/sahajyadav-18)

## License

This project is currently available for educational and portfolio purposes. Add a license file if you decide to distribute it under a specific open-source license.
