import chai, {expect} from 'chai';
import 'mocha';
import {generateMermaidSVG} from '../../main/ts/main';
import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('generateMermaidSVG', () => {
  it('should generate SVG when given valid mermaid code', () => {
    let mermaid = `
      graph TD
      A-->B
    `;
    return expect(generateMermaidSVG(mermaid)).to.eventually.match(/^<svg /);
  });
});
