import { randomTodos } from "~/utils/server-actions/bugs/use-effect-stuff";
import { WithUseEffect } from "./WithUseEffect";
import LogSomething from "./i-log-something";
import { login } from "~/utils/server-actions/bugs/login";

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

      <form action={login}>
        <input type="text" name="requestFrom" value={"android"} disabled />
        <input type="text" name="action" value={"logIn"} disabled />
        <input
          type="text"
          name="userNameEmailLogin"
          value={"esinshadrachrafe@gmail.com"}
        />
        <input type="text" name="userPasswordLogin" value={"password"} />
        <button>Run</button>
      </form>
    </section>
  );
}

var data = {
  requestFrom: "android",
  action: "logIn",
  userNameEmailLogin: "leo@gmail.com",
  userPasswordLogin: "Pas$45",
};
