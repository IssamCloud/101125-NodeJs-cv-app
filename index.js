const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Senior DevOps Engineer - Professional CV</title>

      <!-- Tailwind CSS -->
      <script src="https://cdn.tailwindcss.com"></script>
      
      <!-- Google Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

      <style>
        * {
          font-family: 'Inter', sans-serif;
        }
        
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .skill-badge {
          transition: all 0.3s ease;
        }
        
        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .section-card {
          transition: all 0.3s ease;
        }
        
        .section-card:hover {
          transform: translateX(5px);
        }
        
        .timeline-dot {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          position: absolute;
          left: -6px;
          top: 8px;
        }
        
        .progress-bar {
          height: 8px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: width 1s ease;
        }
      </style>
    </head>

    <body class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        
        <!-- Header Section -->
        <div class="glass-effect rounded-3xl shadow-2xl p-8 mb-8">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              JD
            </div>
            <div class="flex-1 text-center md:text-left">
              <h1 class="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                John Doe
              </h1>
              <p class="text-2xl text-gray-700 font-medium mb-4">
                Senior DevOps Engineer & Cloud Architect
              </p>
              <div class="flex flex-wrap gap-4 justify-center md:justify-start text-gray-600">
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  john.doe@example.com
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                  San Francisco, CA
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +1 (555) 123-4567
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                  github.com/johndoe
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Summary -->
        <div class="glass-effect rounded-3xl shadow-2xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Professional Summary
          </h2>
          <p class="text-gray-700 leading-relaxed text-lg">
            Accomplished DevOps Engineer with 8+ years of experience designing, implementing, and managing cloud infrastructure and CI/CD pipelines. Expert in containerization, orchestration, and infrastructure automation with a proven track record of reducing deployment times by 70% and improving system reliability to 99.99% uptime. Passionate about building scalable, secure, and efficient cloud-native solutions.
          </p>
        </div>

        <!-- Technical Skills -->
        <div class="glass-effect rounded-3xl shadow-2xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Technical Skills
          </h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Cloud Platforms & Services</h3>
              <div class="flex flex-wrap gap-3">
                ${["AWS", "Azure", "Google Cloud Platform", "DigitalOcean", "Heroku", "IBM Cloud"]
                  .map(skill => 
                    `<span class="skill-badge px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-md">${skill}</span>`
                  ).join("")}
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Containers & Orchestration</h3>
              <div class="flex flex-wrap gap-3">
                ${["Docker", "Kubernetes", "Docker Swarm", "OpenShift", "Helm", "Rancher"]
                  .map(skill => 
                    `<span class="skill-badge px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md">${skill}</span>`
                  ).join("")}
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">CI/CD & Automation</h3>
              <div class="flex flex-wrap gap-3">
                ${["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "Travis CI", "ArgoCD", "Spinnaker"]
                  .map(skill => 
                    `<span class="skill-badge px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium shadow-md">${skill}</span>`
                  ).join("")}
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Infrastructure as Code</h3>
              <div class="flex flex-wrap gap-3">
                ${["Terraform", "Ansible", "CloudFormation", "Pulumi", "Chef", "Puppet"]
                  .map(skill => 
                    `<span class="skill-badge px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium shadow-md">${skill}</span>`
                  ).join("")}
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Monitoring & Logging</h3>
              <div class="flex flex-wrap gap-3">
                ${["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Splunk", "CloudWatch"]
                  .map(skill => 
                    `<span class="skill-badge px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-xl font-medium shadow-md">${skill}</span>`
                  ).join("")}
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Programming & Scripting</h3>
              <div class="flex flex-wrap gap-3">
                ${["Python", "Bash", "Go", "Node.js", "PowerShell", "Ruby", "TypeScript"]
                  .map(skill => 
                    `<span class="skill-badge px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-md">${skill}</span>`
                  ).join("")}
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Experience -->
        <div class="glass-effect rounded-3xl shadow-2xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Professional Experience
          </h2>
          
          <div class="space-y-8">
            <!-- Job 1 -->
            <div class="section-card border-l-4 border-purple-500 pl-6 relative">
              <div class="timeline-dot"></div>
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">Senior DevOps Engineer</h3>
                  <p class="text-lg text-purple-600 font-medium">TechCorp Solutions</p>
                </div>
                <span class="text-gray-600 font-medium">Jan 2021 - Present</span>
              </div>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Led migration of 50+ microservices to Kubernetes, reducing infrastructure costs by 40%</li>
                <li>Designed and implemented multi-region AWS infrastructure serving 10M+ daily users</li>
                <li>Built GitOps-based CI/CD pipelines reducing deployment time from 2 hours to 15 minutes</li>
                <li>Established SRE practices and monitoring systems achieving 99.99% uptime SLA</li>
                <li>Mentored team of 5 junior DevOps engineers and conducted technical workshops</li>
              </ul>
            </div>

            <!-- Job 2 -->
            <div class="section-card border-l-4 border-blue-500 pl-6 relative">
              <div class="timeline-dot"></div>
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">DevOps Engineer</h3>
                  <p class="text-lg text-blue-600 font-medium">CloudScale Inc.</p>
                </div>
                <span class="text-gray-600 font-medium">Mar 2019 - Dec 2020</span>
              </div>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Automated infrastructure provisioning using Terraform and Ansible across AWS and Azure</li>
                <li>Implemented comprehensive monitoring solutions with Prometheus and Grafana</li>
                <li>Developed Python-based automation tools reducing manual operations by 60%</li>
                <li>Managed Docker containerization strategy for 30+ applications</li>
                <li>Collaborated with development teams to optimize application performance and reliability</li>
              </ul>
            </div>

            <!-- Job 3 -->
            <div class="section-card border-l-4 border-green-500 pl-6 relative">
              <div class="timeline-dot"></div>
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">Systems Engineer</h3>
                  <p class="text-lg text-green-600 font-medium">DataFlow Systems</p>
                </div>
                <span class="text-gray-600 font-medium">Jun 2017 - Feb 2019</span>
              </div>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Managed Linux server infrastructure supporting critical business applications</li>
                <li>Implemented Jenkins CI/CD pipelines for automated testing and deployment</li>
                <li>Created Bash and Python scripts for system administration and monitoring</li>
                <li>Configured and maintained ELK stack for centralized logging</li>
                <li>Provided 24/7 on-call support and incident response</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Education & Certifications -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Education -->
          <div class="glass-effect rounded-3xl shadow-2xl p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Education
            </h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
                <p class="text-purple-600 font-medium">Stanford University</p>
                <p class="text-gray-600">2013 - 2017</p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="glass-effect rounded-3xl shadow-2xl p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Certifications
            </h2>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold">✓</span>
                <span>AWS Certified Solutions Architect - Professional</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold">✓</span>
                <span>Certified Kubernetes Administrator (CKA)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold">✓</span>
                <span>HashiCorp Certified: Terraform Associate</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold">✓</span>
                <span>Microsoft Azure Administrator</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Key Achievements -->
        <div class="glass-effect rounded-3xl shadow-2xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Key Achievements
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div class="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <p class="text-gray-700 font-medium">Reduction in deployment time through automated CI/CD pipelines</p>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div class="text-4xl font-bold text-blue-600 mb-2">99.99%</div>
              <p class="text-gray-700 font-medium">Uptime achieved through robust monitoring and SRE practices</p>
            </div>
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div class="text-4xl font-bold text-green-600 mb-2">40%</div>
              <p class="text-gray-700 font-medium">Cost savings through cloud infrastructure optimization</p>
            </div>
            <div class="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
              <div class="text-4xl font-bold text-orange-600 mb-2">10M+</div>
              <p class="text-gray-700 font-medium">Daily users supported by managed infrastructure</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="glass-effect rounded-3xl shadow-2xl p-6 text-center">
          <p class="text-gray-600">
            © ${new Date().getFullYear()} John Doe | DevOps Engineer | Built with passion for automation and excellence
          </p>
        </div>

      </div>
    </body>

    </html>
  `);
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});