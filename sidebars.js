/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 /* tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  VueJsSidebar: [{type: 'autogenerated', dirName: '.'}],
  LaravelSidebar: [{type: 'autogenerated', dirName: '.'}],*/

  // But you can create a sidebar manually
  
  LaravelSidebar: [
    {
      type: 'category',
      label: 'Tutorials',
      items: ['Laravel/tutorials/intro',
      'Laravel/tutorials/editingconnection',
      'Laravel/tutorials/migrations',
      'Laravel/tutorials/frontquasar'],
    },
    {
      type: 'category',
      label: 'Installation',
      items: ['Laravel/installation/prerequisites',
      'Laravel/installation/installinginaproject',],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['Laravel/guides/crud'],
    },
    {
      type: 'category',
      label: 'Diagrams',
      items: ['Laravel/diagrams/entity-relation'],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [{type: 'autogenerated', dirName: 'Laravel/modules'}],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [{type: 'autogenerated', dirName: 'Laravel/testing'}],
    },    
    {
      type: 'category',
      label: 'Wiki',
      items: ['Laravel/wiki/glossary',
      'Laravel/wiki/goodpractices'],
    },
  ],
};

module.exports = sidebars;
