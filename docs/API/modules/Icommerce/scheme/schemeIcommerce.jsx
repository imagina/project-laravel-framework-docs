import Link from '@docusaurus/Link';
import React from 'react';
import { TableSchema } from '@site/src/components/table/table.jsx';

export const weightClass = [
  [
    'value',
    { type: <code>Double (15,8)</code>, description: 'This field stores a numeric value of decimal type with a total precision of 15 digits, of which 8 are reserved for the decimal part. It can be used to represent weight values.' },
  ],
  [
    'default',
    { type: <code>Boolean</code>, description: <>This field is a boolean value that indicates whether the weight category is the default one or not. When set to <code>true</code>, it means this category is used as the default.</> },
  ],
  [
    'title',
    { type: <code>String</code>, description: 'This field stores the title or name of the weight category.' },
  ],
  [
    'unit',
    { type: <code>String</code>, description: <>This field stores the unit of measurement associated with the weight category. For example, you could use <code>kg</code> for kilograms or <code>lb</code> for pounds, depending on your needs.</> },
  ]
]

export const lenghtClass = [
  [
    'value',
    { type: <code>Double (15,8)</code>, description: 'This field stores a numeric value of decimal type with a total precision of 15 digits, of which 8 are reserved for the decimal part. It can be used to represent length values.' },
  ],
  [
    'default',
    { type: <code>Boolean</code>, description: <>This field is a boolean value that indicates whether the length category is the default one or not. When set to <code>true</code>, it means this category is used as the default.</> },
  ],
  [
    'title',
    { type: <code>String</code>, description: 'This field stores the title or name of the length category.' },
  ],
  [
    'unit',
    { type: <code>String</code>, description: <>This field stores the unit of measurement associated with the length category. For example, you could use <code>cm</code> for centimeters or <code>in</code> for inches, depending on your needs.</> },
  ]
]

export const volumeClass = [
  [
    'value',
    { type: <code>Double (15,8)</code>, description: 'This field stores a numeric value of decimal type with a total precision of 15 digits, of which 8 are reserved for the decimal part. It can be used to represent volume values.' },
  ],
  [
    'default',
    { type: <code>Boolean</code>, description: <>This field is a boolean value that indicates whether the volume category is the default one or not. When set to <code>true</code>, it means this category is used as the default.</> },
  ],
  [
    'title',
    { type: <code>String</code>, description: 'This field stores the title or name of the volume category.' },
  ],
  [
    'unit',
    { type: <code>String</code>, description: <>This field stores the unit of measurement associated with the volume category. For example, you could use <code>l</code> for liter or <code>ml</code> for milliliter, depending on your needs.</> },
  ]
]

export const quantityClass = [
  [
    'value',
    { type: <code>Double (15,8)</code>, description: 'This field stores a numeric value of decimal type with a total precision of 15 digits, of which 8 are reserved for the decimal part. It can be used to represent quantity values.' },
  ],
  [
    'default',
    { type: <code>Boolean</code>, description: <>This field is a boolean value that indicates whether the quantity category is the default one or not. When set to <code>true</code>, it means this category is used as the default.</> },
  ],
  [
    'title',
    { type: <code>String</code>, description: 'This field stores the title or name of the quantity category.' },
  ],
  [
    'unit',
    { type: <code>String</code>, description: <>This field stores the unit of measurement associated with the quantity category.</> },
  ]
]

export const productDiscountCriteria = [
  ['percentage'],
  ['fixed']
]

export const productDiscount = [
  [
    'product_id',
    { type: 'Integer', description: 'This field represents the unique identifier associated with a product in the system.' },
  ],
  [
    'product_option_id',
    { type: 'Integer', description: "This field represents the unique identification associated with a product option in the system." },
  ],
  [
    'product_option_value_id',
    { type: 'Integer', description: "This field represents the unique identification associated with a specific product option value in the system." },
  ],
  [
    'quantity',
    { type: 'Integer', description: "This field can be used to represent the quantity of products to which the discount will be applied." },
  ],
  [
    'quantity_sold',
    { type: 'Integer', description: "This field represents the quantity of products sold with a discount." },
  ],
  [
    'priority',
    { type: 'Integer', description: "This field indicates the priority of the discount." },
  ],
  [
    'discount',
    { type: 'Double (20,2)', description: "This field stores a decimal numeric value with a total precision of 20 digits, of which 2 are reserved for the decimal part. It can be used to represent discount values." },
  ],
  [
    'criteria',
    { type: 'Enum', description: "This field specifies the criteria that can apply the discount.", enums: <>You can use these criteria: <TableSchema data={productDiscountCriteria} /></> },
  ],
  [
    'date_start',
    { type: 'Date', description: "This field indicates the start date when the discount is valid." },
  ],
  [
    'date_end',
    { type: 'Date', description: "This field indicates the end date when the discount is no longer valid." },
  ],
  [
    'department_id',
    { type: 'Integer', description: "This field stores the unique identifier of the department associated with the product." },
  ],
  [
    'exclude_departments',
    { type: 'Array', description: "This list contains department identifiers that should be excluded from the discount." },
  ],
  [
    'include_departments',
    { type: 'Array', description: "This list contains department identifiers that should be included in the discount." },
  ],
]