import test from "node:test";
import assert from "node:assert/strict";

import {
  getVersionPrefix,
  stripVersionPrefix,
  withVersionPrefix,
} from "./versioning.ts";

test("识别并移除 v5 路由前缀", () => {
  assert.equal(getVersionPrefix("/v5/document/android/overview.html"), "/v5");
  assert.equal(getVersionPrefix("/document/android/overview.html"), "");
  assert.equal(getVersionPrefix("/v50/document/android/overview.html"), "");
  assert.equal(
    stripVersionPrefix("/v5/document/android/overview.html"),
    "/document/android/overview.html",
  );
  assert.equal(stripVersionPrefix("/v5"), "/");
});

test("根据当前页面为站内目标保留版本前缀", () => {
  assert.equal(
    withVersionPrefix(
      "/document/ios/overview.html",
      "/v5/document/android/overview.html",
    ),
    "/v5/document/ios/overview.html",
  );
  assert.equal(
    withVersionPrefix(
      "/document/ios/overview.html",
      "/document/android/overview.html",
    ),
    "/document/ios/overview.html",
  );
  assert.equal(
    withVersionPrefix(
      "https://example.com/docs",
      "/v5/document/android/overview.html",
    ),
    "https://example.com/docs",
  );
});
