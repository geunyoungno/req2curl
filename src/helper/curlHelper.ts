import { CE_CONSTANT } from '#enum/CE_CONSTANT';
import ICurlBuilderParameter from '#type/ICurlBuilderParameter';
import TMethod from '#type/TMethod';

export function getMethod(method?: TMethod | string) {
  const uppsercaseMethod = method?.toUpperCase();

  if (uppsercaseMethod === 'OPTIONS') {
    return 'OPTIONS';
  }

  if (uppsercaseMethod === 'GET') {
    return 'GET';
  }

  if (uppsercaseMethod === 'HEAD') {
    return 'HEAD';
  }

  if (uppsercaseMethod === 'POST') {
    return 'POST';
  }

  if (uppsercaseMethod === 'PUT') {
    return 'PUT';
  }

  if (uppsercaseMethod === 'DELETE') {
    return 'DELETE';
  }

  if (uppsercaseMethod === 'TRACE') {
    return 'TRACE';
  }

  if (uppsercaseMethod === 'CONNECT') {
    return 'CONNECT';
  }

  return CE_CONSTANT.METHOD;
}

export default function curlHelper(args: ICurlBuilderParameter) {
  const curls: string[] = ['curl'];

  curls.push(`-X ${args.method}`);

  curls.push(args.url.toString());

  if (args.headers != null) {
    Object.entries(args.headers).forEach(([key, value]) => {
      // curl 을 바로 실행할 수 있도록 Accept-Encoding 헤더를 변환한다.
      if (key.trim().toUpperCase() === 'ACCEPT-ENCODING') {
        curls.push(`-H '${key}: UTF-8'`);
      }

      curls.push(`-H '${key}: ${value}'`);
    });
  }

  // 인코딩 필요?
  if (args.body != null) {
    const body = typeof args.body === 'string' ? `${args.body}` : JSON.stringify(args.body);

    curls.push(`-d '${body}'`);
  }

  const curled = curls.join(` `);

  return curled;
}
