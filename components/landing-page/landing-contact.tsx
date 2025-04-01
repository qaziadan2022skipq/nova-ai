"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccessMessage("Your message has been sent!");
        form.reset();
      } else {
        setErrorMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black">
      <div id="contact" className="flex flex-col md:flex-row bg-black text-white p-8 md:p-16 gap-8">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-start">
          <h2 className="text-[#01E0FF] text-lg font-semibold">Contact Us</h2>
          <h1 className="text-4xl font-bold mt-2">Get in Touch</h1>
          <p className="text-gray-400 mt-4">
            Want to see how our AI can transform your experience? Fill out the
            form below, and we’ll get in touch to discuss how we can help.
          </p>
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="w-6 h-6 cursor-pointer text-[#01E0FF]" />
            <FaInstagram className="w-6 h-6 cursor-pointer text-[#01E0FF]" />
            <FaTiktok className="w-6 h-6 cursor-pointer text-[#01E0FF]" />
            <FaXTwitter className="w-6 h-6 cursor-pointer text-[#01E0FF]" />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 bg-black p-6 rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="text-white"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=" text-white"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=" text-white"
                        placeholder="Company"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className=" text-white"
                        placeholder="Trending Needs"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#01E0FF] text-black"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="flex items-center justify-center mx-2 sm:mx-4 md:mx-6 lg:mx-12 border-t border-gray-500">
        <p className="text-center font-extralight text-[#FFFFFF] py-4 text-xs sm:text-sm">
          &copy;2025 Nova AI. All rights reserved.
        </p>
      </div>
    </div>
  );
}