export default {
  title: "Resume",
  name: 'resume',
  type: 'document',
  fields: [
    {
      title: 'Category Order',
      name: 'categoryOrder',
      description: 'Order in which the resume categories will be displayed on the Resume page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'resumeCategories' },
          ]
        }
      ],
      options: {
        editModal: 'fullscreen',
      }
    }
  ]
}