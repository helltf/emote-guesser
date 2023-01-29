import { useEffect } from "react";

export default function Play() {
  useEffect(() => {
    fetch("api/user/1").then((data) => data.json().then(console.log));
  });
  return <>play</>;
}
