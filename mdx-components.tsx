import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { CodeBlock } from "./components/ui/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold mt-10 mb-6 text-white font-sans leading-tight" {...props}>
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-white" {...props}>
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-200" {...props}>
        {children}
      </h3>
    ),

    h4: ({ children, ...props }) => (
      <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-300" {...props}>
        {children}
      </h4>
    ),

    p: ({ children, ...props }) => (
      <p className="text-base leading-7 mb-5 text-gray-300" {...props}>
        {children}
      </p>
    ),

    a: ({ children, ...props }) => (
      <a className="text-blue-400 underline hover:text-blue-300" {...props}>
        {children}
      </a>
    ),

    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-white" {...props}>
        {children}
      </strong>
    ),

    em: ({ children, ...props }) => (
      <em className="italic text-gray-300" {...props}>
        {children}
      </em>
    ),

    code: ({ children, ...props }) => (
      <code className="bg-gray-800 text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    ),

    pre: ({ children }) => {
  const codeProps = children.props;

  const rawCode = codeProps.children.trim();
  const rawMeta = codeProps?.metastring || "";

  const language = codeProps.className?.replace("language-", "") || "tsx";

  // Extract filename and highlight lines from meta
  const filenameMatch = rawMeta.match(/filename=([\w.\-/]+)/);
  const highlightMatch = rawMeta.match(/highlight=([\d,-]+)/);

  const filename = filenameMatch?.[1] || "app.tsx";
  const highlightLines = highlightMatch
    ? highlightMatch[1].split(",").map((line: string) => parseInt(line, 10))
    : [];

  return (
    <CodeBlock
      code={rawCode}
      language={language}
      filename={filename}
      highlightLines={highlightLines}
    />
  );
},

    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-200 p-4 rounded-md my-6" {...props}>
        {children}
      </blockquote>
    ),

    ul: ({ children, ...props }) => (
      <ul className="list-disc ml-6 space-y-2 text-base text-gray-300" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol className="list-decimal ml-6 space-y-2 text-base text-gray-300" {...props}>
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li className="marker:text-gray-400" {...props}>
        {children}
      </li>
    ),

    img: ({ ...props }) => (
      <Image
        alt=""
        height={200}
        width={400}
        className="rounded-lg my-8 w-full object-cover"
        {...props}
      />
    ),

    table: ({ children, ...props }) => (
      <table className="w-full text-sm text-left text-gray-300 border border-gray-700 my-6" {...props}>
        {children}
      </table>
    ),

    thead: ({ children, ...props }) => (
      <thead className="bg-gray-800 text-white" {...props}>
        {children}
      </thead>
    ),

    tbody: ({ children, ...props }) => (
      <tbody className="divide-y divide-gray-700" {...props}>
        {children}
      </tbody>
    ),

    tr: ({ children, ...props }) => (
      <tr className="hover:bg-gray-800" {...props}>
        {children}
      </tr>
    ),

    th: ({ children, ...props }) => (
      <th className="px-4 py-2 font-semibold border border-gray-700" {...props}>
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td className="px-4 py-2 border border-gray-700" {...props}>
        {children}
      </td>
    ),
  };
}
