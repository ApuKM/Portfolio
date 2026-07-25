"use client";

import React, { useState, useTransition } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, Send, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input, Button, TextArea } from "@heroui/react";
import { sendEmail } from "@/lib/sendMail";

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);

  const handleAction = (formData: FormData) => {
    setStatus(null);
    startTransition(async () => {
      const result = await sendEmail(formData);
      setStatus(result);
    });
  };

  const contactMethods = [
    {
      title: "Email",
      value: "apukumar180@gmail.com",
      link: "mailto:apukumar180@gmail.com",
      icon: Mail,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "WhatsApp",
      value: "+880 1747-234764",
      link: "https://wa.me/8801747234764",
      icon: FaWhatsapp,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Phone",
      value: "+880 1747-234764",
      link: "https://wa.me/8801747234764",
      icon: Phone,
     color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <motion.div className="h-1.5 w-24 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Whether you have a project in mind, a job opportunity, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground mb-2">
              Get In Touch
            </motion.h3>
            
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-surface border border-border transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-1"
                >
                  <div className={`p-4 rounded-xl ${method.bgColor} ${method.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground-subtle mb-1">{method.title}</p>
                    <p className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div variants={itemVariants} className="flex items-center gap-5 p-5 rounded-2xl bg-surface border border-border">
              <div className="p-4 rounded-xl bg-surface-secondary text-foreground-subtle">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground-subtle mb-1">Location</p>
                <p className="text-foreground font-medium text-lg">Rajshahi, Bangladesh</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Server Action Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              action={handleAction}
              className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-sm flex flex-col gap-5"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">Send me a message</h3>
              
              {/* Status Messages */}
              {status?.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center gap-2 mb-2">
                  <CheckCircle2 size={20} />
                  <p className="font-medium text-sm">{status.success}</p>
                </div>
              )}
              {status?.error && (
                <div className="p-4 rounded-xl bg-danger/10 text-danger flex items-center gap-2 mb-2">
                  <AlertCircle size={20} />
                  <p className="font-medium text-sm">{status.error}</p>
                </div>
              )}

              {/* Form Inputs (Hero UI) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground-subtle">Name</label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Enter your name" 
                  type="text"
                  required
                  className="w-full"
                  disabled={isPending}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground-subtle">Email</label>
                <Input 
                  id="email"
                  name="email"
                  placeholder="john@example.com" 
                  type="email"
                  required
                  className="w-full"
                  disabled={isPending}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground-subtle">Message</label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows={5}
                  required
                  className="w-full"
                  disabled={isPending}
                />
              </div>

              <Button
                type="submit"
                isPending={isPending}
                className="w-full font-bold py-6 mt-4 bg-primary shadow-lg shadow-primary/25 text-primary-foreground group"
              >
                {!isPending && (
                  <>
                    Send Message 
                    <Send size={18} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}