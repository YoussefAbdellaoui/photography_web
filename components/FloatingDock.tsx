import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconArtboard,
  IconArticle,
  IconCamera,
  IconHome,
  IconPhone,
  IconPlane,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Projects",
      icon: (
        <IconCamera className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Drone Footage",
      icon: (
          <IconPlane className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects/footage",
    },
    {
      title: "Art Work",
      icon: (
          <IconArtboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects/art",
    },
    {
      title: "Services & Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    // {
    //   title: "Twitter",
    //   icon: (
    //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "GitHub",
    //   icon: (
    //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <div className="flex items-center justify-center w-full pb-10 pt-16">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
