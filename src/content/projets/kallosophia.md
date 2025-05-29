---
slug: "kallosophia"
title: "Kallosophia"
lang: "fr"
---

Kallosophia is a culture quiz application focused on art. It allows users to test their knowledge about artworks, artists, and historical movements, while offering both free and premium features. Users can play quizzes, track their progress, and customize their experience with premium accounts.

---

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Monorepo Structure](#monorepo-structure)
4. [User Accounts & Authentication](#user-accounts--authentication)
5. [Legal Compliance & PII Deletion](#legal-compliance--pii-deletion)
6. [Background Jobs & Email System](#background-jobs--email-system)
7. [Infrastructure](#infrastructure)
8. [Observability](#observability)
9. [Getting Started](#getting-started)
10. [Contributing](#contributing)
11. [License](#license)
12. [Contact](#contact)

---

## Features

- Play art-related quizzes on various topics.
- Track your performance and see your progress over time.
- Premium accounts can create custom quizzes and participate in leaderboards.

---

## Technologies

- **Frontend**: Next.js (React)
- **Backend**: GraphQL API with Apollo Server, Prisma, Node.js
- **Database**: PostgreSQL
- **Authentication**: Email/password with JWT
- **Queueing**: BullMQ + Redis
- **Email**: Resend with JSX templates via react-email
- **Deployment**: Docker + GCP (Google Kubernetes Engine)

---

## Monorepo Structure

This project uses `pnpm workspaces` and `turbo` for managing multiple apps and packages.

```
kallosophia/
├── apps/
│   ├── web/         # Next.js frontend
│   ├── api/         # GraphQL backend
├── packages/
│   ├── core/        # Shared business logic
│   ├── ui/          # Design system (if used)
│   ├── jobs/        # BullMQ workers
├── infra/           # Infrastructure-as-code (Terraform, K8s)
├── turbo.json
└── package.json
```

---

## User Accounts & Authentication

Kallosophia supports user authentication via email/password.

- Passwords are securely hashed with `bcrypt`.
- JWT tokens are used for session management.
- Users have roles: `USER` (default) and `ADMIN`.

Planned:

- Admin dashboard (separate workspace)
- Email confirmation
- Stripe payments

Minimal PII is stored:

- Only email and password (hashed)

---

## Legal Compliance & PII Deletion

When a user deletes their account, Kallosophia performs a _soft deletion_ for internal consistency.

In compliance with GDPR and similar laws:

- Email and password are removed or anonymized.
- User is marked with a `deletedAt` timestamp.
- Deleted users are never surfaced in queries or UI.
- Optionally, a background job can fully erase PII after a grace period.

---

## Background Jobs & Email System

### Queues & Workers (BullMQ)

Kallosophia uses BullMQ for background processing, with Redis as the backend.

| Queue         | Purpose                   |
| ------------- | ------------------------- |
| notifications | Email dispatch, alerts    |
| payments      | Stripe payment processing |

- Workers live in `packages/jobs/`
- Workers are Dockerized and run independently via Docker Compose

### Email Provider (Resend + React Email)

- Resend is used for transactional email delivery.
- Templates are built using JSX via `react-email` for better testing and composition.

Planned emails:

- Email confirmation
- Password recovery
- Premium subscription receipts

### Queue Monitoring (`bull-board`)

The job queues are monitored with `bull-board`, accessible at:

```
http://localhost:4000/admin/queues
```

- Integrated into the Express app that wraps Apollo Server
- In production, access should be restricted via JWT or basic auth

### Future Enhancements

- Email confirmation flow with expiring tokens
- Retry logic, job priorities, error handling for failed jobs
- Add support for notification batching or digesting

---

## Infrastructure

Infrastructure is managed with code under `infra/`, using:

- **Terraform**: Provisions GCP resources (GKE, Cloud SQL, etc.)
- **Kubernetes**: Apps are deployed via Helm charts
- **CI/CD**: GitHub Actions handles Docker builds and cluster deployments

See `infra/README.md` for full details on cloud architecture.

---

## Observability

| Concern    | Tool            | Hosting           | Notes                                         |
| ---------- | --------------- | ----------------- | --------------------------------------------- |
| Metrics    | Prometheus      | GKE (self-hosted) | App + Kubernetes metrics                      |
| Logs       | Loki + Promtail | GKE (self-hosted) | Centralized logging                           |
| Dashboards | Grafana         | GKE (self-hosted) | Unified view of logs and metrics              |
| Errors     | Sentry          | sentry.io (cloud) | Free tier used for runtime exception tracking |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/seemlesscode/kallosophia.git
cd kallosophia
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development environment

```bash
pnpm run dev
```

App is now running at http://localhost:3000.

---

## Contributing

We welcome contributions to improve the Kallosophia project. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit (`git commit -am 'Add feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Submit a pull request with a description of your changes.

---

## License

Kallosophia is released under the [Business Source License 1.1](./LICENSE).  
After **May 3, 2028**, it will be released under the [MIT License](./LICENSE-MIT).

---

## Contact

For questions or feedback, contact the project maintainer:  
**Tarek** — [tarek@seemlesscode.com](mailto:tarek@seemlesscode.com)
