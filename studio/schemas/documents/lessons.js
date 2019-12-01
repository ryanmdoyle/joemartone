export default {
  title: 'Lessons',
  name: 'lessons',
  type: 'document',
  fields: [
    {
      title: 'Lessons Content',
      name: 'lessonsContent',
      type: 'richText',
    },
    {
      title: 'Lesson files',
      name: 'LessonFiles',
      type: 'array',
      of: [{ type: 'customFile' }]
    }
  ]
}