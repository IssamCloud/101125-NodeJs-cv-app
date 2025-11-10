# ---------------------------
# 1️⃣ Use official Node.js LTS image
# ---------------------------
FROM node:20-alpine

# ---------------------------
# 2️⃣ Set working directory inside container
# ---------------------------
WORKDIR /app

# ---------------------------
# 3️⃣ Copy package.json & package-lock.json
# ---------------------------
COPY package*.json ./

# ---------------------------
# 4️⃣ Install dependencies
# ---------------------------
RUN npm install --production

# ---------------------------
# 5️⃣ Copy the rest of the application
# ---------------------------
COPY . .

# ---------------------------
# 6️⃣ Expose port 3000
# ---------------------------
EXPOSE 3000

# ---------------------------
# 7️⃣ Run the app
# ---------------------------
CMD ["node", "index.js"]
