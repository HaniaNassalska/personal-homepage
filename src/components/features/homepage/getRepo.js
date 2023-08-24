export const getRepo = async () => {
  const response = await fetch(
    "https://api.github.com/users/HaniaNassalska/repos?per_page=100&sort=pushed&direction=desc"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
