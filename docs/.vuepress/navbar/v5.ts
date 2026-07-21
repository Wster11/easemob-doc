import type { NavbarOptions } from "vuepress-theme-hope";

export const v5Navbar: NavbarOptions = [
  {
    text: "V5.x",
    children: [
      { text: "V5.x", link: "/v5/product/introduction.html" },
      { text: "V4.x", link: "/product/introduction.html" },
      { text: "V3.x", link: "https://docs-im.easemob.com/ccim/intro" },
      { text: "V2.x", link: "https://docs-im.easemob.com/start/start" },
    ],
  },
  { text: '产品介绍', link: '/v5/product/introduction.html' },
  {
    text: 'UIKit',
    children: [
      {
        text: '单群聊 UIKit',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: '/v5/uikit/chatuikit/android/beginner_guide.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: '/v5/uikit/chatuikit/ios/beginner_guide.html'
          },
          {
            text: 'Web',
            icon: '/icon-web.svg',
            link: '/v5/uikit/chatuikit/web/beginner_guide.html'
          },
          {
            text: 'HarmonyOS',
            icon: '/icon-harmonyos.svg',
            link: '/v5/uikit/chatuikit/harmonyos/beginner_guide.html'
          },
          {
            text: 'Uniapp',
            icon: '/icon-uni-app.svg',
            link: '/v5/uikit/chatuikit/uniapp/beginner_guide.html'
          },
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: '/v5/uikit/chatuikit/react-native/beginner_guide.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: '/v5/uikit/chatuikit/flutter/beginner_guide.html'
          }
        ]
      },
      {
        text: '聊天室 UIKit',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: '/v5/uikit/chatroomuikit/android/easemob_mcp_server.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: '/v5/uikit/chatroomuikit/ios/easemob_mcp_server.html'
          },
          {
            text: 'Web',
            icon: '/icon-web.svg',
            link: '/v5/uikit/chatroomuikit/web/easemob_mcp_server.html'
          },
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: '/v5/uikit/chatroomuikit/react-native/easemob_mcp_server.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: '/v5/uikit/chatroomuikit/flutter/easemob_mcp_server.html'
          }
        ]
      }
    ]
  },
  {
    text: 'CallKit',
    children: [
      {
        text: 'Android',
        icon: '/icon-Android.svg',
        link: '/v5/callkit/android/beginner_guide.html'
      },
      {
        text: 'iOS',
        icon: '/icon-iOS.svg',
        link: '/v5/callkit/ios/beginner_guide.html'
      },
      {
        text: 'Web',
        icon: '/icon-web.svg',
        link: '/v5/callkit/web/beginner_guide.html'
      },
    ]
  },
  {
    text: 'SDK',
    children: [
      {
        text: '平台',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: '/v5/document/android/beginner_guide.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: '/v5/document/ios/beginner_guide.html'
          },
          {
            text: 'Web',
            icon: '/icon-web.svg',
            link: '/v5/document/web/beginner_guide.html'
          },
          {
            text: 'HarmonyOS',
            icon: '/icon-harmonyos.svg',
            link: '/v5/document/harmonyos/beginner_guide.html'
          },
          {
            text: 'Windows',
            icon: '/icon-windows.svg',
            link: '/v5/document/windows/beginner_guide.html'
          },
        ]
      },
      {
        text: '框架',
        children: [
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: '/v5/document/react-native/beginner_guide.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: '/v5/document/flutter/beginner_guide.html'
          },
          {
            text: 'Unity',
            icon: '/icon-unity.svg',
            link: '/v5/document/unity/beginner_guide.html'
          },
          {
            text: '小程序',
            icon: '/icon-mini-program.svg',
            link: '/v5/document/applet/beginner_guide.html'
          },
          {
            text: 'uni-app',
            icon: '/icon-uni-app.svg',
            link: '/v5/document/applet/uniapp.html'
          },
        ]
      },
    ]
  },
  { text: '服务端', link: '/v5/document/server-side/overview.html'},

 /* {
    text: 'API 参考',
    children: [
      {
        text: '平台',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: 'https://doc.easemob.com/apidoc/android/chat3.0/annotated.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: 'https://doc.easemob.com/apidoc/ios/chat3.0/annotated.html'
          },
          {
            text: 'Web/小程序',
            icon: '/icon-web.svg',
            link: 'https://doc.easemob.com/jsdoc/index.html'
          },
          {
            text: 'HarmonyOS',
            icon: '/icon-harmonyos.svg',
            link: 'https://doc.easemob.com/apidoc/harmony/chat3.0/classes/ChatClient.ChatClient.html'
          },
          {
            text: 'Windows',
            icon: '/icon-windows.svg',
            link: 'https://doc.easemob.com/apidoc/unity/annotated.html'
          }
        ]
      },
      
      {
        text: '框架',
        children: [
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: 'https://doc.easemob.com/apidoc/rn/modules.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: 'https://doc.easemob.com/apidoc/flutter/index.html'
          },
          {
            text: 'Unity',
            icon: '/icon-unity.svg',
            link: 'https://doc.easemob.com/apidoc/unity/annotated.html'
          },
        ]
      },
      {
        text: '服务端',
        children: [
          {
            text: 'Java 1.0',
            icon: '/icon-platform.svg',
            link: 'https://easemob.github.io/easemob-im-server-sdk/'
          },
          {
            text: 'Java 2.0',
            icon: '/icon-platform.svg',
            link: 'https://github.com/easemob/easemob-im-server-sdk/tree/master_java_2.0/src/test/java/com/easemob/im/api'
          },
          {
            text: 'PHP',
            icon: '/icon-platform.svg',
            link: 'https://easemob.github.io/im-php-server-sdk/annotated.html'
          }
        ]
      }
    ]
  },
  */
 /*{
    text: '内容审核',
    link: '/v5/product/moderation_overview.html'
  },
  {
    text: '即时推送',
    link: '/push/push_overview.html'
  },
  */
  {
    text: '增值服务',
      children: [
        { text: '内容审核', link: '/v5/value-added/moderation/moderation_overview.html'},
        { text: '实时音视频', link: '/v5/callkit/android/beginner_guide.html'},
        { text: '消息翻译', link: '/v5/value-added/translation/message_translation_android.html'},
        { text: '即时推送', link: '/v5/value-added/push/push_overview.html'},
        { text: '语音转文字', link: '/v5/value-added/stt/speech_to_text_billing.html'}
      ]
  },
  // {
  //   text: "私有部署",
  //   children: [
  //     {
  //       text: "即时通讯",
  //       link: "/v5/private/im/uc_deploy.html",
  //     },
  //    {
  //      text: "音视频",
  //      link: "/v5/private/media/common_introduction.html",
  //    },
  //  ],
  // },
  //  { text: '历史版本', link: 'https://docs-im.easemob.com/ccim/intro' },
  // { text: '有奖调研', link: 'https://doc.easemob.com/form/wjx.html' }
]