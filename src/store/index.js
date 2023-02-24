import { createStore } from "vuex";
import { theMainContent } from "./modules/theMainContent";

export default createStore({

    modules: {
        mainContent: theMainContent,
    }
})