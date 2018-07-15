import slugify from 'slugify';

/*

Static source of data to populate tutorial steps and page content. A slug will be generated automatically for each page. Page titles should be unique.

*/

const ABOUT = {
  title: 'About This Tutorial',
  description: '',
  steps: [ ],
}

const ATOMIC_DESIGN = {
  title: 'Brief Introduction to Atomic Design',
  description: '',
  steps: [ ],
}

const STYLED_COMPONENTS = {
  title: 'Using Styled Components',
  description: '',
  steps: [ ],
}

const ATOMS = {
  title: 'Creating Atoms',
  description: '',
  steps: [ ],
}

const MOLECULES = {
  title: 'Creating Molecules',
  description: '',
  steps: [ ],
}

const ORGANISMS = {
  title: 'Creating Organisms',
  description: '',
  steps: [ ],
}

function addSlugAndId(page, index){
  page.id = `page_${index}`;
  page.route = `/${slugify(page.title).toLowerCase()}`;
  return page;
}

const pages = [ ABOUT, ATOMIC_DESIGN, STYLED_COMPONENTS, ATOMS, MOLECULES, ORGANISMS ].map(addSlugAndId);

export default pages;
