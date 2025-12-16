import type { SeoFragmentFragment } from '~/generated/graphql';

export default function setHead(metaObject?: SeoFragmentFragment | null) {
  return {
    title: metaObject?.metaTitle
      ? metaObject.metaTitle + ' | Morten Glad'
      : 'Morten Glad',
    ogTitle: metaObject?.openGraphTitle || null,
    description: metaObject?.metaDescription || null,
    ogDescription: metaObject?.metaDescription || null,
    ogImage: metaObject?.openGraphimage || null,
  };
}
