import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
index("routes/home.tsx"),
route("todo-app", "routes/todo.tsx"), // this maps to /todo
route("user-management","routes/user-management.tsx"),
route("tic-tac","routes/tic-tac.tsx"),

] satisfies RouteConfig;
