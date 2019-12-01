export default {
  title: 'Resume Items',
  name: 'resumeItems',
  type: 'document',
  fields: [
    {
      title: 'Resume Item Title',
      name: 'resumeItem',
      type: 'string',
    },
    {
      title: 'Resume Item Link',
      name: 'resumeItemLink',
      type: 'url',
      description: 'URL/link to attach to item title.'
    },
    {
      title: 'Resume Item Description',
      name: 'resumeItemDescription',
      type: 'string',
    },
  ]
}