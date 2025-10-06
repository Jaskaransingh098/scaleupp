"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "How fast will I see results?",
    answer: "30–45 days: calls start. 111 days: 10–15/month.",
  },
  {
    question: "What do I need to do?",
    answer: " Record 1–2 hours a month. Done.",
  },
  {
    question: "Why not just hire an editor?",
    answer: " Editors cut videos. We build funnels that sell.",
  },
  {
    question: " Do you only do YouTube",
    answer:
      " No — every video becomes shorts, reels, TikToks, LinkedIn posts, emails.",
  },
  {
    question: "What if it doesn’t work?",
    answer: " We keep working until the leads come in. Period.",
  },
  {
    question: "Is this for beginners?",
    answer:
      " Got an offer + traction? Perfect. Still figuring things out? Fix that first.",
  },
  {
    question: "Why only 3 clients at a time?",
    answer: " Because focus = results. No bloated agency vibes.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-[120px] bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="border border-white/30 rounded-full py-2 px-4 inline-block">
            <p className="text-sm font-semibold text-white">FAQ’s</p>
          </div>
          <div
            className="bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg p-4 relative z-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
              Frequently Asked{" "}
              <span className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent font-bold" style={{
                      fontFamily: "Times New Roman, serif",
                      fontStyle: "italic",
                    }}>
                Questions
              </span>
            </h2>
          </div>
          <p className="text-lg text-white max-w-3xl">
            Answers to common questions about our services, processes, and what
            sets us apart.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative z-20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <AccordionTrigger className="group w-full text-left font-medium text-lg text-text-primary p-6 flex justify-between items-center hover:no-underline">
                  {item.question}
                  <div className="w-6 h-6 flex-shrink-0">
                    {/* <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/DT7ew3gD1V7s2jqnBQZM7wEf8-19.svg?"
                      alt="Plus Icon"
                      width={24}
                      height={24}
                      className="transition-transform duration-300 group-data-[state=open]:rotate-45"
                    /> */}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-base text-text-secondary">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-card rounded-full p-4 pl-6 flex justify-between items-center border border-border relative z-20">
          <div className="flex items-center gap-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/ZjgMIJH0NDQeRncPHoJGwf65M-20.svg?"
              alt="Icon"
              width={32}
              height={32}
            />
            <p className="text-lg font-medium text-text-primary">
              Still Have a Question
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-primary to-light-blue text-primary-foreground font-medium py-3 px-6 text-base hover:opacity-90 transition-opacity"
          >
            <Link href="#contact">Ask Question</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
