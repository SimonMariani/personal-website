/** @format */

export default {
  programmingLanguages: [
    { name: "Python", percentage: 95, description: "Versatile, high-level language widely used for web, data science, automation, and more." },
    { name: "JavaScript", percentage: 95, description: "Essential for frontend development and also widely used for backend with Node.js." },
    { name: "Typescript", percentage: 95, description: "A superset of JavaScript that adds static typing for improved code quality and maintainability." },
    { name: "HTML/CSS", percentage: 95, description: "Core technologies for building and styling web pages and user interfaces." },
    {
      name: "C#",
      percentage: 65,
      description: "Modern, object-oriented language commonly used for Windows applications and game development with Unity.",
    },
    { name: "C++", percentage: 30, description: "Powerful language for system/software development and performance-critical applications." },
    { name: "C", percentage: 35, description: "Widely-used procedural language, foundational for system programming and embedded systems." },
    { name: "Clingo", percentage: 70, description: "Logic programming language used for declarative problem solving and answer set programming." },
    { name: "Prolog", percentage: 70, description: "Logic programming language ideal for symbolic reasoning and AI applications." },
    { name: "Netlogo", percentage: 40, description: "Agent-based modeling language for simulating complex systems and behaviors." },
    { name: "R", percentage: 40, description: "Statistical computing language popular for data analysis and visualization." },
  ],

  backend: [
    {
      name: "Django",
      percentage: 90,
      description: "Robust Python web framework for rapid development and clean, pragmatic design.",
    },
    {
      name: "Flask",
      percentage: 65,
      description: "Lightweight Python web framework ideal for small to medium applications and APIs.",
    },
    {
      name: "FastAPI",
      percentage: 55,
      description: "Modern Python framework for building fast APIs with automatic docs and type hints.",
    },
    {
      name: "ExpressJS",
      percentage: 85,
      description: "Minimal and flexible Node.js web application framework for building APIs and web apps.",
    },
  ],

  frontend: [
    {
      name: "ReactJS",
      percentage: 90,
      description: "Popular JavaScript library for building interactive user interfaces and single-page applications.",
    },
    {
      name: "VueJS",
      percentage: 85,
      description: "Progressive JavaScript framework for building user interfaces and SPAs with ease.",
    },
    {
      name: "Figma",
      percentage: 80,
      description: "Web-based design and prototyping tool for collaborative UI/UX development.",
    },
  ],

  deploymentTools: [
    {
      name: "Docker",
      percentage: 95,
      description: "Platform for developing, shipping, and running applications in lightweight containers.",
    },
    { name: "Docker Compose", percentage: 95, description: "Tool for defining and managing multi-container Docker applications." },
    // { name: "Docker Swarm", percentage: 30, description: "Docker Swarm is a container orchestration platform." },
    {
      name: "Kubernetes",
      percentage: 95,
      description: "Open-source system for automating deployment, scaling, and management of containerized applications.",
    },
    {
      name: "Helm",
      percentage: 95,
      description: "Kubernetes package manager for defining, installing, and upgrading complex Kubernetes apps.",
    },
    {
      name: "Kustomize",
      percentage: 90,
      description: "Tool for customizing Kubernetes resource configuration without templates.",
    },
    {
      name: "Prometheus",
      percentage: 80,
      description: "Open-source monitoring and alerting toolkit for systems and services.",
    },
    {
      name: "Grafana",
      percentage: 80,
      description: "Open-source analytics and interactive visualization web application for monitoring and observability.",
    },
    {
      name: "Loki",
      percentage: 70,
      description: "Log aggregation system designed for storing and querying logs efficiently, integrated with Grafana.",
    },
    {
      name: "Promtail",
      percentage: 70,
      description: "Agent for collecting and shipping logs to Loki for aggregation and analysis.",
    },
    {
      name: "Git",
      percentage: 90,
      description: "Distributed version control system for tracking changes in source code during software development.",
    },
    // { name: "GitHub", percentage: 80, description: "GitHub is a provider of Internet hosting for software development and version control using Git." },
    {
      name: "GitHub Actions",
      percentage: 80,
      description: "CI/CD and automation platform integrated with GitHub repositories.",
    },
    {
      name: "N8n",
      percentage: 60,
      description: "Workflow automation tool for integrating and automating tasks across different services.",
    },
    {
      name: "Apache Airflow",
      percentage: 60,
      description: "Platform to programmatically author, schedule, and monitor complex data workflows.",
    },
    {
      name: "ETL/ELT",
      percentage: 55,
      description: "Processes for extracting, transforming, and loading (or loading then transforming) data between systems.",
    },
  ],

  databases: [
    {
      name: "PostgreSQL",
      percentage: 90,
      description: "Advanced open-source relational database known for reliability and feature richness.",
    },
    {
      name: "MySQL",
      percentage: 80,
      description: "Popular open-source relational database management system for web and server applications.",
    },
    {
      name: "MariaDB",
      percentage: 75,
      description: "Community-developed fork of MySQL, offering improved performance and features.",
    },
    {
      name: "TimescaleDB",
      percentage: 85,
      description: "Time-series database built on PostgreSQL for scalable and fast time-series data management.",
    },
    {
      name: "InfluxDB",
      percentage: 60,
      description: "Open-source time-series database optimized for high-write loads and real-time analytics.",
    },
    {
      name: "Milvus",
      percentage: 85,
      description: "Open-source vector database for scalable similarity search and AI applications.",
    },
    {
      name: "FAISS",
      percentage: 60,
      description: "Library for efficient similarity search and clustering of dense vectors, often used in AI.",
    },
    {
      name: "MongoDB",
      percentage: 65,
      description: "Document-oriented NoSQL database for flexible and scalable data storage.",
    },
    {
      name: "Redis",
      percentage: 65,
      description: "In-memory data structure store used as a database, cache, and message broker.",
    },
  ],

  cloudPlatforms: [
    {
      name: "Azure",
      percentage: 85,
      description: "Microsoft's cloud computing platform for building, deploying, and managing applications and services.",
    },
    {
      name: "AWS",
      percentage: 60,
      description: "Amazon's comprehensive cloud platform offering a wide range of infrastructure and application services.",
    },
    {
      name: "Digital Ocean",
      percentage: 75,
      description: "Cloud infrastructure provider known for simplicity and developer-friendly virtual servers.",
    },
    {
      name: "OVH Cloud",
      percentage: 85,
      description: "European cloud provider offering VPS, dedicated servers, and scalable cloud solutions.",
    },
    {
      name: "Scaleway",
      percentage: 65,
      description: "Cloud computing platform providing virtual instances, storage, and managed services.",
    },
  ],

  aiTools: [
    { name: "Numpy", percentage: 95, description: "Python library for efficient numerical computations and array operations." },
    { name: "Pandas", percentage: 95, description: "Python library for data manipulation and analysis, especially with tabular data." },
    { name: "Matplotlib", percentage: 95, description: "Python library for creating static, animated, and interactive visualizations." },
    { name: "Scikit-learn", percentage: 95, description: "Python library for classical machine learning algorithms and data preprocessing." },
    { name: "PyTorch", percentage: 95, description: "Open-source deep learning framework for building and training neural networks." },
    { name: "CUDA", percentage: 85, description: "NVIDIA's parallel computing platform for accelerating computations on GPUs." },
    { name: "LLM APIs", percentage: 80, description: "APIs for interacting with large language models for NLP and generative AI tasks." },
    { name: "Huggingface", percentage: 60, description: "Open-source platform and libraries for natural language processing and transformer models." },
    { name: "Langchain", percentage: 50, description: "Framework for building applications with language models and AI agents." },
    { name: "Keras", percentage: 45, description: "High-level neural networks API for fast prototyping, running on top of TensorFlow." },
    { name: "TensorFlow", percentage: 45, description: "Open-source platform for machine learning and deep learning, supporting large-scale training." },
  ],

  aiFields: [
    {
      name: "MLOps",
      percentage: 90,
      description: "Practices and tools for deploying, monitoring, and managing machine learning models in production.",
    },
    {
      name: "Deep Learning",
      percentage: 85,
      description: "Subset of machine learning using neural networks for tasks like image, speech, and text processing.",
    },
    {
      name: "Machine Learning",
      percentage: 85,
      description: "Algorithms and statistical models that enable computers to learn from data and make predictions.",
    },
    {
      name: "Computer Vision",
      percentage: 90,
      description: "Field focused on enabling computers to interpret and process visual information from images and videos.",
    },
    {
      name: "Natural Language Processing",
      percentage: 75,
      description: "Techniques for computers to understand, interpret, and generate human language.",
    },
    {
      name: "Reinforcement Learning",
      percentage: 45,
      description: "Area of ML where agents learn to make decisions by interacting with an environment to maximize rewards.",
    },
    {
      name: "Anomaly Detection",
      percentage: 55,
      description: "Identifying rare or unusual patterns in data that do not conform to expected behavior.",
    },
    {
      name: "Recommender Systems",
      percentage: 35,
      description: "Algorithms that suggest relevant items to users based on preferences and behavior.",
    },
    {
      name: "Time Series Analysis",
      percentage: 65,
      description: "Analyzing time-ordered data to extract meaningful statistics and forecast future values.",
    },
    {
      name: "OOD-Detection",
      percentage: 85,
      description: "Techniques for detecting inputs that are out-of-distribution or different from training data.",
    },
    {
      name: "Active Learning",
      percentage: 85,
      description: "ML approach where the model interactively queries for labels to improve learning efficiency.",
    },
    // {
    //   name: "Game Theory",
    //   percentage: 45,
    //   description: "Study of mathematical models of strategic interaction among rational agents.",
    // },
  ],
  modelsAndArchitectures: [
    { name: "CNNs", percentage: 95, description: "Python library for efficient numerical computations and array operations." },
    { name: "ML Models", percentage: 95, description: "Python library for data manipulation and analysis, especially with tabular data." },
    { name: "RNNs/LSTMs", percentage: 95, description: "Python library for creating static, animated, and interactive visualizations." },
    { name: "Transformers", percentage: 95, description: "Python library for classical machine learning algorithms and data preprocessing." },
    { name: "VAEs", percentage: 95, description: "Open-source deep learning framework for building and training neural networks." },
    { name: "GANs", percentage: 85, description: "NVIDIA's parallel computing platform for accelerating computations on GPUs." },
    { name: "Bayesian Models", percentage: 80, description: "APIs for interacting with large language models for NLP and generative AI tasks." },
  ],

  otherSoftware: [
    { name: "Windows", percentage: 95, description: "Microsoft's widely-used operating system for personal computers and enterprise environments." },
    { name: "Linux", percentage: 85, description: "Open-source family of Unix-like operating systems for servers, desktops, and embedded systems." },
    { name: "MacOS", percentage: 45, description: "Apple's proprietary operating system for Mac computers." },
    { name: "PowerBI", percentage: 70, description: "Microsoft's business analytics tool for interactive data visualization and reporting." },
    { name: "Unity", percentage: 50, description: "Cross-platform game engine for developing 2D and 3D games and simulations." },
    { name: "PyQt", percentage: 50, description: "Python bindings for the Qt application framework, used for building GUI applications." },
  ],
};
