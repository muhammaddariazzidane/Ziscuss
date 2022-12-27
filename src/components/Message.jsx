import React from "react";

export default function Message({ mes }) {
  useEffect(() => {
    console.log(mes, "ini messages");
  });
  return <div>Message</div>;
}
