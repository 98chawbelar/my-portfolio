import Hospital from "../assets/projectImages/healthbooker/full_pic.png";
import Ecommerce from "../assets/projectImages/eCommerce/hero_img.png";
import Gym from "../assets/projectImages/gym/HomePageGraphic.png";
import CarRental from "../assets/projectImages/carRental/car_rental_img.png";
import BookStore from "../assets/projectImages/bookStore/book_store.png";
export const projects = [
  {
    name: "Hospital Booker",
    image: Hospital,
    languages: ["JavaScript", "React", "Redux Toolkit", "Axios"],
    demo: "https://health-booker-dhl.vercel.app/",
    ui: "Chakra UI + React Icons + React Router + React Toast + Spinners",
    features: [
      "User registration and login",
      "Book and manage hospital appointments",
      "JWT-based authentication",
      "Role-based dashboards (Patient/Doctor)",
      "Real-time toast notifications",
    ],
    github: "https://github.com/98chawbelar/HealthBooker",
  },
  {
    name: "E-Commerce Frontend",
    image: Ecommerce,
    languages: ["React", "Vite", "JavaScript", "TailwindCSS"],
    demo: "https://dhl-fashion.netlify.app/",
    ui: "TailwindCSS + React Router + React Toastify",
    features: [
      "Product listing and category filtering",
      "Add to cart and checkout flow",
      "Toast-based notifications",
      "Clean and responsive UI",
      "Built using Vite for fast performance",
    ],
    github: "https://github.com/98chawbelar/eCommerce-frontend",
  },
  {
    name: "Gym Website",
    image: Gym,
    languages: ["TypeScript", "React", "Vite"],
    demo: "https://empowerher-gym.vercel.app/",
    ui: "TailwindCSS + Framer Motion + React Hook Form + Heroicons",
    features: [
      "Smooth scroll navigation",
      "Dark mode toggle",
      "Animated transitions",
      "Form validations with react-hook-form",
      "Mobile-responsive design",
    ],
    github: "https://github.com/98chawbelar/Gym",
  },
  {
    name: "Car Rental Project",
    image: CarRental,
    languages: ["JavaScript", "React", "express"],

    tools: [
      "Axios",
      "Bcrypt",
      "Cors",
      "Express",
      "ImageKit",
      "JsongWebToken",
      "Mongoose",
      "Multer",
    ],
    ui: ["Tailwindcss", "React-Hot-Toast", "Motion"],
    features: [
      "User registration and login",
      "Book and manage Car Rent",
      "JWT-based authentication",
      "Role-based dashboards (user/owner)",
      "Real-time toast notifications",
    ],
    github: "https://github.com/98chawbelar/Rent_Car-fullstack",
  },
  {
    name: "Dahal Book Store",
    image: BookStore,
    languages: ["JavaScript", "React", "Redux Toolkit", "Axios"],
    demo: "https://dahal-book-store.vercel.app/",
    ui: "TailwindCSS + React Icons + React Router +sweetalert2",
    features: [
  "User authentication and account management",
  "Browse and explore a wide collection of books",
  "Add books to cart and manage shopping cart",
  "Secure API authentication with JWT",
  "Responsive UI with real-time notifications",
],
    github: "https://github.com/98chawbelar/book-store-client",
    
  },
];
