const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/platform/:source', async (req, res) => {
  const source = req.params.source;
  const query = req.query.q ? req.query.q.toLowerCase() : '';

  try {
    let results = [];

    if (source === 'devpost') {
      const options = {
        method: 'GET',
        url: 'https://devpost.p.rapidapi.com/hackathons',
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'devpost.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      results = response.data.hackathons;
    } else if (source === 'mlh') {
      const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://mlh.io/feed.xml');
      results = response.data.items.map(item => ({
        title: item.title,
        tagline: item.description,
        url: item.link,
        submissionDeadline: item.pubDate
      }));
    } else if (source === 'hackerearth') {
      results = [{
        title: 'HackerEarth Challenges',
        tagline: 'Find all HackerEarth hosted hackathons here.',
        url: 'https://www.hackerearth.com/challenges/',
        submissionDeadline: 'N/A'
      }];
    } else {
      return res.status(400).send('Unknown platform');
    }

    // Filter by search keyword if provided
    const filtered = query
      ? results.filter(hack => hack.title?.toLowerCase().includes(query) || hack.tagline?.toLowerCase().includes(query))
      : results;

    res.json(filtered);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching hackathons');
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
