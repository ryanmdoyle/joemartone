export default {
  title: 'Biography',
  name: 'biography',
  type: 'document',
  fields: [
    {
      title: 'Biography Content',
      name: 'biographyContent',
      type: 'richText',
    },
    {
      title: 'Biography Images',
      name: 'biographyImages',
      type: 'array',
      of: [{ type: 'photos' }]
    }
  ]
}