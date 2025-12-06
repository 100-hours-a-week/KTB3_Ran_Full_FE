import { withRouter } from "./with-router";
import { withQueryClient } from "./with-query-client";
import { withToast } from "./with-toast";

export function withProviders(children) {
  return withToast(withQueryClient(withRouter(children)));
}
