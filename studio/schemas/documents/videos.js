export default {
  title: 'Videos',
  name: 'videos',
  type: 'document',
  fields: [
    {
      title: 'Video Link',
      name: 'video',
      type: 'url',
    },
    {
      title: 'Video Caption',
      name: 'videoCaption',
      type: 'string',
    },
    {
      title: 'YouTube Video ID',
      name: 'videoId',
      type: 'string',
      description: 'Example: "2ToCuB2M0OI" in the link https://youtu.be/2ToCuB2M0OI'
    },
  ]
}