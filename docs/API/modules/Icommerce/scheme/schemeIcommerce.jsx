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

export const warehouseAttributes = [
  [
    'title',
    { type: <code>String</code>, description: 'This field stores the title of the warehouse. It is used to represent the name of the warehouse.' },
  ],
  [
    'slug',
    { type: <code>String</code>, description: 'This field stores a URL-friendly version of the warehouse title. It is typically used in URLs to identify the warehouse.' },
  ],
  [
    'description',
    { type: <code>String</code>, description: 'This field stores a description of the warehouse. It provides additional details about the warehouse.' },
  ],
  [
    'lat',
    { type: <code>Number</code>, description: 'This field stores the latitude coordinate of the warehouse. It is used for geographic location.' },
  ],
  [
    'lng',
    { type: <code>Number</code>, description: 'This field stores the longitude coordinate of the warehouse. It is used for geographic location.' },
  ],
  [
    'address',
    { type: <code>String</code>, description: 'This field stores the physical address of the warehouse. It includes street, city, and postal code information.' },
  ],
  [
    'status',
    { type: <code>String</code>, description: 'This field stores the current status of the warehouse. Possible values could include "active", "inactive", or other status indicators.' },
  ],
  [
    'options',
    { type: <code>Object</code>, description: 'This field stores additional options related to the warehouse. It can include various settings and configurations.' },
  ],
  [
    'country_id',
    { type: <code>Number</code>, description: 'This field stores the ID of the country associated with the warehouse. It is a reference to the country entity.' },
  ],
  [
    'province_id',
    { type: <code>Number</code>, description: 'This field stores the ID of the province associated with the warehouse. It is a reference to the province entity.' },
  ],
  [
    'city_id',
    { type: <code>Number</code>, description: 'This field stores the ID of the city associated with the warehouse. It is a reference to the city entity.' },
  ],
  [
    'polygon_id',
    { type: <code>Number</code>, description: 'This field stores the ID of the polygon associated with the warehouse. It is used for geographic area representation.' },
  ],
  [
    'default',
    { type: <code>Boolean</code>, description: 'This field is a boolean value that indicates whether the warehouse is the default one or not. When set to <code>1</code>, it means this warehouse is used as the default.' },
  ],
  [
    'users_to_notify',
    { type: <code>Array</code>, description: 'This field stores a list of user IDs who should be notified about certain events related to the warehouse.' },
  ],
  [
    'emails_to_notify',
    { type: <code>Array</code>, description: 'This field stores a list of email addresses that should be notified about certain events related to the warehouse.' },
  ],
]

export const productWarehouseAttributes = [
  [
    'Product ID',
    { type: <code>Integer</code>, description: <>You can obtain the product ID <Link to="/docs/API/modules/Icommerce/products#get-multiple-products">here</Link>.</> },
  ],
  [
    'Warehouse ID',
    { type: <code>Integer</code>, description: <>You can obtain the warehouse ID <Link to="/docs/API/modules/Icommerce/warehouse#get-multiple-warehouses">here</Link>.</> },
  ],
  [
    'quantity',
    { type: <code>Number</code>, description: 'Specify the quantity of the product. Each time you update or add a new quantity, the specified amount will be added to or subtracted from the current inventory of the product. For example, if the product has a quantity of 4 and you add 20, the product will now have 24 units.' },
  ]
]