import reducers from '../../store/bookListSlice';

describe('Redux store tests', () => {
  test('Init Test', () => {
    const state = reducers(undefined, {});
    expect(state).toEqual([]);
  });

  test('Pending Fetch', () => {
    const state = reducers({ bookList: [] }, { type: 'bookList/fetchBookList/pending', meta: { requestId: 'XQl80HYmNCjQlpXEm1dDw', requestStatus: 'pending' } });
    expect(state).toEqual({ bookList: [] });
  });

  test('Success Fetch', () => {
    const state = reducers({ bookList: [] }, {
      type: 'bookList/fetchBookList/fulfilled',
      payload: [{
        title: 'THE WISH', description: 'Maggie Dawes, a renowned travel photographer, struggles with a medical diagnosis over Christmas.', contributor: 'by Nicholas Sparks', author: 'Nicholas Sparks', contributor_note: '', price: '0.00', age_group: '', publisher: 'Grand Central', primary_isbn13: '9781538728628', primary_isbn10: '1538728621',
      }, {
        title: 'CLOUD CUCKOO LAND', description: 'An interconnected cast of dreamers and outsiders are in dangerous and disparate settings past, present and future.', contributor: 'by Anthony Doerr', author: 'Anthony Doerr', contributor_note: '', price: '0.00', age_group: '', publisher: 'Scribner', primary_isbn13: '9781982168438', primary_isbn10: '1982168439',
      }, {
        title: 'APPLES NEVER FALL', description: 'The Delaney siblings suspect their father of causing the disappearance of their mother.', contributor: 'by Liane Moriarty', author: 'Liane Moriarty', contributor_note: '', price: '0.00', age_group: '', publisher: 'Holt', primary_isbn13: '9781250220257', primary_isbn10: '1250220254',
      }, {
        title: 'HARLEM SHUFFLE', description: 'Ray Carney, a family man who sells furniture on 125th Street, gets a new clientele made up of vicious and unsavory characters.', contributor: 'by Colson Whitehead', author: 'Colson Whitehead', contributor_note: '', price: '0.00', age_group: '', publisher: 'Doubleday', primary_isbn13: '9780385545136', primary_isbn10: '0385545134',
      }, {
        title: 'THE LAST GRADUATE', description: 'The second book in the Scholomance series. Will students now in their senior year make it out alive?', contributor: 'by Naomi Novik', author: 'Naomi Novik', contributor_note: '', price: '0.00', age_group: '', publisher: 'Del Rey', primary_isbn13: '9780593128862', primary_isbn10: '0593128869',
      }, {
        title: 'THE JAILHOUSE LAWYER', description: 'A young lawyer winds up in an Alabama jail that remains mysteriously crowded.', contributor: 'by James Patterson and Nancy Allen', author: 'James Patterson and Nancy Allen', contributor_note: '', price: '0.00', age_group: '', publisher: 'Little, Brown', primary_isbn13: '9780316276627', primary_isbn10: '0316276626',
      }, {
        title: 'BEWILDERMENT', description: 'An astrobiologist and single father learns of a neurofeedback treatment that may improve his son’s emotional control.', contributor: 'by Richard Powers', author: 'Richard Powers', contributor_note: '', price: '0.00', age_group: '', publisher: 'Norton', primary_isbn13: '9780393881141', primary_isbn10: '0393881148',
      }, {
        title: 'THE MAN WHO DIED TWICE', description: 'The second book in the Thursday Murder Club series. A ruthless murderer is out to get four septuagenarian friends.', contributor: 'by Richard Osman', author: 'Richard Osman', contributor_note: '', price: '0.00', age_group: '', publisher: 'Pamela Dorman', primary_isbn13: '9781984880994', primary_isbn10: '1984880993',
      }, {
        title: 'BILLY SUMMERS', description: 'A killer for hire who only takes out bad guys seeks redemption as he does one final job.', contributor: 'by Stephen King', author: 'Stephen King', contributor_note: '', price: '0.00', age_group: '', publisher: 'Scribner', primary_isbn13: '9781982173616', primary_isbn10: '1982173610',
      }, {
        title: 'THE SANTA SUIT', description: 'A recently divorced woman searching the pockets of an old Santa suit finds a child’s wish that her father return from war.', contributor: 'by Mary Kay Andrews', author: 'Mary Kay Andrews', contributor_note: '', price: '0.00', age_group: '', publisher: 'St. Martin\'s', primary_isbn13: '9781250279316', primary_isbn10: '1250279313',
      }, {
        title: 'THE LAST THING HE TOLD ME', description: 'Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.', contributor: 'by Laura Dave', author: 'Laura Dave', contributor_note: '', price: '0.00', age_group: '', publisher: 'Simon & Schuster', primary_isbn13: '9781501171345', primary_isbn10: '1501171348',
      }, {
        title: 'BEAUTIFUL WORLD, WHERE ARE YOU', description: 'A novelist, a warehouse worker, an editorial assistant and a political adviser deal with changes.', contributor: 'by Sally Rooney', author: 'Sally Rooney', contributor_note: '', price: '0.00', age_group: '', publisher: 'Farrar, Straus & Giroux', primary_isbn13: '9780374602604', primary_isbn10: '0374602603',
      }, {
        title: 'VINCE FLYNN: ENEMY AT THE GATES', description: 'Anthony Cook, an autocratic president, distrusts Mitch Rapp, who is working to uncover a traitor.', contributor: 'by Kyle Mills', author: 'Kyle Mills', contributor_note: '', price: '0.00', age_group: '', publisher: 'Emily Bestler/Atria', primary_isbn13: '9781982164881', primary_isbn10: '1982164883',
      }, {
        title: 'THE MIDNIGHT LIBRARY', description: 'Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.', contributor: 'by Matt Haig', author: 'Matt Haig', contributor_note: '', price: '0.00', age_group: '', publisher: 'Viking', primary_isbn13: '9780525559474', primary_isbn10: '0525559477',
      }, {
        title: 'A SLOW FIRE BURNING', description: 'Three women come under scrutiny when a young man is found gruesomely murdered in a London houseboat.', contributor: 'by Paula Hawkins', author: 'Paula Hawkins', contributor_note: '', price: '0.00', age_group: '', publisher: 'Riverhead', primary_isbn13: '9780735211230', primary_isbn10: '073521123X',
      }],
      meta: { requestId: 'XQl80HYmNCjQlpXEm1dDw', requestStatus: 'fulfilled' },
    });
    expect(state).toEqual([
      {
        title: 'THE WISH', description: 'Maggie Dawes, a renowned travel photographer, struggles with a medical diagnosis over Christmas.', contributor: 'by Nicholas Sparks', author: 'Nicholas Sparks', contributor_note: '', price: '0.00', age_group: '', publisher: 'Grand Central', primary_isbn13: '9781538728628', primary_isbn10: '1538728621',
      }, {
        title: 'CLOUD CUCKOO LAND', description: 'An interconnected cast of dreamers and outsiders are in dangerous and disparate settings past, present and future.', contributor: 'by Anthony Doerr', author: 'Anthony Doerr', contributor_note: '', price: '0.00', age_group: '', publisher: 'Scribner', primary_isbn13: '9781982168438', primary_isbn10: '1982168439',
      }, {
        title: 'APPLES NEVER FALL', description: 'The Delaney siblings suspect their father of causing the disappearance of their mother.', contributor: 'by Liane Moriarty', author: 'Liane Moriarty', contributor_note: '', price: '0.00', age_group: '', publisher: 'Holt', primary_isbn13: '9781250220257', primary_isbn10: '1250220254',
      }, {
        title: 'HARLEM SHUFFLE', description: 'Ray Carney, a family man who sells furniture on 125th Street, gets a new clientele made up of vicious and unsavory characters.', contributor: 'by Colson Whitehead', author: 'Colson Whitehead', contributor_note: '', price: '0.00', age_group: '', publisher: 'Doubleday', primary_isbn13: '9780385545136', primary_isbn10: '0385545134',
      }, {
        title: 'THE LAST GRADUATE', description: 'The second book in the Scholomance series. Will students now in their senior year make it out alive?', contributor: 'by Naomi Novik', author: 'Naomi Novik', contributor_note: '', price: '0.00', age_group: '', publisher: 'Del Rey', primary_isbn13: '9780593128862', primary_isbn10: '0593128869',
      }, {
        title: 'THE JAILHOUSE LAWYER', description: 'A young lawyer winds up in an Alabama jail that remains mysteriously crowded.', contributor: 'by James Patterson and Nancy Allen', author: 'James Patterson and Nancy Allen', contributor_note: '', price: '0.00', age_group: '', publisher: 'Little, Brown', primary_isbn13: '9780316276627', primary_isbn10: '0316276626',
      }, {
        title: 'BEWILDERMENT', description: 'An astrobiologist and single father learns of a neurofeedback treatment that may improve his son’s emotional control.', contributor: 'by Richard Powers', author: 'Richard Powers', contributor_note: '', price: '0.00', age_group: '', publisher: 'Norton', primary_isbn13: '9780393881141', primary_isbn10: '0393881148',
      }, {
        title: 'THE MAN WHO DIED TWICE', description: 'The second book in the Thursday Murder Club series. A ruthless murderer is out to get four septuagenarian friends.', contributor: 'by Richard Osman', author: 'Richard Osman', contributor_note: '', price: '0.00', age_group: '', publisher: 'Pamela Dorman', primary_isbn13: '9781984880994', primary_isbn10: '1984880993',
      }, {
        title: 'BILLY SUMMERS', description: 'A killer for hire who only takes out bad guys seeks redemption as he does one final job.', contributor: 'by Stephen King', author: 'Stephen King', contributor_note: '', price: '0.00', age_group: '', publisher: 'Scribner', primary_isbn13: '9781982173616', primary_isbn10: '1982173610',
      }, {
        title: 'THE SANTA SUIT', description: 'A recently divorced woman searching the pockets of an old Santa suit finds a child’s wish that her father return from war.', contributor: 'by Mary Kay Andrews', author: 'Mary Kay Andrews', contributor_note: '', price: '0.00', age_group: '', publisher: 'St. Martin\'s', primary_isbn13: '9781250279316', primary_isbn10: '1250279313',
      }, {
        title: 'THE LAST THING HE TOLD ME', description: 'Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.', contributor: 'by Laura Dave', author: 'Laura Dave', contributor_note: '', price: '0.00', age_group: '', publisher: 'Simon & Schuster', primary_isbn13: '9781501171345', primary_isbn10: '1501171348',
      }, {
        title: 'BEAUTIFUL WORLD, WHERE ARE YOU', description: 'A novelist, a warehouse worker, an editorial assistant and a political adviser deal with changes.', contributor: 'by Sally Rooney', author: 'Sally Rooney', contributor_note: '', price: '0.00', age_group: '', publisher: 'Farrar, Straus & Giroux', primary_isbn13: '9780374602604', primary_isbn10: '0374602603',
      }, {
        title: 'VINCE FLYNN: ENEMY AT THE GATES', description: 'Anthony Cook, an autocratic president, distrusts Mitch Rapp, who is working to uncover a traitor.', contributor: 'by Kyle Mills', author: 'Kyle Mills', contributor_note: '', price: '0.00', age_group: '', publisher: 'Emily Bestler/Atria', primary_isbn13: '9781982164881', primary_isbn10: '1982164883',
      }, {
        title: 'THE MIDNIGHT LIBRARY', description: 'Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.', contributor: 'by Matt Haig', author: 'Matt Haig', contributor_note: '', price: '0.00', age_group: '', publisher: 'Viking', primary_isbn13: '9780525559474', primary_isbn10: '0525559477',
      }, {
        title: 'A SLOW FIRE BURNING', description: 'Three women come under scrutiny when a young man is found gruesomely murdered in a London houseboat.', contributor: 'by Paula Hawkins', author: 'Paula Hawkins', contributor_note: '', price: '0.00', age_group: '', publisher: 'Riverhead', primary_isbn13: '9780735211230', primary_isbn10: '073521123X',
      },
    ]);
  });
});
