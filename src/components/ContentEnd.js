import "./ContentEnd.css";

const ContentEnd = () => {
  return (
    <div className="mainDiv">
      <div style={{ margin: "2px" }}>
        <div>text</div>
        <div>text text text text</div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div>text</div>
        <div>text text text text</div>
      </div>

      <div className="container">
        <div>text</div>
        <div className="box"></div>

        <div>text</div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default ContentEnd;
