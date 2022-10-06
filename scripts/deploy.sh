# abort on errors
set -e
# clear dist
rm -rf dist
# build
npm run build
# navigate into the build output directory
cd dist/uj-gui
git init
git add -A
git commit -m 'deploy through script'
git push -f git@github.com:ignis05/uj-gui.git master:gh-pages
cd -
