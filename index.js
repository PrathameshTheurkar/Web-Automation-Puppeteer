const puppeteer = require("puppeteer")

async function func(){

  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  
  await page.goto('https://www.hackerrank.com/auth/login');
  // await page.goto('https://www.hackerrank.com/contests/coders-royale/challenges');

  await page.type('#input-1' , 'prathameshtheurkar037@gmail.com')
  await page.type('#input-2' , 'Prathamesh@1')

  await Promise.all([page.click('.auth-button') , page.waitForNavigation()])

  await page.click('.contests')
 
  await page.click('.down-icon')

  const elements = await page.$$('.profile-nav-item-link');

 
  if (elements.length >= 2) {
    const secondLastElement = elements[elements.length - 2];

    await page.evaluate(element => {
      element.click(); 
    }, secondLastElement);
  } else {
    console.log('There are not enough elements with the specified class name.');
  }

  await page.waitForSelector(`#input`);
  await page.type('#input' , 'Coders Royale')
  
  await page.keyboard.press('Enter');
 
 
  await page.waitForSelector('.c-kNzlbw.c-kNzlbw-cezigA-isMultipleSelectionAllowed-false')
  await page.click('.c-kNzlbw.c-kNzlbw-cezigA-isMultipleSelectionAllowed-false')

  await page.waitForSelector('.model-slug.clearfix.pull-left.pjB')
  await page.click('.model-slug.clearfix.pull-left.pjB')

  const linkId = 'model-slug.clearfix.pull-left.pjB';
  const linkSelector = `a.${linkId}`;
  const linkHandle = await page.$(linkSelector);

  if (linkHandle) {
    // Click the link
    await Promise.all([
      linkHandle.click(),
      page.waitForNavigation({ waitUntil: 'domcontentloaded' })
    ]);

  }

 
  await page.waitForSelector('.action-button')
  await page.click('.action-button')

  await page.screenshot({path : 'wiki.png'});
  await browser.waitForTarget(()=>false)
  await browser.close();
}

func();