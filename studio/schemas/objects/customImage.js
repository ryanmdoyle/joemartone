export default {
  title: 'Image',
  name: 'customImage',
  type: 'image',
  options: {
    hotspot: true // <-- Defaults to false
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true // <-- make this field easily accessible, false makes hidden behin 'edit' button
      }
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
      options: {
        isHighlighted: true
      }
    }
  ]
}