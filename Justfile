# vim : set filetype=bash :

install:
  npm install -g prettier;

build-client:
  cd client; yarn install;

run-client:
  cd client; yarn start;

build-server:
  cd server; yarn install;

run-server:
  cd server; yarn start;

format:
  #!/usr/bin/env bash
  changed_files=(`{ git --no-pager status | egrep "[[:blank:]]+(modified|new file):[[:blank:]]+[^[:blank:]]+" | gsed -E "s/.*?(modified|new file):[[:blank:]]+([^[:blank:]]+)/\2/g"; git --no-pager status | egrep "[[:blank:]]+(renamed):[[:blank:]]+[^[:blank:]]+" | gsed -E "s/.*?(renamed):[[:blank:]]+[^[:blank:]]+ -> ([^[:blank:]])/\2/g"; } | egrep "\.(jsx?|tsx?|json|html)$"`);
  prettier --write "${changed_files[@]}";

format-all:
  #!/usr/bin/env bash
  all_files=(`find -E . -type f -iregex ".*\.(jsx?|json|tsx?|html)$" -not -path "*/node_modules/*"`);
  prettier --write "${all_files[@]}";

