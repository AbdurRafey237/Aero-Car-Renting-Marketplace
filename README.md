<div align="center">

<img src="Aero-Car-Renting-Marketplace/client/src/assets/logo.svg" alt="Aero Logo" height="70" />

# Pakistan's First Car Renting Marketplace

### <i>By Abdur Rafey of SEECS, NUST H-12</i>

</div align="center">
  
---

## Description & Design Logic
Aero allows:
 1. anyone to rent out anyone's car.
 2. anyone to rent their car out to anyone.

So, its a crowd marketplace! This being what the Pakistani market lacks.

Aero for Customers is designed & branded towards the 18-30 age bracket. So: highschool seniors, college students, and people who have just joined the workforce. Narrowing all groups down to the groups that can afford renting a car, these groups are the least likely to have cars and most-likely to need cars. Furthermore, they are some of the most digitally-savvy and adaptable groups, and can adjust to the relatively unconventional concept of short-/medium-run car-renting in Pakistan.

Aero for Partners is designed and branded towards mature age groups (35+). They have cars, and Aero earns their trust by promising to handle any insurance or legal related challenge internally, something that would come out of the commision we get for connecting a renter and a partner. Aero also provides them with the option to reject any booking they find undesirable, and a host of tools to manage and maximize their earnings with Aero.

---

## Some Main Features
### Customer Side
- Account creation
- Account login
- Car searching
- Car browsing
- Car filtering
- Car details view
- Car booking request
- Car booking management

### Partner Side
- Add car
- Hide car
- Delete car
- Accept/reject car booking
- Set car available/not
- Car management info/tools
- Booking management info/tools

### System
- Authentication via JSON Web Tokens
- Persistence for Users, Cars, & Bookings via MongoDB
- File upload handling via Multer + hosting via ImageKit

---

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Uploads:** Multer
- **Image Hosting:** ImageKit
- **Deploy:** Vercel (client + server configs included)

---

## Technologies Used
<div align="center">

<img src="https://img.shields.io/badge/-React-ffffff?style=for-the-badge&logo=react&logoColor=61DAFB" height="32" alt="React" />
<img src="https://img.shields.io/badge/-Vite-ffffff?style=for-the-badge&logo=vite&logoColor=646CFF" height="32" alt="Vite" />
<img src="https://img.shields.io/badge/-Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" height="32" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/-Node.js-ffffff?style=for-the-badge&logo=node.js&logoColor=339933" height="32" alt="Node.js" />
<img src="https://img.shields.io/badge/-Express-ffffff?style=for-the-badge&logo=express&logoColor=000000" height="32" alt="Express" />
<img src="https://img.shields.io/badge/-MongoDB-ffffff?style=for-the-badge&logo=mongodb&logoColor=47A248" height="32" alt="MongoDB" />
<img src="https://img.shields.io/badge/-JWT-ffffff?style=for-the-badge&logo=jsonwebtokens&logoColor=000000" height="32" alt="JWT" />



<img src="https://img.shields.io/badge/-Vercel-ffffff?style=for-the-badge&logo=vercel&logoColor=000000" height="52" alt="Vercel" />


</div>

---

## Project Structure
```txt
Aero-Car-Renting-Marketplace/
  client/                 # React + Vite UI
    src/
      assets/             # images, icons, and branding
      components/         # UI components (cards, banner, navbar, etc.)
      context/            # AppContext (axios + auth + cars fetch)
      pages/              # Home, Cars, CarDetails, MyBookings, Owner pages
  server/                 # Node + Express API
    configs/              # db + imagekit config
    controllers/          # user / owner / booking controllers
    middleware/           # auth + multer
    models/               # User, Car, Booking
    routes/               # user / owner / booking routes
