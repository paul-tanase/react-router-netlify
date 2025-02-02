import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test" },
    { name: "description", content: "Welcome to Test!" },
  ];
}

export function loader() {
  console.log('Loaded ...');
}

export default function Test() {
  return (
  <>
    <p>Test page ...</p>
  </>
  );
}
