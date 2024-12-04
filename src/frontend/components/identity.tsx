import { useSiweIdentity } from "ic-use-siwe-identity";

export default function Identity() {
  const { identity } = useSiweIdentity();

  if (!identity) return null;

  return <div className="text-white">{identity.getPrincipal().toString()}</div>;
}
