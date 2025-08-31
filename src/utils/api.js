const DEVPOST_URL = import.meta.env.VITE_DEVPOST_API_URL;
const OTHER_URL = import.meta.env.VITE_OTHER_PLATFORM_API_URL;

export async function fetchDevpostHackathons() {
  const resp = await fetch(DEVPOST_URL);
  if (!resp.ok) throw new Error('Devpost fetch failed');
  const data = await resp.json();
  return data.hackathons || data.events || [];
}

export async function fetchOtherHackathons() {
  const resp = await fetch(OTHER_URL);
  if (!resp.ok) throw new Error('Other fetch failed');
  const data = await resp.json();
  return data.hackathons || [];
}
