# Node.js Professional CV App

A beautiful, modern CV web application built with Node.js, Express, and Tailwind CSS, fully containerized with Docker, and ready for deployment to Azure.

This project demonstrates full-stack development and DevOps workflow skills, including containerization, CI/CD readiness, and cloud deployment preparation.

## 🌟 Features

* ✨ **Modern & Responsive Design** – Professional dark gradient background with elegant typography
* 🎨 **Tailwind CSS Styling** – Clean UI components and skill badges
* 🐳 **Docker Containerized** – Ready to run anywhere
* ☁️ **Cloud-Ready** – Prepared for Azure deployment
* ⚡ **Lightweight** – Alpine-based Docker image for optimal performance

## 🛠 Technology Stack

| Technology | Purpose |
|------------|---------|
| Node.js v24 | Runtime environment |
| Express v5 | Web framework |
| Tailwind CSS | Styling (CDN) |
| Docker | Containerization |
| Alpine Linux | Lightweight base image |

## 🚀 Quick Start

### Prerequisites

* Node.js v24 or higher
* Docker (optional, for containerization)

### 📦 Local Development

```bash
# Clone the repository
git clone https://github.com/hanineissam/101125-nodejs-cv-app.git
cd 101125-nodejs-cv-app

# Install dependencies
npm install

# Start the application
npm start
```

Visit `http://localhost:3000` to view your CV! 🎉

## 🐳 Docker Deployment

### Build the Docker Image

```bash
docker build -t node-cv-app .
```

### Run the Container Locally

```bash
docker run -p 4000:3000 node-cv-app
```

* Container port 3000 is mapped to host port 4000
* Open browser: http://localhost:4000

### Push to Docker Hub

```bash
# Tag your image
docker tag node-cv-app hanineissam/reposfortest:latest

# Login to Docker Hub (use PAT with Read & Write)
docker login -u hanineissam

# Push the image
docker push hanineissam/reposfortest:latest
```

* Docker Hub repository: https://hub.docker.com/r/hanineissam/reposfortest

## 📂 Project Structure

```
101125-nodejs-cv-app/
│
├── index.js              # Main Node.js application
├── package.json          # Node.js dependencies
├── package-lock.json     # Exact dependency versions
├── Dockerfile            # Docker container configuration
└── README.md             # Project documentation
```

## 🏗 Development Process

### 1️⃣ Initialize Node.js Project

```bash
npm init -y
npm install express
```

### 2️⃣ Create Express Application

Built a simple Express server with CV content served as JSON or HTML.

### 3️⃣ Design Beautiful CV Layout

Implemented modern UI with Tailwind CSS:
* Gradient background
* Responsive layout
* Skill badges
* Professional sections

### 4️⃣ Add Start Script

Configured `package.json` with proper start command:

```json
"scripts": {
  "start": "node index.js"
}
```

### 5️⃣ Dockerize the Application

Created optimized Dockerfile using Alpine Linux base image:

```dockerfile
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 6️⃣ Build & Test Docker Container

Verified application runs correctly in a containerized environment.

## 🎨 Customization

### Update Your CV Content

Edit the HTML content in `index.js`:

```javascript
// Update personal information
<h1>Your Name</h1>
<p>Your Title</p>

// Add your skills
<span class="badge">Your Skill</span>

// Modify sections as needed
```

### Styling

* Tailwind CSS via CDN
* Modify Tailwind classes or add custom CSS

## 🚀 Deployment Options

### Azure Web App for Containers

```bash
az acr build --registry <registry-name> --image node-cv-app .
az webapp create --resource-group <rg-name> --plan <plan-name> \
  --name <app-name> --deployment-container-image-name <registry>.azurecr.io/node-cv-app
```

### Azure Container Instances

```bash
az container create --resource-group <rg-name> \
  --name node-cv-app --image <registry>.azurecr.io/node-cv-app \
  --dns-name-label <unique-dns-name> --ports 3000
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hanine Issam**

* GitHub: [@hanineissam](https://github.com/hanineissam)
* Docker Hub: [hanineissam](https://hub.docker.com/u/hanineissam)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/hanineissam/101125-nodejs-cv-app/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!