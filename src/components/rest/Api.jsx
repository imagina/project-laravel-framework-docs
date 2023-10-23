import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';
import './Api.css';

export default function Api({
                              method,
                              url,
                              request,
                              minimum,
                              responseSample
                            }) {
  return <div className="border">
      <span className={`method ${method}`}>{method}</span>
      <span className="url">{url}</span>
      <Tabs>
        {minimum && (<TabItem value="minimum" label="Minimum" default>
          <CodeBlock
            language="json"
            showLineNumbers
          >
            {minimum}
          </CodeBlock>
        </TabItem>)}
        <TabItem value="json" label="Rest">
          <CodeBlock
            language="json"
            showLineNumbers
          >
            {request}
          </CodeBlock>
        </TabItem>
      </Tabs>
      <details>
        <summary>Response</summary>
        <CodeBlock
          language="json"
          showLineNumbers
        >
          {responseSample}
        </CodeBlock>
      </details>
    </div>

}