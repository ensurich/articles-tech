#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull origin

## 生成静态文件
npm run build

## 提交 docs 中的修改
git add docs
git commit -m 'deploy'
git push

cd -