/*

/// HOW TO USE THIS FILE ///

This file is a static source used to export an array of page data that populates tutorial page content. Thought it might be useful to handle page content by converting markdown files into components via markdown-to-jsx. The page objects take a title (title) and a markdown path (md_path). Duplicate page titles are forbidden, if you attempt to create a non-unique page title an error will be thrown. A slug will be generated automatically for each page prior to export so there's no need to worry about route names.

Step 1: Import the markdown file path.

Step 2: Create a new object with a unique title and set the corresponding markdown path (i.e. md_path property).

Step 3: Add the page object to the pages array so slugs and ids will be generated prior to export.

*** Potentially Helpful Conventions ***

To avoid confusion markdown file names and page objects should be in all caps.
Markdown file paths should be imported in lowercase and appended with '_path'.

*/

// Functions
import { addSlugAndId, validateUniquePageTitle } from './helpers';

// Import Markdown file paths

import about_path from './md-pages/ABOUT.md';
import atomic_design_path from './md-pages/ATOMIC_DESIGN.md';
import styled_components_path from './md-pages/STYLED_COMPONENTS.md';
import atoms_path from './md-pages/ATOMS.md';
import molecules_path from './md-pages/MOLECULES.md';
import organisms_path from './md-pages/ORGANISMS.md';

// Create Page Objects

const ABOUT = {
  title: 'About This Tutorial',
  md_path: about_path,
}

const ATOMIC_DESIGN = {
  title: 'Brief Introduction to Atomic Design',
  md_path: atomic_design_path,
}

const STYLED_COMPONENTS = {
  title: 'Using Styled Components',
  md_path: styled_components_path,
}

const ATOMS = {
  title: 'Creating Atoms',
  md_path: atoms_path,
}

const MOLECULES = {
  title: 'Creating Molecules',
  md_path: molecules_path,
}

const ORGANISMS = {
  title: 'Creating Organisms',
  md_path: organisms_path,
}

// Add Objects to pages array
const pages = [
  ABOUT,
  ATOMIC_DESIGN,
  STYLED_COMPONENTS,
  ATOMS,
  MOLECULES,
  ORGANISMS
];

// Validate Pages for the Presence of Unique Titles
validateUniquePageTitle(pages);

// Generate page slug and id for each page object
const slugifiedPages = pages.map(addSlugAndId);

export default slugifiedPages;
