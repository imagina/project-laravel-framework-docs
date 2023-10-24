import React from "react";
import Translate from '@docusaurus/Translate';

export default function RequestSchema ({ fieldNames, schema, indentLevel = 0 }) {
  const properties = schema.properties || null;

  const style = {
    marginLeft: `${indentLevel * 20}px`,
    display: 'table',
    maxWidth: '100%',
  };

  const getType = (field) => {
    if (Array.isArray(properties[field].type)) {
      if (properties[field].enum) {
        return `${properties[field].type.join(' or ')} (${properties[field].enum.map(v => {
          return typeof v === 'string' ? `'${v}'` : v;
        }).join(', ')})`;
      }
      return properties[field].type.join(' or ');
    } else if (properties[field].type === 'array') {
      if (properties[field].items.type) {
        return `array of ${properties[field].items.type}`;
      } else {
        return 'array';
      }
    } else if (properties[field].type === 'object') {
      return 'object';
    } else if (properties[field].pattern) {
      return `string (${properties[field].pattern})`;
    } else if (properties[field].enum) {
      return `${properties[field].type} (${properties[field].enum.join(', ')})`;
    } else {
      return properties[field].type;
    }
  };

  if (!properties) {
    if (indentLevel === 0) {
      return <i>No request body required</i>;
    } else {
      return null;
    }
  }
  return (
    <table style={style}>
      <thead>
      <tr>
        {fieldNames.map(field => (
          <th className='text-left'><Translate>{field}</Translate></th>
        ))}
      </tr>
      </thead>
      <tbody>
      {Object.keys(properties).map((field) => (
        <React.Fragment key={field}>
          <tr>
            <td>{field}</td>
            <td>{getType(field)}</td>
            <td>
              {schema.required && schema.required.includes(field)
                ? 'Yes'
                : 'No'}
            </td>
          </tr>
          {properties[field].type === 'object' && (
            <tr>
              <td colSpan={3}>
                <RequestSchema
                  schema={properties[field]}
                  indentLevel={indentLevel + 1}
                />
              </td>
            </tr>
          )}
          {properties[field].type === 'array' &&
            properties[field].items.type === 'object' && (
              <tr>
                <td colSpan={3} align="right">
                  <RequestSchema
                    schema={properties[field].items}
                    indentLevel={indentLevel + 1}
                  />
                </td>
              </tr>
            )}
        </React.Fragment>
      ))}
      </tbody>
    </table>
  );
};