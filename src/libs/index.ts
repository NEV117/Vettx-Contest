export interface MessageBody {
  action: MessageAction;
  payload?: string;
}

export enum MessageAction {
  OPEN_TAB,
  SYNC,
  UNSYNC,
  CONTENT,
  GET_SYNC_STATE,
}

export enum SyncState {
  SUCCESSFULL = "Syncing messages",
  MARKET_NOT_OPEN = "Facebook Marketplace is NOT open",
  NET_CONN = "Check your internet connection",
  ERROR = "Error Syncing",
  DEFAULT = "Enable message syncing",
}
