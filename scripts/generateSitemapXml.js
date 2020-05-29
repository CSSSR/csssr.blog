const fs = require('fs')
const path = require('path')

// Главная + посты

const { SitemapStream, streamToPromise } = require( 'sitemap' )

// An array with your links
const links = [{ url: '/page-1/',  changefreq: 'daily', priority: 0.3  }]

// Create a stream to write to
const stream = new SitemapStream( { hostname: 'https://...' } )

// Loop over your links and add them to your stream
links.forEach( link => stream.write( link ) )

// End the stream
stream.end()

// Return a promise that resolves with your XML string
const sitemapXmlContent = streamToPromise( stream ).then( data => data.toString() )

fs.writeFileSync(path.resolve(__dirname, '../out/sitemap.xml'), sitemapXmlContent)
