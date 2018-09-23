import { expect } from "chai";
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {

  it('Deve receber 0ms e converter para 0:00', () => {

    expect(convertToHumanTime(0)).to.be.eql('0:00');
  });

  it('Deve receber 1000ms e converter para 0:01', () => {

    expect(convertToHumanTime(1000)).to.be.eql('0:01');
  });

  it('Deve receber 11000ms e converter para 0:11', () => {

    expect(convertToHumanTime(11000)).to.be.eql('0:11');
  });

  it('Deve receber 60000ms e converter para 1:00', () => {

    expect(convertToHumanTime(60000)).to.be.eql('1:00');
  });
});
