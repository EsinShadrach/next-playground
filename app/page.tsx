import { randomTodos } from "~/utils/server-actions/bugs/use-effect-stuff";
import { WithUseEffect } from "./WithUseEffect";
import LogSomething from "./i-log-something";

export default async function Home() {
  const { data } = await randomTodos();

  return (
    <section className="container p-3 mx-auto">
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
