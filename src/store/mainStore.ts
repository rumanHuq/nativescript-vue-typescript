import { ActionTree, GetterTree, MutationTree } from "vuex";
import { InterfaceState as State, InterfaceTodo } from "./types";

const mainState: State = {
  todos: [
    { text: "Hello World!", checked: true },
    { text: "Hello You!", checked: true },
    { text: "Hello me!", checked: false }
  ],
};

const mainGetters: GetterTree<State, any> = {
  completed: (state) => state.todos.filter((todo) => todo.checked),
  notCompleted: (state) => state.todos.filter((todo) => !todo.checked),
};

const mainMutations: MutationTree<State> = {
  addTodo(state, payload) {
    state.todos.push({...payload});
  },
};

const mainActions: ActionTree<State, any> = {
  async getTodo({commit}, payload: number | undefined) {
    try {
      if (payload !== undefined && typeof payload === "number") {
        const response = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`)).json();
        const result: InterfaceTodo = {text: response.title, checked: false};
        return commit("addTodo", result);
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  actions: mainActions,
  getters: mainGetters,
  mutations: mainMutations,
  state: mainState,
};
