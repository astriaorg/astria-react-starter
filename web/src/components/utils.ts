const ROLLUP_HOSTNAME = "rollups.dusk-3.devnet.astria.org";

const getPrefix = (forWebsocket: boolean = false): string => {
  if (forWebsocket) {
    let prefix = "wss://";
    if (process.env?.REACT_APP_ENV === "local") {
      prefix = "ws://";
    }
    return prefix;
  }

  let prefix = "https://";
  if (process.env?.REACT_APP_ENV === "local") {
    prefix = "http://";
  }
  return prefix;
};

export const blockExplorerUrl = (rollupName: string): string => {
  return `${getPrefix()}${rollupName}.explorer.${ROLLUP_HOSTNAME}`;
};

export const rpcUrl = (rollupName: string): string =>
  `${getPrefix()}${rollupName}.rpc.${ROLLUP_HOSTNAME}`;

export const wsRpcUrl = (rollupName: string): string =>
  `${getPrefix(true)}${rollupName}.ws.${ROLLUP_HOSTNAME}`;
