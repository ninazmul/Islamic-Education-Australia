"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Map, Phone } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Link from "next/link";
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter } from "react-icons/im";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_yl3jdp5",
          "template_dtjjw5k",
          form.current,
          "8faiPEZz6ky22cD0B"
        )
        .then(
          () => {
            setStatus("SUCCESS");
          },
          (error) => {
            console.error("FAILED...", error.text);
            setStatus("FAILED");
          }
        );
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
        {!status && (
          <p className="text-gray-600 text-sm mb-6">
            Please feel free to contact us to share your ideas, suggestions, or
            any queries.
          </p>
        )}
        {status === "SUCCESS" && (
          <p className="text-green-600 font-medium mb-6">
            Message sent successfully!
          </p>
        )}
        {status === "FAILED" && (
          <p className="text-red-600 font-medium mb-6">
            Message failed to send. Please try again.
          </p>
        )}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-8">
            <ul className="text-sm space-y-4 font-medium">
              <li className="flex items-center gap-2">
                <Phone className="text-primary-500" /> +61452061535
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-primary-500" /> onesoulmuslim@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Map className="text-primary-500" /> Sydney, Australia
              </li>
            </ul>
            <div>
              <h3 className="font-semibold">Follow us in:</h3>
              <div className="flex items-center gap-4 py-4">
                <Link href={"/"} target="_blank">
                  <ImFacebook className="size-10 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={"/"} target="_blank">
                  <ImInstagram className="size-10 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={"/"} target="_blank">
                  <ImTwitter className="size-10 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={"/"} target="_blank">
                  <ImLinkedin className="size-10 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <Label
                  htmlFor="user_name"
                  className="block text-sm font-medium"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="user_email"
                  className="block text-sm font-medium"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Your email"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-500 text-white font-medium py-2"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};
