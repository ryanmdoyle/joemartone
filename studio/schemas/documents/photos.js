export default {
  title: 'Photos',
  name: 'photos',
  type: 'document',
  fields: [
    {
      title: 'Image Title',
      name: 'imageTitle',
      type: 'string',
    },
    {
      title: "Image File",
      name: "imageFile",
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'imageTitle',
      media: 'imageFile'
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `Photo: ${title}`,
        media: media,
      }
    }
  }
}