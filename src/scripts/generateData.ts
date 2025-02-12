import fs from 'fs';
import path from 'path';

const companies = [
  "Tech Corp", "Digital Solutions", "Innovation Labs", "Data Systems", 
  "Cloud Nine", "Smart Tech", "Future Inc", "Cyber Solutions",
  "Network Pro", "Digital Dreams"
];

const domains = [
  "example.com", "business.com", "techcorp.com", "company.net",
  "enterprise.org", "digital.com", "solutions.net", "innovation.com"
];

const catchPhrases = [
  "Innovative solutions for modern problems",
  "Leading the digital transformation",
  "Building tomorrow's technology today",
  "Connecting the world through technology",
  "Empowering digital excellence"
];

function generateUser(id: number) {
  const firstName = `User${id}`;
  const lastName = `Smith${id}`;
  const companyIndex = id % companies.length;
  
  return {
    id,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}@${domains[id % domains.length]}`,
    phone: `1-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
    website: `www.${firstName.toLowerCase()}.${domains[id % domains.length]}`,
    company: {
      name: companies[companyIndex],
      catchPhrase: catchPhrases[id % catchPhrases.length],
      bs: `innovate ${companies[companyIndex].toLowerCase()} solutions`
    }
  };
}

function generatePost(id: number) {
  const userId = Math.floor(id / 3) + 1; // Each user has about 3 posts
  return {
    id,
    userId,
    title: `Post ${id} - ${Math.random().toString(36).substring(7)}`,
    body: `This is the body of post ${id}. It contains some sample text that describes the content of the post. Generated for demonstration purposes. ${Math.random().toString(36).substring(7)}`
  };
}

const users = Array.from({ length: 100 }, (_, i) => generateUser(i + 1));
const posts = Array.from({ length: 100 }, (_, i) => generatePost(i + 1));

const data = {
  users,
  posts
};

const dbPath = path.join(__dirname, '../data/db.json');
fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

console.log('Data generated successfully!'); 