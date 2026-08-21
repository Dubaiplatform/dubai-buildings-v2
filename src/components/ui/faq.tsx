"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FAQ({ questions }: any) {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-3xl md:text-5xl text-primary mb-4">FAQ&apos;s</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AccordionPrimitive.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val || undefined)}
            className="w-full"
          >
            {questions.map((faq: any, index: number) => {
              const value = `item-${index}`;
              const isOpen = openItem === value;

              return (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionPrimitive.Item
                    value={value}
                    className="relative border-b border-border text-black"
                  >
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary origin-top"
                      animate={
                        isOpen
                          ? { scaleY: 1, opacity: 1 }
                          : { scaleY: 0, opacity: 0 }
                      }
                      initial={{ scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-primary/5 pointer-events-none rounded-md"
                      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    <AccordionPrimitive.Header asChild>
                      <AccordionPrimitive.Trigger
                        className="flex w-full items-center justify-between py-4 pl-4 pr-4 text-left md:text-lg hover:cursor-pointer relative z-10 font-[550]"
                        style={{
                          color: isOpen ? "var(--primary, black)" : "inherit",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {faq.question}
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 ml-4"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </motion.svg>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>

                    {/* Answers always stay in the DOM for crawlers; only visibility animates */}
                    <div
                      className="grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-4 pr-4 pb-4 text-gray-600 leading-relaxed relative z-10">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </AccordionPrimitive.Item>
                </motion.div>
              );
            })}
          </AccordionPrimitive.Root>
        </motion.div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <Link
          href={"#contact-form"}
          className="border px-4 py-3 bg-black hover:bg-black/90 text-white"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
