export JUST_PROJECT_ROOT="$(pwd)";
export JUST_PROJECT_PACKAGES="${JUST_PROJECT_ROOT}/packages";
. "$JUST_PROJECT_ROOT/utils.bash";

function just_to_nonmac {
  _just_to_nonmac "$JUST_PROJECT_ROOT";
}

function just_to_mac {
  _just_to_mac "$JUST_PROJECT_ROOT";
}

function just_install {
  npm install -g prettier;
}

function just_build_client {
  cd "${JUST_PROJECT_PACKAGES}/client";
  yarn install;
  cd ~-;
}

function just_run_client {
  cd "${JUST_PROJECT_PACKAGES}/client";
  yarn start;
  cd ~-;
}

function just_build_server {
  cd "${JUST_PROJECT_PACKAGES}/server";
  yarn install;
  cd ~-;
}

function just_run_server {
  cd "${JUST_PROJECT_PACKAGES}/server";
  yarn start;
  cd ~-;
}

function just_format {
  cd "${JUST_PROJECT_ROOT}";
  changed_files=(`{ git --no-pager status | egrep "[[:blank:]]+(modified|new file):[[:blank:]]+[^[:blank:]]+" | sed -E "s/.*?(modified|new file):[[:blank:]]+([^[:blank:]]+)/\2/g"; git --no-pager status | egrep "[[:blank:]]+(renamed):[[:blank:]]+[^[:blank:]]+" | sed -E "s/.*?(renamed):[[:blank:]]+[^[:blank:]]+ -> ([^[:blank:]])/\2/g"; } | egrep "\.(jsx?|tsx?|json|html)$"`);
  prettier --write "${changed_files[@]}";
  cd ~-;
}

function just_format_all {
  cd "${JUST_PROJECT_ROOT}";
  all_files=(`find -E . -type f -iregex ".*\.(jsx?|json|tsx?|html)$" -not -path "*/node_modules/*"`);
  prettier --write "${all_files[@]}";
  cd ~-;
}

function just_docker_container_start {
  docker-compose -f "${JUST_PROJECT_ROOT}/.devcontainer/docker-compose.yml" up -d;
}

function just_docker_container_stop {
  docker-compose -f "${JUST_PROJECT_ROOT}/.devcontainer/docker-compose.yml" stop;
}

function just_docker_container_connect {
  local container_name="$1";
  container_name=${container_name:-'devcontainer_react_koa_ts_app_1'}
  docker exec -it "$container_name" /bin/bash;
}

