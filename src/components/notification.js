import React from "react";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Slide } from "@progress/kendo-react-animation";

export default function Notificacao({
  success,
  setSuccess,
  error,
  setError,
  menssage,
}) {
  return (
    <NotificationGroup
      style={{
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        // right: 0,
        // bottom: 0,
        // alignItems: "flex-start",
        // flexWrap: "wrap-reverse",
      }}
    >
      <Slide direction={success ? "up" : "down"}>
        {success && (
          <Notification
            type={{ style: "success", icon: true }}
            closable={true}
            onClose={() => setSuccess(false)}
          >
            <span>{menssage}</span>
          </Notification>
        )}
      </Slide>
      <Slide direction={error ? "up" : "down"}>
        {error && (
          <Notification
            type={{ style: "error", icon: true }}
            closable={true}
            onClose={() => setError(false)}
          >
            <span>{menssage}</span>
          </Notification>
        )}
      </Slide>
    </NotificationGroup>
  );
}
