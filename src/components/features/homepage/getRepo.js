export const getRepo = async () => {
  const response = await fetch(
    "https://api.github.com/users/HaniaNassalska/repos?sort=pushed"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
