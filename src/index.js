
const navigation = require("./s-navigation");
const progress = require("./s-progress")
function activate(context) {
  console.log("插件已经被激活");

  // 将命令放入其上下文对象中，使其生效
  context.subscriptions.push(navigation);
  context.subscriptions.push(progress)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
