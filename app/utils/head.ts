export default function setHead(metaObject: NGlobal.ISeo) {
  if (metaObject) {
    return {
      title: metaObject.metaTitle + ' | Morten Glad',
      ogTitle: metaObject.openGraphTitle,
      description: metaObject.metaDescription,
      ogDescription: metaObject.metaDescription,
      ogImage: metaObject.openGraphimage
        ? metaObject.openGraphimage[0].url
        : null,
    } as any;
  }
}
