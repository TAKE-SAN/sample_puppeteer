import puppeteer from 'puppeteer';

const browserOpen = async (url = 'https://www.youtube.com/?gl=JP&hl=ja') => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  page.setViewport({width: 1200, height: 800});
  await page.goto(url);
  // await page.screenshot({path: 'screenshot.png'});

  // await browser.close();
};

browserOpen();

export default browserOpen;
