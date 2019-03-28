import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Main', () => {
  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    let fetchedStud;

    beforeEach(() => {
      fetchedStud = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
      fetchedStud.restore();
    });

    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStud).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        const artist = search('Incubus', 'artist');

        expect(fetchedStud).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist',
        );

        const albums = search('Incubus', 'album');
        expect(fetchedStud).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
        );
      });

      context('passing more than one type', () => {
        const artistsAndalbums = search('Incubus', ['artist', 'album']);

        expect(fetchedStud).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist,album',
        );
      });
    });
  });
});
