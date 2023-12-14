import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./style.css";

export default function Guide() {
  let { query } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Array.from(document.getElementsByTagName("a")).forEach((el) => {
      el.setAttribute("target", "_blank");
    });
  }, [query]);

  return (
    <div className="guide-container">
      <div className="go-home" onClick={() => navigate(-1)}>
        <span>{"<- 返回"}</span>
      </div>
      <Markdown query={query} />
    </div>
  );
}

function Markdown({ query }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`./md/${query}.md`)
      .then(module => setContent(module.default))
      .catch(error => console.error('Error loading the markdown file:', error));
  }, [query]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
