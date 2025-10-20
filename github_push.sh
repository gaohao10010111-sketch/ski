# 自定义 GitHub 推送脚本
# 在脚本中填写你的 GitHub 用户名和 Personal Access Token

USERNAME="REPLACE_WITH_USERNAME"
TOKEN="REPLACE_WITH_TOKEN"
REMOTE_URL="https://github.com/gaohao10010111-sketch/ski.git"

if [ "$USERNAME" = "REPLACE_WITH_USERNAME" ] || [ "$TOKEN" = "REPLACE_WITH_TOKEN" ]; then
  echo "请先在 github_push.sh 中填入 GitHub 用户名与 Token，再运行脚本。"
  exit 1
fi

GIT_ASKPASS_SCRIPT="$(mktemp)"
cat <<SCRIPT > "$GIT_ASKPASS_SCRIPT"
#!/usr/bin/env bash
case "\$1" in
  *Username*) echo "$USERNAME" ;;
  *Password*) echo "$TOKEN" ;;
  *) echo "" ;;
esac
SCRIPT
chmod 700 "$GIT_ASKPASS_SCRIPT"

env GIT_ASKPASS="$GIT_ASKPASS_SCRIPT" git push "$REMOTE_URL" main
STATUS=$?
rm -f "$GIT_ASKPASS_SCRIPT"
exit $STATUS
