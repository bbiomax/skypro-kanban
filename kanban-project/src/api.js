import { useUser } from "./hooks/useUser";

const baseHost = "https://wedev-api.sky.pro/api/kanban";

const userHost = "https://wedev-api.sky.pro/api/user";

export function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}

export async function getTodos({ token }) {
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (~response.status === 200) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

export function signUp({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

// export function createTask({ taskData, token }) {
//   return fetch(baseHost, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(taskData),
//   }).then((response) => {
//     if (response.status !== 200) {
//       throw new Error("Ошибка при создании задачи");
//     }
//     return response.json();
//   });
// }

export function addNewTask(taskData) {
  const { user } = useUser();

  const addTask = async () => {
    try {
      const response = await postTask({ user, taskData });
      alert("Новая задача успешно добавлена:", response);
    } catch (error) {
      alert("Ошибка добавления новой задачи:", error);
    }
  };

  return addTask;
}

export async function postTask({ user, taskData }) {
  const token = user.token;
  console.log(user);
  const res = await fetch(baseHost, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  const data = await res.json();
  return data;
}

export const deleteTask = async (user, taskId) => {
  try {
    const token = user.token;
    const response = await fetch(`${baseHost}/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка удаления задачи");
    }

    return true;
  } catch (error) {
    return false;
  }
}
