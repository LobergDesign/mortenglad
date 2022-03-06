export default function setHead(metaObject: NGlobal.ISeo) {
  if (metaObject) {
    return {
      title: metaObject.metaTitle + " | Morten Glad",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: metaObject.metaDescription,
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: metaObject.metaDescription,
        },
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: metaObject.openGraphTitle,
        },
        {
          hid: "og:type",
          content: metaObject.openGraphType,
        },
        {
          property: "og:image",
          content: metaObject.openGraphimage
            ? metaObject.openGraphimage[0].url
            : null,
        },
      ],
    };
  }
}
