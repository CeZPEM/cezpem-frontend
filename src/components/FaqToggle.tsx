import Markdown from "react-markdown";
import Toggle from "./Toggle";
import { FaqItem } from "@/types";

export function FaqToggle(faqItem: FaqItem) {
  return (
    <Toggle title={faqItem.title}>
      <Markdown
        components={{
          a: ({ node, href, children, ...props }) => {
            const isExternal = href?.includes("#targetBlank");
            return node ? (
              <a
                className="text-red hover:underline"
                href={href?.replace("#targetBlank", "")}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                {...props}
              >
                {children}
              </a>
            ) : (
              <></>
            );
          },
          ul: ({ node, children, ...props }) => {
            return node ? (
              <ul {...props} className="list-disc pl-4">
                {children}
              </ul>
            ) : (
              <></>
            );
          },
          p: ({ node, children, ...props }) => {
            return node ? (
              <p {...props} className="text-left sm:text-justify">
                {children}
              </p>
            ) : (
              <></>
            );
          },
        }}
      >
        {faqItem.answer}
      </Markdown>
    </Toggle>
  );
}
