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
          type: 'reference',
          to: [
            { type: 'resumeItems' },
          ]
        }
      ],
      options: {
        editModal: 'fullscreen',
      }
    },
  ]
}