"use client"
import { useEffect } from "react";
import hljs from "highlight.js/lib/core";


hljs.registerLanguage(
    "javascript",
    require("highlight.js/lib/languages/javascript")
  );

function WpContent({content}: {content: string}) {

    useEffect(() => {
        // Highlight code blocks when component mounts
        hljs.highlightAll();
      }, []);
  return (
    <div className="blog-post">
      {/* Render HTML content received from WordPress API */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default WpContent;
