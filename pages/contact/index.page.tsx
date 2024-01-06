"use client";

import Button from "../../common/components/button";

function Page() {
  return (
    <div>
      This is the Contact Page:{" "}
      <Button onClick={() => console.log("cloked")} text="hello" />
    </div>
  );
}

export const doNotPrerender = false; // eslint-disable-line

export { Page };
