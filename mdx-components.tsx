import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CodeBlock } from "./components/ui/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Bring in any existing components passed in
    ...components,

    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 font-sans" {...props}>
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3" {...props}>
        {children}
      </h2>
    ),

    p: ({ children, ...props }) => (
      <p className="text-base leading-relaxed mb-4 text-gray-700" {...props}>
        {children}
      </p>
    ),

    ul: ({ children, ...props }) => (
      <ul className="list-disc ml-6 space-y-2 text-base text-gray-700" {...props}>
        {children}
      </ul>
    ),

    li: ({ children, ...props }) => (
      <li className="marker:text-gray-800" {...props}>
        {children}
      </li>
    ),

     pre: ({ children }) => {
      const codeProps = children.props;
      return (
        <CodeBlock
          code={codeProps.children.trim()}
          language={codeProps.className?.replace("language-", "") || "tsx"}
          filename={codeProps?.filename || ""}
          highlightLines={[5, 10]}
        />
      );
    

      return (
        <code className="px-1 py-0.5 rounded bg-gray-100 text-pink-600 font-mono text-sm">
          {children}
        </code>
      );
    },

    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),

    img: ({ ...props }) => (
      <Image alt="" height={200} width={400} className="rounded-xl my-6 w-full object-cover" {...props} />
    ),
  };
}
