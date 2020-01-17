import S from "@sanity/desk-tool/structure-builder";
import { IoIosDocument, IoIosPerson } from "react-icons/io";
import { GiDrum, GiBookmarklet } from "react-icons/gi";
import { FaFileContract } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';

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
].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      // test grouping
      S.listItem()
        .title('Resume Page')
        .child(
          S.list()
          .title('Resume Page Settings')
          .items([
            S.listItem()
              .title('Resume')
              .child(
                S.editor()
                  .title('Resume Page')
                  .id('resume')
                  .schemaType('resume')
                  .documentId('resume-config')
              )
              .icon(IoIosDocument),
            S.listItem()
              .title('Resume Categories')
              .child(
                S.documentTypeList('resumeCategories')
              )
              .icon(IoIosDocument),
            S.listItem()
              .title('Resume Items')
              .child(
                S.documentTypeList('resumeItems')
              )
              .icon(IoIosDocument),
                ])
              ),
      // end test grouping
      S.listItem()
        .title('Instrument Categories')
        .child(
          S.documentTypeList('instrumentCategories')
        )
        .icon(GiDrum),
      S.listItem()
        .title('Biography')
        .child(
          S.editor()
            .title('Biography Page Content')
            .id('bio')
            .schemaType('biography')
            .documentId('bio-config')
        )
        .icon(IoIosPerson),
      S.listItem()
        .title('Lessons')
        .child(
          S.editor()
            .title('Lessons Page Content')
            .id('lessons')
            .schemaType('lessons')
            .documentId('lessons-config')
        )
        .icon(GiBookmarklet),
      S.listItem()
        .title('Contracting')
        .child(
          S.editor()
            .title('Contracting Page')
            .id('contracting')
            .schemaType('contracting')
            .documentId('contracting-config')
        )
        .icon(FaFileContract),
      S.documentTypeListItem('media').icon(MdVideoLibrary),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])