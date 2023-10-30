"use client";
import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { Button } from "./ui/button";

type AlertMessageProps = {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  position?: "absolute" | "relative" | "static";
};

const AlertMessage = ({
  icon,
  title,
  children,
  position = "static",
}: AlertMessageProps) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    open && (
      <Alert variant="default" className="bg-foreground text-background w-fit">
        <Button className="absolute top-2 right-2" variant="ghost" size="icon" onClick={handleClick}>
          <IoMdClose size={30} />
        </Button>
        <AlertTitle className="flex items-center gap-2 capitalize">
          {icon}
          {title}
        </AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    )
  );
};

export default AlertMessage;
