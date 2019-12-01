export default {
  title: 'Contracting',
  name: 'contracting',
  type: 'document',
  fields: [
    {
      title: 'Contract Page Content',
      name: 'contractingDescription',
      type: 'richText',
    },
    {
      title: 'Contracts',
      name: 'contracts',
      type: 'array',
      of: [{ type: 'contract' }]
    },
    {
      title: 'Available Ensembles',
      name: 'availableEnsembles',
      type: 'richText',
    },
    {
      title: 'Available Instruments',
      name: 'availableInstruments',
      type: 'richText',
    },
  ]
}