// Imports:
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

/**
 * Render the application's home page with authentication controls.
 *
 * Renders a top-level heading "HOME PAGE" and a header that shows a sign-in button when the user is signed out and a user button when the user is signed in.
 *
 * @returns The component's JSX element representing the home page and its auth-related header.
 */
function App() {
  return (
    <div>
      <h1>HOME PAGE</h1>

      <header>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
}

export default App;