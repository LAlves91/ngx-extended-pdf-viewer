#!/bin/sh
cd ../mypdf.js

FOLDER="assets"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" == "bleeding-edge" ]]; then
  FOLDER="bleeding-edge"
fi

gulp minified


cd ../ngx-extended-pdf-viewer
# cd inlineImageFiles
# node index.js $FOLDER
# cd ..
rm -R ./projects/ngx-extended-pdf-viewer/$FOLDER/*.js
cp -R ../mypdf.js/build/minified/web/locale/* ./projects/ngx-extended-pdf-viewer/$FOLDER/locale/
cp -R ../mypdf.js/build/minified/web/cmaps/* ./projects/ngx-extended-pdf-viewer/$FOLDER/cmaps/
cp -R ../mypdf.js/build/minified/build/pdf.* ./projects/ngx-extended-pdf-viewer/$FOLDER/
cp -R ../mypdf.js/build/minified/web/viewer.js* ./projects/ngx-extended-pdf-viewer/$FOLDER/
cp -R ../mypdf.js/build/minified/web/viewer.min* ./projects/ngx-extended-pdf-viewer/$FOLDER/

cd add-version-number-to-file-name
node add-version-number.js
cd ..
