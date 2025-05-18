import type { Route } from "./+types/home";
import UserParent from "~/components/user-list/UserParent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " User Mnagement" },
    { name: "description", content: "Welcome to create user!" },
  ];
}

export default function UserManagementUser() {
  return <UserParent />;
}
