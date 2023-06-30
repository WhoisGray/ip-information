const express = require("express");
const app = express();
const geoip = require("geoip-lite");

app.get("/", (req, res) => {
  const ip = extractIPv4(
    req.headers["x-forwarded-for"] || req.connection.remoteAddress
  );
  const message = `${ip || "Unknown"}`;

  res.send(message);
});

app.get("/details", (req, res) => {
  const fullIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const ip = extractIPv4(fullIp);

  const geo = geoip.lookup(ip);
  const os = req.headers["user-agent"];

  const clientInfo = {
    fullIp,
    ipAddress: ip || "Unknown",
    operatingSystem: os || "Unknown",
    url: req.url,
    method: req.method,
    headers: req.headers,
    cookies: req.cookies,
    geo: {
      city: geo ? geo.city : "Unknown",
      country: geo ? geo.country : "Unknown",
      latitude: geo ? geo.ll[0] : "Unknown",
      longitude: geo ? geo.ll[1] : "Unknown",
    },
  };

  res.json(clientInfo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function extractIPv4(ip) {
  if (ip.startsWith("::ffff:")) {
    return ip.slice(7);
  }
  return ip;
}
