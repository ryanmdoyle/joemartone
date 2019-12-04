export default {
  title: 'Audio Files',
  name: 'audio',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'audioTitle',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'audioDescription',
      type: 'string',
    },
    {
      title: 'Composer',
      name: 'audioComposer',
      type: 'string',
    },
    {
      title: 'Audio file',
      name: 'audioFile',
      type: 'file',
    }
  ]
}