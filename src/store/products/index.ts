import { IProductAction, IProductInitialState } from "./types"; 

const INITIAL_STATE: IProductInitialState = {
  products: [
    {
      id: 1,
      title: "Curso de ReactJS",
      value: 1500,
      modules: [
        { id: 1, title: "modulo 1" },
        { id: 2, title: "modulo 2" },
        { id: 3, title: "modulo 3" },
      ],
    },
    {
      id: 2,
      title: "Curso de React Native",
      value: 2500,
      modules: [
        { id: 1, title: "modulo 1" },
        { id: 2, title: "modulo 2" },
        { id: 3, title: "modulo 3" },
        { id: 4, title: "modulo 4" },
      ],
    },
    {
      id: 3,
      title: "Curso de Javascript",
      value: 500,
      modules: [
        { id: 1, title: "modulo 1" },
        { id: 2, title: "modulo 2" },
        { id: 3, title: "modulo 3" },
        { id: 4, title: "modulo 4" },
        { id: 5, title: "modulo 5" },
      ],
    },
  ],
};

function product(state = INITIAL_STATE,  action: IProductAction) {
  if (action.type === "TOGGLE_PRODUCT") {
    return {
      ...state,
      product: action.product,
    };
  }
  return state;
}


export default product

