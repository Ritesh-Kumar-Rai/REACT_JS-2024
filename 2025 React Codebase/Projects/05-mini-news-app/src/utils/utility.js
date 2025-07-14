// function to find is id matched with array data or not

const isExists = (id, some_array) => {
  return some_array.some((each_article) => each_article.publishedAt === id);
};

export { isExists };
