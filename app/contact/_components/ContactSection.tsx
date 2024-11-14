"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Copy, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const email = "irfanefp@gmail.com";
  const mapsBogorRegency =
    "https://www.google.com/maps/place/Bogor+Regency,+West+Java/@-6.4691484,106.5722383,10.36z/data=!4m6!3m5!1s0x2e69c3e312798437:0x301576d14feb990!8m2!3d-6.5517758!4d106.6291304!16zL20vMDQ2OXYz?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Email copied to clipboard",
      duration: 2000,
    });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/irfan-fawaz-prabowo/", "_blank");
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-background">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl text-primary-orange font-bold mb-4">
            Contact
          </CardTitle>
          <CardDescription className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
            Based in Bogor, Indonesia, Irfan welcomes discussions about software
            engineering opportunities and technical collaborations.
            <br />
            <br />
            Irfan is particularly interested in projects involving the language
            of Java, TypeScript, and JavaScript. Irfan typically responds within
            24 hours on business days.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <a
            href={mapsBogorRegency}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm sm:text-base hover:text-primary-orange group transition-colors"
          >
            <MapPin className="h-5 w-5 flex-shrink-0" />
            <span className="group-hover:underline">Bogor, Indonesia</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto hover:bg-orange-100"
              onClick={handleEmailClick}
            >
              <Mail className="h-4 w-4" />
              {email}
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto group"
              onClick={handleCopyEmail}
            >
              <Copy className="h-4 w-4 group-hover:text-primary-orange" />
              Copy email
            </Button>
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto hover:bg-orange-100"
            onClick={handleLinkedInClick}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn Profile
            <ExternalLink className="h-4 w-4 ml-1" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
