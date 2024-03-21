import moment from "moment";
export function formatTimeAgo(timestamp: Date) {
    return moment(timestamp).fromNow();
}
