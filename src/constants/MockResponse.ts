import {MatchLevel} from '../types/MetaPostType';

const MockResponse = {
  hits: [
    {
      created_at: '2023-07-06T06:20:52.000Z',
      title: 'Why E-Bikes Catch Fire',
      url: 'https://nautil.us/why-e-bikes-catch-fire-351967/',
      author: 'jnord',
      points: 1,
      story_text: null,
      comment_text: null,
      num_comments: 0,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1688624452,
      _tags: ['story', 'author_jnord', 'story_36612033'],
      objectID: '36612033',
      _highlightResult: {
        title: {
          value: 'Why E-Bikes Catch Fire',
          matchLevel: MatchLevel.None,
          matchedWords: [],
        },
        url: {
          value: 'https://nautil.us/why-e-bikes-catch-fire-351967/',
          matchLevel: MatchLevel.None,
          matchedWords: [],
        },
        author: {
          value: 'jnord',
          matchLevel: MatchLevel.None,
          matchedWords: [],
        },
      },
    },
  ],
  nbHits: 2347615,
  page: 0,
  nbPages: 50,
  hitsPerPage: 20,
  exhaustiveNbHits: false,
  exhaustiveTypo: true,
  exhaustive: {
    nbHits: false,
    typo: true,
  },
  query: '',
  params: 'advancedSyntax=true&analytics=true&analyticsTags=backend&tags=story',
  processingTimeMS: 2,
  processingTimingsMS: {
    afterFetch: {
      total: 1,
    },
    request: {
      roundTrip: 14,
    },
    total: 2,
  },
  serverTimeMS: 3,
};
export default MockResponse;
