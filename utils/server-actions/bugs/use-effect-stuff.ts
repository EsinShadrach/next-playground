"use server";

type HasData = {
  hasData: boolean;
  data: TodoResponse | null;
};

export async function randomTodos() {
  const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

  const hasData: HasData = {
    hasData: false,
    data: null,
  };

  try {
    const response = await fetch(endpoint);
    const data: TodoResponse = await response.json();

    hasData.hasData = true;
    hasData.data = data;
    console.log("hasData", hasData);
    return hasData;
  } catch (error) {
    return hasData;
  }
}

class MakeRequest {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async makeRequest() {
    const getTodos = async <DataType>(): Promise<DataType> => {
      try {
        const response = await fetch(this.url);
        if (!response.ok) {
          const statusCode = response.status;
          throw new Error(`Something went wrong ${statusCode}`);
        }
        return await response.json();
      } catch (error) {
        const errorMessage = error as Error;
        throw new Error(errorMessage.message);
      }
    };

    try {
      const data = await getTodos<TodoResponse>();
      console.log("data", data);
      return data;
    } catch (error_1) {
      console.error(error_1);
      const errorMessage = error_1 as Error;
      throw new Error(errorMessage.message);
    }
  }
}

const makeRequest = new MakeRequest(
  "https://jsonplaceholder.typicode.com/todos/1"
);
makeRequest.makeRequest();
