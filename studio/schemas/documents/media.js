export default {
  title: 'Media',
  name: 'media',
  type: 'document',
  fields: [
    {
      title: 'Category Title',
      name: 'mediaCategory',
      type: 'string',
      description: 'Name of category on the Media page.',
    },
    {
      title: 'List of Media',
      name: 'mediaList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'photos' },
            { type: 'videos' },
            { type: 'audio' },
          ]
        }
      ]
    },
  ]
}