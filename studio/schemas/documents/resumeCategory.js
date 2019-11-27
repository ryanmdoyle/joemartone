export default {
  title: 'Resume Category',
  name: 'resumeCategory',
  type: 'document',
  fields: [
    {
      title: 'Resume Category Title',
      name: 'resumeCategoryTitle',
      type: 'string'
    },
    {
      title: 'Resume Items',
      name: 'resumeItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'resumeItem'},
          ]
        }
      ],
      options: {
        editModal: 'fullscreen',
        sortable: false,
      }
    }
  ]
}