// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Custom Documents
import resumeCategories from './documents/resumeCategories';
import resumeItems from './documents/resumeItems';
import resume from './documents/resume';
import media from './documents/media';
import audio from './documents/audio';
import photos from './documents/photos';
import videos from './documents/videos';
import instruments from './documents/instruments';
import instrumentCategories from './documents/instrumentCategories';
import biography from './documents/biography';
import lessons from './documents/lessons';
import contracting from './documents/contracting';

import richText from './objects/richText';
import contract from './objects/contract';
import customFile from './objects/customFile';
import customImage from './objects/customImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    resumeCategories,
    resumeItems,
    resume,
    media,
    audio,
    photos,
    videos,
    instruments,
    instrumentCategories,
    richText,
    biography,
    lessons,
    contracting,
    contract,
    customFile,
    customImage,
  ])
})
