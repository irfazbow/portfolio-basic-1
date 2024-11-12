import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  const yearMade = 2024;

  return (
    <footer className="w-full border-t border-t-orange-300 py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Bogor, Indonesia
          </div>
          <p>© {yearMade} Irfan Fawaz Prabowo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
