import { useEffect } from "react";
import "./code.css";

function Page() {
  useEffect(() => {
    console.log("About page is mounted!");
  }, []);
  return (
    <>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  );
}

export { Page };
