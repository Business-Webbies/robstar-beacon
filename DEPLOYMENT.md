# Vercel Deployment Guide

## Prerequisites

1. Sign up for a free account at [Resend](https://resend.com)
2. Verify your domain at [Resend Domains](https://resend.com/domains)
3. Create an API key at [Resend API Keys](https://resend.com/api-keys)

## Deployment Steps

### 1. Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Vercel will automatically detect your Vite configuration

### 2. Configure Environment Variables

In your Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key (from step 3 in Prerequisites)

### 3. Update Email Sender (Important!)

Before sending emails in production, update the `from` field in `api/contact.ts`:

```typescript
// Change from:
from: 'RobStar Consulting <onboarding@resend.dev>',

// To your verified domain:
from: 'RobStar Consulting <noreply@yourdomain.com>',
```

**Note:** `onboarding@resend.dev` only works for development/testing. For production, you must use your own verified domain.

## Testing Locally

To test the contact form locally:

1. Create a `.env` file (already in .gitignore)
2. Add your Resend API key:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
3. Install Vercel CLI: `npm i -g vercel`
4. Run: `vercel dev`

## Contact Form Features

- ✅ Form validation with error messages
- ✅ Email sent to business (info@robstarconsulting.com)
- ✅ Confirmation email sent to customer
- ✅ Loading states and success/error notifications
- ✅ Reply-to set to customer's email for easy responses
