# 01-fullstack-vendor-onboarding
# Trusted Vendors Portal – Full-Stack Assignment

## Objective
Welcome to your application assessment assignment. This is a chance for you to show us your coding and problem solving skills.
You are applying for a fullstack position so this assignment requires you to solve both frontend and backend challenges.

Nobody expects anyone to know everything so if a particular assignment is outside of your realm of experience, 
you can either skip it or add a solution that fits your experience better. 

In this repository, you'll find a basic demo implementation of the **Trusted Vendor Portal** application. 
Your task is to enhance and deploy this application by completing specific requirements listed below.

The system currently allows users to:
- Register a vendor (name, contact person, email, partner type [Supplier/Partner])
- View a list of registered vendors

---
## Vendor Object Example
    {
      "id": "1",
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
- Includes basic create and list operations

### Node.js (TypeScript)
- Located in the `backend-node` directory 
- Uses SQLite in-memory database
- Includes basic create and list operations
---
## Your Tasks

### 1. Delete vendor
- Implement a delete functionality to allow users to remove vendor entries from the system
- Add a confirmation popup before deletion.
- Update both frontend and your chosen backend to support this feature

### 2. Fix the UI bug
- When adding a vendor, QA has reported that it is possible to click the add button multiple times before the 
  form resets, leading to duplicate entries and a bad user experience.

### 3. Unique Emails
- Ensure that vendor emails are unique across the system. If a user tries to register a vendor with a duplicate email, they should be informed of the conflict. 
  Think about where this logic should live (frontend, backend, or both) and justify your approach

### 4. Containerization & Deployment
Choose one of the following deployment approaches:

#### Option A: Docker Compose
- Containerize your chosen backend using Docker
- Create a Docker Compose configuration to run the entire system (frontend + backend)
- Include clear instructions to build and start the application

#### Option B (Advanced): Kubernetes/Minikube Deployment
- Create Kubernetes manifests (YAML files) for both frontend and your chosen backend
- Ensure services can discover and communicate (e.g., using `ClusterIP`)
- Use **Minikube** to test locally
- Provide clear documentation or scripts to:
  - Build and push Docker images to Minikube's Docker daemon
  - Apply Kubernetes configs to start the app
---

## Evaluation Criteria
- **Code clarity & organisation** – Is the code readable, modular, testable and well-structured?
- **Testing** - How did you use testing to support your development efforts
- **Full-stack ownership** – Can you deliver a cohesive, working system with the required enhancements?
- **Pragmatism** – Did you make thoughtful decisions and sensible trade-offs?
- **DevOps awareness** – Is the system easy to build, run, and maintain?
- Quality of your containerization and deployment solution

---

## Submission Instructions

1. **Fork** this repository into your own GitHub account.
2. Complete the assigned tasks in your fork.
3. **Documentation**
    1. Ensure your repository includes setup instructions and an updated README.md.
    2. Provide a short description of your approach to solving each task
    3. Highlight any assumptions, trade-offs, or challenges encountered during development.
4. Share the link to your repository with us as part of your application.

---

We're excited to see how you approach these tasks — feel free to get creative, make reasonable trade-offs, and show us how you think as an engineer. We're particularly interested in your understanding of full-stack development and DevOps practices.
