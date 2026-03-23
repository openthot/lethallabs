# Project Guidelines

This document outlines the standard operating procedures required for all internal and public Lethal Labs projects.

## 🏗️ Architecture Philosophy

1. **Locality of Behavior (LoB)**: The behavior of any given segment of code should be obvious by looking only at that segment. Avoid deep inheritance trees and hidden state mutations.
2. **Immutability First**: Default to immutable data structures unless measuring performance dictates mutability in a hot path.
3. **Data-Oriented Design**: When writing core system primitives, think about memory layouts and cache lines before thinking about class hierarchies.

## 💅 Design System & Styling (Frontend)

Even our internal dashboards use our premium Apple-inspired aesthetic. 
- You must use the `lethal-ui` library or directly use our global CSS variable system.
- Colors must stick to the strict palette defined in `:root`. No random hex codes.
- Micro-interactions (hover states, focus rings) are mandatory. 

## 📊 Telemetry and Observability

All services must bind to "Nexus Analytics" (our internal APM).
- **Logs**: Structured JSON logging only (e.g., Pino in Node, Tracing in Rust).
- **Metrics**: Expose Prometheus endpoints for latencies, memory consumption, and error rates.
- **Alerts**: A service without PagerDuty integration is considered incomplete.

## 🚀 Deployment Pipeline

Every push to `main` is considered a deployment candidate.

1. `main` must always be green. 
2. Merging a PR into `main` triggers:
   - Linting, Type-checking, and Unit Tests via GitHub Actions.
   - Building immutable Docker containers / Edge function bundles.
   - Integration tests on isolated staging infrastructure.
   - If successful, immediate rollout to Production via canary deployment (10% -> 50% -> 100%).
3. If an error spike occurs, the deployment is automatically rolled back within 2 seconds.
