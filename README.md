Creating a fully functional course-selling app using Node.js and TypeScript requires a solid architecture to handle:

User authentication and roles (student, instructor, admin)

Course creation and management

Video/file uploads

Payments

Order/invoice management

Reviews & ratings

Dashboard (admin/instructor/student)



********************************************************************************************************
1. Core Node.js & JavaScript Questions
Node.js Fundamentals
Explain the Node.js Event Loop.

How does it handle asynchronous operations?

Difference between setImmediate(), setTimeout(), and process.nextTick()?

What is the difference between require() and import?

CommonJS vs ES Modules.

How does Node.js handle child processes?

When would you use child_process.spawn() vs child_process.exec()?

Explain Streams in Node.js.

Types of streams (Readable, Writable, Duplex, Transform).

How would you handle large file processing efficiently?

What is the purpose of the cluster module?

How does it help in scaling Node.js applications?

Explain Error Handling in Node.js.

Difference between try-catch, error-first callbacks, and .catch() in Promises.

What is the Buffer class in Node.js?

When would you use it?

How does Node.js manage memory?

Garbage collection, memory leaks, and how to debug them.

Advanced JavaScript
Explain Event Delegation in JavaScript.

What are Closures? Provide a practical use case.

Difference between == and === with examples.

Explain this keyword in different contexts (global, function, arrow function, class).

How does prototypal inheritance work in JavaScript?

What are Promises and Async/Await?

How would you handle multiple async operations in parallel?

2. Backend Development & APIs
REST vs GraphQL – When would you choose one over the other?

How do you secure a REST API?

JWT, OAuth, Rate Limiting, CORS, CSRF protection.

Explain WebSockets and when to use them.

How would you implement real-time features (e.g., chat app)?

What is middleware in Express.js?

How would you write a custom middleware for authentication?

How do you handle file uploads in Node.js?

Using multer or streaming.

Explain Caching Strategies.

Redis caching, CDN, ETag.

How do you optimize API response time?

Pagination, compression, lazy loading, DB indexing.

3. Databases & ORMs
SQL vs NoSQL – When to use each?

How do you design a database schema for an e-commerce app?

What is an Index in databases? How does it improve performance?

Explain MongoDB Aggregation Pipeline.

How do you handle database transactions in Node.js?

Using mongoose with transactions or knex for SQL.

What is Connection Pooling? Why is it important?

4. System Design & Scalability
How would you design a URL Shortening Service (like Bit.ly)?

Discuss DB schema, caching, hashing, scaling.

Explain Load Balancing in Node.js.

Nginx, PM2, Kubernetes.

How would you handle 1 million concurrent connections?

Optimizations: clustering, WebSockets, horizontal scaling.

What is a Microservices Architecture?

When would you choose it over Monolithic?

How do you ensure high availability in a Node.js app?

Failover strategies, redundancy, health checks.

5. DevOps & Deployment
Explain CI/CD Pipeline for a Node.js App.

GitHub Actions, Docker, AWS/GCP deployment.

How do you monitor a Node.js application in production?

Logging (Winston, Morgan), APM (New Relic, Datadog).

What is Docker? How do you containerize a Node.js app?

Explain Kubernetes and its benefits for Node.js apps.

6. Project-Specific Questions
General Project Questions
Walk me through your most challenging Node.js project.

What architecture did you use?

How did you handle scalability?

What were the bottlenecks, and how did you resolve them?

Have you worked on real-time applications?

How did you implement WebSockets/Socket.IO?

How did you handle authentication in your project?

JWT, OAuth, session management.

Did you face any performance issues? How did you debug them?

Profiling with node --inspect, memory leaks.

What testing strategies did you use?

Unit tests (Jest, Mocha), Integration tests, E2E (Supertest).

Scenario-Based Questions
Your API is slow under heavy load. How do you optimize it?

Database indexing, caching, query optimization.

How would you design a logging system for a distributed Node.js app?

ELK Stack, Winston, centralized logging.

Your app crashes randomly in production. How do you debug it?

Logs, error tracking (Sentry), PM2 monitoring.

7. Coding Challenges (Possibly Live)
Implement a Rate Limiter for an API.

Write a function to flatten a deeply nested object.

Create a simple Express.js CRUD API with JWT auth.

Optimize a slow database query.

Implement a Pub-Sub system using Redis.