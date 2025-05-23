import Welcome from "~/welcome/welcome";
import type { Route } from "./+types/home";
import Board from "~/components/tic-tac/Board";
import UserById from "~/components/user-list/UserById";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ViewUserById() {
  return <UserById />;
}
