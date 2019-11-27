import S from "@sanity/desk-tool/structure-builder";


// filters the 'settings' document from the method that spreads out/returns all the other doc types
const hiddenDocTypes = listItem => ![
  // 'settings',
  // 'biography',
  // 'gallery',
  // 'resume',
].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems()
          .filter(hiddenDocTypes)
    ]);