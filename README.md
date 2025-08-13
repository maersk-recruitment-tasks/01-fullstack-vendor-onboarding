# 01-fullstack-vendor-onboarding
# Trusted Vendors Portal – Full-Stack Assignment

## Objective
Welcome to your application assessment assignment. This is a chance for you to show us your coding and problem solving skills.
You are applying for a fullstack position so this assignment requires you to solve both frontend and backend challenges.

Nobody expects anyone to know everything so if a particular assignment is outside of your realm of experience, 
you may either skip it or propose a solution aligned with your experience.. 

In this repository, you'll find a basic demo implementation of the **Trusted Vendor Portal** application. 
Your task is to enhance and deploy this application by completing specific requirements listed below.

The system currently allows users to:
- Register a vendor (name, contact person, email, partner type [Supplier/Partner])
- View a list of registered vendors

---
## Vendor Object Example
    {
      "id": 1,
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
- Uses SQLite database
- Includes basic create and list operations
---
## Your Tasks

### 1. Delete vendor
- Implement a delete functionality to allow users to remove vendor entries from the system
- Include a confirmation dialog before deletion to prevent accidental removal.
- Update both frontend and your chosen backend to support this feature

### 2. Fix the UI bug
- Currently, clicking the "Add" button multiple times before the form resets can result in duplicate vendor entries.
- Prevent this behavior to improve the form UX

### 3. Unique Emails
- Ensure that vendor emails are unique across the system. If a user tries to register a vendor with a duplicate email, they should be informed of the conflict. 
  Think about where this logic should live and how the constraint is best enforced (frontend, backend, data storage or all) and justify your approach
- Document your reasoning

### 4. Containerization & Deployment (Optional)
At maerks we host most of our backend services using pods and k8. If you have experience or find the challenge interesting, give this assignment a go.

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

You're welcome to make UX improvements or add minor enhancements, as long as the core requirements are clearly addressed.

---

## Evaluation Criteria
- **Code clarity & organisation** – Is the code readable, modular, testable and well-structured?
- **Testing** - How did you use testing to support your development efforts
- **Full-stack ownership** – Can you deliver a cohesive, working system with the required enhancements?
- **Pragmatism** – Did you make thoughtful decisions and sensible trade-offs?
- **DevOps awareness** – Is the system easy to build, run, and maintain?
- **Deployment quality** – If completed, is your containerization strategy practical, reproducible, and well-documented?"

---

## Submission Instructions

1. **Copy** this repository into your own GitHub account.
2. Complete the assigned tasks in copy.
3. **Documentation**
    1. Ensure your repository includes setup instructions and an updated README.md.
    2. Provide a short description of your approach to solving each task
    3. Highlight any assumptions, trade-offs, or challenges encountered during development.
4. In your readme.md file, also answer the following questions:
    1. What do I love most about being a software engineer.
    2. What is most important to me when it comes to working in a team
    3. What is the worst part of being a software engineer.
4. Share the link to your repository with us.
---

We're excited to see how you approach these tasks — feel free to get creative, make reasonable trade-offs, and show us how you think as an engineer. We're particularly interested in your understanding of full-stack development and DevOps practices.

---

## Implementation Summary

#### 1. Delete Vendor Feature

**Changes:**
1. Click delete button under actions
2. Confirm deletion in dialog
3. Backend processes deletion
4. List updates automatically

`frontend/src/components/VendorList.vue`
   - Added delete button and confirmation dialog
   - Updated UI to reflect changes immediately after deletion

`frontend/src/tests/components/VendorList.spec.ts`
   - Added test case for delete vendor functionality

`backend-node/src/routes/vendors.ts`
   - Added DELETE endpoint
   - Added `deleteVendor` method


#### 2. Duplicate Submission Prevention

**Changes:**
1. Button disables immediately on click
2. Stays disabled during submission
3. Re-enables only after form reset
4. Prevents any double-submissions

**Challenges:**
- Identified root cause of the issue in the form submission logic
- Added submission state management using Vue's reactive refs
- Implemented fix which doesn't interfere with form validation


`frontend/src/components/VendorForm.vue`
   - Added submission control to prevent duplicate entries
   - Implemented email uniqueness check
   - Added error display for duplicate emails
   - Improved form reset handling

`frontend/src/tests/components/VendorForm.spec.ts`
   - Added test case to validate unique emails

#### 3. Email Uniqueness

**Changes:**
1. Checks email before form submission
2. Returns error if email exists
3. Prevents duplicate entries at database level

`frontend/src/services/VendorService.ts`
   - Added `checkEmailExists` method with email validation logic 
   - Enhanced error handling
   
`backend-node/src/db/database.ts`
   - Added unique constraint for email field
   - Improved error handling for duplicate entries


#### 4. Docker Containerization

`frontend/Dockerfile`
   - Multi-stage build for optimized production image
   - Nginx configuration for SPA routing

`backend-node/Dockerfile`
   - Node.js environment setup

`docker-compose.yml`
   - Services configuration for frontend and backend
   - Environment variables setup
   - Network configuration

### 5. Instructions to run test cases

  - npm run test


### Instructions to Run

1. Install Docker and Docker Compose
2. Run in project root:
   ```bash
   docker-compose up --build
   ```
3. Access:
   - Frontend: http://localhost:8080
   - Backend: http://localhost:3000


### Personal Reflections

#### What I Love Most About Being a Software Engineer
- I enjoy building things from scratch and watching ideas turn into real products.
- I like learning new things and keeping up with technology.
- I appreciate the creativity involved in coding and designing systems.
- I enjoy working with other smart people and sharing knowledge.
- I appreciate the flexibility and freedom that comes with this job.


#### Most Important Aspects of Working in a Team
- Good communication so everyone knows what’s going on.
- Trusting & respecting each other time & work.
- Helping each other when someone is stuck.
- Sharing ideas and listening to different opinions.
- Being open about mistakes and learning from them.
- Supporting each other, especially during tough times.


#### Challenging Aspects of Software Engineering
- Figuring out why something isn’t working can be frustrating and time-consuming.
- Communicating technical ideas to non-technical people can be challenging.
- It can be stressful when things break in production and you need to fix them quickly.
- Sometimes requirements change and you have to redo work.

