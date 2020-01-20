export default {
  title: 'Resume Categories',
  name: 'resumeCategories',
  type: 'document',
  fields: [
    {
      title: 'Resume Category',
      name: 'resumeCategory',
      type: 'string'
    },
    {
      title: 'Resume Items in Category',
      name: 'resumeCategoryItems',
      type: 'array',
      of: [ 
        {
          type: 'resumeItems',
          title: 'Resume Item'
        },
        // {
        //   type: 'reference',
        //   title: 'Reference to Resume Item',
        //   to: [
        //     { type: 'resumeItems' },
        //   ]
        // }
      ],
      // options: {
      //   editModal: 'fullscreen',
      // }
    },
  ]
}