// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>https://ciserversdk.table.core.windows.net/Tables('batch1')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-02-26T13:18:18Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('batch1')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>batch1</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'https://ciserversdk.table.core.windows.net/Tables(\'batch1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ef0c6094-3e7f-461c-ad3f-28bf19c9e762',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 26 Feb 2013 13:18:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/$batch', '*')
  .reply(202, "--batchresponse_cc2a21e8-83ac-4a5a-821c-cb33473e93fb\r\nContent-Type: multipart/mixed; boundary=changesetresponse_b63cfb2e-8c37-41dd-b5cf-9dcfa199a516\r\n\r\n--changesetresponse_b63cfb2e-8c37-41dd-b5cf-9dcfa199a516\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nHTTP/1.1 400 Bad Request\r\nContent-ID: 1\r\nDataServiceVersion: 1.0;\r\nContent-Type: application/xml\r\n\r\n<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>OutOfRangeInput</code>\r\n  <message xml:lang=\"en-US\">0:One of the request inputs is out of range.\nRequestId:8629ae41-9279-430c-8299-8d1a186d91b1\nTime:2013-02-26T13:18:18.5994528Z</message>\r\n</error>\r\n--changesetresponse_b63cfb2e-8c37-41dd-b5cf-9dcfa199a516--\r\n--batchresponse_cc2a21e8-83ac-4a5a-821c-cb33473e93fb--\r\n", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'multipart/mixed; boundary=batchresponse_cc2a21e8-83ac-4a5a-821c-cb33473e93fb',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8629ae41-9279-430c-8299-8d1a186d91b1',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 26 Feb 2013 13:18:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>https://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-26T13:18:20Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>https://ciserversdk.table.core.windows.net/Tables('batch1')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-02-26T13:18:20Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('batch1')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>batch1</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f7290acd-116f-423c-9a6d-f596043f0cee',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 26 Feb 2013 13:18:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .delete('/Tables(%27batch1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '017eca18-22ab-4876-93a9-4cda28337d33',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 26 Feb 2013 13:18:20 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>https://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-02-26T13:18:21Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '19c55640-d9b8-4490-b7ec-8c968090d540',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 26 Feb 2013 13:18:21 GMT' });
 return result; }]];