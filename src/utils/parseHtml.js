import JsxParser from "react-jsx-parser";
import Image from "next/image";

const parseHtml = (content) => {
  return (
    <JsxParser
      components={{
        img: (props) => (
          <Image {...props} className="mx-auto text-center my-4" />
        ),
      }}
      jsx={content}
      renderInWrapper={false}
    />
  );
};

export default parseHtml;