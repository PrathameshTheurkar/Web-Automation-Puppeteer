const puppeteer = require("puppeteer")

async function func(){
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://en.wikipedia.org/wiki/Coronavirus');

  await page.screenshot({path : 'wiki.png'});
  await browser.waitForTarget(()=>false)
  await browser.close();
}

func();