# ProConvo 🎥

### Web-Based One-to-One Video Calling & Conferencing System

**ProConvo** is a web-based real-time communication platform designed for secure and seamless **one-to-one video conferencing**. It enables users to authenticate, create or join meeting rooms, communicate through video and audio, exchange real-time messages, and share their screens through a browser.

The application combines **React, Material UI, Node.js, Express.js, MongoDB, Socket.IO, and WebRTC** to provide a complete real-time communication experience without requiring users to install additional desktop software.

---

##  Features

*  **User Authentication**

  * User registration and login
  * Guest login support
  * Password protection using bcrypt
  * Secure authentication-related operations

*  **Meeting Room Management**

  * Create a meeting room
  * Join an existing room
  * Unique Room ID / Meeting Link
  * Simple room-based meeting access

* **One-to-One Video Calling**

  * Real-time video communication
  * Real-time audio communication
  * Browser-based camera and microphone access
  * WebRTC-powered peer-to-peer communication

*  **Real-Time Chat**

  * Exchange messages during a meeting
  * Real-time message delivery using Socket.IO

*  **Screen Sharing**

  * Share the current screen with the other participant
  * Useful for presentations, demonstrations, and collaborative discussions

*  **Leave Meeting**

  * End the current session
  * Stop active media streams
  * Close the peer connection when leaving

*  **Responsive User Interface**

  * Built using React
  * Material UI components
  * Clean and user-friendly meeting interface

---

## 🛠️ Technology Stack

| Layer                     | Technology  |
| ------------------------- | ----------- |
| Frontend                  | React.js    |
| UI Framework              | Material UI |
| Backend                   | Node.js     |
| Server Framework          | Express.js  |
| Database                  | MongoDB     |
| Real-Time Communication   | Socket.IO   |
| Video/Audio Communication | WebRTC      |
| Authentication            | bcrypt      |
| Security / Utilities      | crypto      |
| API Communication         | REST API    |
| Development Tool          | Vite        |

---

## System Architecture

                    ┌──────────────────────┐
                    │       ProConvo       │
                    │   Web Application    │
                    └──────────┬───────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │ React Frontend │          │ Node/Express API │
        │ + Material UI  │          │     Backend      │
        └───────┬────────┘          └────────┬─────────┘
                │                             │
                │                    ┌────────▼────────┐
                │                    │     MongoDB     │
                │                    │     Database    │
                │                    └─────────────────┘
                │
        ┌───────▼────────────────────────────┐
        │         Real-Time Layer             │
        │                                    │
        │  Socket.IO        WebRTC            │
        │     │                │              │
        │     ▼                ▼              │
        │  Signaling     Audio / Video       │
        │                 Communication       │
        └────────────────────────────────────┘

---

##  Application Workflow

START
  │
  ▼
Home Page
  │
  ├───────────────┐
  ▼               ▼
Login         Guest Login
  │               │
  └───────┬───────┘
          ▼
   Authentication
          │
          ▼
   Create / Join Room
          │
          ▼
     Room ID / Link
          │
          ▼
   Second User Joins
          │
          ▼
    WebRTC Connection
          │
     ┌────┴─────┐
     ▼          ▼
 Video/Audio   Real-Time Chat
     │
     ▼
 Screen Sharing
     │
     ▼
 Leave Meeting
     │
     ▼
    END
---

## 📂 Project Structure

ProConvo/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   └── package.json
│
├── README.md
└── .gitignore

> **Note:** The exact folder structure may vary depending on the current implementation of the project.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/ProConvo.git
```

Navigate into the project:

```bash
cd ProConvo
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string


Add any additional environment variables required by your implementation.

**Do not commit `.env` files or credentials to GitHub.**

---

