// ==UserScript==
// @name         Notion-zh_CN notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @description  notion的汉化脚本
// @author       NanCheung
// @match        *://www.notion.so/*
// @grant        none
// ==/UserScript==
(function() {
  'use strict';

  function I18N() {
    this.lang = 'en';
  }

  I18N.prototype.install = function(langName, keymap){
    if (this[langName] === undefined) {
      this[langName] = keymap;
    }
  };

  const I18n = new I18N();

  I18n.install('zh', {
    // 工作区选择
    'Free Plan' : '免费套餐',
    "Personal (Education) Plan" : '个人(教育)套餐',
    'Create or Join Workspace': '创建或加入工作区',
    "Windows App" : 'Windows应用',
    "Mobile App" : '移动端应用',
    "Web Clipper" : '网页剪藏',
    'Log Out (': '注销',

    // -----------------
    // 左栏
    'Quick Find': '快速查找',
    'All Updates': '所有更新',
      // 所有的更新中
      'Followed': '已关注',
      'Mentions': '提到我的',
      'Open notifications settings': '打开消息设置',
        // 消息
        "created" : "创建",
        "view" : "页面",
        "property" : "属性",
        "edited" : "编辑",
        "in" : "在",
      "Learn about page updates" : "学习如何修改页面",
    'Settings & Members': '设置 & 成员',

    // -----------------
    'Share': '分享',
    'Updates': '更新',
    'Favorite': '收藏',
    'Templates': '模板',
    'Import': '导入',
    'Trash': '垃圾桶',
    // -----------------
    'New Page': '新建页面',
    // -----------------
    'Add a Page': '添加一个页面',
    'All workspace members can access these pages': '所有在工作空间中的用户都能访问这个页面',
    'Quickly add a page inside': '快速添加一个页面',
    'Delete, duplicate, and more': '删除，复制或是更多操作',
      // -----------------
      "Filter...": "搜索...",
      "people": "人物",
      "animals and nature": "动物与自然",
      "food and drink": "食物与饮品",
      "activity": "活动",
      "travel and places": "交通工具与地点",
      "objects": "物品",
      "symbols": "符号",
      "flags": "标志",
    // -----------------
    'Link': '链接',
    // -----------------
    'Upload an Image': '上传图片',
      "Choose an Image": "选择图片",
      "Recommended size is 280 × 280 pixels": "推荐大小为280 x 280 像素",
      "The maximum size per file is ": "文件最大大小为",
    // -----------------
    "Paste an image link...": "输入图片链接",
      "Submit" : "提交",
      "Works with any image from the web" : "只要在网络上能访问到的图片都可以",
    // -----------------
    'Remove': '移除',

    // -----------------
    'No Pages Inside' : '没有更多页面',
    // -----------------
    'Default View': '默认视图',
    // -----------------
    'Copy Link to View' : '复制页面链接',
    'Properties' : '属性',
    'Group by ' : '基于',
    'Filter' : '过滤',
    'Sort' : '排序',
    'Search' : '搜索',
    'New' : '新增',
    'Empty Page' : '空页面',
    'New Template' : '新模版',
    'Edit' : '编辑',
    // 块选项
    'Hide': '隐藏',
    'Create new page': '创建',
    'Untitled': '',
    'Type a name...': '输入一个名字...',
    'Drag': '拖动',
    'Add Icon': '添加图标',
    'Add Cover': '添加封面',
    'Add Discussion': '添加议题',
    'Drag': '拖动',
    'Click': '点击',
    'to move': '来移动行',
    'to open menu': '打开菜单',
    'to add a block below': '在下方添加一个编辑块',
    'Rename, delete, and more...': '重命名，删除，及更多...',
    'Change icon': '改变图标',
    'Delete': '删除',
    'Duplicate': '复制',
    'Turn Into': '换成',
    'Style': '风格',
    'Small Text': '更小的字体',
    'Full Width': '更宽的编辑区',
    'Page Lock': '锁定页面',
    'Add to Favorites': '添加至收藏',
    'Open in Windows App': '在客户端中打开',
    'Undo': '撤销',
    'Page History': '历史修改',
    'Show Deleted Pages':'显示已经删除的页面',
    'Copy Link': '复制链接',
    'Rename': '重命名',
    'Move To': '移动到',
    'Word Count: ':"字数统计",

    'Edit Property': '编辑属性',
    'Comment': '评论',
    'Color': '颜色',

    // 设置
    // 设置 => 我的账户
    'Me': '我',
    // -----------------
    'My Account': '我的账户',
      'Changes to account settings will apply to all of your workspaces.': '帐户设置的更改将应用于您的所有工作区。',
      'Learn more.': '了解更多',
      'Photo': '相片',
      'Upload Photo': '上传相片',
      'Personal Info': '个人信息',
      'Email': '邮箱',
      'Change Email': '更改邮箱',
      'Given Name': '名',
      'Family Name': '姓',
      'Password': '密码',
      'You can set a permanent password if you don\'t want to use temporary login codes.': '如果您不想使用临时登录码，则可以设置永久密码。',
      'Change Password': '更改密码',
      'Remove Password': '移除密码',
      'Calendar': '日历',
      'Start week on Monday': '一周从星期一开始',
      'This will change how all calendars in your app look.': '这将会更改您应用中所有日历的外观。',
      'Danger Zone': '危险操作',
      'Delete My Account': '删除我的账户',
      'Update': '更新',
      'Cancel': '取消',
    // -----------------
    // 设置 => 通知
    'My Notifications': '通知',
      'Learn about mobile and desktop notifications.': '了解有关手机和桌面通知的消息。',
      'Mobile Push Notifications': '向手机推送通知',
      'Receive push notifications on mentions and comments immediately via your mobile apps.': '立即通过您的移动应用接收有关提及和评论的推送通知。',
      'Email Notifications': '邮件通知',
      'Receive email updates on mentions, comments, and edit digests for all the pages you have followed.': '接收有关您关注的所有页面的提及，评论和编辑摘要的电子邮件更新。',
    // -----------------
    'My Connected Apps': '已关联的应用',
      'Learn more about embedding content in Notion.': '了解更多',
      'Connect': '连接',
      'Find and embed your files': '查找和嵌入你的文件',
      'Import notebooks': '导入笔记',
      'Import your boards': '导入你的看板',
      'Import tasks from boards and lists': '从看板和列表导入任务',
    // -----------------
    'Earn Credit': '获取奖励',
      'Learn how to earn and apply credits.': '学习更多',
      "Credit Balance" : "获取奖励",
      'Your current credit balance is': '已获取奖励为',
      'That\\\'s equivalent to': '这相当于',
      'month': '个月',
      'of free Notion.': '的免费使用',
      'Upgrade for free': '免费升级套餐',
      'Invite Friends and Earn Credit': '邀请和奖励',
      'You’ll receive': '你将获得',
      'in Notion credit when the person you invite signs up for a Notion account, and they’ll also get': '在Notion中，并且你的朋友也会获取',
      'in credits to get started.': '的奖励',
      'Enter email address...': '输入邮箱地址...',
      'Invite': '邀请',
      'Other Ways to Earn Credit': '其他方式的奖励',
      'Log in on the Web': '首次登陆Web端',
      'Sign in to Notion from any web browser': '使用任意浏览器登陆Notion',
      'Log in on the Desktop App': '首次登陆客户端',
      'Download the desktop app and sign in': '下载客户端并登陆账户',
      'Log in on the Mobile App': '首次登陆移动端',
      'Download the mobile app and sign in': '下载移动端并登陆账户',
      'Import from Evernote': '从Evernote国际版导入',
      'Import your notes and notebooks': '导入你的笔记和笔记本',
      'Use the Web Clipper': '首次使用剪藏',
      'Download the Chrome Extension and save a link': '下载Chrome插件并保存链接',
      'Use the iOS or Android System Share Menu': '使用移动设备分享',
      'Use the share menu to save a link into Notion': '使用手机系统分享链接至Notion',
      'Total credit earned': '获取奖励总额',
    // -----------------
    'Workspace': '工作空间',
    // -----------------
    'Settings': '设置',
      'Name': '名称',
      'You can use your name or the name of your team. Keep it simple.': '您可以使用您的名字或团队的名字，来保持简单化。',
      'Icon': '图标',
      'Upload an image or pick an emoji. It will show up in your sidebar and notifications.': '上传图片或选择表情符号。 它将显示在侧边栏和通知中。',
      'Domain': '域名',
      'Share the link ': '分享这个链接 ',
      ' to add anyone with an allowed email domain to your workspace.': ' 来添加任何来自该域下拥有邮箱账号的用户到你的工作空间',
      'Allowed Email Domains': '允许的电子邮箱域',
      'Anyone with email addresses at these domains can automatically join your workspace.': '在这些域中拥有电子邮件地址的任何人都可以自动加入您的工作区。',
      'Export Content': '导出',
      'Export All Workspace Content': '导出整个工作区',
      'Learn about exporting workspaces.': '了解更多关于导出工作空间',
      'Export Members' : '导出用户',
      'Export Members as CSV' : '导出用户表为CSV格式',
      'Learn about exporting members.' : '了解更多关于导出用户',
      'Export Members' : '导出用户',
      'Danger Zone': '危险操作',
      'Delete Entire Workspace': '删除整个工作区',
      'Learn about deleting workspaces.': '了解更多关于删除工作区',
    // -----------------
    "Member" : '成员',
      "Members" : '所有成员',
      "Groups" : '分组',
      "Manage members here, or" : '在此管理成员，或是',
      "set up a domain" : '设置一个域名',
      ", so everyone with allowed email domain can join the workspace automatically." : '如果电子邮件在设置的域名下则会自动加入该工作空间',
      "Add a Member" : '添加成员',
      "User" : '用户',
      "Access Level" : '访问级别',
      "Admin" : '管理员',
      "Can change workspace settings and invite new members to the workspace." : '可以更改工作空间设置并邀请新成员加入工作空间。',
      "Cannot change workspace settings or invite new members to the workspace." : '无法更改工作空间设置或邀请新成员加入工作空间。',
      "Leave Team" : '退出团队',
      "Guests (" : '访客 (',
      "Convert to " : '转换为',
      "This guest can access these pages" : '他可以访问这些页面',
      "Page" : '个页面',
    // -----------------
    'Upgrade': '升级',
    'Plans':'方案',
      'Free' : '免费',
      'Personal' : '个人',
      'Team' : '团队',
      'Enterprise' : '企业',
      'Usage': '使用对象',
      'Guests': '访客',
      'Blocks': '块数量',
      'File uploads': '上传限制',
      'Version history': '版本历史',
      'Features': '功能',
      'Web, desktop, & mobile apps': 'Web端，客户端以及移动端使用',
      '40+ block types & embeds': '40多种嵌入式块类型',
      '50+ designer templates': '50多个精心设计的模版',
      'Databases with 5 views': '具有5个视图的数据库',
      'Admin & security features': '管理和安全功能',
      'Admin tools': '管理员工具',
      'Advanced permissions': '高级权限控制',
      'Bulk PDF export': '批量导出PDF',
      'Access new features early': '尽早享受新功能',
      'Support': '升级',
      'Priority support': '升级',
      'Dedicated manager': '升级',
      'Custom contract & invoicing': '升级',
      'Current Plan': '当前计划',
      'Upgrade': '升级',
    'Security & identity': '安全与身份',
    'Dark Mode': '夜间模式',
    // 新建页面
    'Open as Page': '作为页面打开',
    'Navigate to this page': '导航到这个页面',
    'Add to': '添加到',
    'Press Enter': '按下 Enter 键',
    ' to continue with an empty page': '以空白页继续',
    ', or&nbsp;pick a template': '，或者选择一个模板',
    ' (↑↓ to select)': ' (↑↓ 键选择)',
    'Press Enter to continue with an empty page, or pick a template': '按下 Enter 键产生一个空白页面或选择一个模板',
    'Empty With Icon': '空白有图标',
    'Empty': '空白',
    'Database': '数据库',
      'Timeline': '时间线',
    'Table': '表格',
    'Board': '看板',
    'List': '列表',
    'Calendar': '日历',
    'Gallery': '画廊',
      'Timeline view': '时间线视图',
      'Table view': '表格视图',
      'Board view': '看板视图',
      'List view': '列表视图',
      'Calendar view': '日历视图',
      'Gallery view': '画廊视图',
    'Language & region': '语言与地区',
    'My account': '我的帐号',
    'Account': '帐号',
    'Upload photo': '上传照片',
    'Personal info': '个人资料',
    'Change email': '更换邮箱',
    'Log out of all devices': '从所有设备退出',
    'You will be logged out of all other active sessions besides this one and will have to log back in.': '您将立即退出其他所有在线设备，并且必须重新登录。',
    'Log out': '退出',
    'Danger zone': '危险区域',
    'Delete my account': '删除我的帐号',
    'Set a password': '设定密码',
    'My notifications': '我的通知',
    'Notifications': '通知',
    'Mobile push notifications': '移动设备推送通知',
    'Receive push notifications on mentions and comments via your mobile app.': '通过您的行动应用接收有关提及和评论的推送通知。',
    'Email notifications': '邮件通知',
    'Always send email notifications': '一律发送电子邮件通知',
    'Receive updates by email, even when you’re active on the app.': '即使您正在使用该应用，也可以通过电子邮件接收更新。',
    'Learn about mobile and desktop notifications': '了解关于移动设备和桌面应用程式通知',
    'My connected apps': '我连接的应用',
    'Connected apps': '连结 apps',
    'Learn more about embedding content in Notion': '了解更多关于在Notion中嵌入内容的讯息。',
    'Choose a language you\'d like to use with Notion.': '选择您要使用的语言。',
    'Workspace settings': '工作区设定',
    'Export members': '导出使用者',
    'Members': '成员',
    'Manage members here.': '管理成员',
    'Learn about adding members to your workspace': '了解更多关于在工作区新增成员的资料。',
    'Filter by email or name': '依邮箱或名称筛选',
    'Access level': '存取层级',
    'Dark mode': '夜间模式',
    'Add a view': '建立视图',
    'Copy link to view': '复制链接到视图',
    'No date': '未注明日期的',
    'New page': '新页面',
    'Add a page': '增加一页',
    'Add a property': '增加属性',
    'View name': '视图名称',
    'Table with types to store and view any kind of structured data': '表格类型，用于储存和查看任何类型的结构化数据',
    'Kanban board, great for project planning and bug tracking': '看板类型，非常适合项目规画和错误追踪',
    'Month view, for event planning and scheduling': '月视图，适用于活动计划和安排',
    'Grid of cards, use for mood boards, index cards, and recipes': '图片网格，适用于心情看板、索引卡和菜单',
    'Learn how to use database views': '了解如何使用数据库视图',
    'A simplified page view, great for bookmarks and notes': '简化的页面视图，非常适合书籤和笔记',
      'A timeline view, great for project scheduling and planning': '时间线视图，非常适合项目调度和规划',
    'Create': '建立',
    'Learn about databases': '了解关于数据库',
    'New template': '新建模板',
    'Templates for': '模版 针对',
    'Replicate page formats inside this database with templates.': '在此数据库中使用模板复制页面格式。',
    'Untitled': '',
    'Press Enter to continue with an empty page, or pick a template': '按下 Enter 键产生一个空白页面或选择一个模板',
    'to select': '键选择',
    'Empty with icon': '空白有图示',
    'Use this template': '使用这个模板',
    'Design': '设计',
    'Roadmap': '地图',
    'User Research Database': '研究人员数据库',
    'Design Tasks': '设计任务',
    'Meeting Notes': '会议笔记',
    'Design System': '设计系统',
    'Education': '教育',
    'Class Notes': '经典笔记',
    'Job Applications': '工作申请',
    'Grade Calculator': '成绩计算',
    'Club Homepage': '俱乐部首页',
    'Reading List': '阅读清单',
    'Thesis Planning': '论文规划',
    'Cornell Notes System': '康奈尔笔记系统',
    'Personal CRM': '个人CRM',
    'Roommate Space': '室友空间',
    'Simple Budget': '简单预算',
    'Syllabus': '教学大纲',
    'Classroom Home': '教室首页',
    'Lesson Plans': '课程计划',
    'Course Schedule': '课程安排',
    'Class Directory': '班级目录',
    'Engineering': '工程类',
    'Human resources': '人力资源',
    'Marketing': '市场营销',
    'Product management': '专案管理',
    'Sales': '销售类',
    'Small text': '小型文字',
    'Full width': '最大宽度',
    'Page lock': '页面锁定',
    'Copy link': '复制链接',
    'Page history': '页面历史',
    'Open in Windows app': '以 Windows 应用程式开启',
    'Show deleted pages': '显示删除页面',
    'Export': '导出',
    'Database lock': '锁定数据库',
    'Merge with CSV': '合并CSV',
    'Move to': '移动至',
    'Share or publish to the web': '分享或发布至网站',
    'View past changes to this page': '查看本页面过去的更改纪录',
    'Pin this page in your sidebar': '将此页面固定在侧栏中',
    'Learn about importing': '了解关于导入',
    'All pages': '所有页面',
    'In current page': '在目前页面',
    'This pages is in Trash.': '此页面于垃圾桶内',
    'Restore page': '还原页面',
    'Delete permanently': '永久删除',
    'Appearance':'外观',
    'Customize how Notion looks on your device.':'自定义 Notion 在您的设备上的外观',
    'Use system setting':'使用系统设置',
    'Light':'明亮',
    'Dark':'暗色',
    'Show table':'显示表格',
    'SHOW IN TABLE':'在表格中显示',
    'SHOW IN TIMELINE':'在时间线中显示',
    'Add icon':'添加图标',
    'Add cover':'添加封面',
    'Add description':'添加说明',
    'Hide description':'隐藏说明',
    'Create work account':'创建工作账户',
    'Add another account':'添加另一个账户',
    'Log out all':'退出所有账户',
    'Get Windows app':'获取 Windows 应用',
    'Join or create workspace':'加入或创建工作区',
    'Customize page':'自定义页面',
    'Lock page':'锁定页面',
    'No pages inside':'里面没有页面',
    'Press Enter to continue with an empty page, or pick a template (↑↓ to select)':'按 Enter 继续空白页面，或选择模板（↑↓ 选择）',
    'Add comment':'添加评论',
    'Turn into':'变成',
    'Turn into page in':'跳转页面',
    'Last used':'最近使用',
    'Background':'背景',
    'Change cover':'更换封面',
    'Reposition':'调整位置',
    'Upload':'上传',
    'Images wider than 1500 pixels work best.':'宽度超过 1500 像素的图像效果最佳。',
    'Choose an image':'选择一张图片',
    'Drag image to reposition':'拖动图片以重新定位',
    'Save position':'保存位置',
    '':'',
    '':'',
  });




  const NotionApp = window.document.getElementById('notion-app');

  function getTextNode(node) {
    const sentences = [];

    const _getTextNode = function(node) {
      for (let childNode of node.childNodes) {
        if (childNode instanceof window.Text) {
          if (childNode.data.replace(/[' ']*/, '')) {
            sentences.push(childNode);
          }
        } else if (childNode.placeholder) {

        }
        _getTextNode(childNode);
      }
    };
    _getTextNode(node);
    return sentences;
  }

  function translate(node) {
    const sentences = getTextNode(node);
    for (let text of sentences) {
      const string = text.data;
      if (I18n.zh[string]) {
        text.parentNode.replaceChild(new window.Text(I18n.zh[string]), text);
      }
    }
  }

  setTimeout(() => {
    window.requestIdleCallback(() => {
      translate(NotionApp);

      const observer = new MutationObserver(function(mutationsList) {
        return window.requestIdleCallback(function() {
          mutationsList = mutationsList.filter(MutationRecord => {
            return MutationRecord.addedNodes.length !== 0;
          }).map(MutationRecord => {
            return MutationRecord.addedNodes;
          });

          for (let nodeList of mutationsList) {
            for (let node of nodeList) {
              translate(node);
            }
          }
        });
      });

      observer.observe(NotionApp, {
        childList: true,
        subtree: true
      });
    });
  });
})();
