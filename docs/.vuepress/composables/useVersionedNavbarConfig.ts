import { computed } from "vue";
import { useRoute } from "vue-router";
import { resolveNavbarItem } from "vuepress-theme-hope/modules/navbar/composables/index";

import { v4Navbar } from "../navbar/index";
import { v5Navbar } from "../navbar/v5";
import { getVersionPrefix } from "../utils/versioning";

export const useVersionedNavbarConfig = () => {
  const route = useRoute();

  return computed(() => {
    const navbar = getVersionPrefix(route.path) ? v5Navbar : v4Navbar;

    return navbar.map((item) => resolveNavbarItem(item));
  });
};
