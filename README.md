<div align="center">

# 🏦 NexBank

**A Next-Generation Fintech SaaS Platform**

*NexBank is a highly secure, scalable, and user-centric financial platform that consolidates multiple bank accounts into a single dashboard, facilitates peer-to-peer transfers, and provides comprehensive financial analytics.*

[Live Demo](https://nex-bank-seven.vercel.app)

</div>

---

## ✨ Features

### 🔐 Authentication & Security
- **Ultra-Secure SSR Auth:** Appwrite email/password authentication mapped securely via HTTP-only, secure cookies.
- **Session Management:** Robust server-side session validation on every protected route.

### 💳 Core Banking Features
- **Plaid Integration:** Securely link multiple bank accounts using Plaid Link.
- **Unified Dashboard:** Real-time aggregation of balances and transactions across all linked accounts.
- **Categorized Spending:** Automated categorization of transactions visualized via Chart.js.

### 💸 Payment Features
- **Dwolla Integration:** Secure ACH peer-to-peer and B2B transfers.
- **Funding Sources:** Dynamic creation of funding sources based on linked Plaid accounts.
- **Real-time Transfer Status:** Tracking the lifecycle of initiated transactions.

### ⚡ Performance Optimizations
- **Next.js Server Actions:** Reduces client-side JavaScript payload.
- **Optimistic UI Updates:** Instant visual feedback during data mutations.
- **Data Caching:** Strategic caching of frequent API requests to Plaid to minimize latency and API costs.

### 🖥 Developer Experience
- **Type Safety:** 100% strictly typed codebase with TypeScript and Zod.
- **Component Driven:** Modular architecture using Shadcn UI and Radix primitives.

---

## 🛠 Tech Stack

### Frontend
| Technology | Description |
| :--- | :--- |
| **Next.js 14** | React framework with App Router & Server Actions |
| **React 18** | UI Library |
| **TypeScript** | Static typing |
| **Tailwind CSS** | Utility-first CSS framework |
| **Shadcn UI** | Accessible component primitives |
| **Chart.js** | Data visualization |

### Backend & Database
| Technology | Description |
| :--- | :--- |
| **Appwrite** | Backend-as-a-Service (Auth, Database) |
| **Node.js** | JavaScript runtime environment |

### Third-Party Integrations
| Service | Purpose |
| :--- | :--- |
| **Plaid API** | Bank account linking & transaction syncing |
| **Dwolla API** | ACH Payment processing & fund transfers |
| **Sentry** | Error tracking and performance monitoring |

---

## 📂 Folder Structure

```text
📦 nexbank
 ┣ 📂 app                  # Next.js App Router (Pages, Layouts, API Routes)
 ┃ ┣ 📂 (auth)             # Authentication routes (Sign-in, Sign-up)
 ┃ ┣ 📂 (root)             # Main application protected routes
 ┃ ┗ 📜 globals.css        # Global Tailwind styles
 ┣ 📂 components           # Reusable React components
 ┃ ┣ 📂 auth               # Authentication components
 ┃ ┣ 📂 bank               # Banking and transaction components
 ┃ ┗ 📂 ui                 # Shadcn UI primitives
 ┣ 📂 lib                  # Core logic, utilities, and integrations
 ┃ ┣ 📂 actions            # Next.js Server Actions (user, bank, dwolla)
 ┃ ┣ 📜 appwrite.ts        # Appwrite client & server configuration
 ┃ ┣ 📜 plaid.ts           # Plaid client configuration
 ┃ ┗ 📜 utils.ts           # Helper functions (formatting, clsx, etc.)
 ┣ 📂 public               # Static assets (images, icons)
 ┣ 📂 types                # TypeScript interfaces and global types
 ┣ 📜 next.config.mjs      # Next.js configuration
 ┣ 📜 tailwind.config.ts   # Tailwind CSS configuration
 ┗ 📜 package.json         # Project dependencies and scripts
```

---

## 📡 API Documentation

NexBank utilizes **Next.js Server Actions** acting as internal APIs.

### Example Server Action: `createTransfer`
**Path:** `/lib/actions/dwolla.actions.ts`

**Description:** Initiates a fund transfer between two Dwolla funding sources.

**Parameters:**
```typescript
interface TransferParams {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
}
```

**Response:**
Returns a string representing the Dwolla Transfer `Location` URL header upon successful creation.

**Error Handling:**
All server actions are wrapped in `try/catch` blocks. Errors are logged to Sentry and sanitized string messages are returned to the client to prevent data leaks.

---

## 🗄 Database Design

NexBank utilizes Appwrite's Database with the following core collections:

1. **Users Collection**
   - Stores user profiles, Appwrite User IDs, and Dwolla Customer references.
2. **Banks Collection**
   - Stores linked bank accounts, Plaid Access Tokens, Account IDs, and Dwolla Funding Source URLs.
   - *Relationship:* Many-to-One with Users.
3. **Transactions Collection**
   - Stores records of internal platform transfers.
   - *Relationship:* Links to Sender Bank and Receiver Bank documents.

---

## 🚀 Installation Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### 1. Clone the repository
```bash
git clone https://github.com/your-username/nexbank.git
cd nexbank
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables Setup
Copy the example environment file:
```bash
cp .env.example
```
Fill in all the required API keys (Appwrite, Plaid, Dwolla).

### 4. Run the development server
```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the application.

---

## ⚡ Performance Optimization

- **React Server Components (RSC):** Shifts rendering logic to the server, resulting in zero JS bundle size for static components.
- **Image Optimization:** Utilizes `next/image` for automatic lazy loading, WebP conversion, and responsive sizing.
- **Font Optimization:** `next/font` automatically optimizes and preloads Google Fonts, removing layout shift.

---

## 🛡 Security Measures

- **Secure Cookies:** Session tokens are stored in `HttpOnly`, `Secure` cookies preventing XSS attacks.
- **Server-Side Validation:** All forms are validated client-side and server-side using **Zod**.
- **Data Encryption:** Sensitive tokens (like Plaid Access Tokens) are managed securely on the backend and never exposed to the client.

---

## 📈 Monitoring & Logging

- **Sentry Integration:** Comprehensive error tracking and performance monitoring for both Edge and Node.js environments.
- **Console Logging:** Winston/Pino structured logging recommended for production deployments.

---
