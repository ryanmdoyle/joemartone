export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'object',
  fields: [
    {
      title: 'Rich Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}