
export default async function fetchData(_url) {
  const baseUrl = "http://127.0.0.1:8002/api/"
  const res = await fetch(baseUrl+_url, {cache: 'no-cache'});
  if(!res.ok) throw new Error ('Fetching data failed')

  return await res.json();
}
