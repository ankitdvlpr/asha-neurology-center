const http = require('http');

const data = JSON.stringify({
  doctorId: "69f1a4dea891308aeb03efe7",
  month: 4,
  year: 2026
});

const options = {
  hostname: '127.0.0.1',
  port: 3001,
  path: '/api/custom/generate-slots',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('--- Slot Generation Result ---');
    console.log('Status Code:', res.statusCode);
    console.log('Response:', body);
    console.log('------------------------------');
  });
});

req.on('error', (error) => {
  console.error('Error connecting to backend:', error.message);
  console.log('Make sure "npm run dev" is running in another terminal!');
});

req.write(data);
req.end();
