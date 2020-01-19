import S from "@sanity/desk-tool/structure-builder";
import { IoIosDocument, IoIosCreate, IoIosPerson, IoIosCopy } from "react-icons/io";
import { GiDrum, GiPanFlute, GiMusicalScore } from "react-icons/gi";
import { FaFileContract } from 'react-icons/fa';
import { MdVideoLibrary, MdReorder, MdPhoto, MdOndemandVideo, MdAudiotrack } from 'react-icons/md';

// filters the 'settings' document from the method that spreads out/returns all the other doc types
const hiddenDocTypes = listItem => ![
  'resumeCategories',
  'resume',
  'resumeItems',
  'instruments',
  'instrumentCategories',
  'media',
  'biography',
  'lessons',
  'contracting',
  'photos',
  'audio',
  'videos',
].includes(listItem.getId());

export default () =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title('Biography Page')
        .child(
          S.editor()
            .title('Biography Page Content')
            .id('bio')
            .schemaType('biography')
            .documentId('bio-config')
        )
        .icon(IoIosPerson),
      // RESUME GROUP
      S.listItem()
        .title('Resume Page')
        .child(
          S.list()
          .title('Resume Page Settings')
          .items([
            S.listItem()
              .title('Resume Page Category Order')
              .child(
                S.editor()
                  .title('Resume Page Category Order')
                  .id('resume')
                  .schemaType('resume')
                  .documentId('resume-config')
              )
              .icon(MdReorder),
            S.listItem()
              .title('Resume Categories')
              .child(
                S.documentTypeList('resumeCategories')
              )
              .icon(IoIosCopy),
            S.listItem()
              .title('Resume Items')
              .child(
                S.documentTypeList('resumeItems')
              )
              .icon(IoIosCreate),
          ])
        )
        .icon(IoIosDocument),
      // INSTRUMENTS Group
      S.listItem()
        .title('Instruments Page')
        .child(
          S.list()
          .title('Instruments Page Settings')
          .items([
            S.listItem()
              .title('Instruments Ordering')
              .child(
                S.editor()
                  .title('Instruments Page')
                  .id('instruments')
                  .schemaType('instruments')
                  .documentId('instruments-config')
              )
              .icon(MdReorder),
            S.listItem()
              .title('Instrument Categories')
              .child(
                S.documentTypeList('instrumentCategories')
              )
              .icon(GiPanFlute),
          ])
        )
        .icon(GiDrum),
      S.listItem()
        .title('Lessons Page')
        .child(
          S.editor()
            .title('Lessons Page Content')
            .id('lessons')
            .schemaType('lessons')
            .documentId('lessons-config')
        )
        .icon(GiMusicalScore),
      // MEDIA GROUP
      S.listItem()
        .title('Media Page')
        .child(
          S.list()
          .title('Media Page Settings')
          .items([
            S.listItem()
              .title('Media Page Categories & Content')
              .child(
                S.documentTypeList('media')
              )
              .icon(MdReorder),
            S.divider(),
            S.documentTypeListItem('photos').icon(MdPhoto),
            S.documentTypeListItem('audio').icon(MdAudiotrack),
            S.documentTypeListItem('videos').icon(MdOndemandVideo),
          ])
        )
        .icon(MdVideoLibrary),
      S.listItem()
        .title('Contracting Page')
        .child(
          S.editor()
            .title('Contracting Page Content')
            .id('contracting')
            .schemaType('contracting')
            .documentId('contracting-config')
        )
        .icon(FaFileContract),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])