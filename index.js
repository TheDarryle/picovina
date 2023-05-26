import express from 'express';
import axios from 'axios';
const app = express();

app.get('/pevna-adresa', async (req, res) => {
  const apiKey =
    '1c8fdafb3ac839ad4639fee21f92bd77add2a9acb10c4f563fe9bf9bfe939802';
  const municipalityName = 'Havířov';
  const cp = '513';
  const streetName = 'Makarenkova';

  const ruian = await axios.get(
    `https://ruian.fnx.io/api/v1/ruian/validate?apiKey=${apiKey}&municipalityName=${municipalityName}&cp=${cp}&street=${streetName}`
  );

  var data = ruian.data.place;

  console.log(ruian.data);
  res.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h2>Adresa: ${data.streetName} ${data.cp}</h2>
      <h2>Město: ${data.municipalityName}</h2>
      <h2>PSČ: ${data.zip}</h2>
      <h2>Kraj: ${data.regionName}</h2>
      <a href="/">zpět</a>
    </body
  </html>
  `);

  res.end();
});

app.get('/', (req, res) => {
  res.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>vyhledávač adres</h1>
      <a href="/pevna-adresa">pevna adresa</a>
      <br>
      <a href="/over-adresu">over adresu</a>
    </body
  </html>
  `);

  res.end();
  //res.json({ ok: 1 });
});

app.listen(1337, () => {
  console.log('XDDDDDDDDDDDD');
});
