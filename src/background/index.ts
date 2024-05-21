import { MessageAction, MessageBody, SyncState } from "../libs";
import { onOpenTabAction, onContentAction, onSyncAction } from "./messages";

let syncState = SyncState.DEFAULT;

function messageHandler(msg: MessageBody, res: (response?: any) => void) {
  if (msg.action == MessageAction.OPEN_TAB && msg.payload) {
    onOpenTabAction(msg.payload);
  } else if (msg.action == MessageAction.SYNC) {
    const syncResult = onSyncAction();
    syncState = syncResult;
    res(syncState);
  } else if (msg.action == MessageAction.CONTENT && msg.payload) {
    onContentAction(msg.payload);
  } else if (msg.action == MessageAction.GET_SYNC_STATE) {
    res(syncState);
  } else if (msg.action == MessageAction.UNSYNC) {
    chrome.action.setIcon({ path: './assets/icon/not-enabled/icon-16.png' });
    res(SyncState.DEFAULT);
  }
}

chrome.runtime.onMessage.addListener((msg, _, res) => messageHandler(msg, res));
