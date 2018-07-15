import slugify from 'slugify';

export const addSlugAndId = (page, index) => {
  page.id = `page_${index}`;
  page.route = `/tutorial/${slugify(page.title).toLowerCase()}`;
  return page;
}

export const validateUniquePageTitle = (pages) => {
  const unique = [];
  pages.forEach((page, index)=> {
    try {
      if(!unique.includes(page.title)){
        unique.push(page.title);
      }else{
        throw new Error(`Duplicate title found. Please check the title prop: "${page.title}" at index ${index} in the pages array.`)
      }
    } catch(err){
      throw err
    }
  })
}
