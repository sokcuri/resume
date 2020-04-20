import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME';
const description = 'Resume';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Jinsu',
        lastName: 'Park',
        username: 'sokcuri',
        gender: 'male',
      },
    },
  },
};
