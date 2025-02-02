import { Link, Outlet } from "react-router";
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/react-router'


export default function Main() {
  return (
    <>
     <nav className="mb-6 bg-neutral-500 p-2">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border-slate-100 border rounded-md px-2 py-1">Sign in</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <ul className="flex gap-4">
            <li><Link className="hover:text-orange-300" to="/">Home</Link></li>
            <li><Link className="hover:text-orange-300" to="/test">Test</Link></li>
            <li><UserButton /></li>
          </ul>
        </SignedIn>
     </nav>
      <Outlet />
    </>
  );
}
