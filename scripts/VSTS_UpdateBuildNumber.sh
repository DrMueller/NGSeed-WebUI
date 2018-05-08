( shopt -s globstar dotglob
    sed -i -- 's/BUILD_BUILDNUMBER/bar/g' **environment.prod.ts*
)