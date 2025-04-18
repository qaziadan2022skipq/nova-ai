"use client";

import { useEffect } from "react";

const AuditorAssistant: React.FC = () => {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJTaGF3bl9UaGVyYXBpc3RfcHVibGljIiwi%0D%0AcHJldmlld0ltZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvZGIyZmI3ZmQw%0D%0AZDA0NGI5MDgzOTVhMDExMTY2YWIyMmRfNDU2ODAvcHJldmlld190YXJnZXQud2VicCIsIm5lZWRS%0D%0AZW1vdmVCYWNrZ3JvdW5kIjpmYWxzZSwia25vd2xlZGdlQmFzZUlkIjoiYmQ1MGVlNjQzZjc4NGRm%0D%0AMmE1MTI0YzdlYjkwNjZhMDMiLCJ1c2VybmFtZSI6ImQzODZhY2RkZmYxODRjNDJiMzU1Y2E2NjMx%0D%0AODFiMmIxIn0%3D&inIFrame=1`;
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

export default AuditorAssistant;
