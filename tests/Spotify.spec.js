import { expect } from "chai";
import spotify from '../src/Spotify'

describe('Spotify', () => {

  it('Deve ser um objeto', () => {

    expect(spotify).to.be.an.object;
  });

  it('Deve ter os métodos search', () => {

    expect(spotify.search).to.exist;

  });

  it('Deve ter os métodos do album', () => {

    expect(spotify.album).to.exist;
  });
});
