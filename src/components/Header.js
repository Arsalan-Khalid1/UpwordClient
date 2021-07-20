import React from "react";

const Header = () => {
  return (
    <div style={{ width: "800px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>text</div>
        <div>text text</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "895px",
        }}
      >
        <button style={{ marginRight: "100px" }}>button</button>
        <div
          style={{
            border: "1.8px solid black",
            padding: "16px",
            display: "inline-block",
            float: "right",
          }}
        >
          text
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>text</div>
        <div>text</div>
        <div
          style={{ border: "1.8px solid black", padding: "2px", margin: "1px" }}
        >
          text
        </div>
        <div>text text</div>
      </div>
    </div>
  );
};

export default Header;
