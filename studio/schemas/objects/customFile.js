export default {
  title: 'File',
  name: 'customFile',
  type: 'file',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      options: {
        isHighlighted: true // <-- make this field easily accessible, false makes hidden behin 'edit' button
      },
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      options: {
        isHighlighted: true // <-- make this field easily accessible, false makes hidden behin 'edit' button
      },
    }
  ]
}