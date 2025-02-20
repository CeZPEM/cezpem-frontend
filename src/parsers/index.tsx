import { FaqItemChild, FaqItem } from "@/types";
import React from "react";

function renderNode(node: FaqItemChild, key: number): React.ReactNode {
  switch (node.type) {
    case "text":
      return node.text;
    case "link":
      return (
        <a
          key={key}
          href={node.url}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.children.map((child, idx: number) => renderNode(child, idx))}
        </a>
      );
    default:
      return null;
  }
}

export function parseFaqContent(faqItem: FaqItem) {
  return faqItem.answer.map((block, index) => {
    // Bloco do tipo parágrafo
    if (block.type === "paragraph") {
      return (
        <p key={index} className="text-gray-700">
          {block.children.map((child, idx: number) => renderNode(child, idx))}
        </p>
      );
    }
    // Bloco do tipo lista
    if (block.type === "list") {
      // Cada item da lista deverá ser do tipo "list-item"
      const listItems = block.children.map((listItem, idx: number) => (
        <li key={idx}>
          {listItem.children.map((child, childIdx: number) =>
            renderNode(child, childIdx)
          )}
        </li>
      ));
      return block.format === "ordered" ? (
        <ol key={index} className="text-gray-700">
          {listItems}
        </ol>
      ) : (
        <ul key={index} className="text-gray-700">
          {listItems}
        </ul>
      );
    }
    return null;
  });
}