### 4. Start the Backend

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:8000
```

---

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

### 6. Start the Frontend

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🔑 Authentication

ProConvo supports user authentication and guest access.

The authentication workflow includes:

User
 │
 ▼
Registration / Login
 │
 ▼
Backend API
 │
 ▼
Credential Validation
 │
 ▼
Authentication
 │
 ▼
Access to Meeting Features

Passwords are processed using **bcrypt** rather than being stored as plain text.

---

## 🎥 How Video Calling Works

ProConvo uses **WebRTC** to establish real-time peer-to-peer communication between participants.

The general communication process is:

```text
User A                         User B
  │                              │
  │──── Join Meeting ───────────▶│
  │                              │
  │◀──── Signaling Data ─────────│
  │                              │
  │──── WebRTC Connection ──────▶│
  │                              │
  │◀──── Audio + Video ──────────│
  │                              │
```

**Socket.IO** is used for real-time signaling and communication events, while **WebRTC** handles the actual peer-to-peer audio/video connection.

---

## 💬 Real-Time Chat

Participants can communicate through an in-meeting chat system.

```text
Participant A
      │
      │ Message
      ▼
  Socket.IO
      │
      ▼
Participant B
```

Messages are delivered in real time without requiring the page to be refreshed.

---

## 🖥️ Screen Sharing

ProConvo provides browser-based screen sharing for situations such as:

* Presentations
* Project demonstrations
* Technical discussions
* Online collaboration
* Document walkthroughs

Screen sharing uses the browser's media capture capabilities and integrates the captured stream into the WebRTC communication flow.

---

## 🔒 Security Considerations

The project incorporates several security-oriented practices:

* Password hashing with **bcrypt**
* Environment variables for sensitive configuration
* Backend API validation
* Controlled room access
* Browser permission requirements for camera and microphone
* WebRTC-based peer-to-peer media communication

> Production deployments should additionally implement HTTPS, secure cookies/tokens, rate limiting, stronger authorization rules, input sanitization, and appropriate production-grade WebRTC infrastructure.

---

## 🧪 Testing

Before deploying the application, test the following scenarios:

### Authentication

* [ ] Register a new user
* [ ] Login with valid credentials
* [ ] Reject invalid credentials
* [ ] Test guest login

### Meeting

* [ ] Create a meeting room
* [ ] Join using Room ID
* [ ] Join using meeting link
* [ ] Verify one-to-one video
* [ ] Verify audio communication
* [ ] Test camera/microphone permissions

### Communication

* [ ] Send real-time messages
* [ ] Receive messages
* [ ] Start screen sharing
* [ ] Stop screen sharing
* [ ] Leave the meeting
* [ ] Verify streams are properly stopped

---

## 🚀 Future Enhancements

Possible improvements for future versions include:

* 👥 Group video conferencing
* 🔒 End-to-end meeting security improvements
* 📅 Meeting scheduling
* 🔗 Shareable meeting invitations
* 🎙️ Microphone and camera controls
* 🔇 Participant mute/unmute controls
* 📹 Meeting recording
* ☁️ Cloud deployment
* 📱 Improved mobile responsiveness
* 🧑‍💻 User profiles
* 🛡️ Advanced authorization and access control
* 📊 Meeting analytics

---

## 🎯 Project Objectives

The main objectives of ProConvo are to:

1. Develop a browser-based video conferencing platform.
2. Enable real-time one-to-one audio and video communication.
3. Implement room-based meeting access.
4. Provide real-time communication through chat.
5. Enable screen sharing during meetings.
6. Implement user authentication and secure password handling.
7. Demonstrate the practical use of WebRTC and Socket.IO.
8. Build a modern and responsive user interface using React and Material UI.

---

## 📚 Learning Outcomes

Developing ProConvo provides practical experience with:

* React application development
* REST API development
* Node.js and Express.js
* MongoDB database integration
* Authentication and password security
* Socket.IO real-time communication
* WebRTC peer-to-peer communication
* Browser media APIs
* Screen-sharing APIs
* Frontend-backend integration
* Debugging real-time applications
* Git and GitHub version control

---

## 📄 License

This project is developed for educational and demonstration purposes.

If you plan to reuse or distribute the project, add an appropriate open-source license such as MIT License according to your intended usage.

---

## 👩‍💻 Author

**Palakdeep Kaur**

B.Tech Computer Science & Engineering

GitHub: `p-k2`

LinkedIn: `palakdeep-kaur-my-profile`

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

### Built with ❤️ using React, Node.js, MongoDB, Socket.IO & WebRTC
