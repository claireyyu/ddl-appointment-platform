# ddl-appointment-platform

`ddl-appointment-platform` is a multilingual, enterprise-grade consulting appointment platform engineered with **React** on the frontend and a **Node.js microservice architecture** on the backend. The system is designed to support seamless consultation workflows, dynamic profile management, and real-time multilingual interaction powered by advanced AI services.

While backend code remains confidential due to enterprise security policies, this frontend repository demonstrates production-level application architecture, modular design, and internationalization strategies aligned with scalable SaaS solutions.

## Features

- **Enterprise-Grade Authentication**  
  Implements JWT-based access control with Google SSO integration via OAuth 2.0 and secure token-based password recovery mechanisms.

- **AI-Powered Multilingual Support**  
  Real-time translation and multilingual interaction capabilities powered by OpenAI APIs, designed for global market adaptability.

- **Dynamic Booking and User Management**  
  Enables user-driven profile creation, appointment scheduling, and consultation management within a fully localized environment.

- **Internationalization and Localization**  
  Structured support for multiple languages (English, Chinese) using scalable i18n architecture with JSON-based resource definitions.

- **Performance and Scalability**  
  Backend architecture incorporates Redis-based caching, optimized database access patterns, and containerized deployment strategies to ensure system resilience and low-latency performance under peak loads.

- **Production-Ready DevOps Workflow**  
  Integrated CI/CD pipelines (GitHub Actions, Docker) ensure automated builds, streamlined deployment, and infrastructure consistency across environments.

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS  
- **Backend**: Node.js, Express (private)  
- **API Integration**: OpenAI, external astrological services  
- **Authentication & Security**: JWT, OAuth 2.0, Google SSO  
- **Infrastructure & Deployment**: AWS, Docker, CI/CD via GitHub Actions  
- **Data Layer**: AWS RDS (MySQL), Redis caching

> Note: Backend implementation is not open-sourced due to proprietary constraints. This repository includes the complete frontend codebase.

## Codebase Highlights

- `components/` – Modular, reusable UI components supporting localized rendering  
- `messages/` – Language resource files with dynamic key-based translation (EN/ZH)  
- `services/` – API abstraction layer for scalable integration  
- `contexts/` – React context providers for auth state and locale switching  
- `middleware.ts` – i18n-aware routing middleware and language handling  
- `tailwind.config.ts` – Custom design system configuration for consistent styling
