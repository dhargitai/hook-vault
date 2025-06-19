import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import clsx from "clsx";
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { StackedLayout } from '@/components/stacked-layout'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@/components/sidebar'


const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

const navItems = [
  { label: 'Proven Hooks', url: '/hooks' },
  { label: 'CTA Frameworks', url: '/cta' },
  { label: 'Title Optimizer', url: '/title-optimizer' },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="project-starter"
      className={clsx(
        `${font.className}`,
        'text-zinc-950 antialiased lg:bg-white dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950'
      )}
    >
      <head>
      </head>
      <body>
        <StackedLayout
          navbar={<Navbar>
            <div>Hook Vault</div>
            <NavbarDivider className="max-lg:hidden" />
            <NavbarSection className="max-lg:hidden">
              {navItems.map(({ label, url }) => (
                <NavbarItem key={label} href={url}>
                  {label}
                </NavbarItem>
              ))}
            </NavbarSection>
          </Navbar>
          }
          sidebar={
            <Sidebar>
              <SidebarHeader>
                <div>Hook Vault</div>
              </SidebarHeader>
              <SidebarBody>
                <SidebarSection>
                  {navItems.map(({ label, url }) => (
                    <SidebarItem key={label} href={url}>
                      {label}
                    </SidebarItem>
                  ))}
                </SidebarSection>
              </SidebarBody>
            </Sidebar>
          }
        >

          <ClientLayout>{children}</ClientLayout>
        </StackedLayout>
      </body>
    </html>
  );
}
