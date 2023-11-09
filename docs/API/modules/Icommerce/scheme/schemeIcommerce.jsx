import Link from '@docusaurus/Link';
import React from 'react';

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