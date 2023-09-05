/**
 * @see https://datatracker.ietf.org/doc/html/rfc2616#section-5.1.1
 */
type TUppercaseMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

type TMethod = TUppercaseMethod | Lowercase<TUppercaseMethod>;

export default TMethod;
