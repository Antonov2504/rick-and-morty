import { ErrorMockType, ErrorPageDescriptionEnum } from './ErrorPage.types';

export const errorsMock: ErrorMockType = {
  [ErrorPageDescriptionEnum.notFound]: {
    code: '404',
    title: 'Страница не найдена',
  },
};
