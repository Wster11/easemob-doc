import { defineComponent, h } from "vue";
import AutoLink from "@theme-hope/components/AutoLink";
import DropdownLink from "@theme-hope/modules/navbar/components/DropdownLink";

import { useVersionedNavbarConfig } from "../composables/useVersionedNavbarConfig";
import "vuepress-theme-hope/modules/navbar/styles/navbar-links.scss";

export default defineComponent({
  name: "VersionedNavbarLinks",
  setup() {
    const navbarConfig = useVersionedNavbarConfig();

    return () =>
      navbarConfig.value.length
        ? h(
            "nav",
            { class: "nav-links" },
            navbarConfig.value.map((config) =>
              h(
                "div",
                { class: "nav-item hide-in-mobile" },
                "children" in config
                  ? h(DropdownLink, { config })
                  : h(AutoLink, { config }),
              ),
            ),
          )
        : null;
  },
});
