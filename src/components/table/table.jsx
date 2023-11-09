import React from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export function TableTabs({tabsContent}) {

  return (
    <Tabs>
      {tabsContent.tabs.map(({title, ...props}) => (
          <TabItem key={title} value={title} label={title}>
            {props?.description}
            <TableSchema {...props.table} />
          </TabItem>
        )
      )}
    </Tabs>
  );
}

export function GetTdContent({ cellContent }) {
  const getSubtitle = (name) => capitalizeFirstLetter(name)

  const isObjectNotArray = (parameter) => {
    return typeof parameter === 'object' && !Array.isArray(parameter) && parameter !== null;
  }

  return (
    <>
      {
        cellContent.map((cell, idx) => (
          <td key={idx}>
            {isObjectNotArray(cell) ?(
              <>{Object.keys(cell).map(key => (
                <React.Fragment key={`${key}-${idx}`}>
                  <i className="colorGraySpan">{getSubtitle(key)}: </i>
                  <br/>
                  {cell[key]}
                  <br/>
                </React.Fragment>
              ))
              }
              </>
            ) : (
              <>{cell}</>
            )
            }
          </td>
        ))
      }
    </>
  )
}

export function TableSchema({columnNames, data, indentLevel = 0}) {
  const properties = data || null;

  const style = {
    marginLeft: `${indentLevel * 20}px`,
    display: 'table',
    width: '100%',
  };

  return (
    <div className="tableContainer">
      <table style={style}>
        {columnNames && (
          <thead>
          <tr>
            {columnNames.map((field, idx) => (
              <th key={idx} className='text-left'>{field}</th>
            ))}
          </tr>
          </thead>
        )}

        <tbody>
        {properties && properties.map((content, idx) => (
          <tr key={idx}>
            <GetTdContent cellContent={content} />
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};