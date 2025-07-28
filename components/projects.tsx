import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function Projects() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <a href="https://hotel-booking-app-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
          <h1 className="font-sans font-bold text-lg">
            🏨 Built and launched Hotel Booking App with Admin Dashboard
          </h1>
          </a>
          <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A full-stack hotel booking platform built for reliability, speed,
            and admin-level control.
          </p>
          {/* User Features */}
          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              User Features
            </h3>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🛏️ Browse available rooms with dynamic listings
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📅 Book rooms using real-time calendar availability
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🔐 Secure authentication with NextAuth
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📋 View and manage personal bookings in dashboard
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📱 Fully responsive design for mobile & desktop
            </div>
          </div>

          {/* Admin Features */}
          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              Admin Features
            </h3>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🧑‍💼 Role-based admin access control
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🏨 Add, edit, and delete rooms directly from dashboard
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🗂️ View and manage all bookings across users
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🖼️ Upload room images for Your rooms
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Reviews Management System where you can manage all the review
              user gives
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753094201/Screenshot_283_ataqcf.png"
              alt="Home page"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753095832/Screenshot_284_ezk0ft.png"
              alt="Rooms page"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753156051/Screenshot_292_oullym.png"
              alt="Sign-up page"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753095981/Screenshot_285_ooyitt.png"
              alt="Admin Panel"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <a href="https://www.stationerywala.shop/" target="_blank" rel="noopener noreferrer">
          <h1 className="font-sans font-bold text-lg">
            🛒 StationeryWala – Project Write-up (Client-Ready Language)
          </h1>
          </a>
          <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A mobile-friendly stationery e-commerce app where users can browse
            items, add them to cart, log in, and place orders using PhonePe.
            Built using React.js and Appwrite, it includes a complete admin
            panel to manage products, orders, and customer messages. Designed to
            be fast, clean, and super practical — just how real-world businesses
            need it.
          </p>
          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              User Features
            </h3>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🛍️ Browse a full catalog of stationery products
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🛒 Add products to cart and update quantity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🔐 Secure login system for tracking orders
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💸 Checkout flow with PhonePe payment integration
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📦 Orders page to view purchase history
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📱 Mobile-friendly UI for seamless shopping
            </div>
          </div>

          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              Admin Features
            </h3>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📋 Add, update, or delete products from catalog
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📦 Manage all incoming customer orders
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📨 View and respond to customer contact messages
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🧠 Built with Appwrite backend for authentication and data
              handling
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753096864/Screenshot_287_gfxerz.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753096857/Screenshot_288_m14rtq.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753096853/Screenshot_289_h8oei1.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753096938/Screenshot_291_tux2ek.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <section>
            <h1 className="font-sans font-bold text-lg">
              ⚙️ Where Ideas Became Interfaces
            </h1>
            <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              A collection of polished, production-style builds where I
              experiment, learn fast, and deliver client-ready features. From
              YouTube clones to B2B dashboards — all done with code that speaks
              business.
            </p>

            {/* YouTube Clone */}
            <div className="mb-5">
              <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                🎥 YouTube Clone (Fullstack)
              </h3>
              <p className="text-sm text-muted-foreground">
                Built a complete fullstack video platform with upload, delete,
                authentication, role-based access, and comment system. MongoDB
                on backend with clean, scalable structure.
              </p>
            </div>

            {/* Converso */}
            <div className="mb-5">
              <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                🧠 Converso AI
              </h3>
              <p className="text-sm text-muted-foreground">
                AI-powered app using Vapi where users can talk to an AI to
                deeply understand any topic in simple words — like having a
                personal explainer in your pocket.
              </p>
            </div>

            {/* Travel Dashboard */}
            <div className="mb-5">
              <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                ✈️ Travel Agency Dashboard
              </h3>
              <p className="text-sm text-muted-foreground">
                Admin dashboard for a travel agency where admins can create
                AI-enabled trip plans, manage users, and view platform stats.
                Focused on backend logic and dashboard UX.
              </p>
            </div>

            {/* Construction Website */}
            <div className="mb-5">
              <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                🏗️ Construction Company Website
              </h3>
              <p className="text-sm text-muted-foreground">
                A B2B-focused mobile responsive website with landing page,
                services, contact form, and project portfolio — perfect for
                local contractors or real estate firms.
              </p>
            </div>

            {/* Vans Life App */}
            <div className="mb-5">
              <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                🚐 Vans Life (Scrimba Clone)
              </h3>
              <p className="text-sm text-muted-foreground">
                Learned client-side routing and layout management using React
                Router. Includes van listings, host dashboard, and product
                detail pages with dynamic routes.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753159934/file_cover_-_1_l9xlrw.png"
              alt="Youtube clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753160313/Home_quc7ae.png"
              alt="Converso SaaS"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753159950/Screenshot_293_qfziqd.png"
              alt="Travel Agency Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://res.cloudinary.com/dxlh1tom2/image/upload/v1753160545/Screenshot_294_uivqkc.png"
              alt="Travel agency AI trips"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
