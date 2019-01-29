// Replace placeholder with any function of your choice. 
addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(placeholder(event));
});

// Placeholder takes the whole event as an argument. 
// The request itself can be accessed through the event.request field.
async function placeholder(event: FetchEvent) {
  let body = 'Hello! World'
  return new Response(body, {
    headers: { 'Content-Type': 'text/html' },
  });
}
