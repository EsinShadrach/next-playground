"use client";

import { useEffect, useState } from "react";
import { randomTodos } from "~/utils/server-actions/bugs/use-effect-stuff";

export function WithUseEffect() {
  const [data, setData] = useState<TodoResponse | null>(null);

  useEffect(() => {
    async function getTodos() {
      try {
        const { data } = await randomTodos();
        setData(data);
      } catch (error) {
        setData(null);
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
