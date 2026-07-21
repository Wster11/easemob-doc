import { DOC_SIDEBAR_V5 } from "./document";
import {
  CHAT_UIKIT_SIDEBAR_V5,
  CHATROOM_UIKIT_SIDEBAR_V5,
} from "./uikit";
import { CALL_KIT_SIDEBAR_V5 } from "./callkit";
import { PRODUCT_SIDEBAR_V5 } from "./product";
import { PUSH_SIDEBAR_V5 } from "./push";
import { MODERATION_SIDEBAR_V5 } from "./moderation";
import { TRANSLATION_SIDEBAR_V5 } from "./translation";
import { STT_SIDEBAR_V5 } from "./stt";

export const v5Sidebar = {
  "/v5/product/": PRODUCT_SIDEBAR_V5,
  ...DOC_SIDEBAR_V5,
  ...CHAT_UIKIT_SIDEBAR_V5,
  ...CHATROOM_UIKIT_SIDEBAR_V5,
  ...CALL_KIT_SIDEBAR_V5,
  "/v5/value-added/push": PUSH_SIDEBAR_V5,
  "/v5/value-added/moderation": MODERATION_SIDEBAR_V5,
  "/v5/value-added/translation": TRANSLATION_SIDEBAR_V5,
  "/v5/value-added/stt": STT_SIDEBAR_V5,
};
