import useFingerprint from "../hooks/useFingerprint";

export function createAuthHeader() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fingerprint = useFingerprint();
  return {
    headers: {
      Authorization: `Bearer ${fingerprint}`,
    },
  };
}
