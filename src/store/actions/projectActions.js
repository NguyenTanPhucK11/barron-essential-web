export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Vocabulary")
      .add({
        ...project,
        authorFirstName: "a",
        authorLastName: "b",
        authorId: "c",
        createAt: "d",
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
