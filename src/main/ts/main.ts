import puppeteer, { Browser, Page } from "puppeteer";

export function generateMermaidSVG(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let browser: Browser;
    let page: Page;
    // Avoid TypeScript's complaints
    let window: any;

    puppeteer.launch()
      .then(_browser => {
        browser = _browser;
        return browser.newPage();
      })
      .then(p => {
        page = p;
        return page.goto(`file://${__dirname}/../../../resources/generateMermaidSVG/index.html`);
      })
      .then(() =>
        page.$eval("#container", (container, code) => {
          container.textContent = code;
          window.mermaid.initialize({});

          window.mermaid.init(undefined, container);
        }, code))
      .then(() => page.$eval("#container", container => container.innerHTML))
      .then((svg: any) => resolve(svg))
      .catch(reject)
      .then(() => browser.close());
  });
}
