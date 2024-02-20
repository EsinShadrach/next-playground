import LogSomething from "./i-log-something";
import { randomTodos } from "~/utils/server-actions/bugs/use-effect-stuff";
import { WithUseEffect } from "./WithUseEffect";
import { useRef } from "react";

export default async function Home() {
  const { data } = await randomTodos();
  const videoRef = useRef<HTMLVideoElement>(null);

  function playVideo() {
    videoRef.current?.play();
  }

  function pauseVideo() {
    videoRef.current?.pause();
  }

  function stopVideo() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  function skipTo(time: number) {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  }

  function fastForward() {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  }

  return (
    <section className="container p-3 mx-auto">
      <video src="" ref={videoRef}></video>

      <LogSomething />
      <div>Server side rendering is faster</div>
      <br />
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <br />
      <div>Use Effect Is slower</div>
      <br />
      <WithUseEffect />
    </section>
  );
}
