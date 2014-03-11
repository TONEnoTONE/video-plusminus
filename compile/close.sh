#!/bin/bash          
echo "making one file"
cd ../source/
python dependencies/closure-library/closure/bin/build/closurebuilder.py --root=./ --input=SubwayVideo.js   --output_mode=script  --output_file=../build/SubwayVideo.js 
echo "building and minifying"
python dependencies/closure-library/closure/bin/build/closurebuilder.py --root=./ --input=SubwayVideo.js   --output_mode=compiled  --output_file=../build/SubwayVideo.min.js \
--compiler_jar=../compile/closure/compiler.jar \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
--compiler_flags="--language_in=ECMASCRIPT5"  \
--compiler_flags="--externs=../compile/externs/w3c_audio.js"  \
--compiler_flags="--externs=../compile/externs/w3c_rtc_extern.js"  \
--compiler_flags="--externs=../compile/externs/window.js"  \
--compiler_flags="--externs=../compile/externs/statemachine.js" \
--compiler_flags="--jscomp_off=externsValidation" \
--compiler_flags="--output_wrapper=\"(function() {%output%})();\"" \
--compiler_flags="--jscomp_error=accessControls" \
--compiler_flags="--jscomp_error=const" \
--compiler_flags="--jscomp_error=constantProperty" \
--compiler_flags="--warning_level=VERBOSE" 