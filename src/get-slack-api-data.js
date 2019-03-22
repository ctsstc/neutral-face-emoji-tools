
export default function getSlackApiData () {
  const { api_token: apiToken, version_uid: versionUid } = boot_data;

  return {
    apiToken,
    versionUid
  };
}
