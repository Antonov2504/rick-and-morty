export enum ErrorPageRoutePathEnum {
  notFound = '/errors/404',
}

export enum ErrorPageDescriptionEnum {
  notFound = 'notFound',
}

export type ErrorMockType = {
  [statusError in ErrorPageDescriptionEnum]: {
    code?: string;
    title: string;
  };
};
