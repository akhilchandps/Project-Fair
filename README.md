# Project Fair Site - Admin Main Features

## 🔗 Objective
The Project Fair Site allows administrators to efficiently manage project submissions, edits, updates, and deletions. Designed for project fairs or similar events, this system provides seamless functionality to ensure the effective organization and management of project-related data.

## 🔧 Built With
- **Frontend**: React.js, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## ⚙️ Getting Started
To run the project locally, follow these steps:

### 🚀 Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/akhilchandps/Project-Fair.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the project:
   ```bash
   npm start
   ```

### 🔧 Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables by creating a `.env` file in the root of the backend directory with the following content:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=your_preferred_port
   ```
4. Start the server:
   ```bash
   npm start
   ```

## 🔒 Admin Features
- **Add Projects**: Administrators can add new projects with relevant details such as title, description, participants, and assigned categories.
- **Edit Projects**: Modify existing project details as needed.
- **Delete Projects**: Remove projects that are no longer relevant or needed.
- **Update Projects**: Make real-time updates to project data, ensuring accuracy and up-to-date information.
- **Manage Submissions**: Monitor and review submitted projects, approving or rejecting them as necessary.

## 🙎️ User Roles
- **Admin**: Full access to add, edit, update, and delete projects.
- **Participants**: Limited access to submit projects and view approved submissions.
- **Visitors**: View only access to browse the approved projects showcased on the site.

## 📚 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

**Languages Used:**
- JavaScript
- CSS
- React.js

