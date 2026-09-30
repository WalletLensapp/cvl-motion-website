import { Highlight } from 'prism-react-renderer';
import type { CodeFile } from './codeFiles';
import { prismTheme } from './prismTheme';

interface CodeBlockProps {
  file: CodeFile;
}

export default function CodeBlock({ file }: CodeBlockProps) {
  const code = file.code.replace(/^\n/, '');

  return (
    <Highlight theme={prismTheme} code={code} language={file.language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="w-max min-w-full py-4 font-mono text-[12.5px] leading-[1.75]"
          style={{ ...style, background: 'transparent' }}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            return (
              <div
                key={i}
                className={`flex px-4 hover:bg-background-200/40 ${lineProps.className ?? ''}`}
                style={lineProps.style}
              >
                <span className="mr-5 w-8 flex-none select-none pt-[1px] text-right text-foreground-600/45">
                  {i + 1}
                </span>
                <span className="flex-1 whitespace-pre">
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token });
                    return (
                      <span key={key} className={tokenProps.className} style={tokenProps.style}>
                        {tokenProps.children}
                      </span>
                    );
                  })}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}