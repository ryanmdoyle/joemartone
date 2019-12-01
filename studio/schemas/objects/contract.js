export default {
  title: 'Contract',
  name: 'contract',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'contractTitle',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'contractDescription',
      type: 'string',
    },
    {
      title: 'Photos',
      name: 'contractPhotos',
      type: 'array',
      of: [{ type: 'photos' }]
    },
    {
      title: 'Videos',
      name: 'contractVideos',
      type: 'array',
      of: [{ type: 'videos' }]
    },
  ]
}