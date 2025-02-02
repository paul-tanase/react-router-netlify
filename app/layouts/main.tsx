import { Link, Outlet } from "react-router";

export default function Main() {
  return (
    <>
     <nav className="mb-6">
      <ul className="flex gap-4 bg-neutral-500 p-2">
        <li><Link className="hover:text-orange-300" to="/">Home</Link></li>
        <li><Link className="hover:text-orange-300" to="/test">Test</Link></li>
      </ul>
     </nav>
      <Outlet />
    </>
  );
}
