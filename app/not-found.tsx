"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-white py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-96 w-[42rem] rounded-full bg-primary-light blur-3xl" />
      </div>

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto flex max-w-xl flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -4, 0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary-light text-primary shadow-lg shadow-primary/10"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12">
              <path
                d="M9 3.5h6a1.5 1.5 0 011.5 1.5v1H7.5V5A1.5 1.5 0 019 3.5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="4.5"
                y="6"
                width="15"
                height="15"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M9 12.5l2 2 4-4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <p className="text-7xl font-bold tracking-tight text-primary sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            This page didn&apos;t pass probation.
          </h1>

          <p className="mt-4 text-ink/60">
            The page you&apos;re looking for has been reassigned, offboarded,
            or never existed in our org chart. Let&apos;s get you back to
            somewhere on the books.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/">Back to Home</Button>
            <Button href="/contact-support" variant="outline">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
