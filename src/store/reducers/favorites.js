const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "facebook/react",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aut distinctio neque ullam, officiis ex assumenda voluptatem ab, commodi in perspiciatis tempora? Delectus, natus. Ad delectus quasi ducimus nisi illo.",
          url: "http://github.com/facebook/react",
        },
      ];
    default:
      return [...state];
  }
}
