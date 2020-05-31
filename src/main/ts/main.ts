import puppeteer from 'puppeteer';

export const generateMermaidSVG = async (code: string): Promise<string> => {
  // Suppress TS missing variable errors (the function's code is actually stringified and passed to the browser for eval).
  let window: any;

  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/../resources/index.html`);
    await page.$eval('#container', (container, code) => {
      container.textContent = code;
      window.mermaid.initialize({});
      window.mermaid.init(undefined, container);
    }, code);
    return await page.$eval('#container', container => container.innerHTML);
  } finally {
    await browser.close();
  }
};
