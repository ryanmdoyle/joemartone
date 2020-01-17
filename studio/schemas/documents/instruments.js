export default {
  title: "Instruments",
  name: 'instruments',
  type: 'document',
  fields: [
    {
      title: 'Category Order',
      name: 'categoryOrder',
      description: 'Order in which the instrument categories will be displayed on the Instruments page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'instrumentCategories' },
          ]
        }
      ],
      options: {
        editModal: 'fullscreen',
      }
    }
  ]
}