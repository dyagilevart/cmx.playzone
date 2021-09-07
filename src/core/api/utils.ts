import qs from 'qs';
import PageModel from '../models/Page.model';

const httpPrefix = process.env?.REACT_APP_SSL ? 'https' : 'http';

export function formListParamsUrl(
  page: number,
  pageSize: number,
  filter: Record<string, unknown>,
  sort: string[] | string,
): string {
  const params = qs.stringify({
    page: page ? page - 1 : '',
    size: pageSize ? pageSize - 1 : '',
    filter: pageSize ? filter : '',
    sort,
  });
  return `?${params}`;
}

export function mapToClientPage(responseData: PageModel<any>): PageModel<any> {
  return responseData;
}

const windowUrl = `${window.location.protocol}//${window.location.host}`;
export const getUrl = (host?: string, app?: string, protocol?: string): string => {
  let baseUrl;
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    baseUrl = `${httpPrefix}://${host}${protocol ? `:${protocol}` : ''}${app}`;
  } else {
    baseUrl = `${windowUrl}${protocol ? `:${protocol}` : ''}${app}`;
  }
  return baseUrl;
};
