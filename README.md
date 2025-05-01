# 01-fullstack-vendor-onboarding
# Trusted Partners Portal – Full-Stack Assignment

## Objective
Working at Maersk means embracing DevOps practices and aiming for continuous delivery. While real-world system infrastructures can be complex, 
this assignment gives you a simple, self-contained problem where you can show how you'd build for continuous delivery from the ground up.

Your task is to build a full-stack web application called **Trusted Partners Portal** that enables users to:

- Register a partner (name, contact person, email, partner type [Supplier/Customer]
- View a list of registered partners
- *(Optional)* Edit or delete a partner entry

---
## Partner Object Example
    {
      "name": "Acme Freight",
      "contact_person": "John Doe",
      "email": "john.doe@acme.com",
      "partner_type": "Supplier" 
    }

## Requirements

### Frontend

- Use a modern JavaScript framework: **Vue (Preferred)**, **React**, **Svelte**, etc.
- Clean, usable  UI design
- Responsive layout is a plus

### Backend

- Expose 1–2 API endpoints to:
  - Register a new partner
  - Retrieve the list of partners
- Use simple data persistence:
  - In-memory storage or **SQLite**
- Supported languages/frameworks:
  - **Java (Spring Boot) - Preferred**
  - **Kotlin**
  - **Node.js (Express, Nest.js)**
  - **Python (FastAPI, Flask)**
  - **Go (Gin, Fiber)**

We prefer **Vue** on the frontend and **Java Spring Boot** on the backend because that is what we use on a daily basis, 
but feel free to use whatever framework best demonstrates your strengths.

### Packaging & Deployment

- Containerize both frontend and backend using **Docker**
- Use **Docker Compose** to define and run the full system locally
- Include clear instructions or a script to:
  - Build and start the app

---

## Optional frontend enhancements

- Add basic **form validation** on the frontend
- Include lightweight **authentication** (e.g., token-based or basic auth)

---

## Optional backend enchancements: Kubernetes / Minikube Deployment

Showcase your DevOps knowledge by instead of using docker comppose, you can adapt the project for Kubernetes:

- Create Kubernetes manifests (YAML files) for both frontend and backend
- Ensure services can discover and communicate (e.g., using `ClusterIP`)
- Use **Minikube** to test locally

Provide documentation or a script to:

- Build and push Docker images to Minikube’s Docker daemon
- Apply Kubernetes configs to start the app

---

## Evaluation Criteria

- **Code clarity & organisation** – Is the code readable, modular, testable and well-structured?
- **Full-stack ownership** – Can you deliver a cohesive, working system?
- **Pragmatism** – Did you make thoughtful decisions and sensible trade-offs?
- **DevOps awareness** – Is the system easy to build, run, and maintain?
- **(Bonus)** Kubernetes deployment shows platform-level thinking and maturity

---

## Submission Instructions

1. **Fork** this repository into your own GitHub account.
2. Complete the assignment in your fork.
3. Make sure your repo includes setup instructions and a `README.md`.
4. Share the link to your repository with us as part of your application.

---

We’re excited to see how you approach the task — feel free to get creative, make reasonable trade-offs, and show us how you think as an engineer.
