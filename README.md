## Cleaning Commercial Service

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Blast2003/Cleaning_Commercial)

This is a full-stack web application for a commercial cleaning service, featuring a comprehensive management system for customers, staff, and examiners. The platform allows users to browse services, book appointments, manage contracts, and process payments securely.

## Features

- **Multi-Role Authentication**: Secure login and registration for three distinct user roles:
  - **Customers**: Can browse services, book appointments, view contract progress, and make payments.
  - **Staff**: Can view assigned cleaning contracts, manage task lists, and update task completion status.
  - **Examiners**: Oversee contracts, verify task completion, and mark contracts as complete.
- **Service & Booking Management**: Customers can select from a variety of cleaning services (e.g., Carpet, Floor, Furniture, Wall Cleaning), choose a service tier (Basic, Pro, Deluxe), select an available staff member, and schedule a convenient date and time.
- **Dynamic Contract System**: Automatically generates contracts for each booking, including service details, assigned staff, an examiner, and a checklist of tasks.
- **Task Management**: Staff can check off tasks as they are completed, providing real-time progress updates for customers and examiners.
- **Secure Payment Integration**: Supports payments via both **Stripe** (for credit cards) and **PayPal**, ensuring secure and flexible transactions.
- **Automated Email Notifications**: Upon contract agreement, the system automatically sends a detailed contract via email to both the customer and the overseeing examiner using Nodemailer.
- **Profile Management**: All users can update their profile information, including name, email, and password.

## Tech Stack

- **Frontend**:
  - React
  - Vite
  - Recoil (State Management)
  - React Router
  - React-datepicker
  - Chakra UI
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JSON Web Tokens (JWT) for authentication
  - Stripe & PayPal for payment processing
  - Nodemailer for email services

## Directory Structure

The project is organized into two main directories:

```
.
├── backend/                  # Node.js/Express server
│   ├── src/
│   │   ├── config/           # Database and environment variable configuration
│   │   ├── controllers/      # Request handling logic
│   │   ├── middleware/       # Express middleware (e.g., route protection)
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # API routes
│   │   └── utils/            # Utility functions (tokens, payments)
│   └── server.js             # Main server entry point
└── frontend/                 # React client application
    ├── src/
    │   ├── Authentication/   # Sign-in/sign-up components
    │   ├── Components/       # Reusable UI components
    │   ├── ServiceList/      # Service and task detail components
    │   ├── atom/             # Recoil state atoms
    │   ├── hooks/            # Custom React hooks
    │   └── pages/            # Page components for different user roles
    └── vite.config.js        # Vite configuration with proxy
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A running MongoDB instance

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/blast2003/cleaning_commercial.git
    cd cleaning_commercial
    ```

2.  **Configure Backend Environment Variables:**

    Create a `.env` file in the `backend/` directory and add the following variables. Replace the placeholder values with your actual credentials.

    ```env
    PORT=5010
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret_key

    # PayPal Credentials
    PAYPAL_CLIENT_ID=your_paypal_client_id
    PAYPAL_SECRET=your_paypal_secret_key
    PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com # Use sandbox for development

    # Email Credentials (e.g., Gmail with App Password)
    EMAIL=your_email@gmail.com
    EMAIL_PASSWORD=your_app_password

    # Stripe Credentials
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

3.  **Install Dependencies:**

    Install dependencies for both the backend and frontend from the root directory.

    ```bash
    npm install
    npm install --prefix frontend
    ```

### Running the Application

1.  **Start the Backend Server (with Nodemon for development):**

    ```bash
    npm run dev
    ```

    The server will be running on `http://localhost:5010`.

2.  **Start the Frontend Development Server:**

    Open a new terminal and navigate to the `frontend` directory.

    ```bash
    cd frontend
    npm run dev
    ```

    The React application will be available at `http://localhost:4000`. The Vite server is configured to proxy API requests to the backend.

### Building for Production

To create a production build, run the following command from the root directory:

```bash
npm run build
```

This command will install all dependencies and create an optimized build of the frontend in the `frontend/dist` directory.

To run the application in production mode:

```bash
npm start
```

The application will be served from the backend server.
