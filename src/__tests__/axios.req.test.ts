import req2curl from '#axios/req2curl';
import axios from 'axios';
import 'jest';

const url = 'https://jsonplaceholder.typicode.com';

describe('axios.req.test.ts', () => {
  it('GET', async () => {
    const response = await axios.get(`${url}/posts/1`);

    const axiosConfig = response.config;

    const curlirized = req2curl(axiosConfig);

    // eslint-disable-next-line no-console
    console.log('GET', 'curlirized', { curlirized });

    const expectCurlized = `curl -X GET https://jsonplaceholder.typicode.com/posts/1 -H 'Accept: application/json, text/plain, */*' -H 'User-Agent: axios/1.4.0' -H 'Accept-Encoding: UTF-8' -H 'Accept-Encoding: gzip, compress, deflate, br'`;

    expect(curlirized).toEqual(expectCurlized);
  });

  it('POST', async () => {
    const response = await axios.post(
      `${url}/posts`,
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    const axiosConfig = response.config;

    const curlirized = req2curl(axiosConfig);

    // eslint-disable-next-line no-console
    console.log('POST', 'curlirized', { curlirized });

    // eslint-disable-next-line no-useless-escape
    const expectCurlized = `curl -X POST https://jsonplaceholder.typicode.com/posts -H 'Accept: application/json, text/plain, */*' -H 'Content-Type: application/json; charset=UTF-8' -H 'User-Agent: axios/1.4.0' -H 'Content-Length: 39' -H 'Accept-Encoding: UTF-8' -H 'Accept-Encoding: gzip, compress, deflate, br' -d '{\"title\":\"foo\",\"body\":\"bar\",\"userId\":1}'`;

    expect(curlirized).toEqual(expectCurlized);
  });

  it('PUT', async () => {
    const response = await axios.put(`${url}/posts/1`, {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    });

    const axiosConfig = response.config;

    const curlirized = req2curl(axiosConfig);

    // eslint-disable-next-line no-console
    console.log('PUT', 'curlirized', { curlirized });

    const expectCurlized = `curl -X PUT https://jsonplaceholder.typicode.com/posts/1 -H 'Accept: application/json, text/plain, */*' -H 'Content-Type: application/json' -H 'User-Agent: axios/1.4.0' -H 'Content-Length: 46' -H 'Accept-Encoding: UTF-8' -H 'Accept-Encoding: gzip, compress, deflate, br' -d '{"id":1,"title":"foo","body":"bar","userId":1}'`;

    expect(curlirized).toEqual(expectCurlized);
  });
});
