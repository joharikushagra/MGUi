/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import plugin from "my-vue-buttons-test-lib";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements for the site.
  try {
    if (window) {
      Vue.use(plugin);
    }
  } catch (error) {
    console.log("SSR:", error.message);
  }
};
