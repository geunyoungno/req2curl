import { CE_CONSTANT } from '#enum/CE_CONSTANT';
import curlHelper, { getMethod } from '#helper/curlHelper';
import removeUndefinedHelper from '#helper/removeUndefinedHelper';
import ICurlBuilderParameter from '#type/ICurlBuilderParameter';
import { AxiosRequestConfig } from 'axios';
import { pipe } from 'fp-ts/lib/function';

export default function req2curl(req: AxiosRequestConfig) {
  const url = new URL(req.url ?? req.baseURL ?? CE_CONSTANT.HOSTNAME);
  const searchParams = new URLSearchParams(url.search);

  const args = {
    method: getMethod(req.method),
    url,
    protocol: url.protocol,
    hostname: url.hostname,
    port: parseInt(url.port, 10),

    headers: pipe(req.headers, removeUndefinedHelper),
    params: pipe(req.params, removeUndefinedHelper),
    querystring: pipe(searchParams.entries(), Object.fromEntries, removeUndefinedHelper),
    body: req.data,
  } satisfies ICurlBuilderParameter;

  const curled = curlHelper(args);

  return curled;
}
