# Multipurpose Full Responsive Layout Ecommerce NextJs Website

![maxresdefault](https://raw.githubusercontent.com/hungdannt/thegioipc_frontend/refs/heads/master/demo.jpeg)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  
## Overview
This project is a dynamic Ecommerce platform designed to facilitate seamless transactions between buyers and sellers for daily essentials. The platform ensures secure payments, smooth transactions, and optimized media handling for an enhanced user experience.

## Features
- **Dynamic Ecommerce Platform**: Enables smooth transactions for daily essentials.
- **Secure Payments**: Integrated Stripe for secure and reliable payment processing.
- **User Authentication**: Utilized NextAuth for robust user authentication and authorization.
- **Optimized Media Management**: Implemented Cloudinary for efficient media storage and optimization.
- **Scalable Database**: Used SQL and PlanetScale for a highly scalable and performant database solution.

## Technologies Used
- **Next.js**: React framework for building server-side rendered applications.
- **NextAuth**: Authentication for Next.js applications.
- **Stripe**: Payment processing platform for secure transactions.
- **PostgreSQL**: Database 
- **PlanetScale**: Scalable SQL database service.
- **Cloudinary**: Media management and optimization.
- **Prisma**: ORM

## Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/hungdannt/thegioipc_frontend
.git
   
2. **Install dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
   ```bash
    DATABASE_URL=############################################################

    NEXTAUTH_SECRET =###################################
    
    NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
    
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = ################################################
    
    STRIPE_SECRET_KEY = ##############################################
    
    WEBHOOK_SIGNIN_SECRET = ##########################################

4. **Run the development server**:
   ```bash
   npm run dev

   
