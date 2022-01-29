# TODO: change once we have auth
function just_get_auth_token {
  atoken=`echo "" | gsed -E 's/.*access_token\":\"([^,\"]*?)\",.*/\1/g'`;
  echo "$atoken";
}
