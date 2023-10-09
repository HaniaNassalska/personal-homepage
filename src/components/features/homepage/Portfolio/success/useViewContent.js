import { useSelector } from "react-redux";
import { selectProjects } from "../../homepageSlice";

export const useViewContent = () => {
  const projects = useSelector(selectProjects);

  const firstThreeProjects = projects.filter(
    (project) => project.name === "personal-homepage"
      || project.name === "Movie-Browser"
      || project.name === "todo-app"
  );

  const projectsWithoutFirstThree = projects.filter(
    (project) => project.homepage
      && project.name !== "personal-homepage"
      && project.name !== "Movie-Browser"
      && project.name !== "todo-app"
  );

  const withoutThisProjects = projects.filter(
    (project) => (!project.homepage && project.name !== "layout_miami")
      && (!project.homepage && project.name !== "react_todo-app-with-api")
      && (!project.homepage && project.name !== "react_todo-app-add-and-delete")
      && (!project.homepage && project.name !== "react_todo-app-loading-todos")
      && (!project.homepage && project.name !== "react_practice")
  );

  return {
    first: firstThreeProjects,
    second: projectsWithoutFirstThree,
    third: withoutThisProjects
  };
};
