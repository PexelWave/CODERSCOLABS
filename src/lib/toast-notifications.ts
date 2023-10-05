import toast from "react-hot-toast";


export const successNotify = (msg: string) =>
  toast.success(msg, {
    id: "success",
    duration: 4000,
    style: {
      background: "#00ff00af",
      color: "white",
      fontWeight: "bold",
    },
  });

export const errorNotify = (msg: string) =>
  toast.error(msg, {
    id: "error",
    duration: 4000,
    position: "top-center",
    // Styling
    style: {
      background: "#ff0000a2",
      color: "white",
    },
    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
