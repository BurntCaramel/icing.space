import Link from 'next/link'
import Head from 'next/head'

export default ({
  url
}) => (
  <div>
    <Head>
      <meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Royal Icing · Tools for product makers</title>
<link rel="stylesheet" href="https://codepen.io/burntcaramel/pen/vZNZyK.css"/>
    </Head>
    <main className="content"><header ><h1 >Make products? We make open source tools for you</h1></header>
<article >
  <a href="https://datadown.netlify.com/" className=""><h2 className="">Datadown: Use Markdown to play with data and components</h2></a>
  <a href="https://fruitbat.collected.design/" className=""><h2 className="">Fruitbat: Plan your migrations for Rails and Ecto</h2></a>
  <a href="https://collected.design/" className=""><h2 className="">Collected: a design system from messaging to components</h2></a>
  <a href="https://lofi.design/" className=""><h2 className="">Lofi: content’s new best friend</h2></a>
  <a href="https://lokum.icing.space/" className=""><h2 className="">Lokum: make websites directly from Trello boards</h2></a>
  <a href="https://github.com/RoyalIcing" className=""><h2 className="">GitHub</h2><p>Everything is open source for your team to use</p></a>
  <a href="https://twitter.com/RoyalIcing" className=""><h2 className="">Twitter</h2></a>
  <a href="https://medium.com/the-tech-bench" className=""><h2 className="">The Tech Bench</h2><p>Guides on React, Elm, Swift, Node.js, and application programming</p></a></article></main>
  </div>
)