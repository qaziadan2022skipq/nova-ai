"use client";

import { useEffect } from "react";

const HRAssistant: React.FC = () => {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJKdW5lX0hSX3B1YmxpYyIsInByZXZpZXdJ%0D%0AbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzc0NDQ3YTI3ODU5YTQ1NmM5%0D%0ANTVlMDFmMjFlZjE4MjE2XzQ1NjIwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVkUmVtb3ZlQmFj%0D%0Aa2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjcwNmFiMGQxNWY5ZDQ4YWE4OTVmYmZj%0D%0AN2RiYTQxYmEyIiwidXNlcm5hbWUiOiJkMzg2YWNkZGZmMTg0YzQyYjM1NWNhNjYzMTgxYjJiMSJ9&inIFrame=1`;
    const clientWidth = document.body.clientWidth;

    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
            #heygen-streaming-embed {
                z-index: 9999;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 200px;
                height: 200px;
                border-radius: 50%;
                border: 2px solid #fff;
                box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
                transition: all linear 0.1s;
                overflow: hidden;
                opacity: 0;
                visibility: hidden;
            }
            #heygen-streaming-embed.show {
                opacity: 1;
                visibility: visible;
            }
            #heygen-streaming-embed.expand {
                ${
                  clientWidth < 540
                    ? "height: 266px; width: 96%;"
                    : "height: 366px; width: calc(366px * 16 / 9);"
                }
                border: 0;
                border-radius: 8px;
            }
            #heygen-streaming-container {
                width: 100%;
                height: 100%;
            }
            #heygen-streaming-container iframe {
                width: 100%;
                height: 100%;
                border: 0;
            }
        `;

    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;

    let visible = false;
    let initial = false;

    const handleMessage = (e: MessageEvent) => {
      if (e.origin === host && e.data?.type === "streaming-embed") {
        if (e.data.action === "init") {
          initial = true;
          wrapDiv.classList.toggle("show", initial);
        } else if (e.data.action === "show") {
          visible = true;
          wrapDiv.classList.toggle("expand", visible);
        } else if (e.data.action === "hide") {
          visible = false;
          wrapDiv.classList.toggle("expand", visible);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);

    return () => {
      window.removeEventListener("message", handleMessage);
      wrapDiv.remove();
    };
  }, []);

  return null; // This component does not render anything directly.
};

export default HRAssistant;
