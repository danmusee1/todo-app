import type { Route } from "./+types/home";
import TodoParent from "~/components/todo/TodoParent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Todo App" },
    { name: "description", content: "Welcome to Todo Router!" },
  ];
}

export default function Todo() {
  return <TodoParent />;
}
