import TMethod from '#type/TMethod';

export default interface ICurlBuilderParameter {
  method: Uppercase<TMethod>;

  url: URL;

  protocol: string;

  /**
   * @see https://datatracker.ietf.org/doc/html/rfc3986#section-3.2.2
   * @see https://developer.mozilla.org/ko/docs/Web/API/URL/hostname
   * url domain
   */
  hostname?: string;

  /**
   * @see https://datatracker.ietf.org/doc/html/rfc3986#section-3.2.3
   */
  port?: number;

  params?: Record<string, string>;

  querystring?: Record<string, string>;

  headers?: Record<string, string>;

  body?: string | Record<string, string>;
}
