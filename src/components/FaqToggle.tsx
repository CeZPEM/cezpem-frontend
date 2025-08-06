import Markdown from "react-markdown";
import Toggle from "./Toggle";
import { FaqItem } from "@/types";

type FaqToggleProps = {
  faqItem: FaqItem;
  open?: boolean;
  onClick?: () => void;
};

export function FaqToggle({
  faqItem,
  onClick,
  open,
}: Readonly<FaqToggleProps>) {
  return (
    <Toggle onClick={onClick} open={open} title={faqItem.title}>
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
