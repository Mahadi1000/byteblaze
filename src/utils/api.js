export const handleBlog = async (id) => {
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();
  return data;
};