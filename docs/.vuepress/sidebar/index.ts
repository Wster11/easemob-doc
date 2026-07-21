import { sidebar } from "vuepress-theme-hope";
import { PRODUCT_SIDEBAR } from "./product";
import { DOC_SIDEBAR } from "./document";
import {
  CHAT_UIKIT_SIDEBAR,
  CHATROOM_UIKIT_SIDEBAR,
} from "./uikit";
import { PRIVATE_IM_SIDEBAR, PRIVATE_MEDIA_SIDEBAR } from "./private";
import { CALL_KIT_SIDEBAR } from "./callkit";
import { PUSH_SIDEBAR } from "./push";
import { MODERATION_SIDEBAR } from "./moderation";
import { TRANSLATION_SIDEBAR } from "./translation";
import { STT_SIDEBAR } from "./stt";
import { v5Sidebar } from "./v5";

const v4Sidebar = {
  "/product/": PRODUCT_SIDEBAR,
  "/private/im/": PRIVATE_IM_SIDEBAR,
  "/private/media/": PRIVATE_MEDIA_SIDEBAR,
  "/value-added/push":PUSH_SIDEBAR,
  "/value-added/moderation":MODERATION_SIDEBAR,
  "/value-added/translation":TRANSLATION_SIDEBAR,
  "/value-added/stt":STT_SIDEBAR,
};

export const zhSidebar = sidebar({
  ...v4Sidebar,
  ...DOC_SIDEBAR,
  ...CHAT_UIKIT_SIDEBAR,
  ...CHATROOM_UIKIT_SIDEBAR,
  ...CALL_KIT_SIDEBAR,
  ...v5Sidebar,
});
