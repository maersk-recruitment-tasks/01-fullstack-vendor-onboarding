# 01-fullstack-vendor-onboarding
# Trusted Partners Portal – Full-Stack Assignment

## Objective
Working at Maersk means embracing DevOps practices and aiming for continuous delivery.

In this repository, you'll find a basic implementation of the **Trusted Vendor Portal** application. 
Your task is to enhance and deploy this application by completing specific requirements listed below.

The system currently allows users to:
- Register a vendor (name, contact person, email, partner type [Supplier/Partner])
- View a list of registered vendors

---
## Vendor Object Example
    {
      "name": "Acme Freight",
      "contact_person": "John Doe",
      "email": "john.doe@acme.com",
      "partner_type": "Supplier" 
    }

## Existing Implementation

The repository contains:
- A Vue.js frontend application
- Two backend implementations (choose one):
  - Java (Spring Boot)
  - Node.js (TypeScript)

## Available Backends
You may choose which backend implementation to work with:

### Java (Spring Boot)
- Located in the `backend-java` directory
- Uses H2 in-memory database
- Includes basic CRUD operations (except delete)

### Node.js (TypeScript)
- Located in the `backend-node` directory 
- Uses SQLite in-memory database
- Includes basic CRUD operations (except delete)
---
## Your Tasks

### 1. Delete vendor
- Implement a delete functionality to allow users to remove vendor entries from the system
- Add a confirmation popup before deletion.
- Update both frontend and your chosen backend to support this feature
### 2. Unique Emails
- Implement a uniqueness test so an email can be used only once and the user is informed that the choosen email has already been used.
- Update both frontend and your chosen backend to support this feature
### 3. Containerization & Deployment
Choose one of the following deployment approaches:

#### Option A: Docker Compose
- Containerize your chosen backend using Docker
- Create a Docker Compose configuration to run the entire system (frontend + backend)
- Include clear instructions to build and start the application

#### Option B (Advanced): Kubernetes/Minikube Deployment
- Create Kubernetes manifests (YAML files) for both frontend and your chosen backend
- Ensure services can discover and communicate (e.g., using `ClusterIP`)
- Use **Minikube** to test locally
- Provide documentation or a script to:
  - Build and push Docker images to Minikube's Docker daemon
  - Apply Kubernetes configs to start the app
---
## Evaluation Criteria

- **Code clarity & organisation** – Is the code readable, modular, testable and well-structured?
- **Full-stack ownership** – Can you deliver a cohesive, working system with the required enhancements?
- **Pragmatism** – Did you make thoughtful decisions and sensible trade-offs?
- **DevOps awareness** – Is the system easy to build, run, and maintain?
- Quality of your containerization and deployment solution

---

## Submission Instructions

1. **Fork** this repository into your own GitHub account.
2. Complete the assigned tasks in your fork.
3. Make sure your repo includes setup instructions and an updated `README.md`.
4. Share the link to your repository with us as part of your application.

---

We're excited to see how you approach these tasks — feel free to get creative, make reasonable trade-offs, and show us how you think as an engineer. We're particularly interested in your understanding of full-stack development and DevOps practices.
