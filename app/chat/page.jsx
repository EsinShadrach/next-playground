"use client";

import { useEffect, useState } from "react";

import io from "socket.io-client";

let socket;

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    // Initialize socket only on the client
    if (io) {
      socketInitializer();

      return () => {
        if (socket) {
          socket.disconnect();
        }
      };
    }
  }, []);

  async function socketInitializer() {
    await fetch("/api/chat");

    socket = io();

    let temp;

    socket.on("receive-message", (data) => {
      setAllMessages((pre) => [...pre, data]);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("emitted");

    socket.emit("send-message", {
      username,
      message,
    });

    setMessage("");
  }

  useEffect(() => {
    console.log(allMessages);
  }, [allMessages]);

  return (
    <div>
      <h1>Chat app</h1>

      <input
        value={username}
        placeholder="username"
        className="border"
        onChange={(e) => setUsername(e.target.value)}
      />

      <div>
        {allMessages.map(({ username, message }, index) => (
          <div key={index}>
            {username}: {message}
          </div>
        ))}

        <br />

        <form onSubmit={handleSubmit}>
          <input
            className="border"
            name="message"
            placeholder="enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete={"off"}
          />

          <br />
          <br />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
