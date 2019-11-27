export default {
  title: 'Media',
  name: 'media',
  type: 'document',
  fields: [
    {
      title: 'List of Media',
      name: 'mediaList',
      type: 'array',
      of: [
        {type: 'photo'},
        {type: 'video'},
        {type: 'audio'},
      ]
    },
  ]
}