// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Custom Documents
import resume from './documents/resumeCategory';
import resumeItem from './documents/resumeItem';
import media from './documents/media';

// Custom Objects
import audio from './objects/audio';
import photo from './objects/photo';
import video from './objects/video';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    resume,
    resumeItem,
    media,
    audio,
    photo,
    video,
  ])
})
